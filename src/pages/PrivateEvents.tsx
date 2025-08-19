import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PrivateEvents = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [eventData, setEventData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    date: '',
    budget: '',
    requirements: '',
    duration: ''
  });

  const eventPackages = [
    {
      id: 1,
      name: 'Корпоративный ужин',
      price: 3500,
      minGuests: 15,
      maxGuests: 80,
      duration: '3-4 часа',
      description: 'Элегантное мероприятие для деловых партнеров и сотрудников',
      image: '/placeholder.svg',
      includes: [
        'Приветственный коктейль',
        'Трехблюдное меню',
        'Безалкогольные напитки',
        'Профессиональное обслуживание',
        'Оформление зала',
        'Звуковое оборудование'
      ],
      additionalOptions: [
        { name: 'Алкогольные напитки', price: 800 },
        { name: 'Живая музыка', price: 25000 },
        { name: 'Фотограф', price: 20000 },
        { name: 'Ведущий', price: 30000 }
      ]
    },
    {
      id: 2,
      name: 'Свадебный банкет',
      price: 5000,
      minGuests: 30,
      maxGuests: 150,
      duration: '5-6 часов',
      description: 'Незабываемое торжество для самого важного дня в жизни',
      image: '/placeholder.svg',
      includes: [
        'Торжественная встреча молодоженов',
        'Праздничное меню из 5 блюд',
        'Свадебный торт',
        'Шампанское для тоста',
        'Цветочное оформление',
        'Персональный координатор'
      ],
      additionalOptions: [
        { name: 'Живая музыка/DJ', price: 40000 },
        { name: 'Фотограф + видеограф', price: 50000 },
        { name: 'Ведущий церемонии', price: 35000 },
        { name: 'Дополнительное оформление', price: 30000 }
      ]
    },
    {
      id: 3,
      name: 'День рождения',
      price: 2800,
      minGuests: 10,
      maxGuests: 60,
      duration: '3-4 часа',
      description: 'Праздничное мероприятие с персональным подходом',
      image: '/placeholder.svg',
      includes: [
        'Праздничное оформление стола',
        'Именинный торт',
        'Праздничное меню',
        'Поздравление от шефа',
        'Фотозона',
        'Детская анимация (при необходимости)'
      ],
      additionalOptions: [
        { name: 'Тематическое оформление', price: 15000 },
        { name: 'Аниматор для детей', price: 12000 },
        { name: 'Фейерверк', price: 18000 },
        { name: 'Подарочные сертификаты', price: 5000 }
      ]
    },
    {
      id: 4,
      name: 'Презентация/Конференция',
      price: 2200,
      minGuests: 20,
      maxGuests: 100,
      duration: '2-6 часов',
      description: 'Деловое мероприятие с полным техническим обеспечением',
      image: '/placeholder.svg',
      includes: [
        'Конференц-зал',
        'Проектор и экран',
        'Звуковое оборудование',
        'Кофе-брейки',
        'Деловой обед',
        'Техническая поддержка'
      ],
      additionalOptions: [
        { name: 'Синхронный перевод', price: 15000 },
        { name: 'Видеозапись', price: 25000 },
        { name: 'Брендинг зала', price: 20000 },
        { name: 'Подарки участникам', price: 10000 }
      ]
    }
  ];

  const venues = [
    {
      name: 'Главный зал',
      capacity: 120,
      features: ['Панорамные окна', 'Танцпол', 'Сцена'],
      image: '/placeholder.svg'
    },
    {
      name: 'VIP-зал',
      capacity: 40,
      features: ['Приватность', 'Камин', 'Барная стойка'],
      image: '/placeholder.svg'
    },
    {
      name: 'Конференц-зал',
      capacity: 60,
      features: ['Проектор', 'Флипчарт', 'Wi-Fi'],
      image: '/placeholder.svg'
    },
    {
      name: 'Летняя терраса',
      capacity: 80,
      features: ['Открытый воздух', 'Вид на город', 'Навес'],
      image: '/placeholder.svg'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      company: 'ООО "Инновации"',
      event: 'Корпоративный ужин',
      rating: 5,
      comment: 'Превосходная организация! Все прошло на высшем уровне. Сотрудники были в восторге от обслуживания и кухни.'
    },
    {
      name: 'Михаил Иванов',
      company: 'Частное лицо',
      event: 'Свадебный банкет',
      rating: 5,
      comment: 'Наша свадьба стала незабываемой благодаря команде TOKKA. Каждая деталь была продумана до мелочей.'
    },
    {
      name: 'Елена Сидорова',
      company: 'Консалтинговая группа',
      event: 'Презентация',
      rating: 5,
      comment: 'Профессиональная организация деловой презентации. Техническое оснащение на высоте.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Private event request:', eventData);
    alert('Спасибо за заявку! Наш менеджер свяжется с вами в течение 2 часов для обсуждения деталей.');
    setEventData({
      name: '',
      company: '',
      email: '',
      phone: '',
      eventType: '',
      guestCount: '',
      date: '',
      budget: '',
      requirements: '',
      duration: ''
    });
  };

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    });
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={14}
            className={star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    );
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Частные мероприятия</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Организуем незабываемые мероприятия для ваших особых случаев
          </p>
        </div>

        {/* Event Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Пакеты мероприятий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventPackages.map((pkg) => (
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
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={14} />
                          {pkg.minGuests}-{pkg.maxGuests} чел
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {pkg.duration}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{pkg.price.toLocaleString()} ₽</div>
                      <div className="text-sm text-muted-foreground">за человека</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Включено в пакет:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={14} className="text-green-500 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1"
                      onClick={() => setEventData({...eventData, eventType: pkg.name})}
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
                  <Icon name="Calendar" size={24} />
                  Заявка на мероприятие
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                      <Input
                        name="name"
                        value={eventData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Компания/Организация</label>
                      <Input
                        name="company"
                        value={eventData.company}
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
                        value={eventData.email}
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
                        value={eventData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип мероприятия *</label>
                    <select
                      name="eventType"
                      value={eventData.eventType}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Выберите тип</option>
                      <option value="corporate">Корпоративное мероприятие</option>
                      <option value="wedding">Свадьба</option>
                      <option value="birthday">День рождения</option>
                      <option value="anniversary">Юбилей</option>
                      <option value="conference">Конференция</option>
                      <option value="presentation">Презентация</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество гостей *</label>
                      <Input
                        name="guestCount"
                        type="number"
                        value={eventData.guestCount}
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
                        value={eventData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Длительность</label>
                      <select
                        name="duration"
                        value={eventData.duration}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Выберите</option>
                        <option value="2-3">2-3 часа</option>
                        <option value="3-4">3-4 часа</option>
                        <option value="4-5">4-5 часов</option>
                        <option value="5+">Более 5 часов</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Предполагаемый бюджет</label>
                    <select
                      name="budget"
                      value={eventData.budget}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Выберите диапазон</option>
                      <option value="100000-200000">100,000 - 200,000 ₽</option>
                      <option value="200000-500000">200,000 - 500,000 ₽</option>
                      <option value="500000-1000000">500,000 - 1,000,000 ₽</option>
                      <option value="1000000+">Свыше 1,000,000 ₽</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Особые требования и пожелания</label>
                    <Textarea
                      name="requirements"
                      value={eventData.requirements}
                      onChange={handleChange}
                      placeholder="Тематика, диетические ограничения, развлекательная программа, особые услуги..."
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
            {/* Venues */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Залы ресторана
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {venues.map((venue, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm">{venue.name}</h4>
                      <span className="text-xs text-muted-foreground">до {venue.capacity} чел</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {venue.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться с менеджером
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">доб. 2 (мероприятия)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">events@tokka.ru</p>
                    <p className="text-sm text-muted-foreground">Заявки на мероприятия</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <div>
                    <p className="font-medium">Пн-Пт: 9:00-18:00</p>
                    <p className="text-sm text-muted-foreground">Время работы отдела</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="List" size={20} />
                  Как мы работаем
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Консультация</p>
                      <p className="text-xs text-muted-foreground">Обсуждаем детали мероприятия</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">Планирование</p>
                      <p className="text-xs text-muted-foreground">Составляем программу и меню</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Проведение</p>
                      <p className="text-xs text-muted-foreground">Безупречная организация</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.comment}</p>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.event}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Почему выбирают нас</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">6+ лет опыта</h3>
                <p className="text-sm text-muted-foreground">Организовали более 500 мероприятий</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Персональный подход</h3>
                <p className="text-sm text-muted-foreground">Индивидуальное планирование каждого события</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Высокое качество</h3>
                <p className="text-sm text-muted-foreground">Только лучшие продукты и сервис</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Точность</h3>
                <p className="text-sm text-muted-foreground">Соблюдение всех сроков и договоренностей</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-3xl max-h-[90vh] overflow-y-auto">
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
            <CardContent className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Цена за человека</p>
                  <p className="text-2xl font-bold text-primary">{selectedPackage.price.toLocaleString()} ₽</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Количество гостей</p>
                  <p className="font-semibold">{selectedPackage.minGuests}-{selectedPackage.maxGuests} чел</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">{selectedPackage.description}</p>
              
              <div>
                <h3 className="font-semibold mb-3">Включено в пакет:</h3>
                <ul className="space-y-2">
                  {selectedPackage.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Дополнительные услуги:</h3>
                <div className="space-y-2">
                  {selectedPackage.additionalOptions.map((option, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-accent rounded">
                      <span className="text-sm">{option.name}</span>
                      <span className="text-sm font-medium text-primary">+{option.price.toLocaleString()} ₽</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full"
                onClick={() => {
                  setEventData({...eventData, eventType: selectedPackage.name});
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

export default PrivateEvents;