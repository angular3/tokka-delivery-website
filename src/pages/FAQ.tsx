import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'Все вопросы', icon: 'HelpCircle' },
    { id: 'orders', name: 'Заказы', icon: 'ShoppingCart' },
    { id: 'delivery', name: 'Доставка', icon: 'Truck' },
    { id: 'payment', name: 'Оплата', icon: 'CreditCard' },
    { id: 'restaurant', name: 'Ресторан', icon: 'Utensils' },
    { id: 'loyalty', name: 'Лояльность', icon: 'Crown' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'orders',
      question: 'Как сделать заказ?',
      answer: 'Вы можете сделать заказ несколькими способами: через наш сайт, по телефону +7 (495) 123-45-67, или посетив ресторан лично. Онлайн-заказы принимаются круглосуточно, телефонные заказы - с 10:00 до 23:00.',
      popular: true
    },
    {
      id: 2,
      category: 'orders',
      question: 'Можно ли изменить или отменить заказ?',
      answer: 'Изменить или отменить заказ можно в течение 15 минут после оформления. После начала приготовления изменения невозможны. Для отмены свяжитесь с нами по телефону.',
      popular: false
    },
    {
      id: 3,
      category: 'delivery',
      question: 'В какие районы вы доставляете?',
      answer: 'Мы доставляем по всей Москве в пределах МКАД и в ближайшие районы Подмосковья. Стоимость доставки зависит от района: центр - бесплатно, ближние районы - 200₽, дальние - 400₽.',
      popular: true
    },
    {
      id: 4,
      category: 'delivery',
      question: 'Сколько времени занимает доставка?',
      answer: 'Время доставки составляет от 30 до 60 минут в зависимости от района и загруженности. В часы пик время может увеличиваться. Мы всегда предупреждаем о возможных задержках.',
      popular: true
    },
    {
      id: 5,
      category: 'delivery',
      question: 'Есть ли минимальная сумма заказа для доставки?',
      answer: 'Да, минимальная сумма заказа для доставки составляет 1000₽. При заказе от 2000₽ доставка в центре города бесплатная.',
      popular: false
    },
    {
      id: 6,
      category: 'payment',
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем наличные, банковские карты всех типов (Visa, MasterCard, МИР), оплату через мобильные приложения (Apple Pay, Google Pay, Samsung Pay), а также онлайн-оплату на сайте.',
      popular: true
    },
    {
      id: 7,
      category: 'payment',
      question: 'Можно ли оплатить заказ онлайн?',
      answer: 'Да, вы можете оплатить заказ онлайн при оформлении на сайте. Это ускоряет процесс доставки и гарантирует, что ваш заказ будет принят в работу немедленно.',
      popular: false
    },
    {
      id: 8,
      category: 'restaurant',
      question: 'Нужно ли бронировать столик?',
      answer: 'Бронирование не обязательно, но рекомендуется, особенно в выходные дни и праздники. Вы можете забронировать столик по телефону или через наш сайт.',
      popular: true
    },
    {
      id: 9,
      category: 'restaurant',
      question: 'Есть ли детское меню?',
      answer: 'Да, у нас есть специальное детское меню с адаптированными порциями и блюдами, которые нравятся детям. Также предоставляются детские стульчики.',
      popular: false
    },
    {
      id: 10,
      category: 'restaurant',
      question: 'Можно ли прийти с домашними животными?',
      answer: 'К сожалению, согласно санитарным нормам, домашние животные не допускаются в зал ресторана. Исключение составляют собаки-поводыри.',
      popular: false
    },
    {
      id: 11,
      category: 'loyalty',
      question: 'Как работает программа лояльности?',
      answer: 'За каждые 20₽ покупки вы получаете 1 балл. Баллы можно обменивать на скидки и подарки. Существует 4 уровня: Bronze (5%), Silver (10%), Gold (15%), Platinum (20%).',
      popular: true
    },
    {
      id: 12,
      category: 'loyalty',
      question: 'Как получить карту лояльности?',
      answer: 'Карту лояльности можно получить бесплатно при первом посещении ресторана или зарегистрироваться онлайн на нашем сайте, указав номер телефона.',
      popular: false
    },
    {
      id: 13,
      category: 'orders',
      question: 'Есть ли вегетарианские и веганские блюда?',
      answer: 'Да, в нашем меню представлен широкий выбор вегетарианских и веганских блюд. Они отмечены специальными значками в меню. Наши повара также могут адаптировать некоторые блюда под ваши предпочтения.',
      popular: true
    },
    {
      id: 14,
      category: 'restaurant',
      question: 'Работаете ли вы в праздничные дни?',
      answer: 'Да, мы работаем в большинство праздничных дней. Режим работы может отличаться от обычного. Актуальную информацию о работе в праздники можно уточнить по телефону или на сайте.',
      popular: false
    },
    {
      id: 15,
      category: 'delivery',
      question: 'Что делать, если заказ пришел не полностью или с ошибкой?',
      answer: 'Немедленно свяжитесь с нами по телефону. Мы исправим ошибку в кратчайшие сроки: довезем недостающие позиции или заменим неправильные блюда. В случае нашей ошибки компенсация предоставляется бесплатно.',
      popular: false
    }
  ];

  const quickActions = [
    {
      title: 'Сделать заказ',
      description: 'Быстрое оформление заказа',
      icon: 'ShoppingCart',
      action: () => window.location.href = '/menu'
    },
    {
      title: 'Забронировать стол',
      description: 'Резерв столика в ресторане',
      icon: 'Calendar',
      action: () => window.location.href = '/reservations'
    },
    {
      title: 'Связаться с нами',
      description: 'Задать вопрос напрямую',
      icon: 'Phone',
      action: () => window.location.href = '/contacts'
    },
    {
      title: 'Программа лояльности',
      description: 'Узнать о бонусах',
      icon: 'Crown',
      action: () => window.location.href = '/loyalty'
    }
  ];

  const contactMethods = [
    {
      method: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Ежедневно с 10:00 до 23:00',
      icon: 'Phone'
    },
    {
      method: 'Email',
      value: 'hello@tokka.ru',
      description: 'Ответим в течение часа',
      icon: 'Mail'
    },
    {
      method: 'Чат на сайте',
      value: 'Онлайн-консультант',
      description: 'Мгновенные ответы',
      icon: 'MessageCircle'
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQ = faqItems.filter(item => item.popular);

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
          <h1 className="text-4xl font-bold text-secondary mb-4">Часто задаваемые вопросы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Найдите ответы на самые популярные вопросы о нашем ресторане и услугах
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-6">Быстрые действия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={action.action}>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={action.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="space-y-4 mb-8">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск по вопросам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon name={category.icon} size={16} />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Popular Questions */}
            {selectedCategory === 'all' && !searchQuery && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Популярные вопросы</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {popularFAQ.map((item) => (
                    <Card key={item.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 text-sm">{item.question}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Accordion */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {selectedCategory === 'all' ? 'Все вопросы' : faqCategories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {filteredFAQ.map((item) => (
                  <AccordionItem key={item.id} value={item.id.toString()}>
                    <Card>
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center gap-3 text-left">
                          {item.popular && (
                            <Icon name="Star" size={16} className="text-yellow-500 flex-shrink-0" />
                          )}
                          <span className="font-medium">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {searchQuery && filteredFAQ.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить поисковый запрос или выберите другую категорию
                </p>
                <Button variant="outline" onClick={() => setSearchQuery('')}>
                  Очистить поиск
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Headphones" size={20} />
                  Не нашли ответ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Свяжитесь с нами любым удобным способом
                </p>
                <div className="space-y-3">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-accent rounded-lg">
                      <Icon name={method.icon} size={16} className="text-primary mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{method.method}</p>
                        <p className="text-xs text-primary">{method.value}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Популярные темы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {faqCategories.slice(1).map((category) => {
                    const count = faqItems.filter(item => item.category === category.id).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className="w-full flex items-center justify-between p-2 hover:bg-accent rounded-lg transition-colors text-left"
                      >
                        <div className="flex items-center gap-2">
                          <Icon name={category.icon} size={16} className="text-primary" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" size={20} />
                  Обратная связь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Помогите нам улучшить раздел FAQ
                </p>
                <div className="space-y-3">
                  <Button size="sm" variant="outline" className="w-full">
                    <Icon name="ThumbsUp" size={14} className="mr-2" />
                    Полезная информация
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <Icon name="MessageCircle" size={14} className="mr-2" />
                    Предложить вопрос
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;