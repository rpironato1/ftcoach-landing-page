import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const Refund = () => (
  <div className="min-h-screen py-20 bg-muted/20">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Reembolso</h1>
        <p className="text-xl text-muted-foreground">
          Transparência e simplicidade no nosso processo de reembolso.
        </p>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="lead">
          Na FitCoach, nosso objetivo é sua total satisfação. Oferecemos um período de 
          <strong> teste gratuito de 7 dias</strong> para que você possa experimentar todos os recursos 
          antes de qualquer cobrança. Se, por qualquer motivo, você não estiver satisfeito, 
          esta política descreve suas opções.
        </p>

        <Card className="my-8">
          <CardHeader>
            <CardTitle>Elegibilidade para Reembolso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Cancelamento dentro de 7 dias após a primeira cobrança</h3>
                <p className="text-sm text-muted-foreground">
                  Se você for cobrado após o período de teste e decidir cancelar em até 7 dias, 
                  você é elegível para um reembolso total.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Cobranças recorrentes</h3>
                <p className="text-sm text-muted-foreground">
                  Reembolsos não são aplicáveis para cobranças de renovação mensal ou anual. 
                  Você pode cancelar a qualquer momento para evitar cobranças futuras.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Falhas técnicas</h3>
                <p className="text-sm text-muted-foreground">
                  Se o serviço ficou indisponível por um período prolongado devido a falhas 
                  de nossa parte, oferecemos créditos ou reembolsos proporcionais.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Como Solicitar um Reembolso</h2>
        <ol>
          <li>
            <strong>Cancele sua Assinatura:</strong> Vá para "Configurações" &gt; "Assinatura" 
            em seu perfil e cancele o plano.
          </li>
          <li>
            <strong>Entre em Contato:</strong> Envie um e-mail para 
            <a href="mailto:suporte@fitcoach.com.br"> suporte@fitcoach.com.br</a> com o 
            assunto "Solicitação de Reembolso". Inclua o e-mail da sua conta e o motivo.
          </li>
          <li>
            <strong>Processamento:</strong> Nossa equipe analisará sua solicitação em até 
            3 dias úteis. Se aprovado, o reembolso será processado em até 10 dias úteis 
            no método de pagamento original.
          </li>
        </ol>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="mailto:suporte@fitcoach.com.br">Iniciar Solicitação de Reembolso</a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Refund;