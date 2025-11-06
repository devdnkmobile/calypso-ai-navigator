import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Shield, Gauge, Layers } from "lucide-react";
import techImage from "@/assets/technologies-stack.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Technologies = () => {
  const techStack = [
    {
      category: "LLM и ИИ-модели",
      items: ["GPT", "Claude", "Mistral", "Llama"],
    },
    {
      category: "Обработка данных",
      items: ["ASR (Speech Recognition)", "NLP (Natural Language Processing)", "CV (Computer Vision)", "Vector DB"],
    },
    {
      category: "Оркестрация",
      items: ["n8n", "LangChain", "LlamaIndex", "MCP (Model Context Protocol)"],
    },
    {
      category: "Инфраструктура",
      items: ["Python", "FastAPI", "Kubernetes", "Docker"],
    },
    {
      category: "Хранение и поиск",
      items: ["OpenSearch", "Vector DB", "PostgreSQL", "Redis"],
    },
    {
      category: "Аналитика",
      items: ["Grafana", "Superset", "Prometheus", "ELK Stack"],
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Работа в закрытом контуре",
      description: "Все данные остаются на серверах клиента, обеспечивая максимальную безопасность",
    },
    {
      icon: Layers,
      title: "Гибкая интеграция",
      description: "Легкая интеграция с существующими корпоративными системами (CRM, ERP и др.)",
    },
    {
      icon: Gauge,
      title: "Модульная архитектура",
      description: "Возможность подключения только необходимых компонентов и масштабирования",
    },
    {
      icon: Database,
      title: "Единая экосистема",
      description: "Централизованное управление данными и аналитикой на единой платформе",
    },
    {
      icon: Cloud,
      title: "Масштабируемость",
      description: "Kubernetes-оркестрация позволяет легко масштабировать решения",
    },
    {
      icon: Code,
      title: "Открытые технологии",
      description: "Используем проверенные open-source решения с активным сообществом",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Технологии</h1>
            <p className="text-xl text-muted-foreground">
              Современный технологический стек для создания интеллектуальных ИИ-решений
            </p>
          </div>
          
          <div className="mb-16">
            <img
              src={techImage}
              alt="Technology Stack"
              className="rounded-2xl shadow-2xl w-full max-w-5xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Description */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Наш технологический стек
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Компания Calypso применяет современный технологический стек для создания 
              интеллектуальных ИИ-сотрудников, интегрируемых в корпоративные процессы. 
              Архитектура ориентирована на безопасность, масштабируемость и работу в закрытом контуре.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-accent">
                    {tech.category}
                  </h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Преимущества архитектуры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover-lift border-border bg-background">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <advantage.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold">Безопасность данных</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Все решения Calypso работают в закрытом контуре клиента, что обеспечивает 
                высокий уровень кибербезопасности. Данные не передаются третьим лицам и 
                полностью контролируются вашей компанией.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Размещение в закрытом контуре",
                  "Отсутствие передачи данных третьим лицам",
                  "Соответствие стандартам безопасности",
                  "Полный контроль над инфраструктурой",
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

      <Footer />
    </div>
  );
};

export default Technologies;
