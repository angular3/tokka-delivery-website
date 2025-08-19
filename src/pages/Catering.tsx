import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Catering = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [requestData, setRequestData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    date: '',
    budget: '',
    requirements: ''
  });

  const cateringPackages = [
    {
      id: 1,
      name: 'Бизнес-ланч',
      price: 1200,
      minGuests: 10,
      maxGuests: 50,
      description: 'Идеально для деловых встреч и корпоративных обедов',
      image: '/placeholder.svg',
      includes: [
        'Салат или суп на выбор',
        'Основное блюдо',
        'Десерт',
        'Напитки (чай, кофе, вода)',
        'Сервировка стола'
      ],
      features: [
        'Быстрая подача',
        'Презентабельная подача',
        'Диетические опции'
      ]
    },
    {
      id: 2,
      name: 'Фуршет',
      price: 2500,
      minGuests: 20,
      maxGuests: 100,
      description: 'Разнообразные закуски и напитки для неформального общения',
      image: '/placeholder.svg',
      includes: [
        'Холодные закуски (8 видов)',
        'Горячие закуски (4 вида)',
        'Канапе и мини-десерты',
        'Алкогольные и безалкогольные напитки',
        'Фуршетные столы и посуда'
      ],
      features: [
        'Свободное общение',
        'Разнообразие блюд',
        'Мобильность гостей'
      ]
    },
    {
      id: 3,
      name: 'Банкет',
      price: 4000,
      minGuests: 30,
      maxGuests: 200,
      description: 'Полноценный банкет с многоблюдным меню и обслуживанием',
      image: '/placeholder.svg',
      includes: [
        'Приветственный коктейль',
        'Холодные закуски',
        'Горячие блюда (3 перемены)',
        'Десертный стол',
        'Полный барный сервис',
        'Профессиональные официанты'
      ],
      features: [
        'Торжественная атмосфера',
        'Персональное обслуживание',
        'Праздничное оформление'
      ]
    },
    {
      id: 4,
      name: 'VIP-мероприятие',
      price: 6000,
      minGuests: 10,
      maxGuests: 50,
      description: 'Эксклюзивное обслуживание с индивидуальным подходом',
      image: '/placeholder.svg',
      includes: [
        'Индивидуальное меню от шефа',
        'Премиальные напитки',
        'Персональный сомелье',
        'Живая музыка',
        'Цветочные композиции',
        'Персональный менеджер'
      ],
      features: [
        'Эксклюзивность',
        'Индивидуальный подход',
        'Премиум-сервис'
      ]
    }
  ];

  const eventTypes = [
    { id: 'corporate', name: 'Корпоративное мероприятие', icon: 'Building' },
    { id: 'wedding', name: 'Свадьба', icon: 'Heart' },
    { id: 'birthday', name: 'День рождения', icon: 'Cake' },
    { id: 'conference', name: 'Конференция', icon: 'Users' },
    { id: 'presentation', name: 'Презентация', icon: 'Monitor' },
    { id: 'other', name: 'Другое', icon: 'Calendar' }
  ];

  const additionalServices = [
    {
      name: 'Оформление зала',
      price: 15000,
      description: 'Цветочные композиции, свечи, текстиль'
    },
    {
      name: 'Живая музыка',
      price: 25000,
      description: 'Джазовое трио или пианист'
    },
    {
      name: 'Фотограф',
      price: 20000,
      description: 'Профессиональная съемка мероприятия'
    },
    {
      name: 'Ведущий',
      price: 30000,
      description: 'Профессиональный ведущий мероприятий'
    },
    {
      name: 'Транспорт',
      price: 10000,
      description: 'Доставка гостей до места проведения'
    }
  ];

  const portfolioEvents = [
    {
      title: 'Корпоративный банкет IT-компании',
      guests: 80,
      image: '/placeholder.svg',
      description: 'Новогодний корпоратив с тематическим оформлением'
    },
    {
      title: 'Свадебное торжество',
      guests: 120,
      image: '/placeholder.svg',
      description: 'Элегантная свадьба в классическом стиле'
    },
    {
      title: 'Презентация нового продукта',
      guests: 60,
      image: '/placeholder.svg',
      description: 'Деловое мероприятие с фуршетом'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Catering request:', requestData);
    alert('Спасибо за заявку! Наш менеджер свяжется с вами в течение часа.');
    setRequestData({
      name: '',
      company: '',
      email: '',
      phone: '',
      eventType: '',
      guestCount: '',
      date: '',
      budget: '',
      requirements: ''
    });
  };

  const handleChange = (e) => {
    setRequestData({
      ...requestData,
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Кейтеринг</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Организуем выездное обслуживание для ваших мероприятий любого масштаба
          </p>
        </div>

        {/* Catering Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Пакеты услуг</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cateringPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{pkg.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Users" size={16} />
                        {pkg.minGuests}-{pkg.maxGuests} человек
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{pkg.price} ₽</div>
                      <div className="text-sm text-muted-foreground">за человека</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Включено:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={14} className="text-green-500 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {pkg.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1"
                      onClick={() => setRequestData({...requestData, eventType: pkg.name.toLowerCase()})}
                    >
                      Заказать
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Request Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} />
                  Заявка на кейтеринг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input
                        name="name"
                        value={requestData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Компания</label>
                      <Input
                        name="company"
                        value={requestData.company}
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
                        value={requestData.email}
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
                        value={requestData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-4">Тип мероприятия *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {eventTypes.map((type) => (
                        <div
                          key={type.id}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            requestData.eventType === type.id 
                              ? 'border-primary bg-primary/5' 
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                          onClick={() => setRequestData({...requestData, eventType: type.id})}
                        >
                          <div className="flex items-center gap-2">
                            <Icon name={type.icon} size={16} className="text-primary" />
                            <span className="text-sm font-medium">{type.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество гостей *</label>
                      <Input
                        name="guestCount"
                        type="number"
                        value={requestData.guestCount}
                        onChange={handleChange}
                        placeholder="50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата мероприятия *</label>
                      <Input
                        name="date"
                        type="date"
                        value={requestData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Бюджет</label>
                      <select
                        name="budget"
                        value={requestData.budget}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Выберите бюджет</option>
                        <option value="50000-100000">50,000 - 100,000 ₽</option>
                        <option value="100000-200000">100,000 - 200,000 ₽</option>
                        <option value="200000-500000">200,000 - 500,000 ₽</option>
                        <option value="500000+">Свыше 500,000 ₽</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Особые требования</label>
                    <Textarea
                      name="requirements"
                      value={requestData.requirements}
                      onChange={handleChange}
                      placeholder="Диетические ограничения, тематика мероприятия, особые пожелания..."
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
            {/* Additional Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Plus" size={20} />
                  Дополнительные услуги
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm">{service.name}</h4>
                      <span className="text-sm font-medium text-primary">{service.price.toLocaleString()} ₽</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Отдел кейтеринга</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">catering@tokka.ru</p>
                    <p className="text-sm text-muted-foreground">Заявки на кейтеринг</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">Пн-Пт: 9:00-18:00</p>
                    <p className="text-sm text-muted-foreground">Время работы отдела</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Camera" size={20} />
                  Наши работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {portfolioEvents.map((event, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{event.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{event.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="Users" size={12} />
                        {event.guests} гостей
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">{selectedPackage.name}</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPackage(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-6">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-accent rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Цена за человека</p>
                  <p className="text-2xl font-bold text-primary">{selectedPackage.price} ₽</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Количество гостей</p>
                  <p className="font-semibold">{selectedPackage.minGuests}-{selectedPackage.maxGuests} чел</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{selectedPackage.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Что включено:</h3>
                <ul className="space-y-2">
                  {selectedPackage.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Особенности:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPackage.features.map((feature, index) => (
                    <Badge key={index} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full"
                onClick={() => {
                  setRequestData({...requestData, eventType: selectedPackage.name.toLowerCase()});
                  setSelectedPackage(null);
                }}
              >
                Заказать этот пакет
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Catering;