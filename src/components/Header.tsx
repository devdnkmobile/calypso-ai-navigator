import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О компании", href: "/about" },
    { name: "Продукты", href: "/products" },
    { name: "Технологии", href: "/technologies" },
    { name: "Кейсы", href: "/cases" },
    { name: "Контакты", href: "/contacts" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Calypso</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="calypso" size="default" asChild>
              <Link to="/contacts">Связаться</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-sm font-medium ${
                  isActive(item.href) ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="calypso" size="default" className="w-full" asChild>
              <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
                Связаться
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
