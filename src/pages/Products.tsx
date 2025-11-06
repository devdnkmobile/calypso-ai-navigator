import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, BarChart3, Radio, MessageSquare, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const products = [
    {
      icon: Bot,
      title: "ИИ-менеджер",
      description: "Автоматизация управления задачами, проектами и коммуникациями",
      features: [
        "Автоматическое распределение задач",
        "Контроль сроков и приоритетов",
        "Интеграция с CRM и ERP системами",
        "Аналитика эффективности команды",
      ],
    },
    {
      icon: BarChart3,
      title: "ИИ-аналитика",
      description: "Глубокий анализ данных и формирование инсайтов для бизнеса",
      features: [
        "Сбор и обработка больших объёмов данных",
        "Предиктивная аналитика",
        "Автоматические дашборды и отчёты",
        "Выявление трендов и аномалий",
      ],
    },
    {
      icon: Radio,
      title: "ИИ-диспетчер",
      description: "Оптимизация логистических и операционных процессов",
      features: [
        "Умное распределение ресурсов",
        "Оптимизация маршрутов и графиков",
        "Мониторинг в режиме реального времени",
        "Снижение операционных издержек",
      ],
    },
    {
      icon: MessageSquare,
      title: "ИИ-ассистент",
      description: "Виртуальный помощник для сотрудников и клиентов",
      features: [
        "Обработка запросов 24/7",
        "Мультиязычная поддержка",
        "Интеграция с корпоративными системами",
        "Обучение на базе знаний компании",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Наши продукты</h1>
            <p className="text-xl text-muted-foreground">
              Комплексные решения для автоматизации бизнес-процессов на основе искусственного интеллекта
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">
              Гибкая интеграция
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              Все наши продукты легко интегрируются с существующей корпоративной 
              инфраструктурой и работают в закрытом контуре вашей компании
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {["CRM", "ERP", "1C", "SAP", "Битрикс24", "Jira", "Confluence"].map((system, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg bg-background border border-border font-medium"
                >
                  {system}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8 p-8 md:p-12 rounded-2xl bg-secondary">
            <h2 className="text-3xl md:text-4xl font-bold">
              Хотите узнать больше о наших решениях?
            </h2>
            <p className="text-lg text-muted-foreground">
              Запросите демонстрацию или консультацию с нашими экспертами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="calypso" size="lg" asChild>
                <Link to="/contacts">
                  Связаться с н��ми
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/cases">Посмотреть кейсы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
