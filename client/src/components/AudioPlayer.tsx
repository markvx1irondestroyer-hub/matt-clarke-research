import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";

interface AudioPlayerProps {
  articleTitle: string;
  articleText: string;
  speed?: number;
}

export default function AudioPlayer({
  articleTitle,
  articleText,
  speed = 1.0,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  // tRPC mutation to synthesize text to speech
  const synthesizeMutation = trpc.audio.synthesize.useMutation({
    onSuccess: (data) => {
      setAudioUrl(data.audioUrl);
      setDuration(data.duration);
      // Auto-play after synthesis completes
      if (audioRef.current) {
        audioRef.current.src = data.audioUrl;
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err);
          setIsPlaying(false);
        });
      }
    },
    onError: (error) => {
      console.error("Synthesis error:", error);
      setIsPlaying(false);
    },
  });

  // Handle play button click
  const handlePlayClick = async () => {
    if (audioUrl && audioRef.current) {
      // Audio already synthesized, just play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    } else {
      // Synthesize text to speech
      setIsPlaying(true);
      synthesizeMutation.mutate({
        text: articleText,
        speed: speed,
      });
    }
  };

  // Handle audio ended
  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Handle time update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Handle metadata loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Format time for display
  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-3 p-4 rounded-sm bg-primary/10 border border-primary/20">
      {/* Play/Pause Button */}
      <Button
        onClick={handlePlayClick}
        disabled={synthesizeMutation.isPending}
        size="sm"
        variant="outline"
        className="flex-shrink-0"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        title={isPlaying ? "Pause" : "Play"}
      >
        {synthesizeMutation.isPending ? (
          <Loader2 size={18} className="animate-spin" />
        ) : isPlaying ? (
          <Pause size={18} />
        ) : (
          <Play size={18} />
        )}
      </Button>

      {/* Audio Element (hidden) */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="hidden"
      />

      {/* Progress Bar */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Volume2 size={14} className="text-primary" />
          <span className="text-xs text-muted-foreground">Listen to Article</span>
        </div>
        <div className="w-full bg-primary/20 rounded-full h-1.5 cursor-pointer" onClick={(e) => {
          if (audioRef.current && duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            audioRef.current.currentTime = percentage * duration;
          }
        }}>
          <div
            className="bg-primary h-1.5 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Status Text */}
      {synthesizeMutation.isPending && (
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          Generating audio...
        </span>
      )}
      {synthesizeMutation.isError && (
        <span className="text-xs text-red-500 whitespace-nowrap">
          Error generating audio
        </span>
      )}
    </div>
  );
}
