import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Video, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();
  
  const topics = [
    { title: t('help.topics.gettingStarted.title'), description: t('help.topics.gettingStarted.description'), icon: BookOpen },
    { title: t('help.topics.videoTutorials.title'), description: t('help.topics.videoTutorials.description'), icon: Video },
    { title: t('help.topics.contactUs.title'), description: t('help.topics.contactUs.description'), icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('help.title')}</h1>
        <p className="text-xl text-muted-foreground mb-8">{t('help.subtitle')}</p>
        <div className="relative max-w-2xl mx-auto mb-16">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder={t('help.searchPlaceholder')} className="pl-12 h-12 text-lg" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <topic.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;