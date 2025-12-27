import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cases = () => {
  const cases = [
    {
      title: "Речевая аналитика на 600+ торговых точках",
      industry: "Ритейл",
      results: [
        { metric: "Время обработки сократилось на 90%", icon: Clock },
        { metric: "Повышение качества обслуживания на 27%", icon: TrendingUp },
        { metric: "Внедрение LLM для анализа диалогов в реальном времени", icon: CheckCircle },
      ],
      description: "Автоматизация контроля качества обслуживания на сети АЗС с использованием ASR и LLM моделей.",
    },
    {
      title: "AI-ассистент врача",
      industry: "Медицина",
      results: [
        { metric: "Время на обработку консультации сокращено на 40%", icon: Clock },
        { metric: "Снижение ошибок заполнения документации на 65%", icon: TrendingUp },
        { metric: "Автоматические рекомендации по протоколам", icon: CheckCircle },
      ],
      description: "Персональный AI-ассистент для врачей, работающий в режиме реального времени.",
    },
    {
      title: "Автоматизация бизнес-процессов",
      industry: "Корпоративный сектор",
      results: [
        { metric: "130+ процессов автоматизировано", icon: CheckCircle },
        { metric: "Экономия 14 000 часов рабочего времени в квартал", icon: Clock },
        { metric: "Единый AI-контур для всех сервисов", icon: TrendingUp },
      ],
      description: "Комплексная автоматизация через N8N и MCP-сервер для крупной компании.",
    },
  ];

  const stats = [
    { value: "600+", label: "Торговых точек" },
    { value: "90%", label: "Сокращение времени" },
    { value: "130+", label: "Автоматизированных процессов" },
    { value: "14 000", label: "Часов экономии в квартал" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Кейсы</h1>
            <p className="text-xl text-muted-foreground">
              Реальные результаты внедрений. Показываем, как наши решения работают в бизнесе.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border bg-secondary">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{caseItem.title}</CardTitle>
                      <Badge variant="secondary">{caseItem.industry}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-4">Результаты:</h4>
                  <div className="space-y-3">
                    {caseItem.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-start gap-3">
                        <result.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{result.metric}</span>
                      </div>
                    ))}
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
              Хотите таких же результатов?
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку — мы подготовим архитектуру и расчёт для вашей компании
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

export default Cases;
