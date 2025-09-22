import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database, Trash2, Download } from 'lucide-react';

const Privacy = () => {
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
          <Badge variant="secondary" className="mb-4">LGPD & GDPR Compliant</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-xl text-muted-foreground">
            Transparência total no tratamento dos seus dados pessoais
          </p>
        </div>

        {/* Controles de Preferência */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Suas Preferências de Privacidade
            </CardTitle>
            <CardDescription>
              Controle como usamos seus dados para melhorar sua experiência
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Cookies Essenciais</p>
                <p className="text-sm text-muted-foreground">Necessários para o funcionamento do site</p>
              </div>
              <Switch checked={preferences.essential} disabled />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Analytics e Melhoria</p>
                <p className="text-sm text-muted-foreground">Nos ajuda a entender como você usa o site</p>
              </div>
              <Switch 
                checked={preferences.analytics} 
                onCheckedChange={() => handlePreferenceChange('analytics')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Marketing Personalizado</p>
                <p className="text-sm text-muted-foreground">Mostrar conteúdo e ofertas relevantes</p>
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
                  Coleta de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Dados de cadastro e perfil</li>
                  <li>• Dados de saúde e atividade física</li>
                  <li>• Dados de uso da plataforma</li>
                  <li>• Dados técnicos e de dispositivo</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Seus Direitos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Acesso aos seus dados</li>
                  <li>• Correção de informações</li>
                  <li>• Exclusão de dados (Direito ao esquecimento)</li>
                  <li>• Portabilidade de dados</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2>1. Informações que Coletamos</h2>
          <p>
            Coletamos informações para fornecer os melhores serviços a todos os nossos usuários. 
            Isso inclui dados fornecidos voluntariamente, dados coletados automaticamente 
            e dados de terceiros quando autorizado.
          </p>

          <h2>2. Como Usamos suas Informações</h2>
          <p>
            Utilizamos as informações para operar, fornecer, desenvolver e melhorar os serviços 
            que oferecemos, incluindo personalização de treinos, suporte ao cliente, 
            pesquisas e análises, e comunicação sobre serviços.
          </p>

          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos informações pessoais. Compartilhamos informações apenas nas 
            seguintes circunstâncias: com seu consentimento, para processamento por 
            prestadores de serviços, por motivos legais ou em caso de transferência 
            de negócios.
          </p>

          <h2>4. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais robustas 
            projetadas para proteger a segurança de qualquer informação pessoal 
            que processamos.
          </p>

          <h2>5. Retenção de Dados</h2>
          <p>
            Manteremos suas informações pessoais apenas pelo tempo necessário 
            para cumprir as finalidades descritas nesta Política de Privacidade, 
            a menos que um período de retenção mais longo seja exigido ou permitido por lei.
          </p>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Baixar PDF
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              Solicitar Exclusão
            </Button>
          </div>

          <div className="text-sm text-muted-foreground mt-8 p-4 bg-muted/50 rounded-lg">
            <strong>Última atualização:</strong> 25 de Julho de 2024<br/>
            <strong>Versão da política:</strong> 2.1<br/>
            <strong>Contato do Encarregado de Dados:</strong> dpo@fitcoach.com.br
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;