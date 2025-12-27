import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mic, Stethoscope, ShoppingCart, Headphones, Eye, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const solutions = [
    {
      icon: Mic,
      title: "Платформа речевой аналитики",
      description: "Для АЗС / аптек / ритейла",
      features: [
        "Автоматический сбор аудио с устройств",
        "Преобразование речи в текст",
        "Семантический анализ диалогов",
        "Рекомендации для HR и продаж",
      ],
    },
    {
      icon: Stethoscope,
      title: "AI-ассистент врача",
      description: "Персональный помощник для медицинских специалистов",
      features: [
        "Обработка консультаций в реальном времени",
        "Автоматическое заполнение документации",
        "Рекомендации по протоколам лечения",
        "Снижение ошибок на 65%",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Автоматизация отделов продаж",
      description: "AI-система для повышения конверсии",
      features: [
        "Анализ диалогов менеджеров",
        "Автоматические подсказки",
        "Контроль стандартов обслуживания",
        "Рост продаж до 50%",
      ],
    },
    {
      icon: Headphones,
      title: "AI-помощник оператора call-центра",
      description: "Интеллектуальная поддержка операторов",
      features: [
        "Подсказки в реальном времени",
        "Автоматическая классификация обращений",
        "Формирование отчётов",
        "Сокращение времени обработки",
      ],
    },
    {
      icon: Eye,
      title: "Система контроля процессов (LVM)",
      description: "Компьютерное зрение для мониторинга",
      features: [
        "Детекция и классификация объектов",
        "OCR и video-аналитика",
        "Контроль безопасности",
        "Мониторинг нарушений",
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
            <h1 className="text-4xl md:text-5xl font-bold">Решения</h1>
            <p className="text-xl text-muted-foreground">
              Готовые AI-решения для автоматизации бизнес-процессов. Каждое решение можно адаптировать под инфраструктуру клиента.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, fIndex) => (
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

      {/* Adaptation Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl font-bold">
              Адаптация под вашу инфраструктуру
            </h2>
            <p className="text-lg text-muted-foreground">
              Все решения легко интегрируются с существующими системами и работают 
              в закрытом контуре вашей компании
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {["CRM", "ERP", "1C", "SAP", "Битрикс24", "Собственные системы"].map((system, index) => (
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
              Нужно решение под вашу задачу?
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку — мы подготовим архитектуру и расчёт
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="calypso" size="lg" asChild>
                <Link to="/contacts">
                  Оставить заявку
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
