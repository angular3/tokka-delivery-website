import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Masterclasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    dietary: ''
  });

  const masterclasses = [
    {
      id: 1,
      title: 'Искусство приготовления стейка',
      instructor: 'Алексей Петров',
      date: '2024-02-20',
      time: '18:00',
      duration: '3 часа',
      price: 4500,
      capacity: 12,
      booked: 8,
      level: 'Начинающий',
      description: 'Изучите секреты приготовления идеального стейка от нашего шеф-повара',
      image: '/img/e9bc8590-86f0-44ba-b6f6-6bb7c68b9af2.jpg',
      includes: [
        'Теория выбора мяса',
        'Практическое приготовление',
        'Дегустация 3 видов стейков',
        'Рецепты соусов',
        'Сертификат участника'
      ],
      skills: [
        'Выбор качественного мяса',
        'Техники обжарки',
        'Приготовление соусов',
        'Подача и сервировка'
      ],
      equipment: 'Все оборудование предоставляется',
      takeHome: 'Рецепты и специи'
    },
    {
      id: 2,
      title: 'Японская кухня: суши и роллы',
      instructor: 'Мария Иванова',
      date: '2024-02-25',
      time: '16:00',
      duration: '4 часа',
      price: 5200,
      capacity: 10,
      booked: 6,
      level: 'Средний',
      description: 'Освойте искусство приготовления суши и роллов под руководством эксперта',
      image: '/placeholder.svg',
      includes: [
        'История японской кухни',
        'Работа с рисом для суши',
        'Техники нарезки рыбы',
        'Приготовление 8 видов роллов',
        'Дегустация с саке'
      ],
      skills: [
        'Приготовление риса для суши',
        'Техники нарезки сашими',
        'Формирование роллов',
        'Подача в японском стиле'
      ],
      equipment: 'Ножи и инструменты предоставляются',
      takeHome: 'Набор для суши и рецепты'
    },
    {
      id: 3,
      title: 'Молекулярная гастрономия',
      instructor: 'Дмитрий Сидоров',
      date: '2024-03-05',
      time: '19:00',
      duration: '3.5 часа',
      price: 6800,
      capacity: 8,
      booked: 5,
      level: 'Продвинутый',
      description: 'Погрузитесь в мир молекулярной гастрономии и создайте удивительные блюда',
      image: '/placeholder.svg',
      includes: [
        'Основы молекулярной гастрономии',
        'Работа с агар-агаром и альгинатом',
        'Создание сфер и пен',
        'Приготовление 5 молекулярных блюд',
        'Профессиональная фотосессия блюд'
      ],
      skills: [
        'Сферификация',
        'Желирование',
        'Создание пен и эмульсий',
        'Презентация блюд'
      ],
      equipment: 'Профессиональное молекулярное оборудование',
      takeHome: 'Набор реагентов и рецепты'
    },
    {
      id: 4,
      title: 'Французские десерты',
      instructor: 'Дмитрий Сидоров',
      date: '2024-03-10',
      time: '15:00',
      duration: '4 часа',
      price: 4800,
      capacity: 15,
      booked: 12,
      level: 'Начинающий',
      description: 'Научитесь готовить классические французские десерты',
      image: '/placeholder.svg',
      includes: [
        'История французской кондитерской',
        'Приготовление крема патисьер',
        'Техники работы с шоколадом',
        'Создание 4 классических десертов',
        'Упаковка десертов с собой'
      ],
      skills: [
        'Работа с кремами',
        'Темперирование шоколада',
        'Техники декорирования',
        'Французские техники выпечки'
      ],
      equipment: 'Кондитерские инструменты предоставляются',
      takeHome: 'Приготовленные десерты и рецепты'
    },
    {
      id: 5,
      title: 'Итальянская паста с нуля',
      instructor: 'Алексей Петров',
      date: '2024-03-15',
      time: '17:00',
      duration: '3 часа',
      price: 3800,
      capacity: 14,
      booked: 9,
      level: 'Начинающий',
      description: 'Изучите традиционные техники приготовления итальянской пасты',
      image: '/placeholder.svg',
      includes: [
        'Замешивание теста для пасты',
        'Формирование различных видов пасты',
        'Приготовление 3 видов соусов',
        'Дегустация с итальянским вином',
        'Рецепты региональных блюд'
      ],
      skills: [
        'Замешивание теста',
        'Раскатка и формирование',
        'Классические соусы',
        'Итальянская подача'
      ],
      equipment: 'Паста-машина и инструменты',
      takeHome: 'Свежая паста и соусы'
    },
    {
      id: 6,
      title: 'Винная дегустация для начинающих',
      instructor: 'Сомелье Анна Волкова',
      date: '2024-03-20',
      time: '19:30',
      duration: '2.5 часа',
      price: 3200,
      capacity: 20,
      booked: 15,
      level: 'Начинающий',
      description: 'Основы винной дегустации и сочетания вин с блюдами',
      image: '/placeholder.svg',
      includes: [
        'Дегустация 8 вин',
        'Техники дегустации',
        'Сочетания с сырами',
        'Основы винного этикета',
        'Дегустационные карты'
      ],
      skills: [
        'Техники дегустации',
        'Описание вкусов',
        'Сочетания с едой',
        'Винный этикет'
      ],
      equipment: 'Дегустационные бокалы',
      takeHome: 'Дегустационный дневник'
    }
  ];

  const instructors = [
    {
      name: 'Алексей Петров',
      position: 'Главный шеф-повар',
      experience: '15 лет',
      specialization: 'Европейская кухня, мясные блюда',
      image: '/placeholder.svg',
      bio: 'Выпускник Кулинарного института Франции, работал в ресторанах Мишлен'
    },
    {
      name: 'Мария Иванова',
      position: 'Су-шеф',
      experience: '12 лет',
      specialization: 'Азиатская кухня, морепродукты',
      image: '/placeholder.svg',
      bio: 'Стажировалась в лучших ресторанах Токио и Бангкока'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Шеф-кондитер',
      experience: '10 лет',
      specialization: 'Авторские десерты, молекулярная гастрономия',
      image: '/placeholder.svg',
      bio: 'Победитель международных кондитерских конкурсов'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Кулинарный фестиваль',
      date: '2024-04-15',
      description: 'Мастер-классы от приглашенных шефов'
    },
    {
      title: 'Детские мастер-классы',
      date: '2024-04-20',
      description: 'Кулинария для юных поваров'
    },
    {
      title: 'Корпоративные программы',
      date: 'По запросу',
      description: 'Тимбилдинг через кулинарию'
    }
  ];

  const getLevelColor = (level) => {
    const colors = {
      'Начинающий': 'bg-green-100 text-green-800',
      'Средний': 'bg-yellow-100 text-yellow-800',
      'Продвинутый': 'bg-red-100 text-red-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log('Registration:', registrationData, selectedClass);
    alert('Спасибо за регистрацию! Мы свяжемся с вами для подтверждения.');
    setRegistrationData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      dietary: ''
    });
  };

  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Кулинарные мастер-классы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Изучайте кулинарное искусство под руководством наших опытных шефов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Masterclasses List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {masterclasses.map((masterclass) => {
                const availableSpots = masterclass.capacity - masterclass.booked;
                return (
                  <Card key={masterclass.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-square bg-muted relative">
                          <img 
                            src={masterclass.image} 
                            alt={masterclass.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={getLevelColor(masterclass.level)}>
                              {masterclass.level}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                            {masterclass.price.toLocaleString()} ₽
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{masterclass.title}</h3>
                          <p className="text-muted-foreground mb-4">{masterclass.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Icon name="User" size={16} className="text-primary" />
                              {masterclass.instructor}
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Calendar" size={16} className="text-primary" />
                              {formatDate(masterclass.date)}
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Clock" size={16} className="text-primary" />
                              {masterclass.time} ({masterclass.duration})
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Users" size={16} className="text-primary" />
                              {availableSpots} мест свободно
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2 text-sm">Что включено:</h4>
                            <ul className="text-sm space-y-1">
                              {masterclass.includes.slice(0, 3).map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <Icon name="Check" size={12} className="text-green-500" />
                                  {item}
                                </li>
                              ))}
                              {masterclass.includes.length > 3 && (
                                <li className="text-muted-foreground">
                                  и еще {masterclass.includes.length - 3} пункт(а)...
                                </li>
                              )}
                            </ul>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              className="flex-1"
                              disabled={availableSpots === 0}
                              onClick={() => setSelectedClass(masterclass)}
                            >
                              {availableSpots === 0 ? 'Мест нет' : 'Записаться'}
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => setSelectedClass(masterclass)}
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
            {/* Instructors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ChefHat" size={20} />
                  Наши инструкторы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {instructors.map((instructor, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-12 h-12 bg-muted rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm">{instructor.name}</h4>
                      <p className="text-xs text-muted-foreground">{instructor.position}</p>
                      <p className="text-xs text-muted-foreground">{instructor.experience} • {instructor.specialization}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  Скоро
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{event.description}</p>
                    <p className="text-xs text-primary font-medium">{event.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Gift Certificates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gift" size={20} />
                  Подарочные сертификаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Подарите мастер-класс близким
                </p>
                <Button size="sm" className="w-full">
                  Купить сертификат
                </Button>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Вопросы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={14} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={14} className="text-primary" />
                    <span>classes@tokka.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Masterclass Details Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{selectedClass.title}</CardTitle>
                  <p className="text-muted-foreground">Инструктор: {selectedClass.instructor}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedClass(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={selectedClass.image} 
                    alt={selectedClass.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-accent rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Дата и время</p>
                      <p className="font-semibold">{formatDate(selectedClass.date)}</p>
                      <p className="font-semibold">{selectedClass.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Стоимость</p>
                      <p className="text-2xl font-bold text-primary">{selectedClass.price.toLocaleString()} ₽</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Длительность:</span>
                      <span>{selectedClass.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Уровень:</span>
                      <Badge className={getLevelColor(selectedClass.level)}>
                        {selectedClass.level}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Свободных мест:</span>
                      <span className="font-medium">{selectedClass.capacity - selectedClass.booked}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">{selectedClass.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Программа мастер-класса:</h3>
                  <ul className="space-y-2">
                    {selectedClass.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={14} className="text-green-500 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Навыки, которые вы освоите:</h3>
                  <ul className="space-y-2">
                    {selectedClass.skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Icon name="Star" size={14} className="text-yellow-500 mt-0.5" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
                <div>
                  <h4 className="font-semibold mb-1">Оборудование</h4>
                  <p className="text-sm text-muted-foreground">{selectedClass.equipment}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Что заберете с собой</h4>
                  <p className="text-sm text-muted-foreground">{selectedClass.takeHome}</p>
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleRegistration} className="space-y-4 border-t pt-6">
                <h3 className="font-semibold">Регистрация на мастер-класс</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input
                      name="name"
                      value={registrationData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={registrationData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={registrationData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Опыт в кулинарии</label>
                  <select
                    name="experience"
                    value={registrationData.experience}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Выберите уровень</option>
                    <option value="beginner">Новичок</option>
                    <option value="amateur">Любитель</option>
                    <option value="experienced">Опытный</option>
                    <option value="professional">Профессионал</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Диетические ограничения</label>
                  <Input
                    name="dietary"
                    value={registrationData.dietary}
                    onChange={handleChange}
                    placeholder="Аллергии, предпочтения..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={selectedClass.capacity - selectedClass.booked === 0}
                >
                  Записаться на мастер-класс
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Masterclasses;