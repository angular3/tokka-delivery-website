import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Винная дегустация',
      date: '2024-02-15',
      time: '19:00',
      price: 3500,
      capacity: 20,
      booked: 12,
      description: 'Дегустация премиальных вин от лучших виноделен Европы в сопровождении сырной тарелки',
      image: '/placeholder.svg',
      category: 'tasting',
      duration: '2 часа',
      includes: ['Дегустация 6 вин', 'Сырная тарелка', 'Лекция сомелье']
    },
    {
      id: 2,
      title: 'Мастер-класс от шеф-повара',
      date: '2024-02-20',
      time: '18:00',
      price: 4500,
      capacity: 12,
      booked: 8,
      description: 'Научитесь готовить фирменные блюда ресторана под руководством нашего шеф-повара',
      image: '/placeholder.svg',
      category: 'masterclass',
      duration: '3 часа',
      includes: ['Приготовление 3 блюд', 'Дегустация', 'Рецепты на память']
    },
    {
      id: 3,
      title: 'Романтический ужин',
      date: '2024-02-14',
      time: '20:00',
      price: 8000,
      capacity: 10,
      booked: 9,
      description: 'Специальное меню ко Дню святого Валентина с живой музыкой и свечами',
      image: '/placeholder.svg',
      category: 'special',
      duration: '3 часа',
      includes: ['Специальное меню', 'Живая музыка', 'Комплимент от шефа']
    },
    {
      id: 4,
      title: 'Джазовый вечер',
      date: '2024-02-25',
      time: '21:00',
      price: 2500,
      capacity: 50,
      booked: 23,
      description: 'Живая джазовая музыка в исполнении известного трио',
      image: '/placeholder.svg',
      category: 'music',
      duration: '2.5 часа',
      includes: ['Живая музыка', 'Приветственный коктейль', 'Легкие закуски']
    }
  ];

  const eventTypes = [
    {
      icon: 'Wine',
      title: 'Дегустации',
      description: 'Винные и гастрономические дегустации',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: 'ChefHat',
      title: 'Мастер-классы',
      description: 'Кулинарные мастер-классы от шеф-поваров',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: 'Music',
      title: 'Музыкальные вечера',
      description: 'Живая музыка и концерты',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'Heart',
      title: 'Романтические ужины',
      description: 'Особые вечера для влюбленных',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: 'Users',
      title: 'Корпоративные мероприятия',
      description: 'Деловые ужины и банкеты',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'Calendar',
      title: 'Праздничные мероприятия',
      description: 'Новый год, 8 марта и другие праздники',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const pastEvents = [
    {
      title: 'Новогодний банкет',
      date: '2023-12-31',
      participants: 80,
      rating: 4.9
    },
    {
      title: 'Дегустация шампанского',
      date: '2023-12-15',
      participants: 25,
      rating: 4.8
    },
    {
      title: 'Мастер-класс по пасте',
      date: '2023-11-20',
      participants: 15,
      rating: 4.7
    }
  ];

  const getCategoryBadge = (category) => {
    const badges = {
      tasting: { text: 'Дегустация', variant: 'secondary' },
      masterclass: { text: 'Мастер-класс', variant: 'default' },
      special: { text: 'Особое событие', variant: 'destructive' },
      music: { text: 'Музыка', variant: 'outline' }
    };
    return badges[category] || { text: 'Событие', variant: 'outline' };
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Мероприятия</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к нашим уникальным гастрономическим событиям и мастер-классам
          </p>
        </div>

        {/* Event Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Типы мероприятий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${type.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={type.icon} size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8">Ближайшие мероприятия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => {
              const badge = getCategoryBadge(event.category);
              const availableSpots = event.capacity - event.booked;
              
              return (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={badge.variant}>{badge.text}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                      {event.price} ₽
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-primary" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        {availableSpots} мест свободно
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Timer" size={16} className="text-primary" />
                        {event.duration}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Включено:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {event.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Icon name="Check" size={12} className="text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        disabled={availableSpots === 0}
                      >
                        {availableSpots === 0 ? 'Мест нет' : 'Забронировать'}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setSelectedEvent(event)}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8">Прошедшие мероприятия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={14} />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={14} />
                      {event.participants} участников
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                      {event.rating} рейтинг
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Private Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Crown" size={24} />
              Частные мероприятия
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Организуем индивидуальные мероприятия для ваших особых случаев: 
                  дни рождения, корпоративы, свадьбы и другие торжества.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Индивидуальное меню
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Персональный сервис
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Оформление зала
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Развлекательная программа
                  </li>
                </ul>
                <Button className="bg-primary text-primary-foreground">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Обсудить мероприятие
                </Button>
              </div>
              <div className="bg-accent p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Популярные форматы:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Корпоративный ужин</span>
                    <span className="text-primary font-medium">от 3000 ₽/чел</span>
                  </div>
                  <div className="flex justify-between">
                    <span>День рождения</span>
                    <span className="text-primary font-medium">от 2500 ₽/чел</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Свадебный банкет</span>
                    <span className="text-primary font-medium">от 4000 ₽/чел</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Презентация</span>
                    <span className="text-primary font-medium">от 2000 ₽/чел</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{selectedEvent.title}</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedEvent(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-6">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedEvent.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Детали мероприятия</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Дата:</span>
                      <span>{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время:</span>
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Длительность:</span>
                      <span>{selectedEvent.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Цена:</span>
                      <span className="font-medium">{selectedEvent.price} ₽</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Места</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Всего мест:</span>
                      <span>{selectedEvent.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Забронировано:</span>
                      <span>{selectedEvent.booked}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Свободно:</span>
                      <span className="font-medium text-green-600">
                        {selectedEvent.capacity - selectedEvent.booked}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Что включено:</h4>
                <ul className="space-y-1">
                  {selectedEvent.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={14} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full bg-primary text-primary-foreground">
                Забронировать место
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Events;