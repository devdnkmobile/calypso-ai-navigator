import { Card, CardContent } from "@/components/ui/card";
import { Shield, Server, Database, Search, Folder, Workflow } from "lucide-react";
import techImage from "@/assets/technologies-stack.jpg";
import workflowImage from "@/assets/workflow-02.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Technologies = () => {
  const techStack = [
    {
      category: "LLM модели",
      items: ["OpenAI", "Llama", "Gemini", "DeepSeek", "Qwen", "Локальные модели"],
    },
    {
      category: "LVM модели",
      items: ["Детекция объектов", "Классификация", "OCR", "Video-аналитика"],
    },
    {
      category: "Оркестрация",
      items: ["N8N как ядро оркестрации", "MCP сервер как единая AI-шина"],
    },
    {
      category: "Поиск и аналитика",
      items: ["Opensearch для поиска", "Визуализация аналитики"],
    },
    {
      category: "Управление данными",
      items: ["Directus для управления данными"],
    },
    {
      category: "Хранение",
      items: ["MinIO — хранение и потоковая обработка"],
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Закрытый периметр",
      description: "Разрабатываем решения, которые работают внутри закрытых периметров клиентов",
    },
    {
      icon: Server,
      title: "MCP-сервер",
      description: "Единая точка доступа для всех AI-ассистентов с контролем промптов и контекста",
    },
    {
      icon: Workflow,
      title: "N8N оркестрация",
      description: "Гибкое управление моделями и построение сложных бизнес-процессов",
    },
    {
      icon: Database,
      title: "Безопасность данных",
      description: "Изоляция данных и подключение любых моделей — OpenAI, Llama, локальных",
    },
    {
      icon: Search,
      title: "Opensearch",
      description: "Мощный поиск и визуализация аналитики в реальном времени",
    },
    {
      icon: Folder,
      title: "MinIO хранилище",
      description: "Высокопроизводительное хранение и потоковая обработка данных",
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
              Современные модели и инструменты, оптимизированные под корпоративные контуры
            </p>
          </div>
          
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-50">
              <img
                src={techImage}
                alt="Technology Stack"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24"></div>
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
              Мы используем современные модели и инструменты, оптимизированные под корпоративные контуры. 
              Разрабатываем решения, которые работают внутри закрытых периметров клиентов.
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

      {/* Workflow Illustration */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Архитектура AI-процесса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Пример оркестрации AI-агентов через N8N
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img
                src={workflowImage}
                alt="AI Workflow Architecture"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Преимущества нашей архитектуры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <advantage.icon className="h-6 w-6 text-foreground" />
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

      <Footer />
    </div>
  );
};

export default Technologies;
