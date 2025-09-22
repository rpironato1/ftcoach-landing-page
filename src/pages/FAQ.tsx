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

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'getting-started', name: 'Primeiros Passos' },
    { id: 'account', name: 'Conta' },
    { id: 'workouts', name: 'Treinos' },
    { id: 'billing', name: 'Pagamento' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'getting-started',
      question: 'Como começar a usar o FitCoach?',
      answer: 'Baixe o aplicativo, crie sua conta com informações básicas como idade, peso, altura e objetivos. Nossa IA criará um plano personalizado em segundos. Você pode começar com nosso teste gratuito de 7 dias.',
      popular: true
    },
    {
      id: 2,
      category: 'workouts',
      question: 'Como a IA personaliza meus treinos?',
      answer: 'Nossa IA analisa seus dados biométricos, histórico de treinos, preferências, limitações físicas e progresso em tempo real. Cada sessão é adaptada baseada em sua performance e feedback.',
      popular: true
    },
    {
      id: 5,
      category: 'account',
      question: 'Como faço para cancelar minha assinatura?',
      answer: 'Você pode cancelar a qualquer momento nas configurações da sua conta. O acesso continua até o final do período pago. Não cobramos taxas de cancelamento e o processo é 100% online.',
      popular: true
    },
    {
      id: 12,
      category: 'billing',
      question: 'Existe período de garantia?',
      answer: 'Sim! Oferecemos 7 dias grátis para testar todos os recursos. Se não ficar satisfeito, cancele antes do período trial e não será cobrado.',
      popular: true
    },
    {
      id: 3,
      category: 'getting-started',
      question: 'Preciso de equipamentos para treinar?',
      answer: 'Não necessariamente! Oferecemos treinos com e sem equipamentos. Você pode escolher treinos apenas com peso corporal ou adicionar equipamentos que tenha disponível. A IA adapta os exercícios conforme seus recursos.',
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
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o FitCoach
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar perguntas..."
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
            <h3 className="text-2xl font-bold mb-2">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de suporte está aqui para ajudar você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat ao Vivo
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Enviar Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;