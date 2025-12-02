import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Icon name="Award" size={16} className="mr-2" />
            Более 500 выполненных проектов
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Высотные работы любой сложности
          </h1>
          
          <p className="text-xl md:text-2xl text-background/80 animate-fade-in">
            Профессиональные промышленные альпинисты с опытом более 10 лет. Безопасность, качество, надёжность.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground" onClick={() => scrollToSection('services')}>
              Наши услуги
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-background/20">
            <div>
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-background/70">Проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">10+</div>
              <div className="text-background/70">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">100%</div>
              <div className="text-background/70">Безопасность</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
