import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Ear, Eye, MousePointerClick } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Accessibility = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('accessibility.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('accessibility.subtitle')}
          </p>
          <Badge className="mt-4">{t('accessibility.compliance')}</Badge>
        </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="lead">
          {t('accessibility.intro')}
        </p>

        <h2>{t('accessibility.measures.title')}</h2>
        <p>
          {t('accessibility.measures.description')}
        </p>
        <ul>
          <li>{t('accessibility.measures.items.mission')}</li>
          <li>{t('accessibility.measures.items.development')}</li>
          <li>{t('accessibility.measures.items.audits')}</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <Card>
            <CardHeader className="items-center text-center">
              <Eye className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t('accessibility.features.visual.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-center">
              {t('accessibility.features.visual.description')}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center text-center">
              <Ear className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t('accessibility.features.auditory.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-center">
              {t('accessibility.features.auditory.description')}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center text-center">
              <MousePointerClick className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t('accessibility.features.motor.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-center">
              {t('accessibility.features.motor.description')}
            </CardContent>
          </Card>
        </div>

        <h2>{t('accessibility.feedback.title')}</h2>
        <p>
          {t('accessibility.feedback.description')}
        </p>
        <p>
          <strong>{t('accessibility.feedback.email')}</strong> <a href="mailto:acessibilidade@fitcoach.com.br">acessibilidade@fitcoach.com.br</a>
        </p>
        <p>
          {t('accessibility.feedback.response')}
        </p>
      </div>
    </div>
  </div>
  );
};

export default Accessibility;