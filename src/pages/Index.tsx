import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: 'Building2',
      title: 'Фасадные работы',
      description: 'Ремонт, покраска, утепление фасадов зданий любой высоты и сложности'
    },
    {
      icon: 'Droplets',
      title: 'Герметизация швов',
      description: 'Профессиональная герметизация межпанельных швов и стыков'
    },
    {
      icon: 'Brush',
      title: 'Мойка остеклений',
      description: 'Очистка окон, витражей и светопрозрачных конструкций на высоте'
    },
    {
      icon: 'Wrench',
      title: 'Монтажные работы',
      description: 'Установка рекламных конструкций, антенн, вентиляционного оборудования'
    },
    {
      icon: 'Zap',
      title: 'Электромонтаж',
      description: 'Прокладка кабельных линий, установка освещения на фасадах'
    },
    {
      icon: 'Shield',
      title: 'Обследование зданий',
      description: 'Техническое обследование конструкций и выявление дефектов'
    }
  ];

  const portfolio = [
    {
      title: 'ТЦ "Метрополис"',
      category: 'Фасадные работы',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      title: 'Бизнес-центр "Высота"',
      category: 'Мойка остеклений',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'
    },
    {
      title: 'Жилой комплекс "Панорама"',
      category: 'Герметизация швов',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800'
    },
    {
      title: 'Административное здание',
      category: 'Монтажные работы',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800'
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      role: 'Главный альпинист',
      experience: '12 лет опыта',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Технический директор',
      experience: '15 лет опыта',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    {
      name: 'Сергей Морозов',
      role: 'Старший альпинист',
      experience: '10 лет опыта',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
    },
    {
      name: 'Иван Соколов',
      role: 'Инженер по безопасности',
      experience: '8 лет опыта',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    }
  ];

  const testimonials = [
    {
      name: 'Виктор Смирнов',
      company: 'ООО "СтройИнвест"',
      text: 'Профессиональная команда! Выполнили все работы точно в срок, соблюдая все требования безопасности. Результатом очень довольны.',
      rating: 5
    },
    {
      name: 'Елена Кузнецова',
      company: 'УК "Комфорт"',
      text: 'Сотрудничаем уже третий год. Отличное качество работ по герметизации швов в наших домах. Рекомендуем!',
      rating: 5
    },
    {
      name: 'Андрей Волков',
      company: 'ТЦ "Галерея"',
      text: 'Быстро и качественно провели мойку всех остеклений. Работали аккуратно, без нареканий. Будем обращаться ещё.',
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Спектр выполняемых работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный комплекс услуг по высотным работам для коммерческих и жилых объектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио проектов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных работ на различных объектах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <Badge className="mb-2 bg-accent">{project.category}</Badge>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Профессионалы своего дела</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Сертифицированные специалисты с многолетним опытом работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    <Badge variant="outline" className="mt-2">{member.experience}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent text-accent-foreground">Безопасность</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Гарантия безопасности работ</h2>
              <p className="text-xl text-background/80">
                Соблюдаем все нормы и требования охраны труда при проведении высотных работ
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Сертификация</h3>
                    <p className="text-background/70">Все специалисты имеют действующие допуски к работам на высоте</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="FileCheck" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Документация</h3>
                    <p className="text-background/70">Полный пакет разрешительных документов и страхование</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Оборудование</h3>
                    <p className="text-background/70">Используем только сертифицированное альпинистское снаряжение</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Опыт команды</h3>
                    <p className="text-background/70">Средний стаж работы специалистов — более 10 лет</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="ClipboardCheck" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Контроль качества</h3>
                    <p className="text-background/70">Многоуровневая система проверки качества работ</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Гарантия</h3>
                    <p className="text-background/70">Предоставляем гарантию на все выполненные работы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мнения компаний, которые доверили нам свои объекты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в течение часа
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@vysotpro.ru</p>
                      <p className="text-muted-foreground">sales@vysotpro.ru</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 08:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 09:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="example@mail.ru" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea placeholder="Опишите ваш проект..." rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
