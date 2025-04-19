import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-10">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold gradient-text">РЭПЕР</span>
            <p className="text-white/50 text-sm mt-2">
              Настоящая музыка для настоящих людей
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4">
            <a href="#music" className="text-white/70 hover:text-white transition-colors">
              Музыка
            </a>
            <a href="#releases" className="text-white/70 hover:text-white transition-colors">
              Релизы
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              Об артисте
            </a>
            <a href="#tour" className="text-white/70 hover:text-white transition-colors">
              Концерты
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Контакты
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Пресс-кит
            </a>
          </div>
        </div>
        
        <Separator className="bg-white/10 my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} РЭПЕР. Все права защищены.
          </p>
          
          <div className="flex gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;