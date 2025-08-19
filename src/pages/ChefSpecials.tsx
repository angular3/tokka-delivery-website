import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ChefSpecials = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [selectedChef, setSelectedChef] = useState('all');

  const chefs = [
    {
      id: 'all',
      name: 'Все шефы',
      specialty: '',
      image: '/placeholder.svg'
    },
    {
      id: 'petrov',
      name: 'Алексей Петров',
      specialty: 'Европейская кухня',
      image: '/placeholder.svg',
      experience: '15 лет',
      awards: ['Мишлен Гид 2022', 'Лучший шеф года 2021'],
      philosophy: 'Сочетание классических техник с современными интерпретациями'
    },
    {
      id: 'ivanova',
      name: 'Мария Иванова',
      specialty: 'Азиатская кухня',
      image: '/placeholder.svg',
      experience: '12 лет',
      awards: ['Азиатский кулинарный конкурс 2023'],
      philosophy: 'Аутентичные вкусы Азии с использованием локальных продуктов'
    },
    {
      id: 'sidorov',
      name: 'Дмитрий Сидоров',
      specialty: 'Авторские десерты',
      image: '/placeholder.svg',
      experience: '10 лет',
      awards: ['Кондитер года 2022', 'Золотая ложка 2021'],
      philosophy: 'Десерты как произведения искусства с неожиданными вкусовыми сочетаниями'
    }
  ];

  const specialDishes = [
    {
      id: 1,
      name: 'Утка конфи с вишневым соусом',
      chef: 'petrov',
      price: 3200,
      description: 'Утиная ножка, томленная в собственном жиру 8 часов, подается с соусом из вишни и портвейна',
      image: '/placeholder.svg',
      preparationTime: '8 часов',
      difficulty: 'Высокая',
      technique: 'Конфи',
      ingredients: [
        'Утиная ножка (300г)',
        'Утиный жир',
        'Вишня (100г)',
        'Портвейн (50мл)',
        'Тимьян, розмарин',
        'Картофель молодой (150г)'
      ],
      story: 'Это блюдо родилось из моей любви к французской кухне. Техника конфи позволяет получить невероятно нежное мясо, а вишневый соус добавляет яркую кислинку.',
      nutritionFacts: {
        calories: 580,
        protein: 42,
        carbs: 18,
        fat: 38
      },
      available: true,
      limited: true,
      seasonal: false
    },
    {
      id: 2,
      name: 'Рамен с мисо и чашу',
      chef: 'ivanova',
      price: 1800,
      description: 'Традиционный японский рамен с бульоном на основе мисо, чашу и перепелиным яйцом',
      image: '/placeholder.svg',
      preparationTime: '24 часа',
      difficulty: 'Высокая',
      technique: 'Длительное томление',
      ingredients: [
        'Свиные кости',
        'Мисо паста (30г)',
        'Чашу (150г)',
        'Рамен лапша (120г)',
        'Перепелиное яйцо',
        'Нори, зеленый лук'
      ],
      story: 'Рецепт этого рамена я изучала в Токио у мастера Танаки. Бульон варится 24 часа для достижения идеальной насыщенности.',
      nutritionFacts: {
        calories: 420,
        protein: 28,
        carbs: 45,
        fat: 18
      },
      available: true,
      limited: false,
      seasonal: false
    },
    {
      id: 3,
      name: 'Сферификация манго с базиликом',
      chef: 'sidorov',
      price: 890,
      description: 'Молекулярный десерт в виде сферы из манго с сюрпризом из базилика внутри',
      image: '/placeholder.svg',
      preparationTime: '2 часа',
      difficulty: 'Очень высокая',
      technique: 'Молекулярная гастрономия',
      ingredients: [
        'Манго пюре (100г)',
        'Базилик свежий',
        'Альгинат натрия',
        'Хлорид кальция',
        'Сахар',
        'Лимонная кислота'
      ],
      story: 'Этот десерт - результат экспериментов с молекулярной гастрономией. Неожиданное сочетание манго и базилика создает уникальный вкусовой опыт.',
      nutritionFacts: {
        calories: 180,
        protein: 2,
        carbs: 42,
        fat: 1
      },
      available: false,
      limited: true,
      seasonal: true
    },
    {
      id: 4,
      name: 'Телятина су-вид с трюфельным маслом',
      chef: 'petrov',
      price: 4500,
      description: 'Телячья вырезка, приготовленная методом су-вид, с трюфельным маслом и овощами',
      image: '/placeholder.svg',
      preparationTime: '4 часа',
      difficulty: 'Высокая',
      technique: 'Су-вид',
      ingredients: [
        'Телячья вырезка (250г)',
        'Трюфельное масло (20г)',
        'Спаржа (80г)',
        'Молодая морковь (60г)',
        'Картофель фингерлинг (100г)',
        'Тимьян, розмарин'
      ],
      story: 'Су-вид позволяет достичь идеальной степени прожарки и сохранить все соки мяса. Трюфельное масло добавляет роскошный аромат.',
      nutritionFacts: {
        calories: 520,
        protein: 48,
        carbs: 12,
        fat: 32
      },
      available: true,
      limited: true,
      seasonal: false
    },
    {
      id: 5,
      name: 'Том кха с кокосовым муссом',
      chef: 'ivanova',
      price: 950,
      description: 'Авторская интерпретация тайского супа с кокосовым муссом и лемонграссом',
      image: '/placeholder.svg',
      preparationTime: '1 час',
      difficulty: 'Средняя',
      technique: 'Современная подача',
      ingredients: [
        'Кокосовое молоко (200мл)',
        'Креветки (120г)',
        'Лемонграсс',
        'Галангал',
        'Листья лайма',
        'Грибы шиитаке (50г)'
      ],
      story: 'Классический том кха в новой подаче. Кокосовый мусс создает необычную текстуру, сохраняя аутентичный вкус.',
      nutritionFacts: {
        calories: 280,
        protein: 18,
        carbs: 12,
        fat: 20
      },
      available: true,
      limited: false,
      seasonal: true
    },
    {
      id: 6,
      name: 'Шоколадная сфера с сюрпризом',
      chef: 'sidorov',
      price: 1200,
      description: 'Шоколадная сфера, которая тает от горячего соуса, открывая мороженое и ягоды внутри',
      image: '/placeholder.svg',
      preparationTime: '3 часа',
      difficulty: 'Очень высокая',
      technique: 'Темперирование шоколада',
      ingredients: [
        'Бельгийский шоколад (80г)',
        'Ванильное мороженое (60г)',
        'Свежие ягоды (40г)',
        'Горячий ягодный соус',
        'Золотые хлопья',
        'Мята'
      ],
      story: 'Этот десерт - настоящее шоу! Идея пришла после посещения шоколадной фабрики в Бельгии. Момент таяния сферы создает незабываемые эмоции.',
      nutritionFacts: {
        calories: 420,
        protein: 8,
        carbs: 45,
        fat: 24
      },
      available: true,
      limited: true,
      seasonal: false
    }
  ];

  const filteredDishes = selectedChef === 'all' 
    ? specialDishes 
    : specialDishes.filter(dish => dish.chef === selectedChef);

  const getChefInfo = (chefId) => {
    return chefs.find(chef => chef.id === chefId);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Средняя': 'bg-yellow-100 text-yellow-800',
      'Высокая': 'bg-orange-100 text-orange-800',
      'Очень высокая': 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Авторские блюда шефов</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Уникальные кулинарные творения от наших мастеров высокой кухни
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Chef Filter */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Выберите шефа</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {chefs.map((chef) => (
                  <Card 
                    key={chef.id}
                    className={`cursor-pointer transition-all ${
                      selectedChef === chef.id ? 'ring-2 ring-primary' : 'hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedChef(chef.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-3 overflow-hidden">
                        <img 
                          src={chef.image} 
                          alt={chef.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{chef.name}</h3>
                      {chef.specialty && (
                        <p className="text-xs text-muted-foreground">{chef.specialty}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Special Dishes */}
            <div className="space-y-6">
              {filteredDishes.map((dish) => {
                const chef = getChefInfo(dish.chef);
                return (
                  <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-square bg-muted relative">
                          <img 
                            src={dish.image} 
                            alt={dish.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {dish.limited && (
                              <Badge className="bg-red-500">Лимитированное</Badge>
                            )}
                            {dish.seasonal && (
                              <Badge variant="secondary">Сезонное</Badge>
                            )}
                            {!dish.available && (
                              <Badge variant="destructive">Недоступно</Badge>
                            )}
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                            {dish.price.toLocaleString()} ₽
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-muted rounded-full overflow-hidden">
                                  <img 
                                    src={chef.image} 
                                    alt={chef.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{chef.name}</p>
                                  <p className="text-xs text-muted-foreground">{chef.specialty}</p>
                                </div>
                              </div>
                            </div>
                            <Badge className={getDifficultyColor(dish.difficulty)}>
                              {dish.difficulty}
                            </Badge>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">{dish.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Техника приготовления</h4>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="ChefHat" size={14} className="text-primary" />
                                {dish.technique}
                              </div>
                              <div className="flex items-center gap-2 text-sm mt-1">
                                <Icon name="Clock" size={14} className="text-primary" />
                                {dish.preparationTime}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Пищевая ценность</h4>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>Калории: {dish.nutritionFacts.calories}</div>
                                <div>Белки: {dish.nutritionFacts.protein}г</div>
                                <div>Углеводы: {dish.nutritionFacts.carbs}г</div>
                                <div>Жиры: {dish.nutritionFacts.fat}г</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              className="flex-1"
                              disabled={!dish.available}
                            >
                              {dish.available ? 'Заказать' : 'Недоступно'}
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => setSelectedDish(dish)}
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
            {/* Chef of the Month */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Crown" size={20} />
                  Шеф месяца
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-3 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Алексей Петров"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Алексей Петров</h3>
                  <p className="text-sm text-muted-foreground mb-3">Главный шеф-повар</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    "В этом месяце представляю новую интерпретацию классических французских блюд"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cooking Techniques */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Flame" size={20} />
                  Техники приготовления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Су-вид</h4>
                    <p className="text-xs text-muted-foreground">
                      Приготовление в вакууме при низкой температуре
                    </p>
                  </div>
                  <div className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Конфи</h4>
                    <p className="text-xs text-muted-foreground">
                      Медленное томление в собственном жиру
                    </p>
                  </div>
                  <div className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Молекулярная гастрономия</h4>
                    <p className="text-xs text-muted-foreground">
                      Использование научных методов в кулинарии
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seasonal Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  Сезонность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Весна</span>
                    <span className="text-green-600">Спаржа, молодые овощи</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Лето</span>
                    <span className="text-green-600">Томаты, ягоды</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Осень</span>
                    <span className="text-orange-600">Трюфели, дичь</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Зима</span>
                    <span className="text-blue-600">Цитрусы, корнеплоды</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Masterclass */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GraduationCap" size={20} />
                  Мастер-классы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Научитесь готовить авторские блюда от наших шефов
                </p>
                <Button size="sm" className="w-full">
                  Записаться на мастер-класс
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Dish Details Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{selectedDish.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full overflow-hidden">
                      <img 
                        src={getChefInfo(selectedDish.chef).image} 
                        alt={getChefInfo(selectedDish.chef).name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-muted-foreground">
                      Шеф {getChefInfo(selectedDish.chef).name}
                    </span>
                  </div>
                </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={selectedDish.image} 
                    alt={selectedDish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {selectedDish.price.toLocaleString()} ₽
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{selectedDish.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span className="text-sm">Время приготовления: {selectedDish.preparationTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ChefHat" size={16} className="text-primary" />
                      <span className="text-sm">Техника: {selectedDish.technique}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Target" size={16} className="text-primary" />
                      <Badge className={getDifficultyColor(selectedDish.difficulty)}>
                        {selectedDish.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent p-4 rounded-lg">
                <h3 className="font-semibold mb-2">История блюда от шефа</h3>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{selectedDish.story}"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Состав блюда</h3>
                  <ul className="space-y-2">
                    {selectedDish.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex justify-between items-center text-sm">
                        <span>{ingredient.split('(')[0]}</span>
                        <span className="text-muted-foreground">
                          {ingredient.includes('(') ? ingredient.match(/\(([^)]+)\)/)[1] : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Пищевая ценность</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span>Калории:</span>
                      <span>{selectedDish.nutritionFacts.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Белки:</span>
                      <span>{selectedDish.nutritionFacts.protein}г</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Углеводы:</span>
                      <span>{selectedDish.nutritionFacts.carbs}г</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Жиры:</span>
                      <span>{selectedDish.nutritionFacts.fat}г</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full"
                disabled={!selectedDish.available}
              >
                {selectedDish.available ? 'Заказать блюдо' : 'Блюдо недоступно'}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ChefSpecials;