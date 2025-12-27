import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Settings, Code, Layout, Rocket, TrendingUp, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Workflow = () => {
  const stages = [
    {
      step: "01",
      icon: Search,
      title: "Анализ задач компании",
      description: "Глубокое изучение бизнес-процессов, выявление точек роста и определение приоритетных задач для автоматизации",
    },
    {
      step: "02",
      icon: Settings,
      title: "Формирование архитектуры",
      description: "Проектирование AI-ядра, процессов, сервисов и интеграций под специфику вашего бизнеса",
    },
    {
      step: "03",
      icon: Code,
      title: "Разработка и обучение моделей",
      description: "Создание и обучение AI-моделей на данных компании, настройка под конкретные задачи",
    },
    {
      step: "04",
      icon: Layout,
      title: "Разработка интерфейсов и систем",
      description: "Создание удобных интерфейсов для сотрудников и интеграция с существующими системами",
    },
    {
      step: "05",
      icon: Rocket,
      title: "Пилотный запуск",
      description: "Тестирование решения на ограниченном контуре, сбор обратной связи и оптимизация",
    },
    {
      step: "06",
      icon: TrendingUp,
      title: "Масштабирование",
      description: "Раскатка решения по всей компании, обучение сотрудников и мониторинг эффективности",
    },
    {
      step: "07",
      icon: Headphones,
      title: "Поддержка и развитие",
      description: "Постоянный мониторинг, техническая поддержка и развитие функционала системы",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Этапы работы</h1>
            <p className="text-xl text-muted-foreground">
              Как мы внедряем AI-решения в вашу компанию — от анализа до масштабирования
            </p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {stages.map((stage, index) => (
              <Card key={index} className="border-border hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-4xl font-bold text-accent/30">
                        {stage.step}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-secondary flex-shrink-0">
                        <stage.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{stage.title}</h3>
                        <p className="text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Готовы начать?
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку — мы начнём с анализа ваших задач и подготовим архитектуру решения
            </p>
            <Button variant="calypso" size="lg" asChild>
              <Link to="/contacts">
                Оставить заявку
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workflow;
