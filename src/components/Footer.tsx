import { useTranslation } from 'react-i18next';
import FooterLinkColumn from './footer/FooterLinkColumn';
import SocialLinks from './footer/SocialLinks';

const Footer = () => {
  const { t } = useTranslation();

  const linkSections = [
    {
      title: t('footer.product'),
      links: [
        { name: t('navigation.features'), href: '/features' },
        { name: t('navigation.pricing'), href: '/pricing' },
        { name: t('navigation.ai'), href: '/ai' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { name: t('navigation.about'), href: '/about' },
        { name: t('navigation.team'), href: '/team' },
        { name: t('navigation.investors'), href: '/investors' },
        { name: t('navigation.press'), href: '/press' },
      ],
    },
    {
      title: t('footer.support'),
      links: [
        { name: t('navigation.support'), href: '/support' },
        { name: t('navigation.faq'), href: '/faq' },
        { name: t('navigation.contact'), href: '/contact' },
        { name: t('navigation.help'), href: '/help' },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { name: t('navigation.terms'), href: '/terms' },
        { name: t('navigation.privacy'), href: '/privacy' },
        { name: t('navigation.refund'), href: '/refund' },
        { name: t('navigation.cookies'), href: '/cookies' },
        { name: t('navigation.accessibility'), href: '/accessibility' },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Seção Superior: Informações da Empresa e Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          {/* Informações da Empresa */}
          <div className="sm:col-span-2 md:col-span-2">
            <h2 className="text-2xl font-bold">FitCoach</h2>
            <p className="mt-2 text-muted-foreground max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <p>{t('footer.contact.email')}</p>
              <p>{t('footer.contact.phone')}</p>
              <p>{t('footer.contact.address')}</p>
            </div>
          </div>

          {/* Colunas de Links */}
          {linkSections.map((section) => (
            <FooterLinkColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Seção Inferior: Copyright e Redes Sociais */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} FitCoach. {t('footer.rights')}
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;