import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Workflow, RefreshCw, Settings, Route, Building } from "lucide-react";
import workflowImage from "@/assets/workflow-01.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const N8N = () => {
  const capabilities = [
    {
      icon: RefreshCw,
      title: "Автоматизация рутинных цепочек",
      description: "Избавьте сотрудников от повторяющихся задач — автоматизируйте типовые процессы",
    },
    {
      icon: Settings,
      title: "Управление моделями",
      description: "Централизованное управление ASR, LLM, LVM моделями в едином интерфейсе",
    },
    {
      icon: Route,
      title: "Маршрутизация данных",
      description: "Автоматическая маршрутизация данных между системами компании",
    },
    {
      icon: Building,
      title: "Сложные бизнес-процессы",
      description: "Построение сложных бизнес-процессов без переписывания существующих систем",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Автоматизация через N8N</h1>
            <p className="text-xl text-muted-foreground">
              Создаём гибкие системы, которые соединяют ИИ-модели, CRM, ERP, базы данных и рабочие процессы сотрудников в один сценарный контур
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Illustration */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img
                src={workflowImage}
                alt="N8N Workflow Example"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Возможности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-border bg-background hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary flex-shrink-0">
                      <capability.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества N8N</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Визуальный редактор процессов",
                "Интеграция с 400+ сервисами",
                "Self-hosted решение",
                "Открытый исходный код",
                "Гибкая настройка логики",
                "Работа в закрытом контуре",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
                  <Workflow className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Хотите автоматизировать процессы через N8N?
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы спроектируем и внедрим систему автоматизации под ваши задачи
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

export default N8N;
