import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
        { name: 'Tudo do Básico, e mais:', included: true, isTitle: true },
        { name: 'Nutrição personalizada', included: true },
        { name: 'Coach virtual 24/7', included: true },
        { name: 'Integração com wearables', included: true },
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
        { name: 'Tudo do Profissional, e mais:', included: true, isTitle: true },
        { name: 'Consultas mensais com nutricionista', included: true },
        { name: 'Suporte prioritário', included: true },
      ]
    }
  ];

  const savings = isYearly ? 'Economize 17%' : '2 meses grátis';

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('plans.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano perfeito para sua jornada fitness e comece hoje mesmo.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={cn("font-medium", !isYearly && "text-primary")}>
            {t('plans.monthly')}
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle billing period"
          />
          <span className={cn("font-medium", isYearly && "text-primary")}>
            {t('plans.yearly')}
          </span>
          <Badge variant="secondary" className="ml-2">
            {savings}
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.id} className={cn(
              "flex flex-col",
              plan.popular ? "border-primary border-2" : ""
            )}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    R${isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /mês
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm text-muted-foreground">
                    Cobrado R${plan.yearlyPrice} anualmente
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={cn("flex items-start gap-3", feature.isTitle && "font-bold mt-4")}>
                      {feature.isTitle ? null : feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-1" />
                      )}
                      <span className={cn(
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
      </div>
    </div>
  );
};

export default Plans;