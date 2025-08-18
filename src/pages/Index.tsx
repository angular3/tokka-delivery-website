import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: 'Стейк из говядины',
      description: 'Премиальная говядина с соусом из трюфелей',
      price: '2800 ₽',
      category: 'main',
      image: '/img/e9bc8590-86f0-44ba-b6f6-6bb7c68b9af2.jpg'
    },
    {
      id: 2,
      name: 'Лосось гриль',
      description: 'Свежий атлантический лосось с овощами',
      price: '2200 ₽',
      category: 'main',
      image: '/img/9cb37276-dd42-4f91-95a0-1c1f57ad9fe9.jpg'
    },
    {
      id: 3,
      name: 'Ризотто с белыми грибами',
      description: 'Арборио рис с лесными грибами и пармезаном',
      price: '1800 ₽',
      category: 'main',
      image: '/img/efa91466-639c-41d8-b0b9-d1571d48cf86.jpg'
    },
    {
      id: 4,
      name: 'Тирамису',
      description: 'Классический итальянский десерт',
      price: '650 ₽',
      category: 'dessert',
      image: '/placeholder.svg'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все блюда' },
    { id: 'main', name: 'Основные блюда' },
    { id: 'dessert', name: 'Десерты' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-heading font-bold text-secondary">TOKKA</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#menu" className="text-secondary hover:text-primary transition-colors">Меню</a>
              <a href="#delivery" className="text-secondary hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors">О ресторане</a>
              <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary text-primary-foreground hover:bg-gold-600 transition-colors">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-secondary to-black py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6">
              TOKKA
            </h2>
            <p className="text-xl md:text-2xl text-gold-200 mb-8 max-w-3xl mx-auto">
              Изысканная кухня с доставкой на дом
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Свежие продукты и качественные ингредиенты в каждом блюде
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-600 text-lg px-8 py-4 animate-scale-in">
              Смотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-heading font-bold text-secondary mb-4">Наше меню</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждое блюдо готовится из отборных ингредиентов нашими лучшими поварами
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary text-primary hover:bg-primary/10"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden animate-scale-in">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-heading font-semibold text-secondary">{item.name}</h4>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-gold-600 transition-colors">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-4xl font-heading font-bold text-secondary mb-6">Быстрая доставка</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Доставляем свежие блюда по всей Москве в течение 30-45 минут. 
                Наши курьеры бережно транспортируют каждый заказ в специальных термосумках.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">30-45 минут</p>
                    <p className="text-sm text-muted-foreground">Время доставки</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Бесплатно</p>
                    <p className="text-sm text-muted-foreground">От 2000 ₽</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-2xl">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-heading font-bold text-secondary mb-4">Зона доставки</h4>
                <p className="text-muted-foreground mb-6">
                  Мы доставляем в пределах МКАД и ближайших районов Подмосковья
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Проверить адрес
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-heading font-bold text-secondary mb-4">О ресторане TOKKA</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы создаем кулинарные шедевры из свежих продуктов высочайшего качества. 
              Каждое блюдо — это результат мастерства наших поваров и тщательного отбора ингредиентов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Star" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-secondary mb-4">Премиум качество</h4>
              <p className="text-muted-foreground">Только лучшие продукты от проверенных поставщиков</p>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ChefHat" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-secondary mb-4">Мастерство поваров</h4>
              <p className="text-muted-foreground">Опытные шеф-повара с мировым именем</p>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-secondary mb-4">С любовью к деталям</h4>
              <p className="text-muted-foreground">Каждое блюдо готовится с особой заботой</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-secondary mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами для заказа или получения информации</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Телефон</h4>
              <p className="text-lg text-primary font-semibold">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground">Ежедневно с 10:00 до 23:00</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Email</h4>
              <p className="text-lg text-primary font-semibold">hello@tokka.ru</p>
              <p className="text-muted-foreground">Ответим в течение часа</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Ресторан</h4>
              <p className="text-lg text-primary font-semibold">ул. Тверская, 15</p>
              <p className="text-muted-foreground">Москва, Россия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">TOKKA</h2>
            <p className="text-gold-200 mb-6">Изысканная кухня с доставкой на дом</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
            <p className="text-white/60">&copy; 2024 TOKKA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;