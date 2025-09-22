import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, X, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Plans = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      description: 'Ideal para iniciantes',
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: false,
      features: [
        { name: 'Treinos personalizados', included: true },
        { name: 'App mobile', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Análise de progresso', included: true },
        { name: 'Nutrição personalizada', included: false },
        { name: 'Coach virtual 24/7', included: false },
        { name: 'Integração com wearables', included: false },
        { name: 'Consultas mensais', included: false },
      ]
    },
    {
      id: 'professional',
      name: 'Profissional',
      description: 'Mais popular - Completo',
      monthlyPrice: 59,
      yearlyPrice: 590,
      popular: true,
      features: [
        { name: 'Treinos personalizados', included: true },
        { name: 'App mobile', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Análise de progresso', included: true },
        { name: 'Nutrição personalizada', included: true },
        { name: 'Coach virtual 24/7', included: true },
        { name: 'Integração com wearables', included: true },
        { name: 'Consultas mensais', included: false },
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Experiência completa',
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      features: [
        { name: 'Treinos personalizados', included: true },
        { name: 'App mobile', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Análise de progresso', included: true },
        { name: 'Nutrição personalizada', included: true },
        { name: 'Coach virtual 24/7', included: true },
        { name: 'Integração com wearables', included: true },
        { name: 'Consultas mensais', included: true },
      ]
    }
  ];

  const additionalPlans = [
    {
      id: 'student',
      name: 'Estudante',
      description: 'Desconto especial',
      monthlyPrice: 19,
      yearlyPrice: 190,
      discount: 35,
      features: ['Treinos personalizados', 'App mobile', 'Suporte básico']
    },
    {
      id: 'family',
      name: 'Família',
      description: 'Até 5 membros',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      discount: 25,
      features: ['Contas ilimitadas', 'Treinos personalizados', 'Nutrição familiar']
    },
    {
      id: 'corporate',
      name: 'Corporate',
      description: 'Para empresas',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      discount: 20,
      features: ['Dashboard corporativo', 'Relatórios avançados', 'Onboarding personalizado']
    },
    {
      id: 'elite',
      name: 'Elite',
      description: 'Exclusivo',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      discount: 15,
      features: ['Coach pessoal', 'Nutricionista dedicado', 'Suporte VIP 24/7']
    },
    {
      id: 'starter',
      name: 'Starter',
      description: 'Comece agora',
      monthlyPrice: 15,
      yearlyPrice: 150,
      discount: 20,
      features: ['Treinos básicos', 'App mobile', 'Comunidade']
    },
    {
      id: 'athlete',
      name: 'Athlete',
      description: 'Para atletas',
      monthlyPrice: 129,
      yearlyPrice: 1290,
      discount: 18,
      features: ['Performance tracking', 'Análise avançada', 'Preparação física']
    }
  ];

  const savings = isYearly ? '2 meses grátis' : 'Economize 17%';

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('plans.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano perfeito para sua jornada fitness
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={cn("text-sm font-medium", !isYearly && "text-primary")}>
            {t('plans.monthly')}
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle billing period"
          />
          <span className={cn("text-sm font-medium", isYearly && "text-primary")}>
            {t('plans.yearly')}
          </span>
          <Badge variant="secondary" className="ml-2">
            {savings}
          </Badge>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan) => (
           Let me continue with the Plans page:

<dyad-write path="src/pages/Plans.tsx">
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, X, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Plans = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      description: 'Ideal para iniciantes',
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: false,
      features: [
        { name: 'Treinos personalizados', included: true },
        { name: 'App mobile', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Análise de progresso', included: true },
        { name: 'Nutrição personalizada', included: false },
        { name: 'Coach virtual 24/7', included: false },
        { name: 'Integração com wearables', included: false },
        { name: 'Consultas mensais', included: false },
      ]
    },
    {
      id: 'professional',
      name: 'Profissional',
      description: 'Mais popular - Completo',
      monthlyPrice: 59,
      yearlyPrice: 590,
      popular: true,
      features: [
        { name: 'Treinos personalizados', included: true },
        { name: 'App mobile', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Análise de progresso', included: true },
        { name: 'Nutrição personalizada', included: true },
        { name: 'Coach virtual 24/7', included: true },
        { name: 'Integração com wearables', included: true },
        { name: 'Consultas mensais', included: false },
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Experiência completa',
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      features: [
        { name: 'Treinos personalizados', included: true },
        { name: 'App mobile', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Análise de progresso', included: true },
        { name: 'Nutrição personalizada', included: true },
        { name: 'Coach virtual 24/7', included: true },
        { name: 'Integração com wearables', included: true },
        { name: 'Consultas mensais', included: true },
      ]
    }
  ];

  const additionalPlans = [
    {
      id: 'student',
      name: 'Estudante',
      description: 'Desconto especial',
      monthlyPrice: 19,
      yearlyPrice: 190,
      discount: 35,
      features: ['Treinos personalizados', 'App mobile', 'Suporte básico']
    },
    {
      id: 'family',
      name: 'Família',
      description: 'Até 5 membros',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      discount: 25,
      features: ['Contas ilimitadas', 'Treinos personalizados', 'Nutrição familiar']
    },
    {
      id: 'corporate',
      name: 'Corporate',
      description: 'Para empresas',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      discount: 20,
      features: ['Dashboard corporativo', 'Relatórios avançados', 'Onboarding personalizado']
    },
    {
      id: 'elite',
      name: 'Elite',
      description: 'Exclusivo',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      discount: 15,
      features: ['Coach pessoal', 'Nutricionista dedicado', 'Suporte VIP 24/7']
    },
    {
      id: 'starter',
      name: 'Starter',
      description: 'Comece agora',
      monthlyPrice: 15,
      yearlyPrice: 150,
      discount: 20,
      features: ['Treinos básicos', 'App mobile', 'Comunidade']
    },
    {
      id: 'athlete',
      name: 'Athlete',
      description: 'Para atletas',
      monthlyPrice: 129,
      yearlyPrice: 1290,
      discount: 18,
      features: ['Performance tracking', 'Análise avançada', 'Preparação física']
    }
  ];

  const savings = isYearly ? '2 meses grátis' : 'Economize 17%';

  return (
    <TooltipProvider>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('plans.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano perfeito para sua jornada fitness
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={cn("text-sm font-medium", !isYearly && "text-primary")}>
              {t('plans.monthly')}
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Toggle billing period"
            />
            <span className={cn("text-sm font-medium", isYearly && "text-primary")}>
              {t('plans.yearly')}
            </span>
            <Badge variant="secondary" className="ml-2">
              {savings}
            </Badge>
          </div>

          {/* Main Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.id} className={cn(
                "relative border-2 transition-all duration-300 hover:shadow-xl",
                plan.popular ? "border-primary scale-105" : "border-border"
              )}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {t('plans.popular')}
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      R${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? 'ano' : 'mês'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600">
                      Economize R${(plan.monthlyPrice * 12) - plan.yearlyPrice}/ano
                    </p>
                  )}
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={cn(
                          "text-sm",
                          feature.included ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    {t('plans.select')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Plans Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Planos Especiais
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {additionalPlans.map((plan) => (
                <Card key={plan.id} className="border-1 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        -{plan.discount}%
                      </Badge>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-3">
                      <span className="text-2xl font-bold">
                        R${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        /{isYearly ? 'ano' : 'mês'}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full">
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Comparison */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-center">
              Compare todos os recursos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Recurso</th>
                    <th className="text-center py-3 px-4">Básico</th>
                    <th className="text-center py-3 px-4">Profissional</th>
                    <th className="text-center py-3 px-4">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'IA Personal Trainer', 'Nutrição Personalizada', 'Análise de Progresso',
                    'App Mobile Completo', 'Suporte 24/7', 'Integração Wearables',
                    'Consultas Mensais', 'Relatórios Avançados', 'Comunidade Exclusiva'
                  ].map((feature, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 px-4 font-medium">{feature}</td>
                      <td className="text-center py-3 px-4">
                        {index < 4 ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-gray-300 mx-auto" />}
                      </td>
                      <td className="text-center py-3 px-4">
                        {index < 7 ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-gray-300 mx-auto" />}
                      </td>
                      <td className="text-center py-3 px-4">
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-4">
              Dúvidas sobre os planos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Confira nossa seção de perguntas frequentes ou entre em contato
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/faq">
                  Ver FAQ
                </Link>
              </Button>
              <Button asChild>
                <Link to="/contact">
                  Falar com Especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Plans;