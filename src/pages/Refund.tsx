import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const Refund = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('refund.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('refund.subtitle')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="lead">
            {t('refund.intro')}
          </p>

          <Card className="my-8">
            <CardHeader>
              <CardTitle>{t('refund.eligibility.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('refund.eligibility.firstCharge')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('refund.eligibility.firstChargeDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('refund.eligibility.recurring')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('refund.eligibility.recurringDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('refund.eligibility.technical')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('refund.eligibility.technicalDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2>{t('refund.howTo.title')}</h2>
          <ol>
            <li>{t('refund.howTo.step1')}</li>
            <li>{t('refund.howTo.step2')}</li>
            <li>{t('refund.howTo.step3')}</li>
          </ol>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="mailto:suporte@fitcoach.com.br">{t('refund.cta')}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;