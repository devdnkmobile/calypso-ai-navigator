import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, LineChart, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai-network.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Интеллектуальные ИИ-сотрудники",
      description: "Автоматизация бизнес-процессов на основе нейронных сетей и больших языковых моделей",
    },
    {
      icon: Zap,
      title: "Быстрое внедрение",
      description: "Решения внедряются в закрытых контурах клиентов с минимальными затратами времени",
    },
    {
      icon: LineChart,
      title: "Аналитика и отчётность",
      description: "Автоматический сбор, анализ данных и формирование аналитических отчётов",
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Работа в закрытом контуре клиента с высоким уровнем кибербезопасности",
    },
  ];

  const stats = [
    { value: "50+", label: "Успешных проектов" },
    { value: "30%", label: "Снижение рисков" },
    { value: "24/7", label: "Работа ИИ-систем" },
    { value: "15%+", label: "Рост продаж" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background -z-10" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Интеллектуальные{" "}
                  <span className="text-gradient">ИИ-сотрудники</span> для вашего бизнеса
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Создаём решения на основе нейронных сетей и LLM, которые автоматизируют бизнес-процессы и приносят реальные результаты
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="calypso" size="xl" asChild>
                  <Link to="/contacts">
                    Обсудить проект
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/products">Наши решения</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={heroImage}
                alt="AI Network Visualization"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Почему выбирают Calypso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши решения помогают компаниям достигать бизнес-целей через автоматизацию и интеллектуальную обработку данных
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Готовы автоматизировать ваш бизнес?
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта и получите персональное предложение
            </p>
            <Button variant="calypso" size="xl" asChild>
              <Link to="/contacts">
                Связаться с нами
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

export default Home;
