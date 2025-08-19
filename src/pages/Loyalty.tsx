import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Loyalty = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [userLevel, setUserLevel] = useState('bronze');

  // Симуляция данных пользователя
  const userData = {
    name: 'Анна Петрова',
    phone: '+7 (495) 123-45-67',
    level: 'gold',
    points: 2450,
    nextLevelPoints: 3000,
    totalSpent: 45000,
    visitsCount: 23,
    joinDate: '2023-06-15'
  };

  const loyaltyLevels = [
    {
      name: 'Bronze',
      id: 'bronze',
      minPoints: 0,
      maxPoints: 999,
      discount: 5,
      color: 'bg-amber-600',
      benefits: [
        'Скидка 5% на все блюда',
        'Приветственный напиток',
        'SMS-уведомления о акциях'
      ]
    },
    {
      name: 'Silver',
      id: 'silver',
      minPoints: 1000,
      maxPoints: 2499,
      discount: 10,
      color: 'bg-gray-400',
      benefits: [
        'Скидка 10% на все блюда',
        'Бесплатный десерт в день рождения',
        'Приоритетное бронирование',
        'Все преимущества Bronze'
      ]
    },
    {
      name: 'Gold',
      id: 'gold',
      minPoints: 2500,
      maxPoints: 4999,
      discount: 15,
      color: 'bg-yellow-500',
      benefits: [
        'Скидка 15% на все блюда',
        'Бесплатная бутылка вина в месяц',
        'Персональный менеджер',
        'Доступ к закрытым мероприятиям',
        'Все преимущества Silver'
      ]
    },
    {
      name: 'Platinum',
      id: 'platinum',
      minPoints: 5000,
      maxPoints: Infinity,
      discount: 20,
      color: 'bg-purple-600',
      benefits: [
        'Скидка 20% на все блюда',
        'Индивидуальное меню от шефа',
        'VIP-зона ресторана',
        'Бесплатная доставка',
        'Все преимущества Gold'
      ]
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      date: '2024-01-20',
      amount: 3200,
      points: 160,
      description: 'Ужин на двоих'
    },
    {
      id: 2,
      date: '2024-01-15',
      amount: 1800,
      points: 90,
      description: 'Бизнес-ланч'
    },
    {
      id: 3,
      date: '2024-01-10',
      amount: 2500,
      points: 125,
      description: 'Романтический ужин'
    }
  ];

  const availableRewards = [
    {
      id: 1,
      title: 'Бесплатный десерт',
      points: 200,
      description: 'Любой десерт из меню',
      icon: 'Cake'
    },
    {
      id: 2,
      title: 'Скидка 20% на заказ',
      points: 500,
      description: 'На следующий визит',
      icon: 'Percent'
    },
    {
      id: 3,
      title: 'Бутылка вина',
      points: 800,
      description: 'Домашнее вино ресторана',
      icon: 'Wine'
    },
    {
      id: 4,
      title: 'Мастер-класс от шефа',
      points: 1500,
      description: 'Индивидуальный урок кулинарии',
      icon: 'ChefHat'
    }
  ];

  const handleRegistration = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      setIsRegistered(true);
      alert('Добро пожаловать в программу лояльности TOKKA!');
    }
  };

  const getCurrentLevel = () => {
    return loyaltyLevels.find(level => level.id === userData.level) || loyaltyLevels[0];
  };

  const getNextLevel = () => {
    const currentIndex = loyaltyLevels.findIndex(level => level.id === userData.level);
    return currentIndex < loyaltyLevels.length - 1 ? loyaltyLevels[currentIndex + 1] : null;
  };

  const getProgressToNextLevel = () => {
    const nextLevel = getNextLevel();
    if (!nextLevel) return 100;
    
    const currentLevel = getCurrentLevel();
    const progress = ((userData.points - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100;
    return Math.min(progress, 100);
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Программа лояльности</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Получайте баллы за каждый визит и обменивайте их на приятные бонусы
          </p>
        </div>

        {!isRegistered ? (
          /* Registration Form */
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Присоединиться к программе</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistration} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Номер телефона</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Получить карту лояльности
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <Button 
                    variant="link" 
                    onClick={() => setIsRegistered(true)}
                    className="text-sm"
                  >
                    Уже есть карта? Войти
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* User Dashboard */
          <div className="space-y-8">
            {/* User Info Card */}
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
                    <p className="opacity-90">{userData.phone}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full ${getCurrentLevel().color} text-white font-semibold`}>
                      <Icon name="Crown" size={16} className="mr-1" />
                      {getCurrentLevel().name}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{userData.points}</div>
                    <div className="opacity-90">Баллов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{userData.visitsCount}</div>
                    <div className="opacity-90">Визитов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{userData.totalSpent.toLocaleString()}</div>
                    <div className="opacity-90">Потрачено ₽</div>
                  </div>
                </div>
                
                {getNextLevel() && (
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span>До уровня {getNextLevel().name}</span>
                      <span>{getNextLevel().minPoints - userData.points} баллов</span>
                    </div>
                    <Progress value={getProgressToNextLevel()} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Loyalty Levels */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-secondary mb-6">Уровни программы</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {loyaltyLevels.map((level) => (
                    <Card 
                      key={level.id} 
                      className={`${level.id === userData.level ? 'ring-2 ring-primary' : ''}`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full ${level.color}`}></div>
                            {level.name}
                          </CardTitle>
                          <Badge variant="outline">{level.discount}% скидка</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {level.minPoints} - {level.maxPoints === Infinity ? '∞' : level.maxPoints} баллов
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {level.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Icon name="Check" size={14} className="text-green-500 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Rewards */}
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-6">Награды</h2>
                <div className="space-y-4">
                  {availableRewards.map((reward) => (
                    <Card key={reward.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Icon name={reward.icon} size={20} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{reward.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{reward.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{reward.points} баллов</span>
                              <Button 
                                size="sm" 
                                disabled={userData.points < reward.points}
                                variant={userData.points >= reward.points ? "default" : "outline"}
                              >
                                {userData.points >= reward.points ? 'Обменять' : 'Недостаточно'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>История операций</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString('ru-RU')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{transaction.amount} ₽</p>
                        <p className="text-sm text-green-600">+{transaction.points} баллов</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card>
              <CardHeader>
                <CardTitle>Как работает программа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CreditCard" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Получайте баллы</h3>
                    <p className="text-sm text-muted-foreground">
                      За каждые 20 ₽ покупки получайте 1 балл
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="TrendingUp" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Повышайте уровень</h3>
                    <p className="text-sm text-muted-foreground">
                      Накапливайте баллы и получайте больше привилегий
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Gift" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Обменивайте на награды</h3>
                    <p className="text-sm text-muted-foreground">
                      Тратьте баллы на скидки и подарки
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loyalty;