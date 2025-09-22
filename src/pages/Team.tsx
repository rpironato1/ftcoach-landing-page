import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useTranslation } from 'react-i18next';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const { t } = useTranslation();
  
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
            {t('team.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('team.leadership.title')}</h2>
            <p className="text-muted-foreground">
              {t('team.leadership.subtitle')}
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
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={`mailto:${member.social.email}`} aria-label="Email">
                            <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                        <DialogDescription className="text-lg font-medium text-primary">
                          {member.role}
                        </DialogDescription>
                        <div className="flex justify-center sm:justify-start gap-2 mt-2">
                          {member.achievements.map((ach, index) => (
                            <Badge key={index} variant="secondary">{ach}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Advisors */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('team.advisors.title')}</h2>
            <p className="text-muted-foreground">
              {t('team.advisors.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{advisor.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{advisor.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{advisor.company}</p>
                  <Badge variant="outline" className="mt-2">{advisor.expertise}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;