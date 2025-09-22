import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Linkedin, Twitter, Mail, Globe, Award, Users, TrendingUp } from 'lucide-react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ricardo Silva",
      role: "CEO & Fundador",
      image: "/placeholder.svg",
      bio: "PhD em Inteligência Artificial pela MIT, com 15 anos de experiência em machine learning aplicado à saúde. Fundador da FitCoach com a missão de democratizar o acesso a treinos personalizados.",
      achievements: ["PhD MIT", "50+ patentes", "Autor best-seller"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "ricardo@fitcouch.com.br"
      },
      stats: {
        experience: "15 anos",
        transformations: "50K+",
        satisfaction: "98%"
      }
    },
    {
      id: 2,
      name: "Dra. Ana Costa",
      role: "Chief Medical Officer",
      image: "/placeholder.svg",
      bio: "Médica especialista em medicina esportiva e nutrição clínica. Responsável por garantir que todos os protocolos sejam seguros e eficazes.",
      achievements: ["CRM-SP", "PhD Nutrição", "Autora de 100+ artigos"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "ana@fitcouch.com.br"
      },
      stats: {
        experience: "12 anos",
        patients: "10K+",
        publications: "100+"
      }
    },
    {
      id: 3,
      name: "Carlos Oliveira",
      role: "CTO",
      image: "/placeholder.svg",
      bio: "Engenheiro de software com especialização em sistemas distribuídos e IA. Lidera o desenvolvimento da plataforma e algoritmos de personalização.",
      achievements: ["Eng. Poli-USP", "Ex-Google", "Y Combinator"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "carlos@fitcouch.com.br"
      },
      stats: {
        experience: "10 anos",
        systems: "100+",
        users: "1M+"
      }
    },
    {
      id: 4,
      name: "Mariana Santos",
      role: "Head de Produto",
      image: "/placeholder.svg",
      bio: "Product Manager com MBA em Marketing Digital. Responsável pela experiência do usuário e estratégia de produto.",
      achievements: ["MBA FGV", "Ex-Nubank", "Product Awards"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mariana@fitcouch.com.br"
      },
      stats: {
        experience: "8 anos",
        products: "20+",
        revenue: "R$100M+"
      }
    },
    {
      id: 5,
      name: "Pedro Lima",
      role: "Head de Dados",
      image: "/placeholder.svg",
      bio: "Cientista de dados com PhD em Estatística. Desenvolve os algoritmos de machine learning que poweram a personalização.",
      achievements: ["PhD Estatística", "Kaggle Master", "50+ modelos"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "pedro@fitcouch.com.br"
      },
      stats: {
        experience: "7 anos",
        models: "50+",
        accuracy: "95%+"
      }
    },
    {
      id: 6,
      name: "Juliana Ferreira",
      role: "Head de Marketing",
      image: "/placeholder.svg",
      bio: "Marketing especialista em growth hacking e branding. Responsável pela estratégia de crescimento e comunicação da marca.",
      achievements: ["Ex-99", "Google Certified", "Growth Awards"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "juliana@fitcouch.com.br"
      },
      stats: {
        experience: "6 anos",
        growth: "500%+",
        campaigns: "200+"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. Roberto Almeida",
      role: "Advisor Médico",
      company: "Hospital Sírio-Libanês",
      expertise: "Medicina Esportiva"
    },
    {
      name: "Patricia Mendes",
      role: "Advisor de Negócios",
      company: "Sequoia Capital",
      expertise: "Scale-ups"
    },
    {
      name: "Fernando Gomes",
      role: "Advisor Técnico",
      company: "Ex-Uber",
      expertise: "Engenharia de Software"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conheça Nossa Equipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados que estão transformando o futuro do fitness
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Liderança</h2>
            <p className="text-muted-foreground">
              A visão e estratégia por trás da FitCoach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Dialog key={member.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">
                        {member.bio.substring(0, 100)}...
                      </p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={`mailto:${member.social.email}`}>
                            <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                        <DialogDescription className="text-lg font-medium">
                          {member.role}
                        </DialogDescription>
                      </div>Let me continue creating the remaining pages:

<dyad-write path="src/pages/Investors.tsx">
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
  Presentation
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