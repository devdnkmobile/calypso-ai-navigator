import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mic, FileText, Brain, Search, BarChart3, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Speech = () => {
  const features = [
    {
      icon: Mic,
      title: "Автоматический сбор аудио",
      description: "Сбор аудио с устройств и камер в режиме реального времени",
    },
    {
      icon: FileText,
      title: "Преобразование речи в текст",
      description: "Высокоточное распознавание речи на основе современных ASR моделей",
    },
    {
      icon: Brain,
      title: "Семантический анализ диалогов",
      description: "LLM-анализ содержания разговоров, выявление тем и настроений",
    },
    {
      icon: Search,
      title: "Поиск и фильтрация",
      description: "Быстрый поиск по транскриптам с гибкой системой фильтров",
    },
    {
      icon: BarChart3,
      title: "Отчёты и аналитика",
      description: "Автоматическое формирование отчётов по качеству обслуживания",
    },
    {
      icon: Users,
      title: "Рекомендации для HR и продаж",
      description: "AI-рекомендации для обучения сотрудников и повышения конверсии",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Речевые технологии</h1>
            <p className="text-xl text-muted-foreground">
              Комплексные решения для распознавания и анализа речи на основе современных ASR и LLM
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Что включено</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover-lift">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-secondary w-fit">
                      <feature.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
              Хотите внедрить речевую аналитику?
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку — мы подготовим решение под вашу инфраструктуру
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

export default Speech;
