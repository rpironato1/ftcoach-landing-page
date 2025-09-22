import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, X, HelpCircle, Zap, Users, Crown, Star, Target, Award, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Plans = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(true);

  // Sistema de 9 planos conforme especificação
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Star,
      description: 'Para quem está começando',
      monthlyPrice: 19.90,
      yearlyPrice: 199.90,
      popular: false,
      features: [
        { name: 'Treinos básicos personalizados', included: true },
        { name: 'App mobile essencial', included: true },
        { name: 'Suporte por email', included: true },
        { name: '3 treinos por semana', included: true },
        { name: 'Análise de progresso simples', included: true },
        { name: 'Comunidade básica', included: true },
        { name: 'Plano nutricional genérico', included: false },
        { name: 'Coach virtual', included: false },
        { name: 'Integração wearables', included: false },
      ]
    },
    {
      id: 'essential',
      name: 'Essential',
      icon: Target,
      description: 'Ideal para prática regular',
      monthlyPrice: 29.90,
      yearlyPrice: 299.90,
      popular: false,
      features: [
        { name: 'Tudo do Starter, e mais:', included: true, isTitle: true },
        { name: 'Treinos diários personalizados', included: true },
        { name: 'Plano nutricional básico com IA', included: true },
        { name: 'Coach virtual 12/5', included: true },
        { name: 'Análise de progresso detalhada', included: true },
        { name: 'Integração Apple Watch/Android', included: true },
        { name: 'Aulas em grupo online', included: false },
        { name: 'Consultas com especialistas', included: false },
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: Zap,
      description: 'Mais popular - Completo',
      monthlyPrice: 49.90,
      yearlyPrice: 499.90,
      popular: true,
      features: [
        { name: 'Tudo do Essential, e mais:', included: true, isTitle: true },
        { name: 'Coach virtual 24/7', included: true },
        { name: 'Plano nutricional avançado com IA', included: true },
        { name: 'Integração todos wearables', included: true },
        { name: 'Aulas em grupo ilimitadas', included: true },
        { name: 'Desafios semanais exclusivos', included: true },
        { name: 'Relatórios de performance', included: true },
        { name: 'Consultas mensais nutricionista', included: false },
      ]
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: Rocket,
      description: 'Para atletas amadores',
      monthlyPrice: 69.90,
      yearlyPrice: 699.90,
      popular: false,
      features: [
        { name: 'Tudo do Professional, e mais:', included: true, isTitle: true },
        { name: 'Planos para competições', included: true },
        { name: 'Análise biomecânica avançada', included: true },
        { name: 'Consultas quinzenais nutricionista', included: true },
        { name: 'Acesso a especialistas esportivos', included: true },
        { name: 'Recuperação e prevenção de lesões', included: true },
        { name: 'Suporte prioritário', included: false },
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      icon: Crown,
      description: 'Experiência premium completa',
      monthlyPrice: 99.90,
      yearlyPrice: 999.90,
      popular: false,
      features: [
        { name: 'Tudo do Performance, e mais:', included: true, isTitle: true },
        { name: 'Consultas semanais nutricionista', included: true },
        { name: 'Coach dedicado personalizado', included: true },
        { name: 'Suporte prioritário 24/7', included: true },
        { name: 'Acesso a eventos exclusivos', included: true },
        { name: 'Assessoria completa de carreira', included: true },
        { name: 'Programas de mentoria', included: true },
      ]
    },
    {
      id: 'family',
      name: 'Família',
      icon: Users,
      description: 'Para até 4 pessoas',
      monthlyPrice: 149.90,
      yearlyPrice: 1499.90,
      popular: false,
      features: [
        { name: '4 contas Elite com desconto', included: true, isTitle: true },
        { name: 'Perfis individuais personalizados', included: true },
        { name: 'Desafios em família', included: true },
        { name: 'Relatórios comparativos', included: true },
        { name: 'Consultas em grupo', included: true },
      ]
    },
    {
      id: 'corporate-basic',
      name: 'Corporate Basic',
      icon: Award,
      description: 'Para pequenas empresas',
      monthlyPrice: 29.90,
      yearlyPrice: 299.90,
      popular: false,
      perUser: true,
      features: [
        { name: 'Plano Essential para equipes', included: true, isTitle: true },
        { name: 'Dashboard administrativo', included: true },
        { name: 'Relatórios de engajamento', included: true },
        { name: 'Programas corporativos', included: true },
        { name: 'Suporte dedicado RH', included: false },
      ]
    },
    {
      id: 'corporate-pro',
      name: 'Corporate Pro',
      icon: Zap,
      description: 'Para médias empresas',
      monthlyPrice: 44.90,
      yearlyPrice: 449.90,
      popular: true,
      perUser: true,
      features: [
        { name: 'Plano Professional para equipes', included: true, isTitle: true },
        { name: 'Dashboard avançado analytics', included: true },
        { name: 'Programas wellness personalizados', included: true },
        { name: 'Consultoria estratégica', included: true },
        { name: 'Suporte dedicado RH', included: true },
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      description: 'Solução corporativa completa',
      monthlyPrice: 79.90,
      yearlyPrice: 799.90,
      popular: false,
      perUser: true,
      features: [
        { name: 'Plano Elite para equipes', included: true, isTitle: true },
        { name: 'API integração completa', included: true },
        { name: 'Consultoria executiva', included: true },
        { name: 'Programas sob medida', included: true },
        { name: 'Suporte executivo 24/7', included: true },
      ]
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    const price = isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice;
    return price.toFixed(2).replace('.', ',');
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const saving = monthlyTotal - plan.yearlyPrice;
    const percentage = ((saving / monthlyTotal) * 100).toFixed(0);
    return { amount: saving.toFixed(2).replace('.', ','), percentage };
  };

  const calculateTotalSavings = () => {
    const totalMonthly = plans.reduce((sum, plan) => sum + plan.monthlyPrice, 0);
    const totalYearly = plans.reduce((sum, plan) => sum + plan.yearlyPrice, 0);
    return ((totalMonthly * 12 - totalYearly) / (totalMonthly * 12) * 100).toFixed(0);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header com calculadora de economia */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            💰 Economize até {calculateTotalSavings()}% com plano anual
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t('plans.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Escolha entre 9 modalidades perfeitas para sua jornada fitness. 
            <span className="font-semibold text-primary"> Teste gratuito de 7 dias em qualquer plano.</span>
          </p>

          {/* Toggle com economia destacada */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-4 bg-muted/50 rounded-full p-1">
              <span className={cn("px-6 py-2 rounded-full transition-all", !isYearly && "bg-background shadow-lg")}>
                {t('plans.monthly')}
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={cn("px-6 py-2 rounded-full transition-all", isYearly && "bg-background shadow-lg")}>
                {t('plans.yearly')}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {t('plans.save')} 17%
                </Badge>
              </span>
            </div>
          </div>
        </div>

        {/* Grid de 9 planos responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const savings = getSavings(plan);
            return (
              <Card key={plan.id} className={cn(
                "flex flex-col border-2 transition-all duration-500 hover:scale-105",
                plan.popular 
                  ? "border-primary shadow-2xl relative ring-2 ring-primary/20" 
                  : "border-border hover:shadow-xl"
              )}>
                {/* Badge Popular */}
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    👑 {t('plans.popular')}
                  </Badge>
                )}

                <CardHeader className="text-center relative">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center">
                      <plan.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.description}</CardDescription>
                  
                  {/* Preço com economia */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl">R$</span>
                      <span className="text-5xl font-bold">{getPrice(plan)}</span>
                      <span className="text-muted-foreground text-lg">/mês</span>
                    </div>
                    {plan.perUser && (
                      <Badge variant="outline" className="text-xs">por usuário</Badge>
                    )}
                    {isYearly && (
                      <div className="space-y-1">
                        <p className="text-sm text-green-600 font-semibold">
                          💰 Economize R${savings.amount} ({savings.percentage}%)
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Cobrado R${plan.yearlyPrice.toFixed(2).replace('.', ',')} anualmente
                        </p>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow p-6">
                  {/* Lista de features com tooltips */}
                  <ul className="space-y-3 flex-grow mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className={cn(
                        "flex items-start gap-3 text-sm leading-relaxed",
                        feature.isTitle && "font-bold text-foreground mt-4 text-base"
                      )}>
                        {feature.isTitle ? null : feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={cn(
                          feature.included ? "text-foreground" : "text-muted-foreground line-through"
                        )}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full mt-auto" 
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {t('plans.select')} {plan.name}
                    {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Seção de comparação avançada */}
        <div className="mt-20 text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Não sabe qual plano escolher?</h3>
              <p className="text-muted-foreground mb-6">
                Nossos especialistas podem ajudar a encontrar a solução perfeita para seus objetivos.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="default">Falar com Especialista</Button>
                <Button variant="outline">Comparar Planos Detalhadamente</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plans;