import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Sustainability = () => {
  const sustainabilityMetrics = [
    {
      title: 'Местные поставщики',
      value: 85,
      unit: '%',
      description: 'Продукты от фермеров в радиусе 200 км',
      icon: 'MapPin',
      color: 'text-green-600'
    },
    {
      title: 'Переработка отходов',
      value: 92,
      unit: '%',
      description: 'Органические отходы идут на компост',
      icon: 'Recycle',
      color: 'text-blue-600'
    },
    {
      title: 'Экономия энергии',
      value: 78,
      unit: '%',
      description: 'Снижение потребления по сравнению с 2020 годом',
      icon: 'Zap',
      color: 'text-yellow-600'
    },
    {
      title: 'Экологичная упаковка',
      value: 100,
      unit: '%',
      description: 'Биоразлагаемые материалы для доставки',
      icon: 'Package',
      color: 'text-purple-600'
    }
  ];

  const initiatives = [
    {
      title: 'Фермерские партнерства',
      description: 'Прямое сотрудничество с местными фермерами для получения свежих продуктов',
      image: '/placeholder.svg',
      impact: 'Поддержка 15 местных ферм',
      icon: 'Tractor'
    },
    {
      title: 'Нулевые отходы',
      description: 'Программа минимизации пищевых отходов и их переработки',
      image: '/placeholder.svg',
      impact: 'Сокращение отходов на 60%',
      icon: 'Trash2'
    },
    {
      title: 'Зеленая энергия',
      description: 'Переход на возобновляемые источники энергии',
      image: '/placeholder.svg',
      impact: 'Солнечные панели покрывают 40% потребления',
      icon: 'Sun'
    },
    {
      title: 'Водосбережение',
      description: 'Системы экономии воды и очистки сточных вод',
      image: '/placeholder.svg',
      impact: 'Экономия 30% воды ежемесячно',
      icon: 'Droplets'
    },
    {
      title: 'Органическое меню',
      description: 'Увеличение доли органических продуктов в меню',
      image: '/placeholder.svg',
      impact: '45% блюд содержат органические ингредиенты',
      icon: 'Leaf'
    },
    {
      title: 'Социальная ответственность',
      description: 'Поддержка местного сообщества и благотворительность',
      image: '/placeholder.svg',
      impact: 'Помощь 3 детским домам',
      icon: 'Heart'
    }
  ];

  const certifications = [
    {
      name: 'Органик сертификат',
      issuer: 'Росстандарт',
      validUntil: '2025-06-30',
      description: 'Подтверждает использование органических продуктов'
    },
    {
      name: 'Эко-ресторан',
      issuer: 'Green Restaurant Association',
      validUntil: '2024-12-31',
      description: 'Соответствие экологическим стандартам'
    },
    {
      name: 'Ответственное потребление',
      issuer: 'Sustainable Food Lab',
      validUntil: '2025-03-15',
      description: 'Программа устойчивого развития'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Начало экологической программы',
      description: 'Запуск первых инициатив по устойчивому развитию'
    },
    {
      year: '2021',
      title: 'Партнерство с фермерами',
      description: 'Установление прямых связей с местными производителями'
    },
    {
      year: '2022',
      title: 'Экологичная упаковка',
      description: 'Полный переход на биоразлагаемую упаковку'
    },
    {
      year: '2023',
      title: 'Солнечная энергия',
      description: 'Установка солнечных панелей на крыше ресторана'
    },
    {
      year: '2024',
      title: 'Нулевые отходы',
      description: 'Достижение цели по минимизации пищевых отходов'
    }
  ];

  const tips = [
    {
      title: 'Выбирайте сезонные блюда',
      description: 'Сезонные продукты требуют меньше ресурсов для выращивания и транспортировки',
      icon: 'Calendar'
    },
    {
      title: 'Попробуйте растительные блюда',
      description: 'Растительная пища имеет меньший углеродный след',
      icon: 'Leaf'
    },
    {
      title: 'Не выбрасывайте еду',
      description: 'Заказывайте столько, сколько сможете съесть',
      icon: 'Heart'
    },
    {
      title: 'Используйте многоразовую посуду',
      description: 'При заказе на вынос приносите свою посуду',
      icon: 'RotateCcw'
    }
  ];

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
          <h1 className="text-4xl font-bold text-secondary mb-4">Устойчивое развитие</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наша приверженность экологии и социальной ответственности
          </p>
        </div>

        {/* Sustainability Metrics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={metric.icon} size={32} className={metric.color} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <h3 className="font-semibold mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                  <div className="mt-3">
                    <Progress value={metric.value} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Наши инициативы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                    <Icon name={initiative.icon} size={20} className="text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{initiative.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Результат:</p>
                    <p className="text-sm text-green-700">{initiative.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-secondary mb-8">Наш путь к устойчивости</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.year}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} />
                  Сертификаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.description}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">{cert.issuer}</span>
                      <span className="text-green-600">до {new Date(cert.validUntil).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tips for Guests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} />
                  Советы гостям
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <Icon name={tip.icon} size={16} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Предложения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Есть идеи по улучшению нашей экологической программы?
                </p>
                <Button size="sm" className="w-full">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать нам
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Цели на 2024-2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Углеродная нейтральность</h3>
                  <p className="text-sm text-muted-foreground">Достижение нулевого углеродного следа к 2025 году</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Waves" size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Пластик-фри</h3>
                  <p className="text-sm text-muted-foreground">Полный отказ от одноразового пластика</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Sprout" size={32} className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Собственный огород</h3>
                  <p className="text-sm text-muted-foreground">Выращивание зелени и овощей на крыше</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} className="text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Образование</h3>
                  <p className="text-sm text-muted-foreground">Программы экологического просвещения</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;