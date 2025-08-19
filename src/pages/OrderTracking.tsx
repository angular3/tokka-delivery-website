import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Симуляция данных заказа
  const mockOrderData = {
    orderNumber: 'TK-2024-001234',
    status: 'cooking',
    orderTime: '2024-01-20T18:30:00',
    estimatedDelivery: '2024-01-20T19:15:00',
    customer: {
      name: 'Анна Петрова',
      phone: '+7 (495) 123-45-67',
      address: 'ул. Тверская, 25, кв. 15'
    },
    courier: {
      name: 'Михаил Иванов',
      phone: '+7 (495) 987-65-43',
      rating: 4.8
    },
    items: [
      {
        id: 1,
        name: 'Стейк из говядины',
        quantity: 1,
        price: 2800,
        image: '/img/e9bc8590-86f0-44ba-b6f6-6bb7c68b9af2.jpg'
      },
      {
        id: 2,
        name: 'Лосось гриль',
        quantity: 1,
        price: 2200,
        image: '/img/9cb37276-dd42-4f91-95a0-1c1f57ad9fe9.jpg'
      },
      {
        id: 3,
        name: 'Тирамису',
        quantity: 2,
        price: 650,
        image: '/placeholder.svg'
      }
    ],
    total: 6300,
    deliveryFee: 0,
    discount: 315,
    finalTotal: 5985,
    paymentMethod: 'Банковская карта',
    paymentStatus: 'paid'
  };

  const orderStatuses = [
    {
      id: 'confirmed',
      name: 'Заказ принят',
      description: 'Ваш заказ подтвержден и передан на кухню',
      icon: 'CheckCircle',
      completed: true,
      time: '18:30'
    },
    {
      id: 'cooking',
      name: 'Готовится',
      description: 'Наши повара готовят ваши блюда',
      icon: 'ChefHat',
      completed: true,
      time: '18:45',
      current: true
    },
    {
      id: 'ready',
      name: 'Готов к доставке',
      description: 'Заказ готов и ожидает курьера',
      icon: 'Package',
      completed: false,
      time: '19:05'
    },
    {
      id: 'delivery',
      name: 'В пути',
      description: 'Курьер везет ваш заказ',
      icon: 'Truck',
      completed: false,
      time: '19:10'
    },
    {
      id: 'delivered',
      name: 'Доставлен',
      description: 'Заказ успешно доставлен',
      icon: 'Home',
      completed: false,
      time: '19:15'
    }
  ];

  const recentOrders = [
    {
      orderNumber: 'TK-2024-001233',
      date: '2024-01-18',
      total: 3200,
      status: 'delivered'
    },
    {
      orderNumber: 'TK-2024-001232',
      date: '2024-01-15',
      total: 1800,
      status: 'delivered'
    },
    {
      orderNumber: 'TK-2024-001231',
      date: '2024-01-12',
      total: 4500,
      status: 'delivered'
    }
  ];

  const supportOptions = [
    {
      title: 'Изменить заказ',
      description: 'Возможно в течение 15 минут',
      icon: 'Edit',
      action: 'edit'
    },
    {
      title: 'Отменить заказ',
      description: 'До начала приготовления',
      icon: 'X',
      action: 'cancel'
    },
    {
      title: 'Связаться с курьером',
      description: 'Когда заказ в пути',
      icon: 'Phone',
      action: 'contact'
    },
    {
      title: 'Сообщить о проблеме',
      description: 'Если что-то пошло не так',
      icon: 'AlertCircle',
      action: 'report'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const searchOrder = () => {
    if (orderNumber === 'TK-2024-001234') {
      setOrderData(mockOrderData);
    } else {
      alert('Заказ не найден. Попробуйте TK-2024-001234 для демонстрации.');
    }
  };

  const getStatusProgress = () => {
    const currentIndex = orderStatuses.findIndex(status => status.current);
    return ((currentIndex + 1) / orderStatuses.length) * 100;
  };

  const getEstimatedTime = () => {
    if (!orderData) return '';
    const estimated = new Date(orderData.estimatedDelivery);
    const now = new Date();
    const diff = estimated - now;
    
    if (diff <= 0) return 'Доставлен';
    
    const minutes = Math.floor(diff / (1000 * 60));
    return `Осталось ~${minutes} мин`;
  };

  const formatTime = (timeString) => {
    return new Date(`2024-01-20T${timeString}:00`).toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Отслеживание заказа</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Следите за статусом вашего заказа в режиме реального времени
          </p>
        </div>

        {!orderData ? (
          /* Order Search */
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Найти заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Номер заказа</label>
                    <Input
                      placeholder="TK-2024-001234"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                    />
                  </div>
                  <Button onClick={searchOrder} className="w-full" disabled={!orderNumber}>
                    <Icon name="Search" size={16} className="mr-2" />
                    Найти заказ
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Для демонстрации используйте: TK-2024-001234
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Order Details */
          <div className="space-y-8">
            {/* Order Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Заказ {orderData.orderNumber}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Оформлен: {new Date(orderData.orderTime).toLocaleString('ru-RU')}</span>
                      <span>•</span>
                      <span>Сумма: {orderData.finalTotal.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-primary mb-1">
                      {getEstimatedTime()}
                    </div>
                    <Badge variant="secondary">
                      {orderStatuses.find(s => s.current)?.name}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Progress */}
              <div className="lg:col-span-2 space-y-6">
                {/* Status Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Clock" size={24} />
                      Статус заказа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <Progress value={getStatusProgress()} className="h-2" />
                    </div>
                    
                    <div className="space-y-4">
                      {orderStatuses.map((status, index) => (
                        <div key={status.id} className="flex gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            status.completed 
                              ? 'bg-green-500 text-white' 
                              : status.current
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-gray-200 text-gray-500'
                          }`}>
                            <Icon name={status.icon} size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className={`font-semibold ${status.current ? 'text-primary' : ''}`}>
                                {status.name}
                              </h3>
                              <span className="text-sm text-muted-foreground">
                                {status.completed ? formatTime(status.time) : 
                                 status.current ? 'Сейчас' : 
                                 `~${formatTime(status.time)}`}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{status.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Order Items */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="ShoppingBag" size={24} />
                      Состав заказа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orderData.items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">
                                Количество: {item.quantity}
                              </span>
                              <span className="font-medium">
                                {(item.price * item.quantity).toLocaleString()} ₽
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Сумма заказа:</span>
                        <span>{orderData.total.toLocaleString()} ₽</span>
                      </div>
                      {orderData.discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Скидка:</span>
                          <span>-{orderData.discount.toLocaleString()} ₽</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Доставка:</span>
                        <span>{orderData.deliveryFee === 0 ? 'Бесплатно' : `${orderData.deliveryFee} ₽`}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg border-t pt-2">
                        <span>Итого:</span>
                        <span>{orderData.finalTotal.toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Headphones" size={24} />
                      Нужна помощь?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {supportOptions.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="flex items-center gap-2 h-auto p-4"
                          disabled={
                            (option.action === 'edit' && orderData.status !== 'confirmed') ||
                            (option.action === 'cancel' && orderData.status !== 'confirmed') ||
                            (option.action === 'contact' && orderData.status !== 'delivery')
                          }
                        >
                          <Icon name={option.icon} size={20} />
                          <div className="text-left">
                            <div className="font-medium">{option.title}</div>
                            <div className="text-xs text-muted-foreground">{option.description}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Delivery Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" size={20} />
                      Доставка
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Адрес доставки</h4>
                      <p className="text-sm text-muted-foreground">{orderData.customer.address}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Получатель</h4>
                      <p className="text-sm">{orderData.customer.name}</p>
                      <p className="text-sm text-muted-foreground">{orderData.customer.phone}</p>
                    </div>
                    
                    {orderData.status === 'delivery' && (
                      <div>
                        <h4 className="font-semibold mb-2">Курьер</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-muted rounded-full"></div>
                          <div>
                            <p className="text-sm font-medium">{orderData.courier.name}</p>
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                              <span className="text-xs">{orderData.courier.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          <Icon name="Phone" size={14} className="mr-2" />
                          Связаться с курьером
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Payment Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="CreditCard" size={20} />
                      Оплата
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Способ оплаты:</span>
                        <span>{orderData.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Статус:</span>
                        <Badge variant="secondary" className="text-green-600">
                          Оплачено
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="History" size={20} />
                      Предыдущие заказы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentOrders.map((order, index) => (
                      <div key={index} className="p-3 bg-accent rounded-lg cursor-pointer hover:bg-accent/80 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-sm">{order.orderNumber}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(order.date).toLocaleDateString('ru-RU')}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{order.total.toLocaleString()} ₽</p>
                            <Badge variant="outline" className="text-xs">
                              Доставлен
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button size="sm" variant="outline" className="w-full">
                      Все заказы
                    </Button>
                  </CardContent>
                </Card>

                {/* Live Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Map" size={20} />
                      Карта доставки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="MapPin" size={48} className="text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Отслеживание курьера</p>
                        <p className="text-xs text-muted-foreground">в режиме реального времени</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Order Actions */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => setOrderData(null)}>
                <Icon name="Search" size={16} className="mr-2" />
                Найти другой заказ
              </Button>
              <Button>
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Повторить заказ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;