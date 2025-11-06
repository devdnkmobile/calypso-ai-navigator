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
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
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
            <h1 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами удобным способом
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
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-accent" />
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
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Компания
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Название компании"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Расскажите о вашем проекте"
                      rows={6}
                    />
                  </div>

                  <Button type="submit" variant="calypso" size="lg" className="w-full">
                    Отправить сообщение
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Готовы начать?</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда открыты для новых проектов и партнёрств. Свяжитесь с нами, 
              чтобы обсудить, как наши решения могут помочь вашему бизнесу.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
