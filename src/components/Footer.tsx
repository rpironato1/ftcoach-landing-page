import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import TiktokIcon from './TiktokIcon';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'TikTok', href: '#', icon: TiktokIcon },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  const footerLinks = {
    product: [
      { name: t('navigation.features'), href: '/features' },
      { name: t('navigation.pricing'), href: '/pricing' },
      { name: t('navigation.ai'), href: '/ai' },
    ],
    company: [
      { name: t('navigation.about'), href: '/about' },
      { name: t('navigation.team'), href: '/team' },
      { name: t('navigation.investors'), href: '/investors' },
      { name: t('navigation.press'), href: '/press' },
    ],
    support: [
      { name: t('navigation.support'), href: '/support' },
      { name: t('navigation.help'), href: '/help' },
      { name: t('navigation.contact'), href: '/contact' },
      { name: t('navigation.faq'), href: '/faq' },
    ],
    legal: [
      { name: t('navigation.terms'), href: '/terms' },
      { name: t('navigation.privacy'), href: '/privacy' },
      { name: t('navigation.cookies'), href: '/cookies' },
      { name: t('navigation.refund'), href: '/refund' },
      { name: t('navigation.accessibility'), href: '/accessibility' },
    ],
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 pr-8">
            <h3 className="text-xl font-bold">FitCoach</h3>
            <p className="mt-4 text-muted-foreground">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold tracking-wide">{t('footer.product')}</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wide">{t('footer.company')}</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-1 md:grid-cols-1">
            <div>
              <h4 className="font-semibold tracking-wide">{t('footer.support')}</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.support.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-muted-foreground hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:mt-8">
              <h4 className="font-semibold tracking-wide">{t('footer.legal')}</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-muted-foreground hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FitCoach. {t('footer.rights')}.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            {/* Compliance badges removed as they were broken placeholders */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;