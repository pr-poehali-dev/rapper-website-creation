import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Play, 
  Music, 
  Clock, 
  ChevronRight 
} from "lucide-react";

const ReleasesSection = () => {
  const albums = [
    {
      title: "Уличная поэзия",
      year: "2024",
      cover: "/placeholder.svg",
      tracks: 12,
      duration: "42 мин"
    },
    {
      title: "Между строк",
      year: "2022",
      cover: "/placeholder.svg",
      tracks: 10,
      duration: "38 мин"
    },
    {
      title: "Первый шаг",
      year: "2020",
      cover: "/placeholder.svg",
      tracks: 8,
      duration: "28 мин"
    }
  ];

  return (
    <section id="releases" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Дискография
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Мой творческий путь в альбомах. Каждый релиз — это часть истории, 
            рассказанной через биты и рифмы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur hover:bg-card/70 transition-all border-white/10">
              <CardContent className="p-6">
                <div className="aspect-square rounded-md overflow-hidden mb-6 group relative">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="h-12 w-12 rounded-full">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-1">{album.title}</h3>
                  <p className="text-muted-foreground mb-4">{album.year}</p>
                  
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Music className="h-4 w-4" />
                      <span>{album.tracks} треков</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{album.duration}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full gap-1">
                    Слушать <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleasesSection;