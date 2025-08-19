import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'Все фото', count: 24 },
    { id: 'interior', name: 'Интерьер', count: 8 },
    { id: 'food', name: 'Блюда', count: 12 },
    { id: 'events', name: 'Мероприятия', count: 4 }
  ];

  const images = [
    {
      id: 1,
      src: '/img/e9bc8590-86f0-44ba-b6f6-6bb7c68b9af2.jpg',
      title: 'Стейк из говядины',
      category: 'food',
      description: 'Премиальная говядина с соусом из трюфелей'
    },
    {
      id: 2,
      src: '/img/9cb37276-dd42-4f91-95a0-1c1f57ad9fe9.jpg',
      title: 'Лосось гриль',
      category: 'food',
      description: 'Свежий атлантический лосось с овощами'
    },
    {
      id: 3,
      src: '/img/efa91466-639c-41d8-b0b9-d1571d48cf86.jpg',
      title: 'Ризотто с грибами',
      category: 'food',
      description: 'Арборио рис с лесными грибами'
    },
    {
      id: 4,
      src: '/placeholder.svg',
      title: 'Главный зал',
      category: 'interior',
      description: 'Элегантный интерьер главного зала ресторана'
    },
    {
      id: 5,
      src: '/placeholder.svg',
      title: 'Барная зона',
      category: 'interior',
      description: 'Современная барная стойка с широким выбором напитков'
    },
    {
      id: 6,
      src: '/placeholder.svg',
      title: 'VIP-зал',
      category: 'interior',
      description: 'Приватная зона для особых мероприятий'
    },
    {
      id: 7,
      src: '/placeholder.svg',
      title: 'Летняя терраса',
      category: 'interior',
      description: 'Уютная терраса с видом на город'
    },
    {
      id: 8,
      src: '/placeholder.svg',
      title: 'Открытая кухня',
      category: 'interior',
      description: 'Наблюдайте за работой наших поваров'
    },
    {
      id: 9,
      src: '/placeholder.svg',
      title: 'Тирамису',
      category: 'food',
      description: 'Классический итальянский десерт'
    },
    {
      id: 10,
      src: '/placeholder.svg',
      title: 'Цезарь с курицей',
      category: 'food',
      description: 'Свежий салат с курицей гриль'
    },
    {
      id: 11,
      src: '/placeholder.svg',
      title: 'Том ям',
      category: 'food',
      description: 'Острый тайский суп с креветками'
    },
    {
      id: 12,
      src: '/placeholder.svg',
      title: 'Винная карта',
      category: 'food',
      description: 'Изысканные вина со всего мира'
    },
    {
      id: 13,
      src: '/placeholder.svg',
      title: 'Корпоративное мероприятие',
      category: 'events',
      description: 'Деловой ужин в нашем ресторане'
    },
    {
      id: 14,
      src: '/placeholder.svg',
      title: 'Свадебный банкет',
      category: 'events',
      description: 'Незабываемое торжество для молодоженов'
    },
    {
      id: 15,
      src: '/placeholder.svg',
      title: 'День рождения',
      category: 'events',
      description: 'Праздничное оформление стола'
    },
    {
      id: 16,
      src: '/placeholder.svg',
      title: 'Кулинарный мастер-класс',
      category: 'events',
      description: 'Обучение от наших шеф-поваров'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Галерея</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в атмосферу ресторана TOKKA через наши фотографии
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Icon 
                    name="ZoomIn" 
                    size={32} 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="text-xs">
                    {categories.find(cat => cat.id === image.category)?.name}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1 text-sm">{image.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Блюд в меню</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Лет опыта</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <p className="text-muted-foreground">Поваров</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Довольных гостей</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            
            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <Icon name="ChevronLeft" size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <Icon name="ChevronRight" size={32} />
            </button>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;