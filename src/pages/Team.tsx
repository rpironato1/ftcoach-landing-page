import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      id: 1,
      name: t('team.members.ricardo.name'),
      role: t('team.members.ricardo.role'),
      image: "/placeholder.svg",
      bio: t('team.members.ricardo.bio'),
      achievements: [
        t('team.members.ricardo.achievements.0'),
        t('team.members.ricardo.achievements.1'),
        t('team.members.ricardo.achievements.2')
      ],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "ricardo@fitcouch.com.br"
      },
    },
    {
      id: 2,
      name: t('team.members.ana.name'),
      role: t('team.members.ana.role'),
      image: "/placeholder.svg",
      bio: t('team.members.ana.bio'),
      achievements: [
        t('team.members.ana.achievements.0'),
        t('team.members.ana.achievements.1'),
        t('team.members.ana.achievements.2')
      ],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "ana@fitcouch.com.br"
      },
    },
    {
      id: 3,
      name: t('team.members.carlos.name'),
      role: t('team.members.carlos.role'),
      image: "/placeholder.svg",
      bio: t('team.members.carlos.bio'),
      achievements: [
        t('team.members.carlos.achievements.0'),
        t('team.members.carlos.achievements.1'),
        t('team.members.carlos.achievements.2')
      ],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "carlos@fitcouch.com.br"
      },
    },
    {
      id: 4,
      name: t('team.members.mariana.name'),
      role: t('team.members.mariana.role'),
      image: "/placeholder.svg",
      bio: t('team.members.mariana.bio'),
      achievements: [
        t('team.members.mariana.achievements.0'),
        t('team.members.mariana.achievements.1'),
        t('team.members.mariana.achievements.2')
      ],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mariana@fitcouch.com.br"
      },
    },
    {
      id: 5,
      name: t('team.members.pedro.name'),
      role: t('team.members.pedro.role'),
      image: "/placeholder.svg",
      bio: t('team.members.pedro.bio'),
      achievements: [
        t('team.members.pedro.achievements.0'),
        t('team.members.pedro.achievements.1'),
        t('team.members.pedro.achievements.2')
      ],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "pedro@fitcouch.com.br"
      },
    },
    {
      id: 6,
      name: t('team.members.juliana.name'),
      role: t('team.members.juliana.role'),
      image: "/placeholder.svg",
      bio: t('team.members.juliana.bio'),
      achievements: [
        t('team.members.juliana.achievements.0'),
        t('team.members.juliana.achievements.1'),
        t('team.members.juliana.achievements.2')
      ],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "juliana@fitcouch.com.br"
      },
    }
  ];

  const advisors = [
    {
      name: t('team.advisorsData.roberto.name'),
      role: t('team.advisorsData.roberto.role'),
      company: t('team.advisorsData.roberto.company'),
      expertise: t('team.advisorsData.roberto.expertise')
    },
    {
      name: t('team.advisorsData.patricia.name'),
      role: t('team.advisorsData.patricia.role'),
      company: t('team.advisorsData.patricia.company'),
      expertise: t('team.advisorsData.patricia.expertise')
    },
    {
      name: t('team.advisorsData.fernando.name'),
      role: t('team.advisorsData.fernando.role'),
      company: t('team.advisorsData.fernando.company'),
      expertise: t('team.advisorsData.fernando.expertise')
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