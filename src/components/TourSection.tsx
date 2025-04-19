import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CalendarDays, 
  MapPin, 
  Clock, 
  ThumbsUp,
  ArrowRight
} from "lucide-react";

const TourSection = () => {
  const concerts = [
    {
      date: "12 июня 2024",
      time: "19:00",
      city: "Москва",
      venue: "Клуб RED",
      soldOut: false
    },
    {
      date: "18 июня 2024",
      time: "20:00",
      city: "Санкт-Петербург",
      venue: "A2 Green Concert",
      soldOut: false
    },
    {
      date: "25 июня 2024",
      time: "19:30",
      city: "Екатеринбург",
      venue: "Телеклуб",
      soldOut: true
    }
  ];

  return (
    <section id="tour" className="py-20 bg-gradient-to-b from-secondary/50 to-background/90">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Концертный тур 2024
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Живые выступления — это возможность почувствовать энергию музыки и 
            стать частью чего-то большего. Выбирай город и приходи на концерт!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
          {concerts.map((concert, index) => (
            <Card 
              key={index} 
              className="bg-card/70 backdrop-blur hover:bg-card transition-all border-white/10"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-start md:items-center gap-4">
                    <div className="min-w-20 h-20 flex flex-col items-center justify-center bg-muted rounded-lg">
                      <CalendarDays className="h-5 w-5 text-primary mb-1" />
                      <span className="text-lg font-bold">
                        {concert.date.split(" ")[0]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {concert.date.split(" ")[1]} {concert.date.split(" ")[2]}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {concert.city}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{concert.venue}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{concert.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    {concert.soldOut ? (
                      <Button variant="outline" disabled className="gap-1.5">
                        <ThumbsUp className="h-4 w-4" />
                        Распродано
                      </Button>
                    ) : (
                      <Button className="gap-1.5">
                        Купить билет
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline">
            Все даты концертов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourSection;