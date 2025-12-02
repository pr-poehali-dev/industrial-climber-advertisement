import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isScrolled: boolean;
  scrollToSection: (id: string) => void;
}

const Header = ({ isScrolled, scrollToSection }: HeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Mountain" size={32} className="text-primary" />
          <span className="text-xl font-bold">ВысотПро</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
          <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Команда</button>
          <button onClick={() => scrollToSection('safety')} className="hover:text-primary transition-colors">Безопасность</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
          <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
        </nav>

        <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
          Связаться с нами
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
