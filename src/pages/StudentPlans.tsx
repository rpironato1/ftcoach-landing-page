import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, Gift, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const StudentPlans = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      id: 'free',
      name: t('studentPlans.plans.free.name'),
      icon: Gift,
      description: t('studentPlans.plans.free.description'),
      priceText: t('studentPlans.plans.free.price'),
      isFree: true,
      features: t('studentPlans.plans.free.features', { returnObjects: true }) as string[],
    },
    {
      id: 'pro',
      name: t('studentPlans.plans.pro.name'),
      icon: Zap,
      description: t('studentPlans.plans.pro.description'),
      monthlyPrice: 29.90,
      yearlyPrice: 299.90,
      popular: true,
      features: t('studentPlans.plans.pro.features', { returnObjects: true }) as string[],
    }
  ];

  const getPrice = (plan: any) => {
    const price = isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice;
    return price.toFixed(2).replace('.', ',');
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            {t('studentPlans.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t('studentPlans.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('studentPlans.subtitle')}
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("font-medium", !isYearly && "text-primary")}>
              {t('plans.monthly')}
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={cn("font-medium", isYearly && "text-primary")}>
              {t('plans.yearly')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan) => (
            <Card key={plan.id} className={`flex flex-col border-2 transition-all duration-500 hover:scale-105 ${plan.popular ? 'border-primary shadow-2xl relative ring-2 ring-primary/20' : 'border-border hover:shadow-xl'}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  {t('plans.popular')}
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center">
                    <plan.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-lg">{plan.description}</CardDescription>
                <div className="mt-6">
                  {plan.isFree ? (
                    <span className="text-5xl font-bold">{plan.priceText}</span>
                  ) : (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl">R$</span>
                      <span className="text-5xl font-bold">{getPrice(plan)}</span>
                      <span className="text-muted-foreground text-lg">/mês</span>
                    </div>
                  )}
                  {isYearly && !plan.isFree && <p className="text-xs text-muted-foreground mt-1">cobrado anualmente</p>}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <ul className="space-y-3 flex-grow mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-auto" size="lg" variant={plan.popular ? 'default' : 'outline'}>
                  {t('plans.select')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t('studentPlans.cta.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('studentPlans.cta.subtitle')}
              </p>
              <Button asChild>
                <Link to="/personal-plans">{t('studentPlans.cta.button')}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentPlans;