import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Youtube, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log({ email, message });
    // Очистка формы
    setEmail("");
    setMessage("");
  };

  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "#" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, url: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Связаться со мной
            </h2>
            
            <p className="text-white/70 mb-8 max-w-md">
              Для букинга, интервью или сотрудничества заполните форму или свяжитесь со мной в социальных сетях.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div>
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-muted/50 border-white/10"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="bg-muted/50 border-white/10"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto gap-1.5">
                <Send className="h-4 w-4" />
                Отправить сообщение
              </Button>
            </form>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Я в соцсетях</h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-muted/50 hover:bg-primary/50 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-white/10">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/30 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Менеджмент</h3>
                  <p className="text-white/70">booking@рэпер.com</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3">
                  Часто задаваемые вопросы
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Как приобрести билеты на концерт?</h4>
                    <p className="text-white/70 text-sm">
                      Билеты доступны на официальном сайте и у партнёров-распространителей.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Возможно ли сотрудничество?</h4>
                    <p className="text-white/70 text-sm">
                      Да, я открыт для коллабораций. Опишите ваше предложение в форме обратной связи.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Где купить мерч?</h4>
                    <p className="text-white/70 text-sm">
                      Официальная продукция доступна на концертах и в онлайн-магазине.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Часто задаваемые вопросы
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;