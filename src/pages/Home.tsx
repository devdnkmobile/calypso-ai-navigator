import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mic, Bot, Workflow, Eye, Server } from "lucide-react";
import heroImage from "@/assets/hero-apple-banner.jpg";
import workflowImage from "@/assets/workflow-01.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const keyPoints = [
    "Автоматизация процессов на основе LLM и LVM моделей",
    "Глубокая интеграция с системами N8N и MCP-сервером",
    "Разработка высоконадежных решений для средних и больших компаний",
    "Опыт внедрения в распределённых инфраструктурах (банки, ритейл, медицина, нефтегаз)",
  ];

  const services = [
    {
      icon: Mic,
      title: "Речевые системы (ASR + LLM)",
      description: "Автоматическая аналитика диалогов, контроль стандартов, рекомендации",
      link: "/services/speech",
    },
    {
      icon: Bot,
      title: "Персональные AI-ассистенты",
      description: "Для врачей, провизоров, операторов, менеджеров — обучены на данных компании",
      link: "/services/assistants",
    },
    {
      icon: Workflow,
      title: "Автоматизация через N8N",
      description: "Связка сотрудников, отделов и данных в единую систему",
      link: "/services/n8n",
    },
    {
      icon: Eye,
      title: "Компьютерное зрение",
      description: "Мониторинг процессов, безопасность, контроль нарушений",
      link: "/services/mcp",
    },
    {
      icon: Server,
      title: "MCP-интеграции",
      description: "Единый AI-контур для всех внутренних сервисов компании",
      link: "/services/mcp",
    },
  ];

  const stats = [
    { value: "90%", label: "Сокращение времени обработки" },
    { value: "130+", label: "Автоматизированных процессов" },
    { value: "24/7", label: "Работа AI-систем" },
    { value: "600+", label: "Торговых точек" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
        <div className="container-custom">
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-50">
              <img
                src={heroImage}
                alt="Hero Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 text-center">
              <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
                  Автоматизируем бизнес-процессы с помощью Искусственного Интеллекта
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light">
                  Мы создаем AI-системы, которые берут на себя рутину, помогают сотрудникам принимать решения и повышают эффективность компаний на 30–300%.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-md mx-auto">
            <Button variant="default" size="lg" asChild className="bg-black text-white hover:bg-black/90 font-medium">
              <Link to="/contacts">
                Оставить заявку
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-border hover:bg-secondary font-medium">
              <Link to="/products">Наши решения</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-secondary">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Что мы делаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Создаём AI-решения для автоматизации корпоративных процессов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-border group">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-secondary w-fit">
                      <service.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Illustration */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Пример AI-процесса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Визуализация автоматизированного бизнес-процесса на базе N8N
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img
                src={workflowImage}
                alt="AI Workflow Example"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-40">
              <img
                src={heroImage}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-6 md:px-12 lg:px-16 py-20 md:py-24 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  Хотите внедрить ИИ в вашу компанию?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-light">
                  Оставьте заявку — мы подготовим архитектуру и расчет для оптимизации ваших процессов
                </p>
                <Button variant="default" size="xl" asChild className="bg-white text-black hover:bg-white/90 font-medium">
                  <Link to="/contacts">
                    Оставить заявку
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
