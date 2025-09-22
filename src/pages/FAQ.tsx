import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('faq.categories.all') },
    { id: 'getting-started', name: t('faq.categories.gettingStarted') },
    { id: 'account', name: t('faq.categories.account') },
    { id: 'workouts', name: t('faq.categories.workouts') },
    { id: 'billing', name: t('faq.categories.billing') }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'getting-started',
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer'),
      popular: true
    },
    {
      id: 2,
      category: 'workouts',
      question: t('faq.items.2.question'),
      answer: t('faq.items.2.answer'),
      popular: true
    },
    {
      id: 5,
      category: 'account',
      question: t('faq.items.5.question'),
      answer: t('faq.items.5.answer'),
      popular: true
    },
    {
      id: 12,
      category: 'billing',
      question: t('faq.items.12.question'),
      answer: t('faq.items.12.answer'),
      popular: true
    },
    {
      id: 3,
      category: 'getting-started',
      question: t('faq.items.3.question'),
      answer: t('faq.items.3.answer'),
      popular: false
    },
  ];

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t('faq.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-4 cursor-pointer" onClick={() => toggleItem(item.id)}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                  {expandedItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              {expandedItems.includes(item.id) && (
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="border-0 bg-muted/50 p-8">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('faq.cta.title')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('faq.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                {t('faq.cta.liveChat')}
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                {t('faq.cta.sendEmail')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;