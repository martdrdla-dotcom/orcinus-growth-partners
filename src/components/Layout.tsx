import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import orcinusLogo from '@/assets/orcinus-logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { href: '/', label: 'Domů' },
    { href: '/o-nas', label: 'O nás' },
    { href: '/investicni-pristup', label: 'Investiční přístup' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pro-partnery', label: 'Pro partnery' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const footerLinks = [
    { href: '/o-nas', label: 'O nás' },
    { href: '/investicni-pristup', label: 'Investiční přístup' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pro-partnery', label: 'Pro partnery' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/gdpr', label: 'GDPR' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/pravni-upozorneni', label: 'Právní upozornění' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={orcinusLogo} alt="ORCINUS s.r.o." className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/pro-partnery">Nabídněte projekt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-2 text-sm font-medium transition-smooth hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link to="/pro-partnery">Nabídněte projekt</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-subtle border-t mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={orcinusLogo} alt="ORCINUS s.r.o." className="h-8 w-auto" />
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>ORCINUS s.r.o.</p>
                <p>Kubelíkova 1224/42, Žižkov, 130 00 Praha</p>
                <p>IČ: 25953265 | DIČ: CZ25953265</p>
                <p>Tel.: +420 228 226 013</p>
                <p>E‑mail: orcinus@orcinus.cz</p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Navigace</h3>
              <nav className="space-y-2">
                {footerLinks.slice(0, 5).map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Právní informace</h3>
              <nav className="space-y-2">
                {footerLinks.slice(5).map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ORCINUS s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;