import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Linkedin } from 'lucide-react';
import { TiktokIcon } from '@/components/icons/TiktokIcon';

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    product: ['features', 'ai', 'pricing', 'support'],
    company: ['about', 'team', 'contact'],
    legal: ['terms', 'privacy', 'cookies', 'accessibility'],
  };

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold">FitCoach</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Fique por dentro das novidades</p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Seu melhor email" />
                <Button type="submit">Inscrever</Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((key) => (
                <li key={key}>
                  <Link to={`/${key}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(`navigation.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((key) => (
                <li key={key}>
                  <Link to={`/${key}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(`navigation.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((key) => (
                <li key={key}>
                  <Link to={`/${key}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(`navigation.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 FitCoach. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TiktokIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;