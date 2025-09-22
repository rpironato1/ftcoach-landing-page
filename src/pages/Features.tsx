import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Brain, 
  Users, 
  Target, 
  Activity, 
  Heart, 
  Zap, 
  Shield, 
  PlayCircle,
  Calendar,
  BarChart3,
  Award,
  Clock,
  CheckCircle,
  Headphones,
  Globe,
  Dumbbell,
  Apple
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      category: t('features.categories.ai'),
      icon: Brain,
      color: 'bg-blue-500',
      features: [
        {
          icon: Target,
          title: t('features.ai.personalization.title'),
          description: t('features.ai.personalization.description'),
          badge: t('features.badges.exclusive')
        },
        {
          icon: Brain,
          title: t('features.ai.adaptation.title'),
          description: t('features.ai.adaptation.description'),
          badge: t('features.badges.patent')
        },
        {
          icon: BarChart3,
          title: t('features.ai.analytics.title'),
          description: t('features.ai.analytics.description'),
          badge: t('features.badges.new')
        }
      ]
    },
    {
      category: t('features.categories.training'),
      icon: Dumbbell,
      color: 'bg-green-500',
      features: [
        {
          icon: PlayCircle,
          title: t('features.training.videos.title'),
          description: t('features.training.videos.description'),
          badge: '4K HD'
        },
        {
          icon: Calendar,
          title: t('features.training.scheduling.title'),
          description: t('features.training.scheduling.description'),
          badge: t('features.badges.smart')
        },
        {
          icon: Users,
          title: t('features.training.community.title'),
          description: t('features.training.community.description'),
          badge: '50K+ Members'
        }
      ]
    },
    {
      category: t('features.categories.nutrition'),
      icon: Apple,
      color: 'bg-orange-500',
      features: [
        {
          icon: Apple,
          title: t('features.nutrition.plans.title'),
          description: t('features.nutrition.plans.description'),
          badge: t('features.badges.certified')
        },
        {
          icon: BarChart3,
          title: t('features.nutrition.tracking.title'),
          description: t('features.nutrition.tracking.description'),
          badge: t('features.badges.realtime')
        },
        {
          icon: Award,
          title: t('features.nutrition.coaching.title'),
          description: t('features.nutrition.coaching.description'),
          badge: 'Expert'
        }
      ]
    },
    {
      category: t('features.categories.technology'),
      icon: Smartphone,
      color: 'bg-purple-500',
      features: [
        {
          icon: Smartphone,
          title: t('features.technology.mobile.title'),
          description: t('features.technology.mobile.description'),
          badge: 'iOS & Android'
        },
        {
          icon: Activity,
          title: t('features.technology.wearables.title'),
          description: t('features.technology.wearables.description'),
          badge: '20+ Devices'
        },
        {
          icon: Globe,
          title: t('features.technology.offline.title'),
          description: t('features.technology.offline.description'),
          badge: t('features.badges.available')
        }
      ]
    },
    {
      category: t('features.categories.support'),
      icon: Headphones,
      color: 'bg-red-500',
      features: [
        {
          icon: Clock,
          title: t('features.support.available.title'),
          description: t('features.support.available.description'),
          badge: '24/7'
        },
        {
          icon: Heart,
          title: t('features.support.health.title'),
          description: t('features.support.health.description'),
          badge: t('features.badges.medical')
        },
        {
          icon: Shield,
          title: t('features.support.security.title'),
          description: t('features.support.security.description'),
          badge: 'HIPAA'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t('features.badge')}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('features.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Categories */}
        <div className="space-y-20">
          {featuresData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`${category.color} p-3 rounded-xl`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">{t('features.stats.workouts')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">{t('features.stats.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">{t('features.stats.exercises')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">{t('features.stats.support')}</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">
            {t('features.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('features.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/plans">
                <Zap className="h-5 w-5 mr-2" />
                {t('features.cta.primary')}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/ai">
                <PlayCircle className="h-5 w-5 mr-2" />
                {t('features.cta.secondary')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;