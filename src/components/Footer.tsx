import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Mountain" size={32} className="text-accent" />
              <span className="text-xl font-bold">ВысотПро</span>
            </div>
            <p className="text-background/70">
              Профессиональные высотные работы с гарантией качества и безопасности
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-background/70">
              <li>Фасадные работы</li>
              <li>Герметизация швов</li>
              <li>Мойка остеклений</li>
              <li>Монтажные работы</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <ul className="space-y-2 text-background/70">
              <li>О нас</li>
              <li>Наша команда</li>
              <li>Портфолио</li>
              <li>Безопасность</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-background/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@vysotpro.ru</li>
              <li>г. Москва</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; 2024 ВысотПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
