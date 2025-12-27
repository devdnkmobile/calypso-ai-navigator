import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    automation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время для подготовки архитектуры и расчёта",
    });
    setFormData({ name: "", company: "", contact: "", automation: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@calypso-ai.com",
      link: "mailto:info@calypso-ai.com",
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      link: "tel:+74951234567",
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "Москва, Россия",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Хотите внедрить ИИ в вашу компанию?</h1>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку — мы подготовим архитектуру и расчет для оптимизации ваших процессов
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border hover-lift">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Форма заявки</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Имя *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Компания *
                    </label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Название компании"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-sm font-medium">
                      Телефон / Email *
                    </label>
                    <Input
                      id="contact"
                      required
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      placeholder="+7 (999) 123-45-67 или email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="automation" className="text-sm font-medium">
                      Что хотите автоматизировать *
                    </label>
                    <Textarea
                      id="automation"
                      required
                      value={formData.automation}
                      onChange={(e) =>
                        setFormData({ ...formData, automation: e.target.value })
                      }
                      placeholder="Опишите процессы, которые хотите автоматизировать с помощью ИИ"
                      rows={6}
                    />
                  </div>

                  <Button type="submit" variant="calypso" size="lg" className="w-full">
                    Отправить заявку
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
