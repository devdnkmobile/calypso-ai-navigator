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
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-30">
              <img
                src={heroImage}
                alt="AI Network Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32 text-center">
              <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Интеллектуальные{" "}
                  <span className="text-accent">ИИ-сотрудники</span> для вашего бизнеса
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  Создаём решения на основе нейронных сетей и LLM, которые автоматизируют бизнес-процессы и приносят реальные результаты
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="calypso" size="xl" asChild className="bg-accent hover:bg-accent/90">
                    <Link to="/contacts">
                      Обсудить проект
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                    <Link to="/products">Наши решения</Link>
                  </Button>
                </div>
              </div>
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <img
                src={heroImage}
                alt="AI Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-6 md:px-12 lg:px-16 py-16 md:py-20 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Готовы автоматизировать ваш бизнес?
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  Свяжитесь с нами для обсуждения вашего проекта и получите персональное предложение
                </p>
                <Button variant="calypso" size="xl" asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/contacts">
                    Связаться с нами
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
