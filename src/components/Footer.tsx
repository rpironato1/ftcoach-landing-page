import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe, Instagram, Linkedin } from 'lucide-react';
import TiktokIcon from './TiktokIcon';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">FitCoach</h2>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Português (Brasil)</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.features')}</Link></li>
              <li><Link to="/ai" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.ai')}</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.pricing')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.about')}</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.team')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.help')}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.contact')}</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.faq')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.terms')}</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.privacy')}</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">{t('navigation.cookies')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 FitCoach. {t('footer.rights')}
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <TiktokIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;