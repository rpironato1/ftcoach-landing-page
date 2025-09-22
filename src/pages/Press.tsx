import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  User, 
  Globe,
  Newspaper,
  FileText,
  Mail
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Press = () => {
  const { t } = useTranslation();
  const pressReleases = [
    {
      id: 1,
      title: t('press.releases.items.unicorn.title'),
      date: "2024-01-15",
      category: t('press.releases.categories.finance'),
      summary: t('press.releases.items.unicorn.summary'),
      media: ["TechCrunch", "Bloomberg", "Exame"],
    },
    {
      id: 2,
      title: t('press.releases.items.ai.title'),
      date: "2024-01-10",
      category: t('press.releases.categories.technology'),
      summary: t('press.releases.items.ai.summary'),
      media: ["G1", "TechTudo", "Olhar Digital"],
    },
    {
      id: 3,
      title: t('press.releases.items.milestone.title'),
      date: "2023-12-20",
      category: t('press.releases.categories.business'),
      summary: t('press.releases.items.milestone.summary'),
      media: ["Estadão", "Folha", "Valor Econômico"],
    },
    {
      id: 4,
      title: t('press.releases.items.partnership.title'),
      date: "2023-12-15",
      category: t('press.releases.categories.partnerships'),
      summary: t('press.releases.items.partnership.summary'),
      media: ["Forbes", "Vogue", "GQ"],
    }
  ];

  const mediaCoverage = [
    {
      outlet: "TechCrunch",
      title: "Brazilian fitness startup FitCoach becomes unicorn with $100M Series C",
      date: "2024-01-15",
      type: "Online",
      url: "https://techcrunch.com",
      logo: "/placeholder.svg"
    },
    {
      outlet: "Bloomberg",
      title: "FitCoach AI Technology Disrupts Personal Training Market",
      date: "2024-01-12",
      type: "TV",
      url: "https://bloomberg.com",
      logo: "/placeholder.svg"
    },
    {
      outlet: "Exame",
      title: "Como a FitCoach está transformando o mercado de fitness no Brasil",
      date: "2024-01-10",
      type: "Revista",
      url: "https://exame.com",
      logo: "/placeholder.svg"
    },
    {
      outlet: "G1",
      title: "App brasileiro usa IA para criar treinos personalizados",
      date: "2024-01-08",
      type: "Online",
      url: "https://g1.globo.com",
      logo: "/placeholder.svg"
    }
  ];

  const brandAssets = [
    {
      name: t('press.assets.items.logo.name'),
      description: t('press.assets.items.logo.description'),
      formats: ["PNG", "SVG", "EPS"],
      size: "2.5 MB",
      category: t('press.assets.categories.logos')
    },
    {
      name: t('press.assets.items.colors.name'),
      description: t('press.assets.items.colors.description'),
      formats: ["PDF", "AI"],
      size: "5.8 MB",
      category: t('press.assets.categories.brandGuidelines')
    },
    {
      name: t('press.assets.items.team.name'),
      description: t('press.assets.items.team.description'),
      formats: ["JPG", "PNG"],
      size: "15.2 MB",
      category: t('press.assets.categories.photos')
    },
    {
      name: t('press.assets.items.screenshots.name'),
      description: t('press.assets.items.screenshots.description'),
      formats: ["PNG"],
      size: "8.3 MB",
      category: t('press.assets.categories.product')
    }
  ];

  const mediaKit = [
    {
      title: t('press.mediaKit.items.factSheet.title'),
      description: t('press.mediaKit.items.factSheet.description'),
      icon: FileText
    },
    {
      title: t('press.mediaKit.items.bios.title'),
      description: t('press.mediaKit.items.bios.description'),
      icon: User
    },
    {
      title: t('press.mediaKit.items.history.title'),
      description: t('press.mediaKit.items.history.description'),
      icon: Newspaper
    },
    {
      title: t('press.mediaKit.items.images.title'),
      description: t('press.mediaKit.items.images.description'),
      icon: Download
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('press.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('press.subtitle')}
          </p>
        </div>

        {/* Quick Access */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    {t('press.assets.download')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('press.releases.title')}</h2>
            <p className="text-muted-foreground">
              {t('press.releases.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{release.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(release.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{release.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{release.summary}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {release.media.slice(0, 2).map((media, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {media}
                        </Badge>
                      ))}
                      {release.media.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{release.media.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="sm">
                      {t('press.releases.readMore')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Coverage */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cobertura na Mídia</h2>
            <p className="text-muted-foreground">
              O que estão dizendo sobre a FitCoach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mediaCoverage.map((coverage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={coverage.logo}
                      alt={coverage.outlet}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{coverage.outlet}</CardTitle>
                      <CardDescription>{coverage.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "{coverage.title}"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {new Date(coverage.date).toLocaleDateString('pt-BR')}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={coverage.url} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Ver Matéria
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Brand Assets */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Materiais de Marca</h2>
            <p className="text-muted-foreground">
              Logos, imagens e recursos para uso da mídia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandAssets.map((asset, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{asset.name}</CardTitle>
                    <Badge variant="outline">{asset.category}</Badge>
                  </div>
                  <CardDescription>{asset.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex gap-2 flex-wrap">
                      {asset.formats.map((format, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{asset.size}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Contato para Imprensa
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Para solicitações de entrevistas, informações adicionais ou suporte com materiais,
            nossa equipe de comunicação está à disposição.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Mail className="h-4 w-4 mr-2" />
              press@fitcouch.com.br
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
              Solicitar Entrevista
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Press;