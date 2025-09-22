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
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      description: 'Ideal para iniciantes',
      monthlyPrice: 29.90,
      yearlyPrice: 299.90,
      popular: false,
      features: [
        { name: 'Treinos personalizados com IA', included: true, tooltip: 'Nossa IA cria e ajusta seus treinos diariamente.' },
        { name: 'App mobile completo', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Análise de progresso básica', included: true },
        { name: 'Plano de nutrição com IA', included: false },
        { name: 'Coach virtual 24/7', included: false },
        { name: 'Integração com wearables', included: false },
        { name: 'Consultas com nutricionista', included: false },
      ]
    },
    {
      id: 'professional',
      name: 'Profissional',
      description: 'O mais popular',
      monthlyPrice: 59.90,
      yearlyPrice: 599.90,
      popular: true,
      features: [
        { name: 'Tudo do Básico, e mais:', included: true, isTitle: true },
        { name: 'Plano de nutrição com IA', included: true, tooltip: 'Receba planos alimentares personalizados pela nossa IA.' },
        { name: 'Coach virtual 24/7', included: true, tooltip: 'Tire dúvidas sobre exercícios e nutrição a qualquer hora.' },
        { name: 'Integração com wearables', included: true, tooltip: 'Sincronize dados do seu Apple Watch, Garmin, etc.' },
        { name: 'Análise de progresso avançada', included: true },
        { name: 'Consultas com nutricionista', included: false },
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Experiência completa',
      monthlyPrice: 99.90,
      yearlyPrice: 999.90,
      popular: false,
      features: [
        { name: 'Tudo do Profissional, e mais:', included: true, isTitle: true },
        { name: 'Consultas mensais com nutricionista', included: true, tooltip: 'Uma consulta por vídeo de 30 min por mês com um de nossos nutricionistas.' },
        { name: 'Suporte prioritário via WhatsApp', included: true },
        { name: 'Acesso a workshops exclusivos', included: true },
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
    return saving.toFixed(2).replace('.', ',');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('plans.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece sua transformação com um teste gratuito de 7 dias em qualquer plano.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={cn("font-medium", !isYearly && "text-primary")}>
            {t('plans.monthly')}
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Alternar para cobrança anual"
          />
          <span className={cn("font-medium", isYearly && "text-primary")}>
            {t('plans.yearly')}
          </span>
          <Badge variant="secondary" className="ml-2 animate-pulse">
            {t('plans.save')} 2 meses
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.id} className={cn(
              "flex flex-col border-2 transition-all duration-300",
              plan.popular ? "border-primary shadow-2xl scale-105" : "border-border hover:shadow-xl"
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
                  <span className="text-sm">R$</span>
                  <span className="text-4xl font-bold">
                    {getPrice(plan)}
                  </span>
                  <span className="text-muted-foreground">
                    /mês
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm text-green-600 font-semibold">
                    Economize R${getSavings(plan)} no plano anual
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 flex-grow mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={cn("flex items-center gap-3 text-sm", feature.isTitle && "font-bold text-foreground mt-4")}>
                      {feature.isTitle ? null : feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={cn(feature.included ? "text-foreground" : "text-muted-foreground line-through")}>
                        {feature.name}
                      </span>
                      {feature.tooltip && (
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-auto" variant={plan.popular ? "default" : "outline"}>
                  {t('plans.select')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;