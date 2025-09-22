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
          A FitCoach está empenhada em garantir a acessibilidade digital para pessoas 
          com deficiência. Estamos continuamente melhorando a experiência do usuário 
          para todos e aplicando os padrões de acessibilidade relevantes.
        </p>

        <h2>Medidas de Suporte</h2>
        <p>
          Tomamos as seguintes medidas para garantir a acessibilidade:
        </p>
        <ul>
          <li>Incluímos a acessibilidade como parte de nossa missão.</li>
          <li>Integramos a acessibilidade em nossas práticas de desenvolvimento.</li>
          <li>Realizamos auditorias de acessibilidade regulares.</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <Card>
            <CardHeader className="items-center text-center">
              <Eye className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Visual</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-center">
              Contraste de cores, texto redimensionável e compatibilidade com leitores de tela.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center text-center">
              <Ear className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Auditivo</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-center">
              Legendas em vídeos e transcrições para conteúdo de áudio.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center text-center">
              <MousePointerClick className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Motor</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-center">
              Navegação completa via teclado e áreas de clique ampliadas.
            </CardContent>
          </Card>
        </div>

        <h2>Feedback</h2>
        <p>
          Agradecemos seu feedback sobre a acessibilidade do FitCoach. Por favor, 
          informe-nos se encontrar barreiras de acessibilidade:
        </p>
        <p>
          <strong>E-mail:</strong> <a href="mailto:acessibilidade@fitcoach.com.br">acessibilidade@fitcoach.com.br</a>
        </p>
        <p>
          Procuramos responder ao feedback dentro de 5 dias úteis.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Accessibility;