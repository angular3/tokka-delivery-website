import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      primary: '+7 (495) 123-45-67',
      secondary: 'Ежедневно с 10:00 до 23:00',
      action: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      primary: 'hello@tokka.ru',
      secondary: 'Ответим в течение часа',
      action: 'mailto:hello@tokka.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес ресторана',
      primary: 'ул. Тверская, 15',
      secondary: 'Москва, 125009',
      action: 'https://maps.google.com'
    },
    {
      icon: 'Clock',
      title: 'Часы работы',
      primary: 'Пн-Чт: 10:00-23:00',
      secondary: 'Пт-Сб: 10:00-01:00, Вс: 10:00-22:00',
      action: null
    }
  ];

  const socialLinks = [
    { icon: 'Instagram', name: 'Instagram', url: '#', followers: '25K' },
    { icon: 'Facebook', name: 'Facebook', url: '#', followers: '15K' },
    { icon: 'Twitter', name: 'Twitter', url: '#', followers: '8K' },
    { icon: 'Youtube', name: 'YouTube', url: '#', followers: '12K' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} />
                  Напишите нам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        type="tel"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      type="email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Тема</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Выберите тему</option>
                      <option value="order">Вопрос по заказу</option>
                      <option value="delivery">Доставка</option>
                      <option value="menu">Меню и блюда</option>
                      <option value="reservation">Бронирование стола</option>
                      <option value="feedback">Отзыв или предложение</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите, чем мы можем помочь..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name={info.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-primary font-medium hover:underline block"
                          >
                            {info.primary}
                          </a>
                        ) : (
                          <p className="text-primary font-medium">{info.primary}</p>
                        )}
                        <p className="text-muted-foreground text-sm">{info.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Share2" size={24} />
                  Мы в социальных сетях
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                    >
                      <Icon name={social.icon} size={20} className="text-primary" />
                      <div>
                        <div className="font-medium text-sm">{social.name}</div>
                        <div className="text-xs text-muted-foreground">{social.followers} подписчиков</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Map" size={24} />
                  Как нас найти
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Интерактивная карта</p>
                    <p className="text-sm text-muted-foreground">ул. Тверская, 15, Москва</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p><strong>Ближайшее метро:</strong> Тверская, Пушкинская</p>
                  <p><strong>Парковка:</strong> Платная парковка рядом с рестораном</p>
                  <p><strong>Доступность:</strong> Вход оборудован для людей с ограниченными возможностями</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Можно ли забронировать стол?</h3>
                <p className="text-muted-foreground text-sm">
                  Да, вы можете забронировать стол по телефону или через наш сайт. 
                  Рекомендуем бронировать заранее, особенно на выходные.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Есть ли вегетарианские блюда?</h3>
                <p className="text-muted-foreground text-sm">
                  Конечно! В нашем меню представлен широкий выбор вегетарианских 
                  и веганских блюд, отмеченных специальными значками.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Принимаете ли вы банкетные заказы?</h3>
                <p className="text-muted-foreground text-sm">
                  Да, мы организуем банкеты и корпоративные мероприятия. 
                  Свяжитесь с нами для обсуждения деталей и составления меню.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Какие способы оплаты вы принимаете?</h3>
                <p className="text-muted-foreground text-sm">
                  Мы принимаем наличные, банковские карты всех типов, 
                  а также оплату через мобильные приложения и онлайн.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;