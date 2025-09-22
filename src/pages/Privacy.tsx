import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database, Trash2, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: false,
    essential: true
  });

  const handlePreferenceChange = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof preferences]
    }));
  };

  const dataCollectionItems = t('privacy.dataCollection.items', { returnObjects: true }) as string[];
  const yourRightsItems = t('privacy.yourRights.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <Badge variant="secondary" className="mb-4">{t('privacy.badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('privacy.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('privacy.subtitle')}
          </p>
        </div>

        {/* Controles de Preferência */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              {t('privacy.preferences.title')}
            </CardTitle>
            <CardDescription>
              {t('privacy.preferences.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('privacy.preferences.essential.title')}</p>
                <p className="text-sm text-muted-foreground">{t('privacy.preferences.essential.description')}</p>
              </div>
              <Switch checked={preferences.essential} disabled />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('privacy.preferences.analytics.title')}</p>
                <p className="text-sm text-muted-foreground">{t('privacy.preferences.analytics.description')}</p>
              </div>
              <Switch 
                checked={preferences.analytics} 
                onCheckedChange={() => handlePreferenceChange('analytics')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('privacy.preferences.marketing.title')}</p>
                <p className="text-sm text-muted-foreground">{t('privacy.preferences.marketing.description')}</p>
              </div>
              <Switch 
                checked={preferences.marketing} 
                onCheckedChange={() => handlePreferenceChange('marketing')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Conteúdo da Política */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  {t('privacy.dataCollection.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dataCollectionItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  {t('privacy.yourRights.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {yourRightsItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2>{t('privacy.sections.s1.title')}</h2>
          <p>{t('privacy.sections.s1.content')}</p>

          <h2>{t('privacy.sections.s2.title')}</h2>
          <p>{t('privacy.sections.s2.content')}</p>

          <h2>{t('privacy.sections.s3.title')}</h2>
          <p>{t('privacy.sections.s3.content')}</p>

          <h2>{t('privacy.sections.s4.title')}</h2>
          <p>{t('privacy.sections.s4.content')}</p>

          <h2>{t('privacy.sections.s5.title')}</h2>
          <p>{t('privacy.sections.s5.content')}</p>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              {t('privacy.actions.downloadPdf')}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              {t('privacy.actions.requestDeletion')}
            </Button>
          </div>

          <div className="text-sm text-muted-foreground mt-8 p-4 bg-muted/50 rounded-lg">
            <strong>{t('privacy.footer.lastUpdated')}:</strong> 25 de Julho de 2024<br/>
            <strong>{t('privacy.footer.policyVersion')}:</strong> 2.1<br/>
            <strong>{t('privacy.footer.dpoContact')}:</strong> dpo@fitcoach.com.br
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;