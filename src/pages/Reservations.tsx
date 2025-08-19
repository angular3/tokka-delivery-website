import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Reservations = () => {
  const [reservationData, setReservationData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [selectedTable, setSelectedTable] = useState(null);

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00'
  ];

  const tables = [
    {
      id: 1,
      name: 'Стол у окна',
      capacity: 2,
      description: 'Романтичный стол с видом на улицу',
      available: true,
      premium: true
    },
    {
      id: 2,
      name: 'Центральный стол',
      capacity: 4,
      description: 'Просторный стол в центре зала',
      available: true,
      premium: false
    },
    {
      id: 3,
      name: 'VIP-зона',
      capacity: 6,
      description: 'Отдельная зона для особых случаев',
      available: false,
      premium: true
    },
    {
      id: 4,
      name: 'Барная стойка',
      capacity: 2,
      description: 'Места у барной стойки',
      available: true,
      premium: false
    },
    {
      id: 5,
      name: 'Терраса',
      capacity: 4,
      description: 'Летняя терраса (сезонно)',
      available: true,
      premium: true
    }
  ];

  const specialOffers = [
    {
      title: 'Романтический ужин',
      description: 'Свечи, живые цветы и комплимент от шефа',
      price: 'Бесплатно при заказе от 3000 ₽'
    },
    {
      title: 'День рождения',
      description: 'Торт от ресторана и праздничное оформление',
      price: 'Скидка 10% на весь заказ'
    },
    {
      title: 'Деловой обед',
      description: 'Тихая зона и быстрое обслуживание',
      price: 'Специальное бизнес-меню'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', reservationData, selectedTable);
    alert('Спасибо! Ваша бронь принята. Мы свяжемся с вами для подтверждения.');
  };

  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Бронирование столика</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Забронируйте столик в нашем ресторане и насладитесь незабываемым ужином
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={24} />
                  Детали бронирования
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input
                        name="name"
                        value={reservationData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input
                        name="phone"
                        value={reservationData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        type="tel"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      value={reservationData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата *</label>
                      <Input
                        name="date"
                        value={reservationData.date}
                        onChange={handleChange}
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Время *</label>
                      <select
                        name="time"
                        value={reservationData.time}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                      >
                        <option value="">Выберите время</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Гостей *</label>
                      <select
                        name="guests"
                        value={reservationData.guests}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                      >
                        {[1,2,3,4,5,6,7,8].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'гость' : 'гостя'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Table Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-4">Выбор столика</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tables.map((table) => (
                        <div
                          key={table.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedTable === table.id 
                              ? 'border-primary bg-primary/5' 
                              : table.available 
                                ? 'border-gray-200 hover:border-primary/50' 
                                : 'border-gray-100 bg-gray-50 cursor-not-allowed'
                          }`}
                          onClick={() => table.available && setSelectedTable(table.id)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{table.name}</h4>
                            <div className="flex gap-1">
                              {table.premium && <Badge variant="secondary">Premium</Badge>}
                              {!table.available && <Badge variant="destructive">Занят</Badge>}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{table.description}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Users" size={14} />
                            До {table.capacity} человек
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Особые пожелания</label>
                    <Textarea
                      name="specialRequests"
                      value={reservationData.specialRequests}
                      onChange={handleChange}
                      placeholder="Аллергии, предпочтения, особые случаи..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Icon name="Check" size={16} className="mr-2" />
                    Забронировать столик
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Special Offers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gift" size={24} />
                  Специальные предложения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {specialOffers.map((offer, index) => (
                  <div key={index} className="p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold mb-2">{offer.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{offer.description}</p>
                    <p className="text-sm font-medium text-primary">{offer.price}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Restaurant Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} />
                  Информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Часы работы</p>
                    <p className="text-sm text-muted-foreground">Пн-Чт: 12:00-23:00</p>
                    <p className="text-sm text-muted-foreground">Пт-Сб: 12:00-01:00</p>
                    <p className="text-sm text-muted-foreground">Вс: 12:00-22:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-muted-foreground">ул. Тверская, 15</p>
                    <p className="text-sm text-muted-foreground">Москва, 125009</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} />
                  Правила бронирования
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Бронирование действительно в течение 15 минут после указанного времени</li>
                  <li>• Для групп от 6 человек требуется предоплата 50%</li>
                  <li>• Отмена бронирования возможна за 2 часа до визита</li>
                  <li>• В выходные дни минимальный заказ 2000 ₽ с человека</li>
                  <li>• Дети до 12 лет обслуживаются бесплатно</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;