import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Settings, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
          Esta política explica o que são cookies, como os usamos em nosso site e suas 
          opções em relação a eles. Ao usar o FitCoach, você concorda com o uso de 
          cookies de acordo com esta política.
        </p>

        <h2>O que são Cookies?</h2>
        <p>
          Cookies são pequenos arquivos de texto que são colocados no seu dispositivo 
          por sites que você visita. Eles são amplamente utilizados para fazer os sites 
          funcionarem, ou funcionarem de forma mais eficiente, bem como para fornecer 
          informações aos proprietários do site.
        </p>

        <h2>Como Usamos Cookies</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                {t('cookies.essential.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('cookies.essential.description')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                {t('cookies.performance.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('cookies.performance.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        <h2>Suas Opções</h2>
        <p>
          Você tem o direito de decidir se aceita ou rejeita cookies. Você pode 
          exercer suas preferências de cookies gerenciando-as nas configurações 
          do seu navegador. Observe que, se você optar por rejeitar os cookies, 
          ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades 
          e áreas possa ser restrito.
        </p>
        
        <p>
          Para mais detalhes sobre como gerenciamos seus dados, consulte nossa 
          <a href="/privacy"> Política de Privacidade</a>.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Cookies;