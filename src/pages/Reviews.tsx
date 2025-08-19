import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    comment: '',
    visitDate: ''
  });

  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      title: 'Превосходный ужин!',
      comment: 'Потрясающая кухня и обслуживание на высшем уровне. Стейк был приготовлен идеально, а десерт просто божественный. Обязательно вернемся!',
      date: '2024-01-15',
      verified: true,
      helpful: 12,
      photos: ['/placeholder.svg']
    },
    {
      id: 2,
      name: 'Михаил Иванов',
      rating: 4,
      title: 'Отличное место для свидания',
      comment: 'Романтичная атмосфера, вкусная еда. Единственный минус - немного долго ждали заказ, но оно того стоило.',
      date: '2024-01-10',
      verified: true,
      helpful: 8,
      photos: []
    },
    {
      id: 3,
      name: 'Елена Сидорова',
      rating: 5,
      title: 'Лучший ресторан в городе',
      comment: 'Уже третий раз здесь, и каждый раз восхищаюсь качеством блюд. Особенно рекомендую ризотто с трюфелями!',
      date: '2024-01-08',
      verified: false,
      helpful: 15,
      photos: ['/placeholder.svg', '/placeholder.svg']
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      rating: 3,
      title: 'Неплохо, но есть к чему стремиться',
      comment: 'Еда вкусная, но цены завышены. Обслуживание среднее. Возможно, просто не повезло с официантом.',
      date: '2024-01-05',
      verified: true,
      helpful: 3,
      photos: []
    },
    {
      id: 5,
      name: 'Ольга Морозова',
      rating: 5,
      title: 'Идеально для празднования',
      comment: 'Отмечали годовщину свадьбы. Персонал подготовил сюрприз, принесли торт со свечами. Очень трогательно!',
      date: '2024-01-03',
      verified: true,
      helpful: 20,
      photos: ['/placeholder.svg']
    }
  ];

  const stats = {
    average: 4.4,
    total: 127,
    distribution: {
      5: 68,
      4: 32,
      3: 18,
      2: 6,
      1: 3
    }
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === 'verified') return review.verified;
    if (filter === 'photos') return review.photos.length > 0;
    return review.rating === parseInt(filter);
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log('New review:', newReview);
    alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.');
    setNewReview({
      name: '',
      email: '',
      rating: 5,
      title: '',
      comment: '',
      visitDate: ''
    });
  };

  const renderStars = (rating, interactive = false, onRate = null) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={interactive ? 24 : 16}
            className={`${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Отзывы гостей</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что думают наши гости о ресторане TOKKA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overall Rating */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stats.average}</div>
                    {renderStars(Math.round(stats.average))}
                    <p className="text-sm text-muted-foreground mt-1">{stats.total} отзывов</p>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2 mb-1">
                        <span className="text-sm w-3">{rating}</span>
                        <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${(stats.distribution[rating] / stats.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{stats.distribution[rating]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  Все
                </Button>
                <Button
                  variant={filter === 'verified' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('verified')}
                >
                  Проверенные
                </Button>
                <Button
                  variant={filter === 'photos' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('photos')}
                >
                  С фото
                </Button>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <Button
                    key={rating}
                    variant={filter === rating.toString() ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(rating.toString())}
                  >
                    {rating} ★
                  </Button>
                ))}
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border rounded-md text-sm"
              >
                <option value="newest">Сначала новые</option>
                <option value="oldest">Сначала старые</option>
                <option value="rating-high">Высокий рейтинг</option>
                <option value="rating-low">Низкий рейтинг</option>
                <option value="helpful">Полезные</option>
              </select>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {sortedReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{review.name}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Проверен
                            </Badge>
                          )}
                        </div>
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                    
                    <h5 className="font-medium mb-2">{review.title}</h5>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{review.comment}</p>
                    
                    {review.photos.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {review.photos.map((photo, index) => (
                          <div key={index} className="w-20 h-20 bg-muted rounded-lg overflow-hidden">
                            <img src={photo} alt="Review photo" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary">
                        <Icon name="ThumbsUp" size={14} />
                        Полезно ({review.helpful})
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary">
                        <Icon name="MessageCircle" size={14} />
                        Ответить
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Write Review */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PenTool" size={24} />
                  Написать отзыв
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={newReview.email}
                      onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Оценка *</label>
                    {renderStars(newReview.rating, true, (rating) => 
                      setNewReview({...newReview, rating})
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Заголовок *</label>
                    <Input
                      value={newReview.title}
                      onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                      placeholder="Краткое описание"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Отзыв *</label>
                    <Textarea
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      placeholder="Расскажите о своем опыте..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата визита</label>
                    <Input
                      type="date"
                      value={newReview.visitDate}
                      onChange={(e) => setNewReview({...newReview, visitDate: e.target.value})}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Опубликовать отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Review Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} />
                  Правила отзывов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Отзывы проходят модерацию перед публикацией</li>
                  <li>• Запрещены оскорбления и нецензурная лексика</li>
                  <li>• Отзывы должны касаться опыта посещения ресторана</li>
                  <li>• Фотографии должны быть связаны с заведением</li>
                  <li>• Один отзыв от одного посетителя в месяц</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;