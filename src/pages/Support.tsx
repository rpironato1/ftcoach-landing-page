import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Headphones,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  Book,
  Video,
  Users,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Zap,
  Globe,
  Calendar,
  FileText,
  Heart,
  Shield,
  Monitor
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const { t } = useTranslation();

  const supportChannels = [
    {
      icon: MessageSquare,
      title: t('support.channels.chat.title'),
      description: t('support.channels.chat.description'),
      availability: t('support.channels.chat.availability'),
      response: t('support.channels.chat.response'),
      color: 'bg-blue-500',
      link: '/contact'
    },
    {
      icon: Mail,
      title: t('support.channels.email.title'),
      description: t('support.channels.email.description'),
      availability: t('support.channels.email.availability'),
      response: t('support.channels.email.response'),
      color: 'bg-green-500',
      link: '/contact'
    },
    {
      icon: Phone,
      title: t('support.channels.phone.title'),
      description: t('support.channels.phone.description'),
      availability: t('support.channels.phone.availability'),
      response: t('support.channels.phone.response'),
      color: 'bg-orange-500',
      link: '/contact'
    },
    {
      icon: Video,
      title: t('support.channels.video.title'),
      description: t('support.channels.video.description'),
      availability: t('support.channels.video.availability'),
      response: t('support.channels.video.response'),
      color: 'bg-purple-500',
      link: '/contact'
    }
  ];

  const supportTypes = [
    {
      icon: HelpCircle,
      title: t('support.types.general.title'),
      description: t('support.types.general.description'),
      examples: [
        t('support.types.general.examples.0'),
        t('support.types.general.examples.1'),
        t('support.types.general.examples.2')
      ]
    },
    {
      icon: Monitor,
      title: t('support.types.technical.title'),
      description: t('support.types.technical.description'),
      examples: [
        t('support.types.technical.examples.0'),
        t('support.types.technical.examples.1'),
        t('support.types.technical.examples.2')
      ]
    },
    {
      icon: Heart,
      title: t('support.types.health.title'),
      description: t('support.types.health.description'),
      examples: [
        t('support.types.health.examples.0'),
        t('support.types.health.examples.1'),
        t('support.types.health.examples.2')
      ]
    },
    {
      icon: Users,
      title: t('support.types.account.title'),
      description: t('support.types.account.description'),
      examples: [
        t('support.types.account.examples.0'),
        t('support.types.account.examples.1'),
        t('support.types.account.examples.2')
      ]
    }
  ];

  const resources = [
    {
      icon: Book,
      title: t('support.resources.knowledge.title'),
      description: t('support.resources.knowledge.description'),
      items: '200+',
      link: '/help'
    },
    {
      icon: Video,
      title: t('support.resources.tutorials.title'),
      description: t('support.resources.tutorials.description'),
      items: '50+',
      link: '/help'
    },
    {
      icon: Users,
      title: t('support.resources.community.title'),
      description: t('support.resources.community.description'),
      items: '10K+',
      link: '/help'
    },
    {
      icon: FileText,
      title: t('support.resources.guides.title'),
      description: t('support.resources.guides.description'),
      items: '30+',
      link: '/help'
    }
  ];

  const statusData = [
    {
      service: t('support.status.services.app'),
      status: 'operational',
      uptime: '99.9%'
    },
    {
      service: t('support.status.services.api'),
      status: 'operational',
      uptime: '99.8%'
    },
    {
      service: t('support.status.services.ai'),
      status: 'operational',
      uptime: '99.7%'
    },
    {
      service: t('support.status.services.payments'),
      status: 'operational',
      uptime: '100%'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'down':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t('support.badge')}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('support.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('support.subtitle')}
          </p>
        </div>

        {/* Support Channels */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('support.channels.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardHeader className="text-center">
                  <div className={`${channel.color} p-4 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {channel.response}
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link to={channel.link}>
                      {t('support.channels.contact')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('support.types.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {supportTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {t('support.types.examples')}:
                    </div>
                    <ul className="space-y-1 text-sm">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Self-Service Resources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('support.resources.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardHeader className="text-center">
                  <div className="p-4 bg-primary/10 rounded-xl mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {resource.items}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to={resource.link}>
                      {t('support.resources.explore')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('support.status.title')}
          </h2>
          <Card className="border-0 shadow-lg max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{t('support.status.subtitle')}</CardTitle>
                  <CardDescription>{t('support.status.description')}</CardDescription>
                </div>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {t('support.status.operational')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statusData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(item.status)}
                      <span className="font-medium">{item.service}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {t('support.status.uptime')}: {item.uptime}
                      </span>
                      <Badge variant="outline" className="text-green-600">
                        {t('support.status.operational')}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('support.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('support.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Headphones className="h-5 w-5 mr-2" />
                  {t('support.cta.contact')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/help">
                  <Book className="h-5 w-5 mr-2" />
                  {t('support.cta.help')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;