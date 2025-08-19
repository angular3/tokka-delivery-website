import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const About = () => {
  const chefs = [
    {
      name: 'Алексей Петров',
      position: 'Шеф-повар',
      experience: '15 лет опыта',
      specialty: 'Европейская кухня',
      image: '/placeholder.svg',
      description: 'Выпускник Кулинарного института Франции, работал в ресторанах Мишлен'
    },
    {
      name: 'Мария Иванова',
      position: 'Су-шеф',
      experience: '12 лет опыта',
      specialty: 'Азиатская кухня',
      image: '/placeholder.svg',
      description: 'Специалист по японской и тайской кухне, стажировалась в Токио'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Кондитер',
      experience: '10 лет опыта',
      specialty: 'Авторские десерты',
      image: '/placeholder.svg',
      description: 'Мастер современной кондитерской техники, победитель кулинарных конкурсов'
    }
  ];

  const values = [
    {
      icon: 'Star',
      title: 'Качество',
      description: 'Используем только свежие продукты высшего качества от проверенных поставщиков'
    },
    {
      icon: 'Heart',
      title: 'Страсть',
      description: 'Каждое блюдо готовится с любовью и вниманием к деталям'
    },
    {
      icon: 'Users',
      title: 'Команда',
      description: 'Профессиональная команда поваров с многолетним опытом'
    },
    {
      icon: 'Award',
      title: 'Признание',
      description: 'Множество наград и положительных отзывов от гостей'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Основание ресторана',
      description: 'Открытие первого ресторана TOKKA в центре Москвы'
    },
    {
      year: '2019',
      title: 'Расширение меню',
      description: 'Добавление авторских блюд и сезонного меню'
    },
    {
      year: '2020',
      title: 'Запуск доставки',
      description: 'Начало работы службы доставки по всей Москве'
    },
    {
      year: '2021',
      title: 'Награды и признание',
      description: 'Получение премии "Лучший ресторан года"'
    },
    {
      year: '2022',
      title: 'Экологические инициативы',
      description: 'Переход на экологичную упаковку и местные продукты'
    },
    {
      year: '2024',
      title: 'Новые горизонты',
      description: 'Планы по открытию второго ресторана'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-2xl font-bold text-secondary">TOKKA</a>
            <Button className="bg-primary text-primary-foreground">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-black py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">О ресторане TOKKA</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            История страсти к кулинарному искусству и стремления к совершенству
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Наша история</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ресторан TOKKA был основан в 2018 году с простой, но амбициозной целью — 
                  создать место, где каждый гость сможет насладиться изысканной кухней 
                  в уютной атмосфере.
                </p>
                <p>
                  Наша команда поваров объединяет традиции классической европейской кухни 
                  с современными кулинарными техниками, создавая уникальные блюда, которые 
                  удивляют и восхищают наших гостей.
                </p>
                <p>
                  Мы гордимся тем, что используем только свежие, качественные продукты 
                  от местных фермеров и проверенных поставщиков. Каждое блюдо готовится 
                  с особой заботой и вниманием к деталям.
                </p>
              </div>
            </div>
            <div className="bg-accent p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Блюд в меню</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Довольных гостей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Наград</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted">
                  <img 
                    src={chef.image} 
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
                  <p className="text-primary font-medium mb-2">{chef.position}</p>
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span>{chef.experience}</span>
                    <span>•</span>
                    <span>{chef.specialty}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{chef.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Наш путь</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;