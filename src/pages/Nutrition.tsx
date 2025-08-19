import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Nutrition = () => {
  const [selectedDiet, setSelectedDiet] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);

  const dietaryOptions = [
    { id: 'all', name: 'Все блюда', icon: 'Utensils' },
    { id: 'vegetarian', name: 'Вегетарианские', icon: 'Leaf' },
    { id: 'vegan', name: 'Веганские', icon: 'Sprout' },
    { id: 'gluten-free', name: 'Без глютена', icon: 'Shield' },
    { id: 'low-carb', name: 'Низкоуглеводные', icon: 'TrendingDown' },
    { id: 'keto', name: 'Кето', icon: 'Zap' }
  ];

  const nutritionInfo = [
    {
      id: 1,
      name: 'Стейк из говядины',
      category: 'main',
      image: '/img/e9bc8590-86f0-44ba-b6f6-6bb7c68b9af2.jpg',
      price: 2800,
      calories: 650,
      protein: 45,
      carbs: 8,
      fat: 48,
      fiber: 2,
      sugar: 3,
      sodium: 890,
      weight: 350,
      dietaryTags: [],
      allergens: ['Молочные продукты'],
      ingredients: [
        { name: 'Говядина премиум', amount: '250г' },
        { name: 'Трюфельный соус', amount: '30г' },
        { name: 'Картофель', amount: '150г' },
        { name: 'Овощи гриль', amount: '100г' }
      ],
      vitamins: {
        'B12': '85%',
        'B6': '45%',
        'Железо': '35%',
        'Цинк': '55%'
      }
    },
    {
      id: 2,
      name: 'Лосось гриль',
      category: 'main',
      image: '/img/9cb37276-dd42-4f91-95a0-1c1f57ad9fe9.jpg',
      price: 2200,
      calories: 480,
      protein: 38,
      carbs: 12,
      fat: 28,
      fiber: 4,
      sugar: 6,
      sodium: 520,
      weight: 300,
      dietaryTags: ['gluten-free', 'keto'],
      allergens: ['Рыба'],
      ingredients: [
        { name: 'Лосось атлантический', amount: '200г' },
        { name: 'Овощи', amount: '80г' },
        { name: 'Лимонный соус', amount: '20г' }
      ],
      vitamins: {
        'Омега-3': '120%',
        'D': '65%',
        'B12': '45%',
        'Селен': '78%'
      }
    },
    {
      id: 3,
      name: 'Ризотто с грибами',
      category: 'main',
      image: '/img/efa91466-639c-41d8-b0b9-d1571d48cf86.jpg',
      price: 1800,
      calories: 420,
      protein: 12,
      carbs: 68,
      fat: 14,
      fiber: 6,
      sugar: 8,
      sodium: 680,
      weight: 280,
      dietaryTags: ['vegetarian'],
      allergens: ['Молочные продукты', 'Глютен'],
      ingredients: [
        { name: 'Рис арборио', amount: '150г' },
        { name: 'Белые грибы', amount: '80г' },
        { name: 'Пармезан', amount: '30г' },
        { name: 'Белое вино', amount: '20г' }
      ],
      vitamins: {
        'B1': '25%',
        'Фолиевая кислота': '15%',
        'Кальций': '20%'
      }
    },
    {
      id: 4,
      name: 'Салат с киноа',
      category: 'salad',
      image: '/placeholder.svg',
      price: 890,
      calories: 320,
      protein: 14,
      carbs: 45,
      fat: 12,
      fiber: 8,
      sugar: 12,
      sodium: 420,
      weight: 250,
      dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],
      allergens: [],
      ingredients: [
        { name: 'Киноа', amount: '80г' },
        { name: 'Авокадо', amount: '60г' },
        { name: 'Помидоры черри', amount: '50г' },
        { name: 'Огурцы', amount: '40г' },
        { name: 'Оливковое масло', amount: '15г' }
      ],
      vitamins: {
        'C': '45%',
        'K': '35%',
        'Фолиевая кислота': '25%',
        'Магний': '30%'
      }
    },
    {
      id: 5,
      name: 'Куриная грудка на пару',
      category: 'main',
      image: '/placeholder.svg',
      price: 1200,
      calories: 280,
      protein: 52,
      carbs: 2,
      fat: 6,
      fiber: 0,
      sugar: 1,
      sodium: 380,
      weight: 200,
      dietaryTags: ['gluten-free', 'low-carb', 'keto'],
      allergens: [],
      ingredients: [
        { name: 'Куриная грудка', amount: '180г' },
        { name: 'Специи', amount: '5г' },
        { name: 'Зелень', amount: '15г' }
      ],
      vitamins: {
        'B6': '65%',
        'B3': '85%',
        'Селен': '45%',
        'Фосфор': '35%'
      }
    }
  ];

  const allergensList = [
    'Глютен', 'Молочные продукты', 'Яйца', 'Рыба', 'Морепродукты',
    'Орехи', 'Арахис', 'Соя', 'Сельдерей', 'Горчица', 'Кунжут', 'Сульфиты'
  ];

  const filteredDishes = nutritionInfo.filter(dish => {
    const matchesDiet = selectedDiet === 'all' || dish.dietaryTags.includes(selectedDiet);
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiet && matchesSearch;
  });

  const getDietaryBadges = (tags) => {
    return tags.map(tag => {
      const option = dietaryOptions.find(opt => opt.id === tag);
      return option ? { name: option.name, color: getDietaryColor(tag) } : null;
    }).filter(Boolean);
  };

  const getDietaryColor = (tag) => {
    const colors = {
      'vegetarian': 'bg-green-100 text-green-800',
      'vegan': 'bg-emerald-100 text-emerald-800',
      'gluten-free': 'bg-blue-100 text-blue-800',
      'low-carb': 'bg-purple-100 text-purple-800',
      'keto': 'bg-orange-100 text-orange-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  const calculateDailyValue = (nutrient, amount) => {
    const dailyValues = {
      protein: 50,
      carbs: 300,
      fat: 65,
      fiber: 25,
      sodium: 2300
    };
    return Math.round((amount / dailyValues[nutrient]) * 100);
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Пищевая ценность</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подробная информация о калорийности, составе и пищевой ценности наших блюд
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск блюд..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map((option) => (
              <Button
                key={option.id}
                variant={selectedDiet === option.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDiet(option.id)}
                className="flex items-center gap-2"
              >
                <Icon name={option.icon} size={16} />
                {option.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  {getDietaryBadges(dish.dietaryTags).map((badge, index) => (
                    <Badge key={index} className={`text-xs ${badge.color}`}>
                      {badge.name}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  {dish.price} ₽
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{dish.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-center p-2 bg-accent rounded">
                    <div className="font-bold text-lg text-primary">{dish.calories}</div>
                    <div className="text-muted-foreground">ккал</div>
                  </div>
                  <div className="text-center p-2 bg-accent rounded">
                    <div className="font-bold text-lg text-primary">{dish.weight}</div>
                    <div className="text-muted-foreground">грамм</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  <div className="text-center">
                    <div className="font-semibold">{dish.protein}г</div>
                    <div className="text-muted-foreground">Белки</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{dish.carbs}г</div>
                    <div className="text-muted-foreground">Углеводы</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{dish.fat}г</div>
                    <div className="text-muted-foreground">Жиры</div>
                  </div>
                </div>

                {dish.allergens.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-medium mb-1">Аллергены:</p>
                    <div className="flex flex-wrap gap-1">
                      {dish.allergens.map((allergen, index) => (
                        <Badge key={index} variant="destructive" className="text-xs">
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setSelectedDish(dish)}
                >
                  Подробная информация
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Allergens Information */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="AlertTriangle" size={24} />
              Информация об аллергенах
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Мы серьезно относимся к безопасности наших гостей с пищевыми аллергиями. 
              Ниже представлен список основных аллергенов, которые могут содержаться в наших блюдах.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {allergensList.map((allergen, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-accent rounded">
                  <Icon name="AlertCircle" size={16} className="text-orange-500" />
                  <span className="text-sm">{allergen}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Важно:</strong> Если у вас есть пищевые аллергии или непереносимость, 
                обязательно сообщите об этом официанту при заказе. Мы сделаем все возможное, 
                чтобы адаптировать блюда под ваши потребности.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Healthy Eating Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Heart" size={24} />
              Советы по здоровому питанию
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Сбалансированное питание</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Включайте в рацион разнообразные продукты</li>
                  <li>• Контролируйте размер порций</li>
                  <li>• Пейте достаточно воды</li>
                  <li>• Ограничьте потребление сахара и соли</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Наши рекомендации</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Выбирайте блюда на пару или гриль</li>
                  <li>• Добавляйте больше овощей</li>
                  <li>• Обращайте внимание на содержание клетчатки</li>
                  <li>• Консультируйтесь с нашими поварами</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dish Details Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">{selectedDish.name}</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedDish(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={selectedDish.image} 
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nutritional Facts */}
              <div className="bg-accent p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Пищевая ценность (на порцию {selectedDish.weight}г)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Калории</span>
                      <span className="font-semibold">{selectedDish.calories} ккал</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Белки</span>
                      <span>{selectedDish.protein}г ({calculateDailyValue('protein', selectedDish.protein)}%)</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Углеводы</span>
                      <span>{selectedDish.carbs}г ({calculateDailyValue('carbs', selectedDish.carbs)}%)</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Жиры</span>
                      <span>{selectedDish.fat}г ({calculateDailyValue('fat', selectedDish.fat)}%)</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Клетчатка</span>
                      <span>{selectedDish.fiber}г ({calculateDailyValue('fiber', selectedDish.fiber)}%)</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Сахар</span>
                      <span>{selectedDish.sugar}г</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Натрий</span>
                      <span>{selectedDish.sodium}мг ({calculateDailyValue('sodium', selectedDish.sodium)}%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="font-semibold mb-3">Состав</h3>
                <div className="space-y-2">
                  {selectedDish.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-accent rounded">
                      <span>{ingredient.name}</span>
                      <span className="text-muted-foreground">{ingredient.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vitamins */}
              <div>
                <h3 className="font-semibold mb-3">Витамины и минералы (% от суточной нормы)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(selectedDish.vitamins).map(([vitamin, percentage]) => (
                    <div key={vitamin} className="flex justify-between items-center p-2 bg-accent rounded">
                      <span>{vitamin}</span>
                      <span className="font-medium text-primary">{percentage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dietary Tags */}
              {selectedDish.dietaryTags.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Диетические особенности</h3>
                  <div className="flex flex-wrap gap-2">
                    {getDietaryBadges(selectedDish.dietaryTags).map((badge, index) => (
                      <Badge key={index} className={badge.color}>
                        {badge.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Allergens */}
              {selectedDish.allergens.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Аллергены</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.allergens.map((allergen, index) => (
                      <Badge key={index} variant="destructive">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Button className="w-full">
                Добавить в корзину - {selectedDish.price} ₽
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Nutrition;