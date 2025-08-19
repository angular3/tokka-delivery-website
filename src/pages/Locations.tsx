import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCity, setSelectedCity] = useState('all');

  const cities = [
    { id: 'all', name: 'Все города' },
    { id: 'moscow', name: 'Москва' },
    { id: 'spb', name: 'Санкт-Петербург' },
    { id: 'ekb', name: 'Екатеринбург' }
  ];

  const locations = [
    {
      id: 1,
      name: 'TOKKA Тверская',
      city: 'moscow',
      address: 'ул. Тверская, 15',
      phone: '+7 (495) 123-45-67',
      email: 'tverskaya@tokka.ru',
      type: 'flagship',
      openDate: '2018-06-15',
      area: 350,
      seats: 120,
      image: '/placeholder.svg',
      features: [
        'Главный зал',
        'VIP-зона',
        'Барная стойка',
        'Летняя терраса',
        'Винный погреб',
        'Частный кабинет'
      ],
      workingHours: {
        'Понедельник - Четверг': '12:00 - 23:00',
        'Пятница - Суббота': '12:00 - 01:00',
        'Воскресенье': '12:00 - 22:00'
      },
      services: [
        'Банкеты и мероприятия',
        'Кейтеринг',
        'Винные дегустации',
        'Мастер-классы',
        'Доставка'
      ],
      parking: 'Платная парковка рядом',
      metro: 'Тверская, Пушкинская (5 мин пешком)',
      manager: 'Анна Волкова',
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: 'TOKKA Невский',
      city: 'spb',
      address: 'Невский проспект, 45',
      phone: '+7 (812) 987-65-43',
      email: 'nevsky@tokka.ru',
      type: 'classic',
      openDate: '2022-09-20',
      area: 280,
      seats: 90,
      image: '/placeholder.svg',
      features: [
        'Главный зал',
        'Барная зона',
        'Терраса с видом на канал',
        'Камин',
        'Библиотека вин'
      ],
      workingHours: {
        'Понедельник - Четверг': '12:00 - 23:00',
        'Пятница - Суббота': '12:00 - 01:00',
        'Воскресенье': '12:00 - 22:00'
      },
      services: [
        'Банкеты',
        'Романтические ужины',
        'Бизнес-ланчи',
        'Доставка'
      ],
      parking: 'Собственная парковка',
      metro: 'Невский проспект (2 мин пешком)',
      manager: 'Петр Сидоров',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 3,
      name: 'TOKKA Плотинка',
      city: 'ekb',
      address: 'ул. Вайнера, 12',
      phone: '+7 (343) 555-77-88',
      email: 'plotinka@tokka.ru',
      type: 'express',
      openDate: '2023-11-10',
      area: 150,
      seats: 60,
      image: '/placeholder.svg',
      features: [
        'Открытая кухня',
        'Барная стойка',
        'Панорамные окна',
        'Детская зона'
      ],
      workingHours: {
        'Понедельник - Воскресенье': '11:00 - 23:00'
      },
      services: [
        'Быстрые обеды',
        'Кофе и десерты',
        'Доставка',
        'Детские праздники'
      ],
      parking: 'Подземная парковка ТЦ',
      metro: 'Площадь 1905 года (10 мин пешком)',
      manager: 'Ольга Морозова',
      rating: 4.6,
      reviews: 89
    }
  ];

  const upcomingLocations = [
    {
      city: 'Новосибирск',
      address: 'ул. Ленина, 25',
      openDate: '2024-06-01',
      type: 'classic',
      status: 'В разработке'
    },
    {
      city: 'Краснодар',
      address: 'ул. Красная, 88',
      openDate: '2024-09-15',
      type: 'express',
      status: 'Поиск франчайзи'
    },
    {
      city: 'Ростов-на-Дону',
      address: 'пр. Буденновский, 34',
      openDate: '2024-12-01',
      type: 'classic',
      status: 'Планирование'
    }
  ];

  const locationTypes = [
    {
      type: 'flagship',
      name: 'Флагманский',
      description: 'Полный формат с максимальным набором услуг',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      type: 'classic',
      name: 'Классический',
      description: 'Стандартный ресторан с полным меню',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      type: 'express',
      name: 'Экспресс',
      description: 'Компактный формат для быстрого обслуживания',
      color: 'bg-green-100 text-green-800'
    }
  ];

  const filteredLocations = selectedCity === 'all' 
    ? locations 
    : locations.filter(location => location.city === selectedCity);

  const getLocationTypeBadge = (type) => {
    const typeInfo = locationTypes.find(t => t.type === type);
    return typeInfo || { name: 'Ресторан', color: 'bg-gray-100 text-gray-800' };
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && (
          <Icon name="Star" size={14} className="text-yellow-400 fill-current opacity-50" />
        )}
        <span className="text-sm text-muted-foreground ml-1">({rating})</span>
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Наши рестораны</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Сеть ресторанов TOKKA в крупнейших городах России
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Locations List */}
          <div className="lg:col-span-3">
            {/* City Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {cities.map((city) => (
                <Button
                  key={city.id}
                  variant={selectedCity === city.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCity(city.id)}
                >
                  {city.name}
                </Button>
              ))}
            </div>

            {/* Current Locations */}
            <div className="space-y-6 mb-16">
              <h2 className="text-2xl font-bold text-secondary">Действующие рестораны</h2>
              {filteredLocations.map((location) => {
                const typeBadge = getLocationTypeBadge(location.type);
                return (
                  <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-square bg-muted relative">
                          <img 
                            src={location.image} 
                            alt={location.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={typeBadge.color}>
                              {typeBadge.name}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Icon name="MapPin" size={16} className="text-primary" />
                                <span className="text-muted-foreground">{location.address}</span>
                              </div>
                              {renderStars(location.rating)}
                              <span className="text-sm text-muted-foreground ml-2">
                                ({location.reviews} отзывов)
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Контакты</h4>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-2">
                                  <Icon name="Phone" size={14} className="text-primary" />
                                  {location.phone}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Icon name="Mail" size={14} className="text-primary" />
                                  {location.email}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Icon name="Train" size={14} className="text-primary" />
                                  {location.metro}
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Информация</h4>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>Площадь:</span>
                                  <span>{location.area} м²</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Мест:</span>
                                  <span>{location.seats}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Открыт:</span>
                                  <span>{new Date(location.openDate).getFullYear()}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2 text-sm">Особенности:</h4>
                            <div className="flex flex-wrap gap-1">
                              {location.features.slice(0, 4).map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                              {location.features.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                  +{location.features.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1">
                              <Icon name="Calendar" size={16} className="mr-2" />
                              Забронировать
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => setSelectedLocation(location)}
                            >
                              Подробнее
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Upcoming Locations */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Скоро открытие</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingLocations.map((location, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="MapPin" size={32} className="text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{location.city}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{location.address}</p>
                      <Badge variant="secondary" className="mb-3">
                        {getLocationTypeBadge(location.type).name}
                      </Badge>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Открытие:</span>
                          <span>{new Date(location.openDate).toLocaleDateString('ru-RU')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Статус:</span>
                          <span className="text-primary">{location.status}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Location Types */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building" size={20} />
                  Форматы ресторанов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {locationTypes.map((type, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={type.color}>{type.name}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Network Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" size={20} />
                  Сеть TOKKA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">{locations.length}</div>
                    <div className="text-sm text-muted-foreground">Действующих ресторанов</div>
                  </div>
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">{upcomingLocations.length}</div>
                    <div className="text-sm text-muted-foreground">Скоро откроются</div>
                  </div>
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {locations.reduce((sum, loc) => sum + loc.seats, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Общее количество мест</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Franchise Opportunity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Handshake" size={20} />
                  Франчайзинг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Заинтересованы в открытии ресторана TOKKA в вашем городе?
                </p>
                <Button size="sm" className="w-full">
                  <Icon name="Building" size={16} className="mr-2" />
                  Узнать о франшизе
                </Button>
              </CardContent>
            </Card>

            {/* Contact Central Office */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building2" size={20} />
                  Центральный офис
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={14} className="text-primary" />
                    <span>ул. Тверская, 15, Москва</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={14} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={14} className="text-primary" />
                    <span>info@tokka.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Location Details Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{selectedLocation.name}</CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="text-muted-foreground">{selectedLocation.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {renderStars(selectedLocation.rating)}
                    <Badge className={getLocationTypeBadge(selectedLocation.type).color}>
                      {getLocationTypeBadge(selectedLocation.type).name}
                    </Badge>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedLocation(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={selectedLocation.image} 
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Контактная информация</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={16} className="text-primary" />
                      {selectedLocation.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" size={16} className="text-primary" />
                      {selectedLocation.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Train" size={16} className="text-primary" />
                      {selectedLocation.metro}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Car" size={16} className="text-primary" />
                      {selectedLocation.parking}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={16} className="text-primary" />
                      Менеджер: {selectedLocation.manager}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Часы работы</h3>
                  <div className="space-y-1 text-sm">
                    {Object.entries(selectedLocation.workingHours).map(([days, hours]) => (
                      <div key={days} className="flex justify-between">
                        <span>{days}:</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Особенности ресторана</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedLocation.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="justify-center">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Доступные услуги</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedLocation.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={14} className="text-green-500" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Забронировать стол
                </Button>
                <Button variant="outline">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Построить маршрут
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Locations;