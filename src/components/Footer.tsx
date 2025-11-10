import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Calypso</h3>
            <p className="text-sm text-white/60">
              Интеллектуальные ИИ-сотрудники и системы автоматизации бизнес-процессов
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/60 hover:text-white transition-colors">
                  Продукты
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-white/60 hover:text-white transition-colors">
                  Технологии
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-white/60 hover:text-white transition-colors">
                  Кейсы
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Продукты</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>ИИ-менеджер</li>
              <li>ИИ-аналитика</li>
              <li>ИИ-диспетчер</li>
              <li>ИИ-ассистент</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/60">
                <Mail size={16} className="mt-0.5 text-white/80" />
                <span>info@calypso-ai.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/60">
                <Phone size={16} className="mt-0.5 text-white/80" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2 text-white/60">
                <MapPin size={16} className="mt-0.5 text-white/80" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Calypso. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
