import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const menuItems = [
    {
      id: 1,
      name: 'Стейк из говядины',
      description: 'Премиальная говядина с соусом из трюфелей, подается с картофелем гратен и овощами гриль',
      price: 2800,
      category: 'main',
      image: '/img/e9bc8590-86f0-44ba-b6f6-6bb7c68b9af2.jpg',
      ingredients: ['Говядина', 'Трюфели', 'Картофель', 'Овощи'],
      calories: 650,
      cookTime: 25,
      spicy: false,
      vegetarian: false,
      popular: true
    },
    {
      id: 2,
      name: 'Лосось гриль',
      description: 'Свежий атлантический лосось с овощами и лимонным соусом',
      price: 2200,
      category: 'main',
      image: '/img/9cb37276-dd42-4f91-95a0-1c1f57ad9fe9.jpg',
      ingredients: ['Лосось', 'Овощи', 'Лимон', 'Зелень'],
      calories: 480,
      cookTime: 20,
      spicy: false,
      vegetarian: false,
      popular: true
    },
    {
      id: 3,
      name: 'Ризотто с белыми грибами',
      description: 'Арборио рис с лесными грибами и пармезаном',
      price: 1800,
      category: 'main',
      image: '/img/efa91466-639c-41d8-b0b9-d1571d48cf86.jpg',
      ingredients: ['Рис арборио', 'Белые грибы', 'Пармезан', 'Белое вино'],
      calories: 420,
      cookTime: 30,
      spicy: false,
      vegetarian: true,
      popular: false
    },
    {
      id: 4,
      name: 'Тирамису',
      description: 'Классический итальянский десерт с маскарпоне',
      price: 650,
      category: 'dessert',
      image: '/placeholder.svg',
      ingredients: ['Маскарпоне', 'Савоярди', 'Кофе', 'Какао'],
      calories: 380,
      cookTime: 5,
      spicy: false,
      vegetarian: true,
      popular: true
    },
    {
      id: 5,
      name: 'Цезарь с курицей',
      description: 'Классический салат с курицей гриль и соусом цезарь',
      price: 890,
      category: 'salad',
      image: '/placeholder.svg',
      ingredients: ['Курица', 'Салат романо', 'Пармезан', 'Соус цезарь'],
      calories: 320,
      cookTime: 15,
      spicy: false,
      vegetarian: false,
      popular: true
    },
    {
      id: 6,
      name: 'Том ям',
      description: 'Острый тайский суп с креветками и грибами',
      price: 750,
      category: 'soup',
      image: '/placeholder.svg',
      ingredients: ['Креветки', 'Грибы', 'Лемонграсс', 'Кокосовое молоко'],
      calories: 180,
      cookTime: 20,
      spicy: true,
      vegetarian: false,
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Все блюда', icon: 'Utensils' },
    { id: 'main', name: 'Основные блюда', icon: 'ChefHat' },
    { id: 'salad', name: 'Салаты', icon: 'Salad' },
    { id: 'soup', name: 'Супы', icon: 'Bowl' },
    { id: 'dessert', name: 'Десерты', icon: 'Cake' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
        return b.popular ? 1 : -1;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Меню ресторана</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Изысканные блюда от наших шеф-поваров, приготовленные из лучших ингредиентов
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Category Filter */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon name={category.icon} size={16} />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <div className="lg:w-64">
            <h3 className="text-lg font-semibold mb-4">Сортировка</h3>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="name">По названию</option>
              <option value="price-low">Сначала дешевые</option>
              <option value="price-high">Сначала дорогие</option>
              <option value="popular">Популярные</option>
            </select>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.popular && <Badge className="bg-primary">Популярное</Badge>}
                  {item.vegetarian && <Badge variant="secondary">Вегетарианское</Badge>}
                  {item.spicy && <Badge variant="destructive">Острое</Badge>}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-secondary">{item.name}</h4>
                  <span className="text-lg font-bold text-primary">{item.price} ₽</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {item.cookTime} мин
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Flame" size={14} />
                    {item.calories} ккал
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Ингредиенты:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;