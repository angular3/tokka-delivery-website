import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', name: 'Все статьи', count: 12 },
    { id: 'recipes', name: 'Рецепты', count: 5 },
    { id: 'news', name: 'Новости', count: 3 },
    { id: 'tips', name: 'Советы', count: 4 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Секреты приготовления идеального стейка',
      excerpt: 'Узнайте, как наши повара готовят стейки, которые тают во рту. Все секреты и техники от шеф-повара.',
      content: `Приготовление идеального стейка — это искусство, которое требует знания нескольких ключевых принципов. 

      **Выбор мяса**
      Качество стейка начинается с выбора правильного куска мяса. Мы используем только премиальную говядину с мраморностью, которая обеспечивает сочность и вкус.

      **Подготовка**
      Перед приготовлением мясо должно достичь комнатной температуры. Это занимает около 30-45 минут для стейка толщиной 2-3 см.

      **Приправы**
      Мы используем только крупную морскую соль и свежемолотый черный перец. Приправляем мясо непосредственно перед жаркой.

      **Техника приготовления**
      1. Разогреваем сковороду до очень высокой температуры
      2. Добавляем немного растительного масла с высокой точкой дымления
      3. Обжариваем стейк 2-3 минуты с каждой стороны для medium-rare
      4. Даем мясу отдохнуть 5 минут перед подачей

      **Секретный ингредиент**
      Наш секрет — добавление кусочка сливочного масла с тимьяном в последние минуты жарки.`,
      category: 'recipes',
      author: 'Алексей Петров',
      date: '2024-01-20',
      readTime: '5 мин',
      image: '/img/e9bc8590-86f0-44ba-b6f6-6bb7c68b9af2.jpg',
      tags: ['стейк', 'мясо', 'рецепты', 'кулинария']
    },
    {
      id: 2,
      title: 'Новое сезонное меню весна 2024',
      excerpt: 'Представляем обновленное меню с весенними ингредиентами и свежими идеями от нашей команды поваров.',
      content: `С приходом весны мы рады представить наше новое сезонное меню, которое отражает свежесть и обновление природы.

      **Новые блюда**
      В меню появились блюда с молодыми овощами, свежей зеленью и сезонными продуктами:
      - Салат с молодым шпинатом и клубникой
      - Ризотто с зеленым горошком и мятой
      - Тартар из лосося с авокадо
      - Десерт с ревенем и ванильным кремом

      **Philosophy**
      Наша философия — использовать только самые свежие сезонные продукты от местных фермеров.

      **Специальные предложения**
      До конца апреля действует скидка 15% на все новые блюда для постоянных гостей.`,
      category: 'news',
      author: 'Мария Иванова',
      date: '2024-01-18',
      readTime: '3 мин',
      image: '/img/efa91466-639c-41d8-b0b9-d1571d48cf86.jpg',
      tags: ['меню', 'весна', 'новости', 'сезонные блюда']
    },
    {
      id: 3,
      title: 'Как правильно сочетать вино с блюдами',
      excerpt: 'Гид по винным парам от нашего сомелье. Узнайте, какие вина лучше всего подходят к разным типам блюд.',
      content: `Правильное сочетание вина и еды может превратить обычный ужин в незабываемое гастрономическое путешествие.

      **Основные принципы**
      1. **Интенсивность** — легкие блюда с легкими винами, насыщенные с полнотелыми
      2. **Дополнение** — вино должно дополнять, а не перебивать вкус блюда
      3. **Контраст** — иногда противоположности создают идеальную гармонию

      **Классические сочетания**
      - **Красное мясо** — Каберне Совиньон, Мальбек
      - **Рыба** — Совиньон Блан, Шардоне
      - **Сыры** — Портвейн, Рислинг
      - **Десерты** — Москато, Токай

      **Наши рекомендации**
      В ресторане TOKKA наш сомелье всегда поможет подобрать идеальное вино к вашему блюду.`,
      category: 'tips',
      author: 'Дмитрий Сидоров',
      date: '2024-01-15',
      readTime: '7 мин',
      image: '/placeholder.svg',
      tags: ['вино', 'сочетания', 'советы', 'сомелье']
    },
    {
      id: 4,
      title: 'История ресторана: 6 лет успеха',
      excerpt: 'Оглядываемся назад на путь, который прошел ресторан TOKKA за 6 лет работы. Достижения, вызовы и планы на будущее.',
      content: `Шесть лет назад мы открыли двери ресторана TOKKA с простой мечтой — создать место, где каждый гость почувствует себя особенным.

      **2018 - Начало пути**
      Открытие ресторана с командой из 12 человек и меню из 25 блюд.

      **2019 - Первые награды**
      Получили премию "Лучший новый ресторан" от гастрономического гида.

      **2020 - Вызовы пандемии**
      Запустили доставку и адаптировались к новым условиям.

      **2021 - Расширение**
      Увеличили команду до 35 человек, обновили интерьер.

      **2022 - Признание**
      Вошли в топ-10 ресторанов Москвы по версии нескольких изданий.

      **2024 - Новые горизонты**
      Планируем открытие второго ресторана и запуск кулинарной школы.`,
      category: 'news',
      author: 'Команда TOKKA',
      date: '2024-01-10',
      readTime: '4 мин',
      image: '/placeholder.svg',
      tags: ['история', 'достижения', 'команда']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryName = (categoryId) => {
    return categories.find(cat => cat.id === categoryId)?.name || 'Статья';
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Блог TOKKA</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Кулинарные секреты, новости ресторана и полезные советы от наших поваров
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Поиск по статьям..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square bg-muted">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{getCategoryName(post.category)}</Badge>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-xl font-semibold mb-3 hover:text-primary cursor-pointer"
                            onClick={() => setSelectedPost(post)}>
                          {post.title}
                        </h2>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="User" size={16} />
                            {post.author}
                            <span>•</span>
                            {formatDate(post.date)}
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedPost(post)}
                          >
                            Читать далее
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
            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Популярные статьи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div 
                    key={post.id} 
                    className="flex gap-3 cursor-pointer hover:bg-accent p-2 rounded-lg transition-colors"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  Подписка на новости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Получайте новые статьи и рецепты прямо на почту
                </p>
                <div className="space-y-3">
                  <Input placeholder="Ваш email" type="email" />
                  <Button className="w-full" size="sm">
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tags Cloud */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Tag" size={20} />
                  Популярные теги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['рецепты', 'стейк', 'вино', 'советы', 'новости', 'меню', 'кулинария', 'сомелье'].map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setSearchQuery(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{getCategoryName(selectedPost.category)}</Badge>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{selectedPost.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{selectedPost.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="User" size={16} />
                    {selectedPost.author}
                    <span>•</span>
                    {formatDate(selectedPost.date)}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPost(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose prose-sm max-w-none">
                {selectedPost.content.split('\n').map((paragraph, index) => {
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
              
              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
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

export default Blog;