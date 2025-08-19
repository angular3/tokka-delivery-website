import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const GiftCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [purchaseData, setPurchaseData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    senderEmail: '',
    message: '',
    deliveryDate: ''
  });

  const giftCardDesigns = [
    {
      id: 1,
      name: 'Классический',
      image: '/placeholder.svg',
      description: 'Элегантный дизайн в фирменных цветах ресторана',
      color: 'bg-gradient-to-br from-primary to-primary/80'
    },
    {
      id: 2,
      name: 'Романтический',
      image: '/placeholder.svg',
      description: 'Нежный дизайн для особых моментов',
      color: 'bg-gradient-to-br from-pink-500 to-red-500'
    },
    {
      id: 3,
      name: 'Праздничный',
      image: '/placeholder.svg',
      description: 'Яркий дизайн для торжественных случаев',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      name: 'Деловой',
      image: '/placeholder.svg',
      description: 'Строгий дизайн для корпоративных подарков',
      color: 'bg-gradient-to-br from-gray-700 to-gray-900'
    }
  ];

  const predefinedAmounts = [
    { value: 2000, popular: false },
    { value: 3000, popular: true },
    { value: 5000, popular: true },
    { value: 7000, popular: false },
    { value: 10000, popular: true },
    { value: 15000, popular: false }
  ];

  const giftCardBenefits = [
    {
      icon: 'Gift',
      title: 'Идеальный подарок',
      description: 'Подходит для любого случая и получателя'
    },
    {
      icon: 'Calendar',
      title: 'Без срока действия',
      description: 'Карта действует бессрочно'
    },
    {
      icon: 'CreditCard',
      title: 'Удобное использование',
      description: 'Можно использовать частями'
    },
    {
      icon: 'Smartphone',
      title: 'Цифровая доставка',
      description: 'Мгновенная доставка на email'
    }
  ];

  const usageInstructions = [
    {
      step: 1,
      title: 'Покупка',
      description: 'Выберите дизайн, сумму и оформите заказ'
    },
    {
      step: 2,
      title: 'Получение',
      description: 'Карта придет на указанный email'
    },
    {
      step: 3,
      title: 'Использование',
      description: 'Предъявите карту при заказе в ресторане или при доставке'
    }
  ];

  const faqItems = [
    {
      question: 'Можно ли использовать карту частями?',
      answer: 'Да, остаток средств сохраняется на карте для следующих покупок.'
    },
    {
      question: 'Есть ли срок действия у подарочной карты?',
      answer: 'Нет, наши подарочные карты действуют бессрочно.'
    },
    {
      question: 'Можно ли вернуть подарочную карту?',
      answer: 'Подарочные карты возврату не подлежат, но их можно передарить.'
    },
    {
      question: 'Как проверить баланс карты?',
      answer: 'Баланс можно проверить на нашем сайте или у администратора ресторана.'
    }
  ];

  const handlePurchase = (e) => {
    e.preventDefault();
    const amount = selectedCard?.amount || customAmount;
    console.log('Gift card purchase:', { ...purchaseData, amount, design: selectedCard?.design });
    alert('Подарочная карта успешно приобретена! Она будет отправлена на указанный email.');
    setPurchaseData({
      recipientName: '',
      recipientEmail: '',
      senderName: '',
      senderEmail: '',
      message: '',
      deliveryDate: ''
    });
    setSelectedCard(null);
    setCustomAmount('');
  };

  const handleChange = (e) => {
    setPurchaseData({
      ...purchaseData,
      [e.target.name]: e.target.value
    });
  };

  const selectAmount = (amount) => {
    setSelectedCard({ amount, design: giftCardDesigns[0] });
    setCustomAmount('');
  };

  const selectCustomAmount = () => {
    if (customAmount && customAmount >= 1000) {
      setSelectedCard({ amount: parseInt(customAmount), design: giftCardDesigns[0] });
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
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Подарочные карты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подарите незабываемый гастрономический опыт в ресторане TOKKA
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftCardBenefits.map((benefit, index) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Purchase Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gift" size={24} />
                  Купить подарочную карту
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Выберите сумму</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <div
                        key={amount.value}
                        className={`relative p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedCard?.amount === amount.value 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                        onClick={() => selectAmount(amount.value)}
                      >
                        {amount.popular && (
                          <Badge className="absolute -top-2 -right-2 bg-primary">
                            Популярно
                          </Badge>
                        )}
                        <div className="text-center">
                          <div className="text-xl font-bold">{amount.value.toLocaleString()} ₽</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Другая сумма (мин. 1000 ₽)"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="1000"
                      className="flex-1"
                    />
                    <Button 
                      variant="outline"
                      onClick={selectCustomAmount}
                      disabled={!customAmount || customAmount < 1000}
                    >
                      Выбрать
                    </Button>
                  </div>
                </div>

                {/* Design Selection */}
                {selectedCard && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Выберите дизайн</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {giftCardDesigns.map((design) => (
                        <div
                          key={design.id}
                          className={`cursor-pointer transition-all ${
                            selectedCard.design?.id === design.id 
                              ? 'ring-2 ring-primary' 
                              : 'hover:ring-1 hover:ring-primary/50'
                          }`}
                          onClick={() => setSelectedCard({...selectedCard, design})}
                        >
                          <div className={`aspect-[3/2] rounded-lg ${design.color} p-4 text-white relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="relative z-10">
                              <div className="text-sm font-semibold mb-1">TOKKA</div>
                              <div className="text-xs opacity-90">Подарочная карта</div>
                              <div className="absolute bottom-2 right-2 text-lg font-bold">
                                {selectedCard.amount?.toLocaleString()} ₽
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-sm font-medium mt-2">{design.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Purchase Form */}
                {selectedCard && (
                  <form onSubmit={handlePurchase} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя получателя *</label>
                        <Input
                          name="recipientName"
                          value={purchaseData.recipientName}
                          onChange={handleChange}
                          placeholder="Имя получателя"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email получателя *</label>
                        <Input
                          name="recipientEmail"
                          type="email"
                          value={purchaseData.recipientEmail}
                          onChange={handleChange}
                          placeholder="recipient@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                        <Input
                          name="senderName"
                          value={purchaseData.senderName}
                          onChange={handleChange}
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваш email *</label>
                        <Input
                          name="senderEmail"
                          type="email"
                          value={purchaseData.senderEmail}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Персональное сообщение</label>
                      <Textarea
                        name="message"
                        value={purchaseData.message}
                        onChange={handleChange}
                        placeholder="Поздравление или пожелание..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Дата доставки</label>
                      <Input
                        name="deliveryDate"
                        type="date"
                        value={purchaseData.deliveryDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Оставьте пустым для немедленной доставки
                      </p>
                    </div>

                    <div className="bg-accent p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Итого к оплате:</span>
                        <span className="text-2xl font-bold text-primary">
                          {selectedCard.amount?.toLocaleString()} ₽
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Дизайн: {selectedCard.design?.name}
                      </p>
                    </div>

                    <Button type="submit" className="w-full bg-primary text-primary-foreground">
                      <Icon name="CreditCard" size={16} className="mr-2" />
                      Купить подарочную карту
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How it Works */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="HelpCircle" size={20} />
                  Как это работает
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {usageInstructions.map((instruction) => (
                  <div key={instruction.step} className="flex gap-3">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {instruction.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{instruction.title}</h4>
                      <p className="text-sm text-muted-foreground">{instruction.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Частые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2 text-sm">{item.question}</h4>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                    {index < faqItems.length - 1 && <hr className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Нужна помощь?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span>gifts@tokka.ru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Пн-Вс: 10:00-22:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Corporate Gifts */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Корпоративные подарки</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Подарки для бизнеса</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Подарочные карты TOKKA — отличный способ поблагодарить сотрудников, 
                    партнеров или клиентов. Мы предлагаем специальные условия для 
                    корпоративных заказов.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Скидки при заказе от 10 карт
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Персональный менеджер
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Брендинг карт под вашу компанию
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Отчетность по использованию
                    </li>
                  </ul>
                  <Button className="bg-primary text-primary-foreground">
                    <Icon name="Building" size={16} className="mr-2" />
                    Корпоративный заказ
                  </Button>
                </div>
                <div className="bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Специальные предложения:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>10-49 карт</span>
                      <span className="text-primary font-medium">Скидка 5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>50-99 карт</span>
                      <span className="text-primary font-medium">Скидка 10%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>100+ карт</span>
                      <span className="text-primary font-medium">Скидка 15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;