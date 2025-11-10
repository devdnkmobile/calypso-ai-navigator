import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Наша миссия",
      description: "Создание интеллектуальных решений, которые трансформируют бизнес-процессы и приносят измеримые результаты",
    },
    {
      icon: Users,
      title: "Наша команда",
      description: "Эксперты в области ИИ, машинного обучения и автоматизации бизнес-процессов",
    },
    {
      icon: Award,
      title: "Наш подход",
      description: "Индивидуальные решения, адаптированные под специфику вашего бизнеса и внедряемые в закрытом контуре",
    },
    {
      icon: TrendingUp,
      title: "Наши результаты",
      description: "Доказанная эффективность: снижение рисков до 30%, рост продаж до 15%",
    },
  ];

  const partners = [
    { name: "NVIDIA", logo: "NVIDIA" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "AWS", logo: "AWS" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">О компании</h1>
            <p className="text-xl text-muted-foreground">
              Calypso специализируется на создании интеллектуальных ИИ-сотрудников и систем автоматизации бизнес-процессов
            </p>
          </div>
          
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-50">
              <img
                src={aboutImage}
                alt="Calypso Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24"></div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Технологическая экспертиза
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Компания Calypso специализируется на создании интеллектуальных ИИ-сотрудников 
                и систем автоматизации бизнес-процессов на основе нейронных сетей и больших 
                языковых моделей (LLM).
              </p>
              <p>
                Решения Calypso внедряются в закрытых контурах клиентов, выполняют сбор и 
                анализ данных, автоматизируют коммуникации и формируют аналитические отчёты.
              </p>
              <p>
                Наша архитектура ориентирована на безопасность, масштабируемость и работу 
                в закрытом контуре, что гарантирует высокий уровень защиты данных и полный 
                контроль над процессами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Технологические партнёры</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="text-2xl md:text-3xl font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Целевая аудитория
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Государственные и частные компании",
                "Руководители направлений автоматизации и цифровизации",
                "Топ-менеджеры и IT-директора",
                "Потенциальные партнёры и инвесторы",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
