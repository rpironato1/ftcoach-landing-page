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
import { useTranslation } from 'react-i18next';

const Investors = () => {
  const { t } = useTranslation();
  const metrics = [
    {
      label: t('investors.metrics.companyValue'),
      value: "R$ 500M",
      change: "+150% YoY",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      label: t('investors.metrics.annualRevenue'),
      value: "R$ 120M",
      change: "+200% YoY",
      icon: DollarSign,
      color: "text-blue-600"
    },
    {
      label: t('investors.metrics.activeUsers'),
      value: "500K+",
      change: "+300% YoY",
      icon: Users,
      color: "text-purple-600"
    },
    {
      label: t('investors.metrics.retentionRate'),
      value: "94%",
      change: "+5% YoY",
      icon: Target,
      color: "text-orange-600"
    }
  ];

  const fundingRounds = [
    {
      round: t('investors.funding.rounds.seed'),
      year: "2020",
      amount: "R$ 2M",
      lead: "Monashees",
      valuation: "R$ 10M",
      description: t('investors.funding.descriptions.2020')
    },
    {
      round: t('investors.funding.rounds.seriesA'),
      year: "2021",
      amount: "R$ 15M",
      lead: "Kaszek",
      valuation: "R$ 60M",
      description: t('investors.funding.descriptions.2021')
    },
    {
      round: t('investors.funding.rounds.seriesB'),
      year: "2022",
      amount: "R$ 50M",
      lead: "SoftBank",
      valuation: "R$ 200M",
      description: t('investors.funding.descriptions.2022')
    },
    {
      round: t('investors.funding.rounds.seriesC'),
      year: "2024",
      amount: "R$ 100M",
      lead: "Tiger Global",
      valuation: "R$ 500M",
      description: t('investors.funding.descriptions.2024')
    }
  ];

  const documents = [
    {
      title: t('investors.documents.items.presentation.title'),
      description: t('investors.documents.items.presentation.description'),
      size: "5.2 MB",
      type: "PDF",
      icon: Presentation
    },
    {
      title: t('investors.documents.items.annualReport.title'),
      description: t('investors.documents.items.annualReport.description'),
      size: "12.8 MB",
      type: "PDF",
      icon: FileText
    },
    {
      title: t('investors.documents.items.esgReport.title'),
      description: t('investors.documents.items.esgReport.description'),
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
            {t('investors.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('investors.subtitle')}
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
            <h2 className="text-3xl font-bold mb-4">{t('investors.funding.title')}</h2>
            <p className="text-muted-foreground">
              {t('investors.funding.subtitle')}
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
                      <span className="font-medium">{t('investors.funding.leader')}</span>
                      <p className="text-muted-foreground">{round.lead}</p>
                    </div>
                    <div>
                      <span className="font-medium">{t('investors.funding.valuation')}</span>
                      <p className="text-muted-foreground">{round.valuation}</p>
                    </div>
                    <div>
                      <span className="font-medium">{t('investors.funding.objective')}</span>
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
            <h2 className="text-3xl font-bold mb-4">{t('investors.documents.title')}</h2>
            <p className="text-muted-foreground">
              {t('investors.documents.subtitle')}
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
                      {t('investors.documents.download')}
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
            {t('investors.contact.title')}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('investors.contact.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Mail className="h-4 w-4 mr-2" />
              {t('investors.contact.email')}
            </Button>
            <Button variant="outline" size="lg">
              {t('investors.contact.scheduleButton')}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Investors;