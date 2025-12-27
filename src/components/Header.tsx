import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О компании", href: "/about" },
    { 
      name: "Направления", 
      href: "#",
      submenu: [
        { name: "Речевые технологии", href: "/services/speech" },
        { name: "AI-ассистенты", href: "/services/assistants" },
        { name: "Автоматизация N8N", href: "/services/n8n" },
        { name: "MCP-сервер", href: "/services/mcp" },
      ]
    },
    { name: "Решения", href: "/products" },
    { name: "Кейсы", href: "/cases" },
    { name: "Технологии", href: "/technologies" },
    { name: "Этапы работы", href: "/workflow" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Calypso</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors">
                    {item.name}
                    <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-black/95 border border-white/10 rounded-lg py-2 min-w-[200px]">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className={`block px-4 py-2 text-sm ${
                            isActive(subitem.href) ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive(item.href) ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
                  )}
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="calypso" size="default" asChild>
              <Link to="/contacts">Оставить заявку</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-white/10">
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full py-2 text-sm font-medium text-white/70"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    {item.name}
                    <ChevronDown size={14} className={isServicesOpen ? "rotate-180" : ""} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className={`block py-2 text-sm ${isActive(subitem.href) ? "text-white" : "text-white/70"}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-sm font-medium ${isActive(item.href) ? "text-white" : "text-white/70"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button variant="calypso" size="default" className="w-full mt-4" asChild>
              <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
                Оставить заявку
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
