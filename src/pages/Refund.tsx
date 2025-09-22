import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

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
            <Trans i18nKey="refund.lead">
              Na FitCoach, nosso objetivo é sua total satisfação. Oferecemos um período de 
              <strong> teste gratuito de 7 dias</strong> para que você possa experimentar todos os recursos 
              antes de qualquer cobrança. Se, por qualquer motivo, você não estiver satisfeito, 
              esta política descreve suas opções.
            </Trans>
          </p>

          <Card className="my-8">
            <CardHeader>
              <CardTitle>{t('refund.eligibility.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('refund.eligibility.item1.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('refund.eligibility.item1.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('refund.eligibility.item2.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('refund.eligibility.item2.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('refund.eligibility.item3.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('refund.eligibility.item3.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2>{t('refund.howTo.title')}</h2>
          <ol>
            <li>
              <Trans i18nKey="refund.howTo.steps.0">
                <strong>Cancele sua Assinatura:</strong> Vá para "Configurações" &gt; "Assinatura" 
                em seu perfil e cancele o plano.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="refund.howTo.steps.1">
                <strong>Entre em Contato:</strong> Envie um e-mail para 
                <a href="mailto:suporte@fitcoach.com.br"> suporte@fitcoach.com.br</a> com o 
                assunto "Solicitação de Reembolso". Inclua o e-mail da sua conta e o motivo.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="refund.howTo.steps.2">
                <strong>Processamento:</strong> Nossa equipe analisará sua solicitação em até 
                3 dias úteis. Se aprovado, o reembolso será processado em até 10 dias úteis 
                no método de pagamento original.
              </Trans>
            </li>
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