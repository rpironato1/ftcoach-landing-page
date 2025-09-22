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
  const { t, i18n } = useTranslation();

  const pressReleases = t('press.releases.items', { returnObjects: true }) as any[];
  const mediaCoverage = t('press.coverage.items', { returnObjects: true }) as any[];
  const brandAssets = t('press.assets.items', { returnObjects: true }) as any[];

  const mediaKit = [
    {
      title: t('press.mediaKit.factSheet.title'),
      description: t('press.mediaKit.factSheet.description'),
      icon: FileText
    },
    {
      title: t('press.mediaKit.execBios.title'),
      description: t('press.mediaKit.execBios.description'),
      icon: User
    },
    {
      title: t('press.mediaKit.companyHistory.title'),
      description: t('press.mediaKit.companyHistory.description'),
      icon: Newspaper
    },
    {
      title: t('press.mediaKit.imagesLogos.title'),
      description: t('press.mediaKit.imagesLogos.description'),
      icon: Download
    }
  ];

  // Hardcoded dates for demonstration
  const releaseDates = ["2024-01-15", "2024-01-10", "2023-12-20", "2023-12-15"];
  const coverageDates = ["2024-01-15", "2024-01-12", "2024-01-10", "2024-01-08"];

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
            <h2 className="text-3xl font-bold mb-4">{t('press.releases.title')}</h2>
            <p className="text-muted-foreground">
              {t('press.releases.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{release.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(releaseDates[index]).toLocaleDateString(i18n.language)}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{release.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{release.summary}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {release.media.slice(0, 2).map((media: string, idx: number) => (
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
            <h2 className="text-3xl font-bold mb-4">{t('press.coverage.title')}</h2>
            <p className="text-muted-foreground">
              {t('press.coverage.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mediaCoverage.map((coverage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="/placeholder.svg"
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
                      {new Date(coverageDates[index]).toLocaleDateString(i18n.language)}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        {t('press.coverage.viewArticle')}
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
            <h2 className="text-3xl font-bold mb-4">{t('press.assets.title')}</h2>
            <p className="text-muted-foreground">
              {t('press.assets.subtitle')}
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
                      {asset.formats.map((format: string, idx: number) => (
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