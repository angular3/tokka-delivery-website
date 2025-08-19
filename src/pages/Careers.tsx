import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const openPositions = [
    {
      id: 1,
      title: 'Су-шеф',
      department: 'Кухня',
      type: 'Полная занятость',
      experience: '3-5 лет',
      salary: '80,000 - 120,000 ₽',
      location: 'Москва',
      description: 'Ищем опытного су-шефа для работы в команде нашего ресторана. Кандидат должен иметь опыт работы в премиальных ресторанах.',
      requirements: [
        'Опыт работы су-шефом от 3 лет',
        'Знание европейской кухни',
        'Умение работать в команде',
        'Креативность и внимание к деталям',
        'Знание санитарных норм'
      ],
      responsibilities: [
        'Помощь шеф-повару в управлении кухней',
        'Контроль качества блюд',
        'Обучение младшего персонала',
        'Разработка новых блюд',
        'Контроль запасов продуктов'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Медицинская страховка',
        'Обучение и развитие',
        'Питание в ресторане',
        'Премии за результат'
      ]
    },
    {
      id: 2,
      title: 'Официант',
      department: 'Сервис',
      type: 'Полная занятость',
      experience: '1-3 года',
      salary: '50,000 - 80,000 ₽',
      location: 'Москва',
      description: 'Приглашаем профессионального официанта для работы в нашем ресторане высокой кухни.',
      requirements: [
        'Опыт работы официантом от 1 года',
        'Знание этикета обслуживания',
        'Коммуникабельность',
        'Презентабельный внешний вид',
        'Знание английского языка приветствуется'
      ],
      responsibilities: [
        'Обслуживание гостей ресторана',
        'Консультирование по меню',
        'Прием заказов',
        'Подача блюд и напитков',
        'Поддержание чистоты в зале'
      ],
      benefits: [
        'Гибкий график работы',
        'Чаевые',
        'Обучение винной карте',
        'Карьерный рост',
        'Дружный коллектив'
      ]
    },
    {
      id: 3,
      title: 'Бармен',
      department: 'Бар',
      type: 'Полная занятость',
      experience: '2-4 года',
      salary: '60,000 - 90,000 ₽',
      location: 'Москва',
      description: 'Ищем талантливого бармена для работы в нашем баре. Приветствуется знание классических и авторских коктейлей.',
      requirements: [
        'Опыт работы барменом от 2 лет',
        'Знание классических коктейлей',
        'Умение работать с кофемашиной',
        'Креативность',
        'Стрессоустойчивость'
      ],
      responsibilities: [
        'Приготовление коктейлей и напитков',
        'Обслуживание гостей за барной стойкой',
        'Поддержание чистоты бара',
        'Контроль запасов',
        'Создание новых коктейлей'
      ],
      benefits: [
        'Творческая работа',
        'Обучение новым техникам',
        'Участие в конкурсах',
        'Хорошие чаевые',
        'Профессиональное развитие'
      ]
    },
    {
      id: 4,
      title: 'Менеджер зала',
      department: 'Управление',
      type: 'Полная занятость',
      experience: '3-5 лет',
      salary: '70,000 - 100,000 ₽',
      location: 'Москва',
      description: 'Требуется опытный менеджер зала для координации работы сервисной команды и обеспечения высокого уровня обслуживания.',
      requirements: [
        'Опыт управления командой от 3 лет',
        'Знание ресторанного бизнеса',
        'Лидерские качества',
        'Умение решать конфликты',
        'Высшее образование приветствуется'
      ],
      responsibilities: [
        'Управление командой официантов',
        'Контроль качества обслуживания',
        'Решение жалоб гостей',
        'Планирование смен',
        'Обучение персонала'
      ],
      benefits: [
        'Руководящая позиция',
        'Возможность влиять на процессы',
        'Карьерный рост',
        'Бонусы от выручки',
        'Профессиональное развитие'
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: 'DollarSign',
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда и премии за результат'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Возможности для профессионального развития'
    },
    {
      icon: 'Heart',
      title: 'Медицинская страховка',
      description: 'Полный пакет медицинского страхования'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение',
      description: 'Регулярные тренинги и мастер-классы'
    },
    {
      icon: 'Coffee',
      title: 'Питание',
      description: 'Бесплатное питание во время смены'
    },
    {
      icon: 'Users',
      title: 'Команда',
      description: 'Дружный и профессиональный коллектив'
    }
  ];

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: ''
    });
  };

  const handleChange = (e) => {
    setApplicationData({
      ...applicationData,
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Карьера в TOKKA</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к нашей команде профессионалов и развивайтесь в индустрии гостеприимства
          </p>
        </div>

        {/* Company Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">Почему стоит работать с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-secondary mb-6">Открытые вакансии</h2>
            <div className="space-y-6">
              {openPositions.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                          <Badge variant="outline">{job.location}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{job.salary}</p>
                        <p className="text-sm text-muted-foreground">Опыт: {job.experience}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => setSelectedJob(job)}
                        className="flex-1"
                      >
                        Подробнее
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setApplicationData({...applicationData, position: job.title})}
                      >
                        Откликнуться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} />
                  Отправить резюме
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input
                      name="name"
                      value={applicationData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={applicationData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Желаемая позиция</label>
                    <select
                      name="position"
                      value={applicationData.position}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Выберите позицию</option>
                      {openPositions.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="other">Другая позиция</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Опыт работы</label>
                    <select
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Выберите опыт</option>
                      <option value="no-experience">Без опыта</option>
                      <option value="1-2">1-2 года</option>
                      <option value="3-5">3-5 лет</option>
                      <option value="5+">Более 5 лет</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сопроводительное письмо</label>
                    <Textarea
                      name="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={handleChange}
                      placeholder="Расскажите о себе и своей мотивации..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Culture */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Наша культура</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Работа в TOKKA</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Мы создаем среду, где каждый сотрудник может раскрыть свой потенциал 
                    и внести вклад в успех команды. Наша философия основана на взаимном 
                    уважении, профессионализме и стремлении к совершенству.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Открытая коммуникация
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Поддержка инициатив
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Баланс работы и жизни
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Признание достижений
                    </li>
                  </ul>
                </div>
                <div className="bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Отзывы сотрудников</h4>
                  <blockquote className="text-sm italic mb-4">
                    "Работаю в TOKKA уже 3 года. Здесь я не только развиваюсь профессионально, 
                    но и чувствую себя частью большой семьи. Руководство всегда поддерживает 
                    наши идеи и помогает в реализации проектов."
                  </blockquote>
                  <cite className="text-sm font-medium">— Анна, су-шеф</cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{selectedJob.title}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">{selectedJob.department}</Badge>
                    <Badge variant="outline">{selectedJob.type}</Badge>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedJob(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Зарплата</p>
                  <p className="font-semibold">{selectedJob.salary}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Опыт</p>
                  <p className="font-semibold">{selectedJob.experience}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Описание</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedJob.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Требования</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Обязанности</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="ArrowRight" size={16} className="text-primary mt-0.5" />
                      <span className="text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Что мы предлагаем</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="Star" size={16} className="text-yellow-500 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className="w-full"
                onClick={() => {
                  setApplicationData({...applicationData, position: selectedJob.title});
                  setSelectedJob(null);
                }}
              >
                Откликнуться на вакансию
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Careers;