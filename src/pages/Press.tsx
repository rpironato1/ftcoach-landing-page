import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { 
  Download, 
  User, 
  Globe,
  Newspaper,
  FileText,
  Mail
} from 'lucide-react';

const Press = () => {
  const { t } = useTranslation();
  
  const pressReleases = [
    {
      id: 1,
      title: "FitCoach Levanta R$ 100M em Série C e Se Torna Unicórnio Brasileiro",
      date: "2024-01-15",
      category: "Finanças",
      summary: "Rodada liderada pela Tiger Global vai acelerar expansão internacional e desenvolvimento de novas tecnologias.",
      media: ["TechCrunch", "Bloomberg", "Exame"],
    },
    {
      id: 2,
      title: "IA da FitCoach Revoluciona Personalização de Treinos com 98% de Precisão",
      date: "2024-01-10",
      category: "Tecnologia",
      summary: "Novo algoritmo de machine learning reduz tempo de análise em 70% e aumenta taxa de sucesso dos usuários.",
      media: ["G1", "TechTudo", "Olhar Digital"],
    },
    {
      id: 3,
      title: "FitCoach Alcança Marca de 500 Mil Transformações de Vida",
      date: "2023-12-20",
      category: "Negócios",
      summary: "Plataforma brasileira se consolida como líder em fitness personalizado na América Latina.",
      media: ["Estadão", "Folha", "Valor Econômico"],
    },
    {
      id: 4,
      title: "Parceria com Nike Fortalece Posição da FitCoach no Mercado",
      date: "2023-12-15",
      category: "Parcerias",
      summary: "Colaboração estratégica vai integrar produtos Nike ao ecossistema FitCoach.",
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
      name: t('press.brandAssets.mainLogo'),
      description: t('press.brandAssets.mainLogoDesc'),
      formats: ["PNG", "SVG", "EPS"],
      size: "2.5 MB",
      category: "Logos"
    },
    {
      name: t('press.brandAssets.colorKit'),
      description: t('press.brandAssets.colorKitDesc'),
      formats: ["PDF", "AI"],
      size: "5.8 MB",
      category: "Brand Guidelines"
    },
    {
      name: t('press.brandAssets.teamPhotos'),
      description: t('press.brandAssets.teamPhotosDesc'),
      formats: ["JPG", "PNG"],
      size: "15.2 MB",
      category: "Fotos"
    },
    {
      name: t('press.brandAssets.appScreenshots'),
      description: t('press.brandAssets.appScreenshotsDesc'),
      formats: ["PNG"],
      size: "8.3 MB",
      category: "Product"
    }
  ];

  const mediaKit = [
    {
      title: t('press.mediaKit.factSheet'),
      description: t('press.mediaKit.factSheetDesc'),
      icon: FileText
    },
    {
      title: t('press.mediaKit.executiveBios'),
      description: t('press.mediaKit.executiveBiosDesc'),
      icon: User
    },
    {
      title: t('press.mediaKit.companyHistory'),
      description: t('press.mediaKit.companyHistoryDesc'),
      icon: Newspaper
    },
    {
      title: t('press.mediaKit.imagesLogos'),
      description: t('press.mediaKit.imagesLogosDesc'),
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
                    {t('press.mediaKit.download')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('press.pressReleases.title')}</h2>
            <p className="text-muted-foreground">
              {t('press.pressReleases.subtitle')}
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
                      {t('press.pressReleases.readMore')}
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
            <h2 className="text-3xl font-bold mb-4">{t('press.mediaCoverage.title')}</h2>
            <p className="text-muted-foreground">
              {t('press.mediaCoverage.subtitle')}
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
                        {t('press.mediaCoverage.viewArticle')}
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
            <h2 className="text-3xl font-bold mb-4">{t('press.brandAssets.title')}</h2>
            <p className="text-muted-foreground">
              {t('press.brandAssets.subtitle')}
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
                    {t('press.mediaKit.download')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t('press.contact.title')}
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {t('press.contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Mail className="h-4 w-4 mr-2" />
              {t('press.contact.email')}
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
              {t('press.contact.requestInterview')}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Press;