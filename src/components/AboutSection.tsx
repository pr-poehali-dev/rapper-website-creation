import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Об артисте
            </h2>
            
            <p className="text-white/80 mb-6">
              Мой путь начался на улицах родного города, где каждый день был источником вдохновения. 
              Я всегда стремился выражать свои мысли через музыку, создавая рифмы, 
              которые отражают реальную жизнь без прикрас.
            </p>
            
            <p className="text-white/80 mb-6">
              За несколько лет творчества мне удалось выпустить 3 студийных альбома, 
              дать более 50 концертов и собрать преданную аудиторию слушателей, 
              которые разделяют мои взгляды и ценности.
            </p>
            
            <p className="text-white/80 mb-8">
              Моя музыка — это смесь классического хип-хопа с современными битами, 
              где глубокие тексты сочетаются с драйвовыми мелодиями. Я не следую трендам, 
              а создаю музыку, которая идёт от сердца.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <Button>Следить в соцсетях</Button>
              <Button variant="outline" className="gap-1.5">
                <Link className="h-4 w-4" />
                Интервью и публикации
              </Button>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Фото артиста"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-primary-foreground font-medium mb-1">
                  Выступления
                </p>
                <p className="text-2xl font-bold text-primary-foreground">
                  50+
                </p>
              </div>
              <div className="absolute -top-4 -left-4 bg-accent/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-accent-foreground font-medium mb-1">
                  Треки
                </p>
                <p className="text-2xl font-bold text-accent-foreground">
                  30+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;