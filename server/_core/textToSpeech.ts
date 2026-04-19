/**
 * Text-to-Speech helper using Manus built-in voice synthesis
 * 
 * Converts article text to natural-sounding audio for accessibility
 * 
 * Frontend implementation guide:
 * ```tsx
 * // Frontend component
 * const synthesizeMutation = trpc.audio.synthesize.useMutation({
 *   onSuccess: (data) => {
 *     console.log(data.audioUrl); // URL to the generated audio file
 *     // Play the audio using HTML5 audio element
 *   }
 * });
 * 
 * // Call with article text
 * synthesizeMutation.mutate({
 *   text: articleContent,
 *   voice: 'en-US-Neural2-C', // Optional: specific voice
 *   speed: 1.0 // Optional: playback speed (0.5 - 2.0)
 * });
 * ```
 */
import { ENV } from "./env";

export type TextToSpeechOptions = {
  text: string; // Text to convert to speech
  voice?: string; // Optional: specific voice ID (e.g., 'en-US-Neural2-C')
  speed?: number; // Optional: playback speed (0.5 - 2.0, default 1.0)
  pitch?: number; // Optional: pitch adjustment (-20 to 20, default 0)
};

export type TextToSpeechResponse = {
  audioUrl: string; // URL to the generated audio file
  duration: number; // Duration in seconds
  text: string; // Original text that was synthesized
};

export type TextToSpeechError = {
  error: string;
  code: "TEXT_TOO_LONG" | "INVALID_VOICE" | "SYNTHESIS_FAILED" | "SERVICE_ERROR";
  details?: string;
};

/**
 * Synthesize text to speech using Manus built-in voice synthesis
 * 
 * @param options - Text and voice configuration
 * @returns Audio URL or error
 */
export async function synthesizeText(
  options: TextToSpeechOptions
): Promise<TextToSpeechResponse | TextToSpeechError> {
  try {
    // Step 1: Validate environment configuration
    if (!ENV.forgeApiUrl) {
      return {
        error: "Text-to-speech service is not configured",
        code: "SERVICE_ERROR",
        details: "BUILT_IN_FORGE_API_URL is not set"
      };
    }
    if (!ENV.forgeApiKey) {
      return {
        error: "Text-to-speech service authentication is missing",
        code: "SERVICE_ERROR",
        details: "BUILT_IN_FORGE_API_KEY is not set"
      };
    }

    // Step 2: Validate input text
    if (!options.text || typeof options.text !== 'string') {
      return {
        error: "Text input is required",
        code: "SYNTHESIS_FAILED",
        details: "Text must be a non-empty string"
      };
    }

    // Check text length (max 5000 characters for a single request)
    const textLength = options.text.length;
    if (textLength > 5000) {
      return {
        error: "Text exceeds maximum length",
        code: "TEXT_TOO_LONG",
        details: `Text length is ${textLength} characters, maximum allowed is 5000`
      };
    }

    // Step 3: Prepare request payload
    const payload = {
      text: options.text,
      voice: options.voice || "en-US-Neural2-C", // Default to a natural-sounding US English voice
      speed: options.speed || 1.0,
      pitch: options.pitch || 0,
    };

    // Validate speed and pitch ranges
    if (payload.speed < 0.5 || payload.speed > 2.0) {
      return {
        error: "Invalid speed value",
        code: "SYNTHESIS_FAILED",
        details: "Speed must be between 0.5 and 2.0"
      };
    }

    if (payload.pitch < -20 || payload.pitch > 20) {
      return {
        error: "Invalid pitch value",
        code: "SYNTHESIS_FAILED",
        details: "Pitch must be between -20 and 20"
      };
    }

    // Step 4: Call the text-to-speech service
    const baseUrl = ENV.forgeApiUrl.endsWith("/")
      ? ENV.forgeApiUrl
      : `${ENV.forgeApiUrl}/`;
    
    const fullUrl = new URL(
      "v1/audio/speech",
      baseUrl
    ).toString();

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "Content-Type": "application/json",
        "Accept-Encoding": "identity",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      return {
        error: "Text-to-speech service request failed",
        code: "SYNTHESIS_FAILED",
        details: `${response.status} ${response.statusText}${errorText ? `: ${errorText}` : ""}`
      };
    }

    // Step 5: Parse and return the response
    const synthesisResponse = await response.json() as {
      audioUrl: string;
      duration: number;
    };
    
    // Validate response structure
    if (!synthesisResponse.audioUrl || typeof synthesisResponse.audioUrl !== 'string') {
      return {
        error: "Invalid text-to-speech response",
        code: "SERVICE_ERROR",
        details: "Service returned an invalid response format"
      };
    }

    return {
      audioUrl: synthesisResponse.audioUrl,
      duration: synthesisResponse.duration || 0,
      text: options.text,
    };

  } catch (error) {
    // Handle unexpected errors
    return {
      error: "Text-to-speech synthesis failed",
      code: "SERVICE_ERROR",
      details: error instanceof Error ? error.message : "An unexpected error occurred"
    };
  }
}

/**
 * Split long text into chunks for synthesis
 * Useful for articles longer than 5000 characters
 * 
 * @param text - Full text to split
 * @param maxChunkSize - Maximum characters per chunk (default 4500)
 * @returns Array of text chunks
 */
export function splitTextForSynthesis(text: string, maxChunkSize: number = 4500): string[] {
  const chunks: string[] = [];
  let currentChunk = "";

  // Split by sentences to maintain readability
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > maxChunkSize) {
      if (currentChunk) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = sentence;
    } else {
      currentChunk += sentence;
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

/**
 * Example tRPC procedure implementation:
 * 
 * ```ts
 * // In server/routers.ts
 * import { synthesizeText } from "./_core/textToSpeech";
 * 
 * export const audioRouter = router({
 *   synthesize: publicProcedure
 *     .input(z.object({
 *       text: z.string(),
 *       voice: z.string().optional(),
 *       speed: z.number().optional(),
 *       pitch: z.number().optional(),
 *     }))
 *     .mutation(async ({ input }) => {
 *       const result = await synthesizeText(input);
 *       
 *       // Check if it's an error
 *       if ('error' in result) {
 *         throw new TRPCError({
 *           code: 'BAD_REQUEST',
 *           message: result.error,
 *           cause: result,
 *         });
 *       }
 *       
 *       return result;
 *     }),
 * });
 * ```
 */
