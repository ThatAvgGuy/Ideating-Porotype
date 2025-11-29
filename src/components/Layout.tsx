import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SAFASAHAR Logo" className="h-12 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('nav.products')}
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/pricing') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('nav.pricing')}
            </Link>
            <Link
              to="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/how-it-works') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('nav.howItWorks')}
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language === 'en' ? 'नेपाली' : 'English'}</span>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{t('footer.copyright')}</p>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
