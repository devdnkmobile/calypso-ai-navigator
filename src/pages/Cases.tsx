import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cases = () => {
  const cases = [
    {
      city: "Сыктывкар",
      industry: "Торговля",
      challenge: "Недостаточное количество лидов, проблемы с обслуживанием клиентов",
      results: [
        { metric: "Автоматизация процессов продаж", positive: true },
        { metric: "Рост продаж на 15% по всей сети АЗС", positive: true },
        { metric: "В некоторых точках рост до 50%", positive: true },
        { metric: "Улучшение качества обслуживания", positive: true },
      ],
    },
    {
      city: "Екатеринбург",
      industry: "Логистика",
      challenge: "Высокие операционные издержки, неэффективное управление ресурсами",
      results: [
        { metric: "Снижение рисков мошенничества до 30%", positive: true },
        { metric: "Оптимизация маршрутов доставки", positive: true },
        { metric: "Сокращение времени обработки заказов", positive: true },
      ],
    },
    {
      city: "Оренбург",
      industry: "Производство",
      challenge: "Отсутствие прозрачности в работе с внешними вендорами",
      results: [
        { metric: "Внедрение системы контроля поставщиков", positive: true },
        { metric: "Автоматизация документооборота", positive: true },
        { metric: "Снижение операционных рисков", positive: true },
      ],
    },
    {
      city: "Омск",
      industry: "Государственный сектор",
      challenge: "Необходимость интеграции внутренних систем",
      results: [
        { metric: "Интеграция всех ключевых систем (CRM, ERP)", positive: true },
        { metric: "Размещение в закрытом контуре", positive: true },
        { metric: "Передача данных без сторонних сервисов", positive: true },
        { metric: "Повышение прозрачности данных", positive: true },
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
            <h1 className="text-4xl md:text-5xl font-bold">Кейсы внедрения</h1>
            <p className="text-xl text-muted-foreground">
              Реальные результаты внедрения наших решений в различных отраслях
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="border-border bg-secondary">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Реализованных проектов</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-secondary">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Снижение рисков</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-secondary">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">15%+</div>
                <div className="text-sm text-muted-foreground">Рост продаж</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-secondary">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Работа систем</div>
              </CardContent>
            </Card>
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
                      <CardTitle className="text-2xl mb-2">{caseItem.city}</CardTitle>
                      <Badge variant="secondary">{caseItem.industry}</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-muted-foreground">Задача:</h4>
                    <p className="text-foreground">{caseItem.challenge}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-4">Результаты:</h4>
                  <div className="space-y-3">
                    {caseItem.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-start gap-3">
                        {result.positive ? (
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        )}
                        <span className="text-muted-foreground">{result.metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">
              Как мы работаем
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Анализ бизнес-процессов",
                  description: "Глубокое изучение специфики вашего бизнеса и выявление точек роста",
                },
                {
                  step: "02",
                  title: "Разработка решения",
                  description: "Создание индивидуального решения на базе наших продуктов",
                },
                {
                  step: "03",
                  title: "Внедрение",
                  description: "Интеграция в закрытый контур с минимальным влиянием на процессы",
                },
                {
                  step: "04",
                  title: "Поддержка",
                  description: "Постоянный мониторинг, оптимизация и техническая поддержка",
                },
              ].map((item, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold text-accent/30">
                        {item.step}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
