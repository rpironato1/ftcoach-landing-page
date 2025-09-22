import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Target, Users, TrendingUp, Play } from 'lucide-react';

const AI = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Avançado",
      description: "Algoritmos que aprendem com seu progresso e adaptam os treinos em tempo real"
    },
    {
      icon: Zap,
      title: "Análise Instantânea",
      description: "Processamento de dados biométricos em milissegundos para otimização imediata"
    },
    {
      icon: Target,
      title: "Precisão Cirúrgica",
      description: "98% de precisão na personalização de treinos e previsão de resultados"
    },
    {
      icon: Users,
      title: "Comunidade Inteligente",
      description: "IA que conecta usuários com perfis similares para motivação mútua"
    }
  ];

  const stats = [
    { label: "Dados Processados", value: "50M+" },
    { label: "Precisão da IA", value: "98%" },
    { label: "Tempo de Resposta", value: "<100ms" },
    { label: "Usuários Atendidos", value: "500K+" }
  ];

  const testimonials = [
    {
      name: "Dr. Ana Costa",
      role: "Pesquisadora em IA",
      image: "/placeholder.svg",
      text: "A tecnologia da FitCoach é revolucionária. É como ter um personal trainer com PhD em fisiologia do exercício disponível 24/7."
    },
    {
      name: "Carlos Silva",
      role: "Engenheiro de Software",
      image: "/placeholder.svg",
      text: "Como engenheiro, fiquei impressionado com a sofisticação dos algoritmos. A IA realmente entende minhas necessidades."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Inteligência Artificial
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IA FocusTraining
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A tecnologia mais avançada em personalização fitness, 
            desenvolvida por especialistas em machine learning e fisiologia do exercício
          </p>
          <Button size="lg" className="group">
            <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            Ver Demo da IA
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
            Como Nossa IA Revoluciona Seu Treino
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
            O Que Dizem os Especialistas
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
            Pronto para Experimentar o Futuro do Fitness?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão transformando suas vidas 
            com a tecnologia mais avançada em personalização fitness
          </p>
          <Button size="lg">
            Comece Agora - 7 Dias Grátis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AI;