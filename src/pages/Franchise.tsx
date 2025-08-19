import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Franchise = () => {
  const [applicationData, setApplicationData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    investment: '',
    timeline: '',
    motivation: ''
  });

  const franchisePackages = [
    {
      id: 1,
      name: 'TOKKA Express',
      investment: '3,500,000',
      area: '80-120',
      description: 'Компактный формат для фуд-кортов и торговых центров',
      features: [
        'Упрощенное меню',
        'Быстрое обслуживание',
        'Минимальный персонал',
        'Готовые решения'
      ],
      roi: '18-24 месяца',
      support: 'Базовый пакет поддержки'
    },
    {
      id: 2,
      name: 'TOKKA Classic',
      investment: '8,000,000',
      area: '200-300',
      description: 'Полноценный ресторан с полным меню и сервисом',
      features: [
        'Полное меню',
        'Барная программа',
        'Банкетный зал',
        'Летняя терраса'
      ],
      roi: '24-36 месяцев',
      support: 'Расширенная поддержка'
    },
    {
      id: 3,
      name: 'TOKKA Premium',
      investment: '15,000,000',
      area: '400-600',
      description: 'Флагманский ресторан с полным спектром услуг',
      features: [
        'Авторское меню',
        'Винный погреб',
        'VIP-зоны',
        'Кейтеринг-сервис'
      ],
      roi: '36-48 месяцев',
      support: 'VIP-поддержка'
    }
  ];

  const supportServices = [
    {
      category: 'Обучение',
      services: [
        'Обучение персонала',
        'Тренинги по сервису',
        'Кулинарные мастер-классы',
        'Онлайн-курсы'
      ],
      icon: 'GraduationCap'
    },
    {
      category: 'Маркетинг',
      services: [
        'Рекламные материалы',
        'SMM-поддержка',
        'Локальная реклама',
        'PR-поддержка'
      ],
      icon: 'Megaphone'
    },
    {
      category: 'Операционная поддержка',
      services: [
        'Поставка продуктов',
        'Контроль качества',
        'Финансовая отчетность',
        'IT-поддержка'
      ],
      icon: 'Settings'
    },
    {
      category: 'Развитие',
      services: [
        'Новые продукты',
        'Сезонные меню',
        'Инновации',
        'Расширение сети'
      ],
      icon: 'TrendingUp'
    }
  ];

  const requirements = [
    {
      title: 'Финансовые требования',
      items: [
        'Собственный капитал от 5,000,000 ₽',
        'Возможность инвестировать указанную сумму',
        'Финансовая стабильность',
        'Кредитная история'
      ],
      icon: 'DollarSign'
    },
    {
      title: 'Опыт и навыки',
      items: [
        'Опыт в ресторанном бизнесе приветствуется',
        'Управленческие навыки',
        'Знание местного рынка',
        'Предпринимательский опыт'
      ],
      icon: 'User'
    },
    {
      title: 'Локация',
      items: [
        'Города с населением от 500,000 человек',
        'Проходимое место',
        'Соответствие концепции бренда',
        'Возможность парковки'
      ],
      icon: 'MapPin'
    },
    {
      title: 'Обязательства',
      items: [
        'Соблюдение стандартов бренда',
        'Участие в обучающих программах',
        'Регулярная отчетность',
        'Долгосрочное сотрудничество'
      ],
      icon: 'FileText'
    }
  ];

  const timeline = [
    {
      step: 1,
      title: 'Подача заявки',
      description: 'Заполните форму и отправьте нам заявку',
      duration: '1 день'
    },
    {
      step: 2,
      title: 'Предварительная оценка',
      description: 'Анализ заявки и первичная оценка',
      duration: '3-5 дней'
    },
    {
      step: 3,
      title: 'Встреча и презентация',
      description: 'Личная встреча и презентация проекта',
      duration: '1-2 недели'
    },
    {
      step: 4,
      title: 'Анализ локации',
      description: 'Оценка предполагаемого места размещения',
      duration: '1-2 недели'
    },
    {
      step: 5,
      title: 'Подписание договора',
      description: 'Заключение франчайзингового соглашения',
      duration: '1 неделя'
    },
    {
      step: 6,
      title: 'Запуск проекта',
      description: 'Обучение, оснащение и открытие ресторана',
      duration: '2-4 месяца'
    }
  ];

  const successStories = [
    {
      name: 'Сергей Михайлов',
      city: 'Санкт-Петербург',
      openDate: '2022-08-15',
      format: 'TOKKA Classic',
      revenue: 'Рост выручки 150% за год',
      image: '/placeholder.svg'
    },
    {
      name: 'Елена Кузнецова',
      city: 'Екатеринбург',
      openDate: '2023-03-20',
      format: 'TOKKA Express',
      revenue: 'Окупаемость за 16 месяцев',
      image: '/placeholder.svg'
    },
    {
      name: 'Дмитрий Попов',
      city: 'Казань',
      openDate: '2023-09-10',
      format: 'TOKKA Premium',
      revenue: 'Лидер рынка в городе',
      image: '/placeholder.svg'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Franchise application:', applicationData);
    alert('Спасибо за заявку! Наш менеджер по франчайзингу свяжется с вами в течение 24 часов.');
    setApplicationData({
      name: '',
      company: '',
      email: '',
      phone: '',
      city: '',
      experience: '',
      investment: '',
      timeline: '',
      motivation: ''
    });
  };

  const handleChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Франчайзинг TOKKA</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Станьте частью успешной сети ресторанов премиум-класса
          </p>
        </div>

        {/* Franchise Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Форматы франшизы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {franchisePackages.map((pkg) => (
              <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center">{pkg.name}</CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {pkg.investment} ₽
                    </div>
                    <p className="text-sm text-muted-foreground">Инвестиции</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-3 bg-accent rounded-lg">
                      <p className="text-sm text-muted-foreground">Площадь</p>
                      <p className="font-semibold">{pkg.area} м²</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground text-center">{pkg.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Особенности:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Icon name="Check" size={12} className="text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Окупаемость</p>
                        <p className="font-semibold">{pkg.roi}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Поддержка</p>
                        <p className="font-semibold">{pkg.support}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} />
                  Заявка на франчайзинг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">ФИО *</label>
                      <Input
                        name="name"
                        value={applicationData.name}
                        onChange={handleChange}
                        placeholder="Ваше полное имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Компания</label>
                      <Input
                        name="company"
                        value={applicationData.company}
                        onChange={handleChange}
                        placeholder="Название компании"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={applicationData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={applicationData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Город *</label>
                      <Input
                        name="city"
                        value={applicationData.city}
                        onChange={handleChange}
                        placeholder="Город для открытия"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Опыт в ресторанном бизнесе</label>
                      <select
                        name="experience"
                        value={applicationData.experience}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Выберите опыт</option>
                        <option value="no-experience">Нет опыта</option>
                        <option value="1-3">1-3 года</option>
                        <option value="3-5">3-5 лет</option>
                        <option value="5-10">5-10 лет</option>
                        <option value="10+">Более 10 лет</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Размер инвестиций *</label>
                      <select
                        name="investment"
                        value={applicationData.investment}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                      >
                        <option value="">Выберите диапазон</option>
                        <option value="3-5">3-5 млн ₽</option>
                        <option value="5-10">5-10 млн ₽</option>
                        <option value="10-15">10-15 млн ₽</option>
                        <option value="15+">Свыше 15 млн ₽</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Планируемые сроки открытия</label>
                      <select
                        name="timeline"
                        value={applicationData.timeline}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Выберите срок</option>
                        <option value="3-6">3-6 месяцев</option>
                        <option value="6-12">6-12 месяцев</option>
                        <option value="12+">Более года</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Мотивация и планы</label>
                    <Textarea
                      name="motivation"
                      value={applicationData.motivation}
                      onChange={handleChange}
                      placeholder="Расскажите о своих планах и мотивации для открытия ресторана TOKKA..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Отдел франчайзинга
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">доб. 3</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">franchise@tokka.ru</p>
                    <p className="text-sm text-muted-foreground">Заявки на франчайзинг</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">Пн-Пт: 9:00-18:00</p>
                    <p className="text-sm text-muted-foreground">Время работы</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Numbers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" size={20} />
                  Ключевые показатели
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-3 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center p-3 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Успешных франшиз</div>
                </div>
                <div className="text-center p-3 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">24</div>
                  <div className="text-sm text-muted-foreground">Месяца средняя окупаемость</div>
                </div>
              </CardContent>
            </Card>

            {/* Download Materials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Download" size={20} />
                  Материалы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button size="sm" variant="outline" className="w-full justify-start">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Презентация франшизы
                </Button>
                <Button size="sm" variant="outline" className="w-full justify-start">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Бизнес-план
                </Button>
                <Button size="sm" variant="outline" className="w-full justify-start">
                  <Icon name="Image" size={16} className="mr-2" />
                  Фото интерьеров
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Требования к франчайзи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name={req.icon} size={20} className="text-primary" />
                    {req.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={12} className="text-green-500 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Поддержка франчайзи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name={service.icon} size={20} className="text-primary" />
                    {service.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="ArrowRight" size={12} className="text-primary mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Процесс открытия</h2>
          <div className="space-y-6">
            {timeline.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Истории успеха</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{story.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{story.city}</p>
                  <Badge variant="secondary" className="mb-3">{story.format}</Badge>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Открытие:</span>
                      <span>{new Date(story.openDate).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-green-600">{story.revenue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;