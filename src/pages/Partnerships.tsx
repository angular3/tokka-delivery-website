import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Partnerships = () => {
  const [selectedPartnership, setSelectedPartnership] = useState(null);
  const [proposalData, setProposalData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    partnershipType: '',
    description: '',
    benefits: ''
  });

  const partnershipTypes = [
    {
      id: 1,
      title: 'Поставщики продуктов',
      description: 'Сотрудничество с фермерами и производителями качественных продуктов',
      icon: 'Truck',
      benefits: [
        'Стабильные объемы закупок',
        'Долгосрочные контракты',
        'Продвижение бренда поставщика',
        'Участие в маркетинговых активностях'
      ],
      requirements: [
        'Сертификаты качества',
        'Стабильные поставки',
        'Конкурентные цены',
        'Экологичность производства'
      ],
      examples: [
        'Органические фермы',
        'Мясокомбинаты премиум-класса',
        'Рыбные хозяйства',
        'Молочные производства'
      ]
    },
    {
      id: 2,
      title: 'Корпоративные клиенты',
      description: 'Обслуживание корпоративных мероприятий и деловых обедов',
      icon: 'Building',
      benefits: [
        'Специальные корпоративные тарифы',
        'Персональный менеджер',
        'Гибкая система скидок',
        'Приоритетное обслуживание'
      ],
      requirements: [
        'Регулярность заказов',
        'Минимальный объем в месяц',
        'Предварительное планирование',
        'Корпоративный договор'
      ],
      examples: [
        'IT-компании',
        'Банки и финансовые организации',
        'Консалтинговые агентства',
        'Международные корпорации'
      ]
    },
    {
      id: 3,
      title: 'Event-агентства',
      description: 'Совместная организация мероприятий и праздников',
      icon: 'Calendar',
      benefits: [
        'Комиссионные с мероприятий',
        'Совместный маркетинг',
        'Обучение персонала',
        'Эксклюзивные предложения'
      ],
      requirements: [
        'Опыт в event-индустрии',
        'Портфолио проведенных мероприятий',
        'Профессиональная команда',
        'Клиентская база'
      ],
      examples: [
        'Свадебные агентства',
        'Организаторы корпоративов',
        'Event-продакшн',
        'PR-агентства'
      ]
    },
    {
      id: 4,
      title: 'Технологические партнеры',
      description: 'Внедрение инновационных решений в ресторанный бизнес',
      icon: 'Smartphone',
      benefits: [
        'Тестирование новых решений',
        'Обратная связь от пользователей',
        'Кейс-стади для портфолио',
        'Долгосрочное сотрудничество'
      ],
      requirements: [
        'Инновационные решения',
        'Техническая поддержка',
        'Обучение персонала',
        'Гарантийные обязательства'
      ],
      examples: [
        'POS-системы',
        'Системы лояльности',
        'Приложения для доставки',
        'Кухонное оборудование'
      ]
    },
    {
      id: 5,
      title: 'Медиа и маркетинг',
      description: 'Сотрудничество с медиа и маркетинговыми агентствами',
      icon: 'Megaphone',
      benefits: [
        'Взаимное продвижение',
        'Контент-партнерство',
        'Совместные проекты',
        'Обмен аудиториями'
      ],
      requirements: [
        'Релевантная аудитория',
        'Качественный контент',
        'Профессиональный подход',
        'Соответствие ценностям бренда'
      ],
      examples: [
        'Гастрономические блогеры',
        'Lifestyle-издания',
        'Digital-агентства',
        'Фуд-фотографы'
      ]
    },
    {
      id: 6,
      title: 'Образовательные учреждения',
      description: 'Программы стажировок и обучения в сфере гостеприимства',
      icon: 'GraduationCap',
      benefits: [
        'Доступ к талантливым студентам',
        'Участие в образовательных программах',
        'Имиджевые проекты',
        'Налоговые льготы'
      ],
      requirements: [
        'Аккредитованные программы',
        'Квалифицированные преподаватели',
        'Современная материальная база',
        'Хорошая репутация'
      ],
      examples: [
        'Кулинарные колледжи',
        'Университеты сферы услуг',
        'Курсы повышения квалификации',
        'Международные школы'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Эко-ферма "Зеленые холмы"',
      type: 'Поставщик',
      since: '2019',
      description: 'Органические овощи и зелень',
      logo: '/placeholder.svg'
    },
    {
      name: 'Винодельня "Абрау-Дюрсо"',
      type: 'Поставщик',
      since: '2020',
      description: 'Российские игристые вина',
      logo: '/placeholder.svg'
    },
    {
      name: 'Event-агентство "Праздник+"',
      type: 'Event-партнер',
      since: '2021',
      description: 'Организация мероприятий',
      logo: '/placeholder.svg'
    },
    {
      name: 'Кулинарный колледж им. Поля Бокюза',
      type: 'Образование',
      since: '2022',
      description: 'Программы стажировок',
      logo: '/placeholder.svg'
    }
  ];

  const benefits = [
    {
      title: 'Взаимное продвижение',
      description: 'Совместные маркетинговые активности и кросс-промо',
      icon: 'TrendingUp'
    },
    {
      title: 'Обмен экспертизой',
      description: 'Обмен знаниями и лучшими практиками',
      icon: 'Users'
    },
    {
      title: 'Расширение возможностей',
      description: 'Доступ к новым рынкам и аудиториям',
      icon: 'Globe'
    },
    {
      title: 'Инновации',
      description: 'Совместная разработка новых продуктов и услуг',
      icon: 'Lightbulb'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership proposal:', proposalData);
    alert('Спасибо за предложение! Мы рассмотрим его и свяжемся с вами в течение 5 рабочих дней.');
    setProposalData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      partnershipType: '',
      description: '',
      benefits: ''
    });
  };

  const handleChange = (e) => {
    setProposalData({
      ...proposalData,
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Партнерство</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Развиваем взаимовыгодные отношения с поставщиками, клиентами и партнерами
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Преимущества партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Виды партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name={type.icon} size={24} className="text-primary" />
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{type.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Что мы предлагаем:</h4>
                    <ul className="space-y-1">
                      {type.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={12} className="text-green-500 mt-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setSelectedPartnership(type)}
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Partnership Proposal Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Handshake" size={24} />
                  Предложение о партнерстве
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Название компании *</label>
                      <Input
                        name="companyName"
                        value={proposalData.companyName}
                        onChange={handleChange}
                        placeholder="ООО 'Ваша компания'"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                      <Input
                        name="contactPerson"
                        value={proposalData.contactPerson}
                        onChange={handleChange}
                        placeholder="Имя и должность"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={proposalData.email}
                        onChange={handleChange}
                        placeholder="your@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={proposalData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Веб-сайт</label>
                      <Input
                        name="website"
                        value={proposalData.website}
                        onChange={handleChange}
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Тип партнерства *</label>
                      <select
                        name="partnershipType"
                        value={proposalData.partnershipType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                      >
                        <option value="">Выберите тип</option>
                        <option value="supplier">Поставщик продуктов</option>
                        <option value="corporate">Корпоративный клиент</option>
                        <option value="event">Event-агентство</option>
                        <option value="tech">Технологический партнер</option>
                        <option value="media">Медиа и маркетинг</option>
                        <option value="education">Образовательное учреждение</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Описание предложения *</label>
                    <Textarea
                      name="description"
                      value={proposalData.description}
                      onChange={handleChange}
                      placeholder="Опишите ваше предложение о сотрудничестве..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Взаимные выгоды</label>
                    <Textarea
                      name="benefits"
                      value={proposalData.benefits}
                      onChange={handleChange}
                      placeholder="Какие преимущества получит каждая сторона от сотрудничества..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить предложение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Наши партнеры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentPartners.map((partner, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm">{partner.name}</h4>
                      <p className="text-xs text-muted-foreground">{partner.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{partner.type}</Badge>
                        <span className="text-xs text-muted-foreground">с {partner.since}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Partnership Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GitBranch" size={20} />
                  Процесс сотрудничества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Подача заявки</p>
                      <p className="text-xs text-muted-foreground">Заполните форму с предложением</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">Рассмотрение</p>
                      <p className="text-xs text-muted-foreground">Анализ предложения (3-5 дней)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Встреча</p>
                      <p className="text-xs text-muted-foreground">Обсуждение деталей сотрудничества</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-sm">Договор</p>
                      <p className="text-xs text-muted-foreground">Заключение соглашения</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Отдел партнерств
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={14} className="text-primary" />
                    <span>+7 (495) 123-45-67 доб. 4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={14} className="text-primary" />
                    <span>partners@tokka.ru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={14} className="text-primary" />
                    <span>Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Истории успешного партнерства</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-accent rounded-lg">
                  <h3 className="font-semibold mb-3">Эко-ферма "Зеленые холмы"</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    "Сотрудничество с TOKKA позволило нам увеличить объемы продаж на 300% 
                    и получить признание как поставщика премиум-продуктов."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Иван Петров</p>
                      <p className="text-xs text-muted-foreground">Основатель фермы</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-accent rounded-lg">
                  <h3 className="font-semibold mb-3">Event-агентство "Праздник+"</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    "Партнерство с TOKKA открыло нам доступ к премиальному сегменту. 
                    Совместно мы организовали более 50 успешных мероприятий."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Елена Сидорова</p>
                      <p className="text-xs text-muted-foreground">Директор агентства</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Partnership Details Modal */}
      {selectedPartnership && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name={selectedPartnership.icon} size={24} className="text-primary" />
                  {selectedPartnership.title}
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPartnership(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{selectedPartnership.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Что мы предлагаем:</h3>
                  <ul className="space-y-2">
                    {selectedPartnership.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={14} className="text-green-500 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Требования к партнеру:</h3>
                  <ul className="space-y-2">
                    {selectedPartnership.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Icon name="ArrowRight" size={14} className="text-primary mt-0.5" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Примеры партнеров:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPartnership.examples.map((example, index) => (
                    <Badge key={index} variant="outline">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full"
                onClick={() => {
                  setProposalData({...proposalData, partnershipType: selectedPartnership.title});
                  setSelectedPartnership(null);
                }}
              >
                Подать заявку на это партнерство
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Partnerships;