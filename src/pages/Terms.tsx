import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();
  const [selectedVersion, setSelectedVersion] = useState('2.1');

  const versions = t('terms.versions', { returnObjects: true }) as { version: string, date: string, changes: string[] }[];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <Badge variant="secondary" className="mb-4">{t('terms.version')} {selectedVersion}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('terms.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('terms.subtitle')}
          </p>
        </div>

        {/* Version Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {t('terms.history.title')}
            </CardTitle>
            <CardDescription>
              {t('terms.history.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              {versions.map((ver) => (
                <Button
                  key={ver.version}
                  variant={selectedVersion === ver.version ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedVersion(ver.version)}
                >
                  v{ver.version}
                  {ver.version === '2.1' && <Badge variant="secondary" className="ml-2">{t('terms.history.current')}</Badge>}
                </Button>
              ))}
            </div>
            
            {/* Changelog */}
            {selectedVersion && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">{t('terms.history.changesTitle', { version: selectedVersion })}</h4>
                <ul className="space-y-1">
                  {versions.find(v => v.version === selectedVersion)?.changes.map((change, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Conteúdo dos Termos */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-5 w-5" />
                {t('terms.importantNotice.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('terms.importantNotice.content')}
              </p>
            </CardContent>
          </Card>

          <h2>{t('terms.sections.s1.title')}</h2>
          <p>{t('terms.sections.s1.content')}</p>

          <h2>{t('terms.sections.s2.title')}</h2>
          <p>{t('terms.sections.s2.content')}</p>

          <h2>{t('terms.sections.s3.title')}</h2>
          <p>{t('terms.sections.s3.content')}</p>

          <h2>{t('terms.sections.s4.title')}</h2>
          <p>{t('terms.sections.s4.content')}</p>

          <h2>{t('terms.sections.s5.title')}</h2>
          <p>{t('terms.sections.s5.content')}</p>

          <h2>{t('terms.sections.s6.title')}</h2>
          <p>{t('terms.sections.s6.content')}</p>

          <h2>{t('terms.sections.s7.title')}</h2>
          <p>{t('terms.sections.s7.content')}</p>

          <h2>{t('terms.sections.s8.title')}</h2>
          <p>{t('terms.sections.s8.content')}</p>

          <div className="border-t mt-8 pt-6">
            <p className="text-sm text-muted-foreground">
              {t('terms.contact')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;