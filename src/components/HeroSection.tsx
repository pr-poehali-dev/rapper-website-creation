import { Button } from "@/components/ui/button";
import { ArrowDown, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение или видео */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          filter: "brightness(0.4)",
        }}
      >
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-background" />
      </div>

      {/* Контент */}
      <div className="container relative z-10 px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-glow">
          <span className="block gradient-text">РЭПЕР</span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal mt-2 block text-white/80">
            Новый альбом уже доступен
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-8">
          Погрузись в атмосферу уличной поэзии и бита. Настоящий рэп от души и для души.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            <PlayCircle className="mr-2 h-5 w-5" /> Слушать сейчас
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            Купить билет на концерт
          </Button>
        </div>
      </div>

      {/* Скролл индикатор */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-white/20"
          onClick={() => {
            document
              .getElementById("music")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;