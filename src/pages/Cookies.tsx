import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Settings, Shield } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cookies = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('cookies.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('cookies.subtitle')}
          </p>
        </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="lead">
          {t('cookies.lead')}
        </p>

        <h2>{t('cookies.whatAre.title')}</h2>
        <p>
          {t('cookies.whatAre.description')}
        </p>

        <h2>{t('cookies.howWeUse.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                {t('cookies.howWeUse.essential.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('cookies.howWeUse.essential.description')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                {t('cookies.howWeUse.performance.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('cookies.howWeUse.performance.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        <h2>{t('cookies.yourOptions.title')}</h2>
        <p>
          {t('cookies.yourOptions.description')}
        </p>
        
        <p>
          <Trans i18nKey="cookies.yourOptions.privacyLink">
            Para mais detalhes sobre como gerenciamos seus dados, consulte nossa 
            <a href="/privacy"> Política de Privacidade</a>.
          </Trans>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Cookies;