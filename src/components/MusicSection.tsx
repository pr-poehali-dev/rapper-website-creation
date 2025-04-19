import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2,
  Spotify,
  Youtube,
  Music
} from "lucide-react";
import { useState } from "react";

const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    { title: "Уличный бит", duration: "3:45", hot: true },
    { title: "Город не спит", duration: "4:12", hot: false },
    { title: "Свобода слова", duration: "3:21", hot: true },
  ];

  const musicPlatforms = [
    { name: "Spotify", icon: <Spotify className="h-5 w-5" />, color: "bg-[#1DB954]" },
    { name: "YouTube Music", icon: <Youtube className="h-5 w-5" />, color: "bg-[#FF0000]" },
    { name: "Apple Music", icon: <Music className="h-5 w-5" />, color: "bg-[#FA243C]" }
  ];

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Последние треки
            </h2>
            <p className="text-white/70 mb-8 max-w-md">
              Слушай мои последние треки прямо здесь или на любой музыкальной платформе.
              Настоящий рэп с улиц для настоящих слушателей.
            </p>

            <div className="space-y-3 mb-8">
              {tracks.map((track, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-md ${
                    currentTrack === index 
                      ? "bg-primary/20 border border-primary/30" 
                      : "bg-secondary hover:bg-muted transition-colors"
                  }`}
                  onClick={() => {
                    setCurrentTrack(index);
                    setIsPlaying(true);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-full"
                    >
                      {currentTrack === index && isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    <div>
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-muted-foreground">{track.duration}</p>
                    </div>
                  </div>
                  {track.hot && (
                    <span className="px-2 py-1 text-xs bg-accent/80 text-white rounded-full">
                      HOT
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {musicPlatforms.map((platform) => (
                <Button
                  key={platform.name}
                  variant="outline"
                  className="gap-2"
                >
                  <span className={`h-3 w-3 rounded-full ${platform.color}`}></span>
                  {platform.icon}
                  {platform.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Card className="bg-card/50 backdrop-blur border-white/10">
              <CardContent className="p-6">
                <div className="aspect-square rounded-md overflow-hidden mb-6">
                  <img
                    src="/placeholder.svg"
                    alt="Альбом"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">
                    {tracks[currentTrack].title}
                  </h3>
                  <p className="text-muted-foreground">Новый альбом (2024)</p>
                </div>

                {/* Прогресс-бар */}
                <div className="w-full h-1 bg-muted rounded-full mb-2">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>

                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>1:42</span>
                  <span>{tracks[currentTrack].duration}</span>
                </div>

                {/* Контролы */}
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="icon">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button
                    className="h-12 w-12 rounded-full"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;