import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const Terms = () => {
  const [selectedVersion, setSelectedVersion] = useState('2.1');

  const versions = [
    { version: '2.1', date: '2024-07-25', changes: ['Nova política de reembolso', 'Atualização de limites de uso'] },
    { version: '2.0', date: '2024-01-15', changes: ['Integração de serviços de IA', 'Termos corporativos'] },
    { version: '1.2', date: '2023-06-10', changes: ['Ajustes de responsabilidade', 'Política de cancelamento'] },
  ];

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
          <Badge variant="secondary" className="mb-4">Versão {selectedVersion}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Serviço</h1>
          <p className="text-xl text-muted-foreground">
            Regras e diretrizes para uso da plataforma FitCoach
          </p>
        </div>

        {/* Version Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Histórico de Versões
            </CardTitle>
            <CardDescription>
              Selecione uma versão para visualizar os termos específicos
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
                  {ver.version === '2.1' && <Badge variant="secondary" className="ml-2">Atual</Badge>}
                </Button>
              ))}
            </div>
            
            {/* Changelog */}
            {selectedVersion && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Mudanças na versão {selectedVersion}:</h4>
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
                Aviso Importante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Ao usar nossos serviços, você concorda com estes termos. Leia-os cuidadosamente. 
                Eles contém disposições importantes sobre seus direitos e obrigações.
              </p>
            </CardContent>
          </Card>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou usar a FitCoach, você concorda em ficar vinculado a estes 
            Termos de Serviço e a nossa Política de Privacidade. Se você não concordar 
            com qualquer parte dos termos, não poderá acessar o serviço.
          </p>

          <h2>2. Conta do Usuário</h2>
          <p>
            Você é responsável por manter a confidencialidade de sua conta e senha. 
            Concorda em aceitar a responsabilidade por todas as atividades que ocorrem 
            sob sua conta ou senha.
          </p>

          <h2>3. Serviços de Assinatura</h2>
          <p>
            Algumas partes do Serviço são cobradas por assinatura. Você será cobrado 
            antecipadamente em base recorrente. Todos os pagamentos são não reembolsáveis.
          </p>

          <h2>4. Conteúdo do Usuário</h2>
          <p>
            Nosso Serviço permite que você poste, vincule, armazene, compartilhe e 
            disponibilize de outra forma certas informações, textos, gráficos, vídeos 
            ou outros materiais. Você é responsável pelo conteúdo que postar.
          </p>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            O Serviço e seu conteúdo original, recursos e funcionalidade são e 
            permanecerão propriedade exclusiva da FitCoach e de seus licenciadores.
          </p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            Em nenhum caso a FitCoach, nem seus diretores, funcionários, parceiros, 
            agentes, fornecedores ou afiliados, serão responsáveis por quaisquer 
            danos indiretos, incidentais, especiais, consequenciais ou punitivos.
          </p>

          <h2>7. Lei Aplicável</h2>
          <p>
            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, 
            sem considerar sua disposição sobre conflito de leis.
          </p>

          <h2>8. Alterações</h2>
          <p>
            Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou 
            substituir estes Termos a qualquer momento.
          </p>

          <div className="border-t mt-8 pt-6">
            <p className="text-sm text-muted-foreground">
              Para questões sobre estes Termos de Serviço, entre em contato conosco em legal@fitcoach.com.br
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;