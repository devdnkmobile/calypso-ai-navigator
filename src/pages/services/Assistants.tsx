import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Pill, Headphones, ShoppingCart, Lightbulb, ClipboardList, CheckCircle, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Assistants = () => {
  const assistantTypes = [
    {
      icon: Stethoscope,
      title: "Медицинский ассистент",
      description: "Помощник врача для обработки консультаций и заполнения документации",
    },
    {
      icon: Pill,
      title: "Ассистент менеджера аптеки",
      description: "AI-помощник для управления запасами и консультирования клиентов",
    },
    {
      icon: Headphones,
      title: "Ассистент call-центра",
      description: "Поддержка операторов в реальном времени с подсказками и скриптами",
    },
    {
      icon: ShoppingCart,
      title: "Ассистент продавца",
      description: "Рекомендации по продуктам и помощь в обслуживании клиентов",
    },
  ];

  const functions = [
    {
      icon: Lightbulb,
      title: "Генерация подсказок",
      description: "Контекстные подсказки в режиме реального времени",
    },
    {
      icon: ClipboardList,
      title: "Анализ задач",
      description: "Автоматический анализ текущих задач и приоритизация",
    },
    {
      icon: CheckCircle,
      title: "Рекомендации действий",
      description: "AI-рекомендации на основе данных компании",
    },
    {
      icon: FileText,
      title: "Формирование отчётов",
      description: "Автоматическое создание отчётов и документации",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">AI-ассистенты</h1>
            <p className="text-xl text-muted-foreground">
              Персональные ассистенты для сотрудников, работающие в режиме реального времени и обученные на данных компании
            </p>
          </div>
        </div>
      </section>

      {/* Assistant Types */}
      <section className="pb-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Примеры ассистентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {assistantTypes.map((assistant, index) => (
              <Card key={index} className="border-border hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary flex-shrink-0">
                      <assistant.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{assistant.title}</h3>
                      <p className="text-muted-foreground">{assistant.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Функции ассистентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {functions.map((func, index) => (
              <Card key={index} className="border-border bg-background">
                <CardContent className="pt-6 text-center">
                  <div className="p-3 rounded-lg bg-secondary w-fit mx-auto mb-4">
                    <func.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{func.title}</h3>
                  <p className="text-muted-foreground text-sm">{func.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Нужен AI-ассистент для вашей отрасли?
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы создадим персонального ассистента, обученного на данных вашей компании
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

export default Assistants;
