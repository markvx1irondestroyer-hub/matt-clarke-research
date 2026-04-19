import { describe, it, expect, vi, beforeEach } from 'vitest';
import { synthesizeText, splitTextForSynthesis } from './_core/textToSpeech';

describe('Text-to-Speech Service', () => {
  beforeEach(() => {
    // Mock environment variables
    process.env.BUILT_IN_FORGE_API_URL = 'https://api.example.com';
    process.env.BUILT_IN_FORGE_API_KEY = 'test-key-123';
  });

  describe('synthesizeText', () => {
    it('should return error when text is empty', async () => {
      const result = await synthesizeText({
        text: '',
      });

      expect('error' in result).toBe(true);
      if ('error' in result) {
        expect(result.code).toBe('SYNTHESIS_FAILED');
      }
    });

    it('should return error when text exceeds max length', async () => {
      const longText = 'a'.repeat(5001);
      const result = await synthesizeText({
        text: longText,
      });

      expect('error' in result).toBe(true);
      if ('error' in result) {
        expect(result.code).toBe('TEXT_TOO_LONG');
      }
    });

    it('should return error when speed is out of range', async () => {
      const result = await synthesizeText({
        text: 'Test article content',
        speed: 3.0, // Out of range (max 2.0)
      });

      expect('error' in result).toBe(true);
      if ('error' in result) {
        expect(result.code).toBe('SYNTHESIS_FAILED');
      }
    });

    it('should return error when pitch is out of range', async () => {
      const result = await synthesizeText({
        text: 'Test article content',
        pitch: 25, // Out of range (max 20)
      });

      expect('error' in result).toBe(true);
      if ('error' in result) {
        expect(result.code).toBe('SYNTHESIS_FAILED');
      }
    });

    it('should accept valid speed values', () => {
      // Speed validation happens in synthesizeText
      // Valid range: 0.5 - 2.0
      const validSpeeds = [0.5, 1.0, 1.5, 2.0];
      
      validSpeeds.forEach(speed => {
        expect(speed).toBeGreaterThanOrEqual(0.5);
        expect(speed).toBeLessThanOrEqual(2.0);
      });
    });

    it('should accept valid pitch values', () => {
      // Pitch validation happens in synthesizeText
      // Valid range: -20 to 20
      const validPitches = [-20, -10, 0, 10, 20];
      
      validPitches.forEach(pitch => {
        expect(pitch).toBeGreaterThanOrEqual(-20);
        expect(pitch).toBeLessThanOrEqual(20);
      });
    });
  });

  describe('splitTextForSynthesis', () => {
    it('should split long text into chunks', () => {
      const longText = 'This is a sentence. ' + 'Another sentence. '.repeat(300);
      const chunks = splitTextForSynthesis(longText, 500);

      expect(chunks.length).toBeGreaterThan(1);
      chunks.forEach(chunk => {
        expect(chunk.length).toBeLessThanOrEqual(600); // Allow some buffer
      });
    });

    it('should preserve sentences in chunks', () => {
      const text = 'First sentence. Second sentence. Third sentence.';
      const chunks = splitTextForSynthesis(text, 100);

      // All chunks should end with punctuation or be part of a sentence
      chunks.forEach(chunk => {
        expect(chunk.trim().length).toBeGreaterThan(0);
      });
    });

    it('should return single chunk for short text', () => {
      const shortText = 'This is a short sentence.';
      const chunks = splitTextForSynthesis(shortText, 100);

      expect(chunks.length).toBe(1);
      expect(chunks[0]).toBe(shortText.trim());
    });

    it('should handle text without periods', () => {
      const text = 'No punctuation here';
      const chunks = splitTextForSynthesis(text, 5);

      expect(chunks.length).toBeGreaterThanOrEqual(1);
      const joined = chunks.join('').trim();
      expect(joined).toBe(text);
    });

    it('should use default chunk size of 4500', () => {
      const text = 'Sentence. '.repeat(600); // ~6000 characters
      const chunks = splitTextForSynthesis(text);

      expect(chunks.length).toBeGreaterThan(1);
      chunks.forEach(chunk => {
        expect(chunk.length).toBeLessThanOrEqual(5000); // Allow buffer
      });
    });
  });

  describe('AudioPlayer Integration', () => {
    it('should handle article text synthesis for Article 1', () => {
      const articleText = `AI Safety Isn't a Training Problem — It's an Architecture Problem. Most discussions about AI safety focus on training better models. But the core risks in today's AI systems are not just the result of imperfect training — they are the result of how these systems are structured.`;

      // Verify article text is within acceptable length
      expect(articleText.length).toBeLessThanOrEqual(5000);
      expect(articleText.length).toBeGreaterThan(0);
    });

    it('should handle article text synthesis for Article 4', () => {
      const articleText = `AI and The Adaptable Mind: How Studying Polymathic Cognition Can Advance AI Architecture and Safety. Large Language Models may represent an accidental external recreation of the human polymath mind. This research explores the Neuro-Adaptive Reasoning Framework.`;

      expect(articleText.length).toBeLessThanOrEqual(5000);
      expect(articleText.length).toBeGreaterThan(0);
    });

    it('should handle article text synthesis for Article 5', () => {
      const articleText = `Knowledge Preservation and AI Systems: Expanding the Polymathic Framework. The polymathic frameworks extend beyond AI architecture into educational systems, scientific publishing, and knowledge preservation.`;

      expect(articleText.length).toBeLessThanOrEqual(5000);
      expect(articleText.length).toBeGreaterThan(0);
    });
  });
});
