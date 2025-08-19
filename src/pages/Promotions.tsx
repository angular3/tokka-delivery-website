import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Promotions = () => {
  const [promoCode, setPromoCode] = useState('');
  const [selectedPromo, setSelectedPromo] = useState(null);

  const currentPromotions = [
    {
      id: 1,
      title: 'Счастливые часы',
      description: 'Скидка 30% на все напитки с 15:00 до 18:00',
      discount: 30,
      type: 'time-based',
      validUntil: '2024-03-31',
      conditions: 'Действует с понедельника по четверг',
      image: '/placeholder.svg',
      code: 'HAPPY30',
      category: 'drinks',
      active: true
    },
    {
      id: 2,
      title: 'Романтический ужин',
      description: 'Специальное меню для двоих со скидкой 20%',
      discount: 20,
      type: 'special-menu',
      validUntil: '2024-02-29',
      conditions: 'Только по предварительному бронированию',
      image: '/placeholder.svg',
      code: 'LOVE20',
      category: 'dinner',
      active: true
    },
    {
      id: 3,
      title: 'Бизнес-ланч',
      description: 'Комплексный обед от 890 ₽',
      discount: 0,
      type: 'fixed-price',
      validUntil: '2024-12-31',
      conditions: 'С понедельника по пятницу с 12:00 до 16:00',
      image: '/placeholder.svg',
      code: 'BUSINESS',
      category: 'lunch',
      active: true
    },
    {
      id: 4,
      title: 'День рождения',
      description: 'Скидка 15% в день рождения + десерт в подарок',
      discount: 15,
      type: 'birthday',
      validUntil: '2024-12-31',
      conditions: 'При предъявлении документа',
      image: '/placeholder.svg',
      code: 'BIRTHDAY15',
      category: 'special',
      active: true
    },
    {
      id: 5,
      title: 'Первый заказ',
      description: 'Скидка 25% на первый заказ через доставку',
      discount: 25,
      type: 'first-order',
      validUntil: '2024-06-30',
      conditions: 'Только для новых клиентов',
      image: '/placeholder.svg',
      code: 'FIRST25',
      category: 'delivery',
      active: true
    },
    {
      id: 6,
      title: 'Групповой заказ',
      description: 'Скидка 10% при заказе от 5000 ₽',
      discount: 10,
      type: 'minimum-order',
      validUntil: '2024-12-31',
      conditions: 'Минимальная сумма заказа 5000 ₽',
      image: '/placeholder.svg',
      code: 'GROUP10',
      category: 'group',
      active: true
    }
  ];

  const seasonalOffers = [
    {
      title: 'Весеннее обновление',
      description: 'Новые блюда с сезонными ингредиентами',
      startDate: '2024-03-01',
      endDate: '2024-05-31',
      image: '/placeholder.svg'
    },
    {
      title: 'Летняя терраса',
      description: 'Специальное меню для летней террасы',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      image: '/placeholder.svg'
    },
    {
      title: 'Осенние деликатесы',
      description: 'Блюда с трюфелями и дичью',
      startDate: '2024-09-01',
      endDate: '2024-11-30',
      image: '/placeholder.svg'
    }
  ];

  const loyaltyBenefits = [
    {
      level: 'Bronze',
      discount: 5,
      benefits: ['Скидка 5%', 'Приветственный напиток']
    },
    {
      level: 'Silver',
      discount: 10,
      benefits: ['Скидка 10%', 'Бесплатный десерт в ДР', 'Приоритетное бронирование']
    },
    {
      level: 'Gold',
      discount: 15,
      benefits: ['Скидка 15%', 'Бесплатная бутылка вина в месяц', 'VIP-обслуживание']
    },
    {
      level: 'Platinum',
      discount: 20,
      benefits: ['Скидка 20%', 'Индивидуальное меню', 'Персональный менеджер']
    }
  ];

  const checkPromoCode = () => {
    const promo = currentPromotions.find(p => p.code.toLowerCase() === promoCode.toLowerCase());
    if (promo) {
      alert(`Промокод действителен! Скидка ${promo.discount}%`);
    } else {
      alert('Промокод не найден или недействителен');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getPromoBadge = (type) => {
    const badges = {
      'time-based': { text: 'Время', variant: 'secondary' },
      'special-menu': { text: 'Меню', variant: 'default' },
      'fixed-price': { text: 'Фикс', variant: 'outline' },
      'birthday': { text: 'ДР', variant: 'destructive' },
      'first-order': { text: 'Новичок', variant: 'secondary' },
      'minimum-order': { text: 'Сумма', variant: 'outline' }
    };
    return badges[type] || { text: 'Акция', variant: 'outline' };
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Акции и предложения</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выгодные предложения и специальные акции для наших гостей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Promotions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-secondary mb-6">Текущие акции</h2>
            <div className="space-y-6">
              {currentPromotions.map((promo) => {
                const badge = getPromoBadge(promo.type);
                return (
                  <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-square bg-muted relative">
                          <img 
                            src={promo.image} 
                            alt={promo.title}
                            className="w-full h-full object-cover"
                          />
                          {promo.discount > 0 && (
                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                              -{promo.discount}%
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                              <Badge variant={badge.variant} className="mb-2">
                                {badge.text}
                              </Badge>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              До {formatDate(promo.validUntil)}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{promo.description}</p>
                          
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-1">Условия:</p>
                            <p className="text-sm text-muted-foreground">{promo.conditions}</p>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-accent px-3 py-1 rounded font-mono text-sm">
                              {promo.code}
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => navigator.clipboard.writeText(promo.code)}
                            >
                              <Icon name="Copy" size={14} className="mr-1" />
                              Копировать
                            </Button>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button className="flex-1">
                              Использовать
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => setSelectedPromo(promo)}
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Promo Code Check */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Tag" size={20} />
                  Проверить промокод
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    placeholder="Введите промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  />
                  <Button 
                    onClick={checkPromoCode}
                    className="w-full"
                    disabled={!promoCode}
                  >
                    Проверить
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Loyalty Program */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Crown" size={20} />
                  Программа лояльности
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {loyaltyBenefits.map((level, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{level.level}</h4>
                      <Badge variant="secondary">{level.discount}%</Badge>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button size="sm" className="w-full">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  Рассылка акций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Подпишитесь на рассылку и первыми узнавайте о новых акциях
                </p>
                <div className="space-y-3">
                  <Input placeholder="Ваш email" type="email" />
                  <Button size="sm" className="w-full">
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seasonal Offers */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Сезонные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{offer.description}</p>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(offer.startDate)} - {formatDate(offer.endDate)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={24} />
                Условия акций
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Общие условия</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Акции не суммируются с другими скидками</li>
                    <li>• Скидки не распространяются на алкогольные напитки (кроме специальных акций)</li>
                    <li>• Ресторан оставляет за собой право изменить условия акций</li>
                    <li>• Промокоды действительны только при онлайн-заказе</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Как использовать промокод</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Выберите блюда и добавьте в корзину</li>
                    <li>2. Введите промокод в поле "Промокод"</li>
                    <li>3. Нажмите "Применить"</li>
                    <li>4. Скидка автоматически применится к заказу</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Promotion Details Modal */}
      {selectedPromo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">{selectedPromo.title}</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPromo(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={selectedPromo.image} 
                  alt={selectedPromo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                {selectedPromo.discount > 0 && (
                  <div className="text-4xl font-bold text-primary mb-2">
                    -{selectedPromo.discount}%
                  </div>
                )}
                <p className="text-lg text-muted-foreground">{selectedPromo.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Промокод</p>
                  <p className="font-mono font-semibold">{selectedPromo.code}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Действует до</p>
                  <p className="font-semibold">{formatDate(selectedPromo.validUntil)}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Условия использования:</h3>
                <p className="text-sm text-muted-foreground">{selectedPromo.conditions}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  className="flex-1"
                  onClick={() => navigator.clipboard.writeText(selectedPromo.code)}
                >
                  <Icon name="Copy" size={16} className="mr-2" />
                  Копировать код
                </Button>
                <Button variant="outline">
                  Использовать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Promotions;