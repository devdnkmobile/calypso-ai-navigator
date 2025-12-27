import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Shield, Lock, Plug, Brain, Eye } from "lucide-react";
import workflowImage from "@/assets/workflow-02.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MCP = () => {
  const benefits = [
    {
      icon: Server,
      title: "Единая точка доступа",
      description: "Единая точка доступа для всех AI-ассистентов компании",
    },
    {
      icon: Eye,
      title: "Контроль над промптами",
      description: "Полный контроль над промптами и контекстом всех моделей",
    },
    {
      icon: Lock,
      title: "Безопасность и изоляция",
      description: "Изоляция данных между отделами и проектами",
    },
    {
      icon: Plug,
      title: "Подключение любых моделей",
      description: "OpenAI, Llama, локальные, внешние — любые модели через единый интерфейс",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">MCP-сервер</h1>
            <p className="text-xl text-muted-foreground">
              Model Context Protocol — единый слой AI-инфраструктуры, который объединяет сервисы компании с нейромоделями
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-secondary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-background flex-shrink-0">
                    <Brain className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">AI-операционная система компании</h2>
                    <p className="text-muted-foreground text-lg">
                      MCP-сервер — это «операционная система» для AI в вашей компании. Он объединяет 
                      все внутренние сервисы, базы данных и внешние AI-модели в единую экосистему, 
                      обеспечивая централизованное управление, безопасность и масштабируемость.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Illustration */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Архитектура MCP
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Пример взаимодействия агентов через MCP-сервер
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img
                src={workflowImage}
                alt="MCP Architecture"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Что даёт компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Block */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-2xl p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold">Безопасность данных</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                MCP-сервер работает внутри закрытого периметра компании. Все данные остаются 
                под вашим контролем, а доступ к моделям регулируется политиками безопасности.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Работа в закрытом контуре",
                  "Контроль доступа к моделям",
                  "Аудит всех запросов",
                  "Изоляция данных отделов",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Хотите внедрить MCP-сервер?
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы спроектируем AI-инфраструктуру под ваши задачи и масштаб
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

export default MCP;
