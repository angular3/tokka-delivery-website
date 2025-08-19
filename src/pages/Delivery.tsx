import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const [address, setAddress] = useState('');
  const [deliveryZone, setDeliveryZone] = useState(null);

  const deliveryZones = [
    { name: 'Центр', price: 0, time: '30-40 мин', color: 'bg-green-500' },
    { name: 'Ближние районы', price: 200, time: '40-50 мин', color: 'bg-yellow-500' },
    { name: 'Дальние районы', price: 400, time: '50-60 мин', color: 'bg-red-500' }
  ];

  const deliveryInfo = [
    {
      icon: 'Clock',
      title: 'Быстрая доставка',
      description: 'От 30 минут в зависимости от района'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Бесконтактная доставка и соблюдение санитарных норм'
    },
    {
      icon: 'Thermometer',
      title: 'Термосумки',
      description: 'Блюда доставляются в специальных термосумках'
    },
    {
      icon: 'CreditCard',
      title: 'Удобная оплата',
      description: 'Наличными, картой или онлайн'
    }
  ];

  const checkAddress = () => {
    // Простая симуляция проверки адреса
    if (address.toLowerCase().includes('центр') || address.toLowerCase().includes('тверская')) {
      setDeliveryZone(deliveryZones[0]);
    } else if (address.toLowerCase().includes('москва')) {
      setDeliveryZone(deliveryZones[1]);
    } else {
      setDeliveryZone(deliveryZones[2]);
    }
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Доставка</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Быстрая и надежная доставка изысканных блюд прямо к вашему столу
          </p>
        </div>

        {/* Address Check */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" size={24} />
              Проверить зону доставки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <Input
                placeholder="Введите ваш адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1"
              />
              <Button onClick={checkAddress} disabled={!address}>
                Проверить
              </Button>
            </div>
            
            {deliveryZone && (
              <div className="bg-accent p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-4 h-4 rounded-full ${deliveryZone.color}`}></div>
                  <h3 className="font-semibold">{deliveryZone.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    Время доставки: {deliveryZone.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} />
                    Стоимость: {deliveryZone.price === 0 ? 'Бесплатно' : `${deliveryZone.price} ₽`}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Delivery Zones */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full ${zone.color} mx-auto mb-4 flex items-center justify-center`}>
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{zone.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      {zone.time}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Icon name="Truck" size={16} />
                      {zone.price === 0 ? 'Бесплатно' : `${zone.price} ₽`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Delivery Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Преимущества нашей доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Delivery Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Условия доставки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  Время работы
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Понедельник - Четверг: 10:00 - 23:00</li>
                  <li>• Пятница - Суббота: 10:00 - 01:00</li>
                  <li>• Воскресенье: 10:00 - 22:00</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Способы оплаты
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Наличными курьеру</li>
                  <li>• Банковской картой курьеру</li>
                  <li>• Онлайн на сайте</li>
                  <li>• Через мобильные приложения</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Info" size={20} />
                Важная информация
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Минимальная сумма заказа для доставки: 1000 ₽</li>
                <li>• Бесплатная доставка при заказе от 2000 ₽ в центре города</li>
                <li>• Время доставки может увеличиваться в часы пик</li>
                <li>• При заказе на сумму свыше 5000 ₽ - скидка 5%</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Delivery;