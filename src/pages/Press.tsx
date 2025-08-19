import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Press = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'Все материалы' },
    { id: 'news', name: 'Новости' },
    { id: 'awards', name: 'Награды' },
    { id: 'interviews', name: 'Интервью' },
    { id: 'reviews', name: 'Обзоры' }
  ];

  const pressReleases = [
    {
      id: 1,
      title: 'TOKKA получил премию "Ресторан года 2024"',
      date: '2024-01-15',
      category: 'awards',
      source: 'Гастрономический гид Москвы',
      excerpt: 'Ресторан TOKKA признан лучшим рестораном года по версии авторитетного гастрономического издания.',
      content: `Ресторан TOKKA удостоился престижной награды "Ресторан года 2024" от Гастрономического гида Москвы. Жюри отметило высокое качество кухни, безупречный сервис и инновационный подход к гастрономии.

      "Мы гордимся этим признанием, которое стало результатом упорной работы всей нашей команды", - комментирует главный шеф-повар Алексей Петров.

      Церемония награждения состоялась в Центральном доме художника, где собрались ведущие представители ресторанной индустрии.`,
      image: '/placeholder.svg',
      downloads: [
        { name: 'Пресс-релиз (PDF)', size: '245 KB' },
        { name: 'Фото церемонии', size: '2.1 MB' }
      ]
    },
    {
      id: 2,
      title: 'Интервью с шеф-поваром Алексеем Петровым',
      date: '2024-01-10',
      category: 'interviews',
      source: 'Журнал "Гастроном"',
      excerpt: 'Главный шеф-повар TOKKA рассказывает о философии ресторана и планах на будущее.',
      content: `В эксклюзивном интервью журналу "Гастроном" шеф-повар Алексей Петров поделился секретами успеха ресторана TOKKA и рассказал о новых проектах.

      **О философии ресторана:**
      "Наша философия проста - использовать только лучшие продукты и готовить с душой. Каждое блюдо должно рассказывать историю."

      **О планах на 2024 год:**
      "Планируем запустить кулинарную школу и открыть второй ресторан. Также работаем над книгой рецептов."

      **О команде:**
      "Наша команда - это наше главное богатство. Мы инвестируем в обучение и развитие каждого сотрудника."`,
      image: '/placeholder.svg',
      downloads: [
        { name: 'Полное интервью (PDF)', size: '1.2 MB' },
        { name: 'Фото шефа', size: '3.5 MB' }
      ]
    },
    {
      id: 3,
      title: 'TOKKA запускает программу устойчивого развития',
      date: '2024-01-05',
      category: 'news',
      source: 'Пресс-служба TOKKA',
      excerpt: 'Ресторан объявляет о запуске комплексной программы экологической ответственности.',
      content: `Ресторан TOKKA объявляет о запуске масштабной программы устойчивого развития, направленной на минимизацию воздействия на окружающую среду.

      **Ключевые инициативы:**
      - Переход на 100% биоразлагаемую упаковку
      - Партнерство с местными фермерами
      - Программа "Ноль отходов"
      - Установка солнечных панелей

      **Цели на 2024 год:**
      - Сокращение углеродного следа на 50%
      - Увеличение доли органических продуктов до 60%
      - Полный отказ от одноразового пластика

      Программа разработана совместно с экологическими консультантами и будет реализована поэтапно в течение года.`,
      image: '/placeholder.svg',
      downloads: [
        { name: 'Программа устойчивого развития', size: '890 KB' },
        { name: 'Инфографика', size: '1.8 MB' }
      ]
    },
    {
      id: 4,
      title: 'Обзор: TOKKA в топе лучших ресторанов Москвы',
      date: '2023-12-20',
      category: 'reviews',
      source: 'Time Out Москва',
      excerpt: 'Авторитетное издание включило TOKKA в список must-visit ресторанов столицы.',
      content: `Международное издание Time Out включило ресторан TOKKA в свой ежегодный рейтинг лучших ресторанов Москвы, отметив высокое качество кухни и сервиса.

      **Что отметили критики:**
      - Инновационный подход к классическим блюдам
      - Безупречное качество продуктов
      - Профессиональный сервис
      - Элегантный интерьер

      **Цитата из обзора:**
      "TOKKA - это место, где традиции встречаются с инновациями. Каждое блюдо - произведение искусства."

      Ресторан занял 3-е место в категории "Высокая кухня" и получил специальное упоминание за винную карту.`,
      image: '/placeholder.svg',
      downloads: [
        { name: 'Полный обзор', size: '567 KB' },
        { name: 'Рейтинг ресторанов', size: '2.3 MB' }
      ]
    },
    {
      id: 5,
      title: 'TOKKA открывает кулинарную школу',
      date: '2023-12-01',
      category: 'news',
      source: 'РБК',
      excerpt: 'Ресторан расширяет деятельность, запуская образовательные программы для любителей кулинарии.',
      content: `Ресторан TOKKA объявляет об открытии собственной кулинарной школы, которая будет предлагать мастер-классы и курсы для любителей и профессионалов.

      **Программы обучения:**
      - Базовые курсы кулинарии
      - Профессиональные программы для поваров
      - Винные дегустации
      - Корпоративные тимбилдинги

      **Преподаватели:**
      Занятия будут вести шеф-повара ресторана и приглашенные эксперты из ведущих кулинарных школ мира.

      Школа откроется в феврале 2024 года в отдельном помещении рядом с рестораном.`,
      image: '/placeholder.svg',
      downloads: [
        { name: 'Программы обучения', size: '1.1 MB' },
        { name: 'Фото школы', size: '4.2 MB' }
      ]
    }
  ];

  const mediaKit = [
    {
      category: 'Логотипы',
      items: [
        { name: 'Логотип TOKKA (PNG)', size: '245 KB' },
        { name: 'Логотип TOKKA (SVG)', size: '12 KB' },
        { name: 'Логотип (черно-белый)', size: '180 KB' }
      ]
    },
    {
      category: 'Фотографии',
      items: [
        { name: 'Интерьер ресторана', size: '15.2 MB' },
        { name: 'Блюда (коллекция)', size: '28.7 MB' },
        { name: 'Команда поваров', size: '8.9 MB' }
      ]
    },
    {
      category: 'Документы',
      items: [
        { name: 'Факт-лист о ресторане', size: '567 KB' },
        { name: 'Биографии шеф-поваров', size: '890 KB' },
        { name: 'Меню (актуальное)', size: '1.2 MB' }
      ]
    }
  ];

  const contacts = [
    {
      name: 'Анна Волкова',
      position: 'PR-менеджер',
      phone: '+7 (495) 123-45-67',
      email: 'press@tokka.ru',
      image: '/placeholder.svg'
    },
    {
      name: 'Михаил Сергеев',
      position: 'Маркетинг-директор',
      phone: '+7 (495) 123-45-68',
      email: 'marketing@tokka.ru',
      image: '/placeholder.svg'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? pressReleases 
    : pressReleases.filter(article => article.category === selectedCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryBadge = (category) => {
    const badges = {
      'news': { text: 'Новости', variant: 'default' },
      'awards': { text: 'Награды', variant: 'secondary' },
      'interviews': { text: 'Интервью', variant: 'outline' },
      'reviews': { text: 'Обзоры', variant: 'destructive' }
    };
    return badges[category] || { text: 'Материал', variant: 'outline' };
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Пресс-центр</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Новости, пресс-релизы и медиа-материалы ресторана TOKKA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Press Releases */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Articles */}
            <div className="space-y-6">
              {filteredArticles.map((article) => {
                const badge = getCategoryBadge(article.category);
                return (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-square bg-muted">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant={badge.variant}>{badge.text}</Badge>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{formatDate(article.date)}</span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{article.source}</span>
                          </div>
                          
                          <h2 className="text-xl font-semibold mb-3 hover:text-primary cursor-pointer"
                              onClick={() => setSelectedArticle(article)}>
                            {article.title}
                          </h2>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              {article.downloads.map((download, index) => (
                                <Button key={index} size="sm" variant="outline">
                                  <Icon name="Download" size={14} className="mr-1" />
                                  {download.name}
                                </Button>
                              ))}
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedArticle(article)}
                            >
                              Читать полностью
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
            {/* Media Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Контакты для СМИ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-12 h-12 bg-muted rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={contact.image} 
                        alt={contact.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm">{contact.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{contact.position}</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Icon name="Phone" size={12} className="text-primary" />
                          <span className="text-xs">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Mail" size={12} className="text-primary" />
                          <span className="text-xs">{contact.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Media Kit */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Package" size={20} />
                  Медиа-кит
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mediaKit.map((kit, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2 text-sm">{kit.category}</h4>
                    <div className="space-y-2">
                      {kit.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 bg-accent rounded text-xs">
                          <span>{item.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">{item.size}</span>
                            <Icon name="Download" size={12} className="text-primary cursor-pointer" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <Button size="sm" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать весь медиа-кит
                </Button>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={20} />
                  Факты о TOKKA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Год основания:</span>
                    <span className="font-medium">2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Количество мест:</span>
                    <span className="font-medium">120</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Команда:</span>
                    <span className="font-medium">35 человек</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Блюд в меню:</span>
                    <span className="font-medium">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Средний чек:</span>
                    <span className="font-medium">2,500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Рейтинг:</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Share2" size={20} />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded transition-colors">
                    <Icon name="Instagram" size={20} className="text-pink-600" />
                    <div>
                      <p className="font-medium text-sm">Instagram</p>
                      <p className="text-xs text-muted-foreground">25K подписчиков</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded transition-colors">
                    <Icon name="Facebook" size={20} className="text-blue-600" />
                    <div>
                      <p className="font-medium text-sm">Facebook</p>
                      <p className="text-xs text-muted-foreground">15K подписчиков</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded transition-colors">
                    <Icon name="Youtube" size={20} className="text-red-600" />
                    <div>
                      <p className="font-medium text-sm">YouTube</p>
                      <p className="text-xs text-muted-foreground">12K подписчиков</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={getCategoryBadge(selectedArticle.category).variant}>
                      {getCategoryBadge(selectedArticle.category).text}
                    </Badge>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{formatDate(selectedArticle.date)}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{selectedArticle.title}</CardTitle>
                  <p className="text-muted-foreground">{selectedArticle.source}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedArticle(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose prose-sm max-w-none mb-6">
                {selectedArticle.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                    return (
                      <h3 key={index} className="text-lg font-semibold mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragraph.trim() === '') return null;
                  return (
                    <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Материалы для скачивания:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.downloads.map((download, index) => (
                    <Button key={index} size="sm" variant="outline">
                      <Icon name="Download" size={14} className="mr-2" />
                      {download.name}
                      <span className="ml-2 text-xs text-muted-foreground">({download.size})</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Press;