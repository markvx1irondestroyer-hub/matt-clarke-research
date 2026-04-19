import { useState } from "react";
import { Volume2, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BrowserAudioButtonProps {
  articleText: string;
  articleTitle?: string;
}

export default function BrowserAudioButton({
  articleText,
  articleTitle = "Article",
}: BrowserAudioButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (isSpeaking) {
      // Stop speaking
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Start speaking
      const utterance = new SpeechSynthesisUtterance(articleText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <Button
      onClick={handleSpeak}
      size="sm"
      variant="ghost"
      className="h-8 w-8 p-0 hover:bg-primary/10"
      aria-label={isSpeaking ? "Stop listening" : "Listen to article"}
      title={isSpeaking ? "Stop" : "Listen"}
    >
      {isSpeaking ? (
        <Square size={16} className="text-primary fill-primary" />
      ) : (
        <Volume2 size={16} className="text-primary" />
      )}
    </Button>
  );
}
