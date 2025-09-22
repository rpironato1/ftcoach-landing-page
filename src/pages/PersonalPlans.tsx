import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, Star, Zap, Crown, Building, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const PersonalPlans = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      id: 'free',
      name: t('personalPlans.free.name'),
      icon: Gift,
      priceText: t('personalPlans.free.price'),
      isFree: true,
      features: t('personalPlans.free.features', { returnObjects: true }) as string[],
      cta: t('personalPlans.free.cta')
    },
    {
      id: 'basic',
      name: t('personalPlans.basic.name'),
      icon: Star,
      monthlyPrice: 19.90,
      yearlyPrice: 199.90,
      features: t('personalPlans.basic.features', { returnObjects: true }) as string[]
    },
    {
      id: 'standard',
      name: t('personalPlans.standard.name'),
      icon: Zap,
      monthlyPrice: 69.90,
      yearlyPrice: 699.90,
      popular: true,
      features: t('personalPlans.standard.features', { returnObjects: true }) as string[]
    },
    {
      id: 'premium',
      name: t('personalPlans.premium.name'),
      icon: Crown,
      monthlyPrice: 149.90,
      yearlyPrice: 1499.90,
      features: t('personalPlans.premium.features', { returnObjects: true }) as string[]
    },
    {
      id: 'enterprise',
      name: t('personalPlans.enterprise.name'),
      icon: Building,
      description: t('personalPlans.enterprise.description'),
      isCustom: true,
      features: t('personalPlans.enterprise.features', { returnObjects: true }) as string[]
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
          <Badge variant="secondary" className="mb-4">
            {t('personalPlans.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t('personalPlans.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('personalPlans.subtitle')}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card key={plan.id} className={cn(
              "flex flex-col border-2 transition-all duration-300 hover:shadow-xl",
              plan.popular ? "border-primary shadow-2xl relative ring-2 ring-primary/20" : "border-border"
            )}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  {t('plans.popular')}
                </Badge>
              )}
              <CardHeader className="text-center">
                <plan.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                {plan.isCustom ? (
                  <CardDescription>{plan.description}</CardDescription>
                ) : plan.isFree ? (
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.priceText}</span>
                  </div>
                ) : (
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R${getPrice(plan)}</span>
                    <span className="text-muted-foreground">/mês</span>
                    {isYearly && <p className="text-xs text-muted-foreground">cobrado anualmente</p>}
                  </div>
                )}
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
                {plan.isCustom ? (
                  <Button className="w-full mt-auto" asChild>
                    <Link to="/contact">{t('plans.contactSales')}</Link>
                  </Button>
                ) : plan.isFree ? (
                  <Button className="w-full mt-auto" variant="outline">
                    {plan.cta}
                  </Button>
                ) : (
                  <Button className="w-full mt-auto" variant={plan.popular ? "default" : "outline"}>
                    {t('plans.select')}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalPlans;