import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Award, 
  Download,
  FileText,
  Presentation,
  Mail
} from 'lucide-react';

const Investors = () => {
  const metrics = [
    {
      label: "Valor da Empresa",
      value: "R$ 500M",
      change: "+150% YoY",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      label: "Receita Anual",
      value: "R$ 120M",
      change: "+200% YoY",
      icon: DollarSign,
      color: "text-blue-600"
    },
    {
      label: "Usuários Ativos",
      value: "500K+",
      change: "+300% YoY",
      icon: Users,
      color: "text-purple-600"
    },
    {
      label: "Taxa de Retenção",
      value: "94%",
      change: "+5% YoY",
      icon: Target,
      color: "text-orange-600"
    }
  ];

  const fundingRounds = [
    {
      round: "Semente",
      year: "2020",
      amount: "R$ 2M",
      lead: "Monashees",
      valuation: "R$ 10M",
      description: "Desenvolvimento do MVP e validação de mercado"
    },
    {
      round: "Série A",
      year: "2021",
      amount: "R$ 15M",
      lead: "Kaszek",
      valuation: "R$ 60M",
      description: "Expansão nacional e desenvolvimento da IA"
    },
    {
      round: "Série B",
      year: "2022",
      amount: "R$ 50M",
      lead: "SoftBank",
      valuation: "R$ 200M",
      description: "Expansão internacional e aquisições"
    },
    {
      round: "Série C",
      year: "2024",
      amount: "R$ 100M",
      lead: "Tiger Global",
      valuation: "R$ 500M",
      description: "Liderança de mercado e novos produtos"
    }
  ];

  const documents = [
    {
      title: "Apresentação para Investidores",
      description: "Visão geral do negócio, mercado e estratégia",
      size: "5.2 MB",
      type: "PDF",
      icon: Presentation
    },
    {
      title: "Relatório Anual 2023",
      description: "Performance financeira e operacional completa",
      size: "12.8 MB",
      type: "PDF",
      icon: FileText
    },
    {
      title: "ESG Report",
      description: "Responsabilidade social e ambiental",
      size: "3.1 MB",
      type: "PDF",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Área do Investidor
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Informações financeiras e atualizações para nossos investidores
          </p>
        </div>

        {/* Key Metrics */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {metric.change}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Funding History */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Histórico de Investimentos</h2>
            <p className="text-muted-foreground">
              Nossa jornada de crescimento e captação de recursos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {fundingRounds.map((round, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{round.round}</CardTitle>
                      <CardDescription>{round.year}</CardDescription>
                    </div>
                    <Badge variant="outline">{round.amount}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Líder:</span>
                      <p className="text-muted-foreground">{round.lead}</p>
                    </div>
                    <div>
                      <span className="font-medium">Valuação:</span>
                      <p className="text-muted-foreground">{round.valuation}</p>
                    </div>
                    <div>
                      <span className="font-medium">Objetivo:</span>
                      <p className="text-muted-foreground">{round.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Investor Documents */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Documentos para Investidores</h2>
            <p className="text-muted-foreground">
              Acesse nossos relatórios e apresentações oficiais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <doc.icon className="h-8 w-8 text-primary" />
                    <Badge variant="outline">{doc.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{doc.size}</span>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interessado em Investir?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato com nosso time de Relações com Investidores para mais informações
            sobre oportunidades de investimento e atualizações do mercado.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Mail className="h-4 w-4 mr-2" />
              investors@fitcouch.com.br
            </Button>
            <Button variant="outline" size="lg">
              Agendar Reunião
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Investors;