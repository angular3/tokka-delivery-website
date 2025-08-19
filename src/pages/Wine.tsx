import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Wine = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWine, setSelectedWine] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const wineCategories = [
    { id: 'all', name: 'Все вина', icon: 'Wine' },
    { id: 'red', name: 'Красные', icon: 'Circle', color: 'text-red-600' },
    { id: 'white', name: 'Белые', icon: 'Circle', color: 'text-yellow-600' },
    { id: 'rose', name: 'Розовые', icon: 'Circle', color: 'text-pink-600' },
    { id: 'sparkling', name: 'Игристые', icon: 'Sparkles' },
    { id: 'dessert', name: 'Десертные', icon: 'Cake' }
  ];

  const wineList = [
    {
      id: 1,
      name: 'Château Margaux 2015',
      category: 'red',
      region: 'Бордо, Франция',
      grape: 'Каберне Совиньон, Мерло',
      year: 2015,
      price: 25000,
      priceGlass: 3500,
      alcohol: 13.5,
      volume: 750,
      description: 'Легендарное вино с богатым букетом и долгим послевкусием',
      image: '/placeholder.svg',
      tastingNotes: {
        aroma: 'Черная смородина, фиалка, кедр',
        taste: 'Полнотелое, элегантное, с шелковистыми танинами',
        finish: 'Долгое, с нотами специй и темного шоколада'
      },
      foodPairing: ['Стейк из говядины', 'Баранина', 'Выдержанные сыры'],
      temperature: '16-18°C',
      rating: 4.9,
      inStock: true,
      premium: true
    },
    {
      id: 2,
      name: 'Chablis Premier Cru 2020',
      category: 'white',
      region: 'Бургундия, Франция',
      grape: 'Шардоне',
      year: 2020,
      price: 8500,
      priceGlass: 1200,
      alcohol: 12.5,
      volume: 750,
      description: 'Минеральное белое вино с яркой кислотностью',
      image: '/placeholder.svg',
      tastingNotes: {
        aroma: 'Цитрусы, зеленое яблоко, минералы',
        taste: 'Свежее, с хорошей кислотностью и минеральностью',
        finish: 'Чистое, с цитрусовыми нотами'
      },
      foodPairing: ['Лосось гриль', 'Устрицы', 'Козий сыр'],
      temperature: '8-10°C',
      rating: 4.7,
      inStock: true,
      premium: false
    },
    {
      id: 3,
      name: 'Dom Pérignon 2012',
      category: 'sparkling',
      region: 'Шампань, Франция',
      grape: 'Шардоне, Пино Нуар',
      year: 2012,
      price: 18000,
      priceGlass: 2500,
      alcohol: 12.5,
      volume: 750,
      description: 'Престижное шампанское с изысканным вкусом',
      image: '/placeholder.svg',
      tastingNotes: {
        aroma: 'Белые цветы, цитрусы, бриошь',
        taste: 'Кремовое, с тонкими пузырьками и сложностью',
        finish: 'Долгое, элегантное'
      },
      foodPairing: ['Икра', 'Фуа-гра', 'Белая рыба'],
      temperature: '6-8°C',
      rating: 4.8,
      inStock: true,
      premium: true
    },
    {
      id: 4,
      name: 'Barolo DOCG 2018',
      category: 'red',
      region: 'Пьемонт, Италия',
      grape: 'Неббиоло',
      year: 2018,
      price: 12000,
      priceGlass: 1800,
      alcohol: 14.0,
      volume: 750,
      description: 'Король итальянских вин с мощным характером',
      image: '/placeholder.svg',
      tastingNotes: {
        aroma: 'Роза, вишня, кожа, табак',
        taste: 'Мощное, танинное, с высокой кислотностью',
        finish: 'Очень долгое, комплексное'
      },
      foodPairing: ['Трюфели', 'Дичь', 'Выдержанные сыры'],
      temperature: '16-18°C',
      rating: 4.6,
      inStock: false,
      premium: true
    },
    {
      id: 5,
      name: 'Sancerre 2021',
      category: 'white',
      region: 'Луара, Франция',
      grape: 'Совиньон Блан',
      year: 2021,
      price: 4500,
      priceGlass: 650,
      alcohol: 13.0,
      volume: 750,
      description: 'Свежее и минеральное вино с травянистыми нотами',
      image: '/placeholder.svg',
      tastingNotes: {
        aroma: 'Крыжовник, лайм, мокрые камни',
        taste: 'Сухое, с яркой кислотностью',
        finish: 'Свежее, минеральное'
      },
      foodPairing: ['Козий сыр', 'Морепродукты', 'Салаты'],
      temperature: '8-10°C',
      rating: 4.4,
      inStock: true,
      premium: false
    },
    {
      id: 6,
      name: 'Provence Rosé 2022',
      category: 'rose',
      region: 'Прованс, Франция',
      grape: 'Гренаш, Сира',
      year: 2022,
      price: 3200,
      priceGlass: 480,
      alcohol: 12.5,
      volume: 750,
      description: 'Легкое розовое вино для летних вечеров',
      image: '/placeholder.svg',
      tastingNotes: {
        aroma: 'Клубника, персик, цветы',
        taste: 'Легкое, освежающее, фруктовое',
        finish: 'Короткое, чистое'
      },
      foodPairing: ['Салаты', 'Легкие закуски', 'Рыба'],
      temperature: '8-10°C',
      rating: 4.3,
      inStock: true,
      premium: false
    }
  ];

  const wineEvents = [
    {
      title: 'Дегустация бордоских вин',
      date: '2024-02-20',
      price: 4500,
      description: 'Знакомство с винами региона Бордо'
    },
    {
      title: 'Шампанский вечер',
      date: '2024-02-25',
      price: 6000,
      description: 'Дегустация престижных шампанских'
    },
    {
      title: 'Итальянские вина',
      date: '2024-03-05',
      price: 3800,
      description: 'Путешествие по винным регионам Италии'
    }
  ];

  const filteredWines = wineList.filter(wine => {
    const matchesCategory = selectedCategory === 'all' || wine.category === selectedCategory;
    const matchesSearch = wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         wine.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         wine.grape.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      matchesPrice = wine.price >= min && (max ? wine.price <= max : true);
    }
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

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
          <h1 className="text-4xl font-bold text-secondary mb-4">Винная карта</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Тщательно отобранная коллекция вин от лучших виноделен мира
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Wine List */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Поиск по названию, региону, сорту..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="all">Все цены</option>
                  <option value="0-5000">До 5,000 ₽</option>
                  <option value="5000-10000">5,000 - 10,000 ₽</option>
                  <option value="10000-20000">10,000 - 20,000 ₽</option>
                  <option value="20000">Свыше 20,000 ₽</option>
                </select>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {wineCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon name={category.icon} size={16} className={category.color} />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Wine Cards */}
            <div className="space-y-6">
              {filteredWines.map((wine) => (
                <Card key={wine.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/4">
                      <div className="aspect-[3/4] bg-muted relative">
                        <img 
                          src={wine.image} 
                          alt={wine.name}
                          className="w-full h-full object-cover"
                        />
                        {wine.premium && (
                          <Badge className="absolute top-2 left-2 bg-primary">
                            Premium
                          </Badge>
                        )}
                        {!wine.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge variant="destructive">Нет в наличии</Badge>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{wine.name}</h3>
                            <p className="text-muted-foreground mb-2">{wine.region} • {wine.year}</p>
                            {renderStars(wine.rating)}
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{wine.price.toLocaleString()} ₽</div>
                            <div className="text-sm text-muted-foreground">
                              Бокал: {wine.priceGlass.toLocaleString()} ₽
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{wine.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold mb-2">Характеристики</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Сорт винограда:</span>
                                <span>{wine.grape}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Крепость:</span>
                                <span>{wine.alcohol}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Объем:</span>
                                <span>{wine.volume} мл</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Температура подачи:</span>
                                <span>{wine.temperature}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Сочетания с блюдами</h4>
                            <div className="flex flex-wrap gap-1">
                              {wine.foodPairing.map((food, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {food}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1"
                            disabled={!wine.inStock}
                          >
                            {wine.inStock ? 'Заказать бутылку' : 'Нет в наличии'}
                          </Button>
                          <Button 
                            variant="outline"
                            disabled={!wine.inStock}
                          >
                            Заказать бокал
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => setSelectedWine(wine)}
                          >
                            Подробнее
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sommelier's Choice */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} />
                  Выбор сомелье
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Château Margaux 2015</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Исключительный винтаж от легендарного шато
                    </p>
                    <div className="text-sm font-medium text-primary">25,000 ₽</div>
                  </div>
                  <div className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Chablis Premier Cru</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Идеальное сочетание с морепродуктами
                    </p>
                    <div className="text-sm font-medium text-primary">8,500 ₽</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wine Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  Винные мероприятия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {wineEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('ru-RU')}
                      </span>
                      <span className="text-sm font-medium text-primary">{event.price} ₽</span>
                    </div>
                  </div>
                ))}
                <Button size="sm" className="w-full">
                  Все мероприятия
                </Button>
              </CardContent>
            </Card>

            {/* Wine Storage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Archive" size={20} />
                  Винный погреб
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Наш винный погреб поддерживает идеальные условия хранения
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Температура:</span>
                    <span>12-14°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Влажность:</span>
                    <span>70-75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Коллекция:</span>
                    <span>500+ бутылок</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Sommelier */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={20} />
                  Консультация сомелье
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Наш сомелье поможет подобрать идеальное вино к вашему блюду
                </p>
                <Button size="sm" className="w-full">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Задать вопрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Wine Details Modal */}
      {selectedWine && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{selectedWine.name}</CardTitle>
                  <p className="text-muted-foreground">{selectedWine.region} • {selectedWine.year}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedWine(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={selectedWine.image} 
                    alt={selectedWine.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {selectedWine.price.toLocaleString()} ₽
                    </div>
                    <div className="text-muted-foreground">
                      Бокал: {selectedWine.priceGlass.toLocaleString()} ₽
                    </div>
                  </div>
                  
                  {renderStars(selectedWine.rating)}
                  
                  <p className="text-muted-foreground my-4">{selectedWine.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Дегустационные заметки</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Аромат:</span> {selectedWine.tastingNotes.aroma}
                        </div>
                        <div>
                          <span className="font-medium">Вкус:</span> {selectedWine.tastingNotes.taste}
                        </div>
                        <div>
                          <span className="font-medium">Послевкусие:</span> {selectedWine.tastingNotes.finish}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Рекомендуемые сочетания</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedWine.foodPairing.map((food, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {food}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1" disabled={!selectedWine.inStock}>
                  Заказать бутылку
                </Button>
                <Button variant="outline" disabled={!selectedWine.inStock}>
                  Заказать бокал
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Wine;