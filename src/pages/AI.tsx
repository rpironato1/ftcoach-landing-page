import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Target, Users, TrendingUp, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AI = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      title: t('ai.features.machineLearning.title'),
      description: t('ai.features.machineLearning.description')
    },
    {
      icon: Zap,
      title: t('ai.features.instantAnalysis.title'),
      description: t('ai.features.instantAnalysis.description')
    },
    {
      icon: Target,
      title: t('ai.features.surgicalPrecision.title'),
      description: t('ai.features.surgicalPrecision.description')
    },
    {
      icon: Users,
      title: t('ai.features.smartCommunity.title'),
      description: t('ai.features.smartCommunity.description')
    }
  ];

  const stats = [
    { label: t('ai.stats.dataProcessed'), value: "50M+" },
    { label: t('ai.stats.aiPrecision'), value: "98%" },
    { label: t('ai.stats.responseTime'), value: "<100ms" },
    { label: t('ai.stats.usersServed'), value: "500K+" }
  ];

  const testimonials = [
    {
      name: t('ai.testimonials.anaCostaName'),
      role: t('ai.testimonials.anaCostaRole'),
      image: "/placeholder.svg",
      text: t('ai.testimonials.anaCostaText')
    },
    {
      name: t('ai.testimonials.carlosSilvaName'),
      role: t('ai.testimonials.carlosSilvaRole'),
      image: "/placeholder.svg",
      text: t('ai.testimonials.carlosSilvaText')
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {t('ai.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('ai.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('ai.subtitle')}
          </p>
          <Button size="lg" className="group">
            <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            {t('ai.demoButton')}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('ai.featuresTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('ai.testimonialsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            {t('ai.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('ai.cta.subtitle')}
          </p>
          <Button size="lg">
            {t('ai.cta.button')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AI;