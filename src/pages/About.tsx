import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, Zap, TrendingUp, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(2024);

  const milestones = [
    {
      year: 2020,
      title: t('about.milestones.2020.title'),
      description: t('about.milestones.2020.description'),
      icon: Users,
      color: "bg-blue-500"
    },
    {
      year: 2021,
      title: t('about.milestones.2021.title'),
      description: t('about.milestones.2021.description'),
      icon: Zap,
      color: "bg-purple-500"
    },
    {
      year: 2022,
      title: t('about.milestones.2022.title'),
      description: t('about.milestones.2022.description'),
      icon: Target,
      color: "bg-green-500"
    },
    {
      year: 2023,
      title: t('about.milestones.2023.title'),
      description: t('about.milestones.2023.description'),
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      year: 2024,
      title: t('about.milestones.2024.title'),
      description: t('about.milestones.2024.description'),
      icon: Award,
      color: "bg-red-500"
    }
  ];

  const values = [
    {
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      icon: Zap,
      color: "bg-purple-500 text-white"
    },
    {
      title: t('about.values.accessibility.title'),
      description: t('about.values.accessibility.description'),
      icon: Users,
      color: "bg-blue-500 text-white"
    },
    {
      title: t('about.values.results.title'),
      description: t('about.values.results.description'),
      icon: Target,
      color: "bg-green-500 text-white"
    },
    {
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
      icon: Award,
      color: "bg-orange-500 text-white"
    }
  ];

  const stats = [
    { label: t('about.stats.activeUsers'), value: "50.000+", suffix: "" },
    { label: t('about.stats.workoutsCreated'), value: "2.5", suffix: "M+" },
    { label: t('about.stats.successRate'), value: "98", suffix: "%" },
    { label: t('about.stats.countries'), value: "8", suffix: "" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {t('about.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('about.hero.title')}
              <span className="text-primary"> {t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('about.hero.subtitle')}
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                {t('about.hero.teamButton')}
              </Button>
              <Button variant="outline" size="lg">
                {t('about.hero.historyButton')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.journey.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.journey.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={cn(
                  "relative flex items-center mb-12",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}>
                  {/* Content */}
                  <div className={cn(
                    "w-5/12",
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  )}>
                    <Card className={cn(
                      "inline-block cursor-pointer transition-all hover:shadow-lg",
                      activeYear === milestone.year ? "border-primary shadow-lg" : ""
                    )}
                    onClick={() => setActiveYear(milestone.year)}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2 justify-end flex-row-reverse">
                          <div className={cn("w-3 h-3 rounded-full", milestone.color)}></div>
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", value.color)}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <Button size="lg" variant="secondary">
            {t('about.cta.button')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;