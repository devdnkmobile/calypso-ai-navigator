import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const principles = [
    "Мы не делаем «демо-продукты». Мы создаем системы, которые работают 24/7 и приносят реальную пользу бизнесу.",
    "Каждое наше решение масштабируемо, надежно и интегрируется в реальную инфраструктуру компании.",
    "Работаем с бизнесом, который ежедневно сталкивается с большими потоками данных, сложными операциями и высокой стоимостью ошибок.",
    "От серверов до мобильных приложений сотрудников — полная интеграция.",
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
              Технологическая компания, создающая продукты на основе искусственного интеллекта для автоматизации корпоративных процессов
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
              Кто мы
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Мы — технологическая компания, создающая продукты на основе искусственного 
                интеллекта для автоматизации корпоративных процессов.
              </p>
              <p>
                Работаем с бизнесом, который ежедневно сталкивается с большими потоками данных, 
                сложными операциями и высокой стоимостью ошибок.
              </p>
              <p>
                Каждое наше решение масштабируемо, надежно и интегрируется в реальную 
                инфраструктуру компании — от серверов до мобильных приложений сотрудников.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Наш подход
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{principle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Отрасли внедрения</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {["Банки", "Ритейл", "Медицина", "Нефтегаз", "Логистика", "Производство"].map((industry, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-background border border-border font-medium"
                >
                  {industry}
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
