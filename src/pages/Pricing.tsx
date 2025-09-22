import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, X, Star, Crown, Zap, Users, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      id: 'starter',
      name: t('pricing.plans.starter.name'),
      icon: Star,
      description: t('pricing.plans.starter.description'),
      monthlyPrice: 19.90,
      yearlyPrice: 199.90,
      popular: false,
      features: [
        { name: t('pricing.plans.starter.features.0'), included: true },
        { name: t('pricing.plans.starter.features.1'), included: true },
        { name: t('pricing.plans.starter.features.2'), included: true },
        { name: t('pricing.plans.starter.features.3'), included: true },
        { name: t('pricing.plans.starter.features.4'), included: true },
        { name: t('pricing.plans.starter.features.5'), included: false },
        { name: t('pricing.plans.starter.features.6'), included: false },
        { name: t('pricing.plans.starter.features.7'), included: false },
      ]
    },
    {
      id: 'premium',
      name: t('pricing.plans.premium.name'),
      icon: Crown,
      description: t('pricing.plans.premium.description'),
      monthlyPrice: 39.90,
      yearlyPrice: 399.90,
      popular: true,
      features: [
        { name: t('pricing.plans.premium.features.0'), included: true },
        { name: t('pricing.plans.premium.features.1'), included: true },
        { name: t('pricing.plans.premium.features.2'), included: true },
        { name: t('pricing.plans.premium.features.3'), included: true },
        { name: t('pricing.plans.premium.features.4'), included: true },
        { name: t('pricing.plans.premium.features.5'), included: true },
        { name: t('pricing.plans.premium.features.6'), included: true },
        { name: t('pricing.plans.premium.features.7'), included: false },
      ]
    },
    {
      id: 'enterprise',
      name: t('pricing.plans.enterprise.name'),
      icon: Shield,
      description: t('pricing.plans.enterprise.description'),
      monthlyPrice: 79.90,
      yearlyPrice: 799.90,
      popular: false,
      features: [
        { name: t('pricing.plans.enterprise.features.0'), included: true },
        { name: t('pricing.plans.enterprise.features.1'), included: true },
        { name: t('pricing.plans.enterprise.features.2'), included: true },
        { name: t('pricing.plans.enterprise.features.3'), included: true },
        { name: t('pricing.plans.enterprise.features.4'), included: true },
        { name: t('pricing.plans.enterprise.features.5'), included: true },
        { name: t('pricing.plans.enterprise.features.6'), included: true },
        { name: t('pricing.plans.enterprise.features.7'), included: true },
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getDiscount = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return percentage;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t('pricing.badge')}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={cn("text-sm font-medium", !isYearly && "text-primary")}>
              {t('pricing.monthly')}
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={cn("text-sm font-medium", isYearly && "text-primary")}>
              {t('pricing.yearly')}
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                {t('pricing.save')} 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={cn(
                "relative border-0 shadow-lg hover:shadow-xl transition-all",
                plan.popular && "ring-2 ring-primary scale-105"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-1">
                    {t('pricing.popular')}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className={cn(
                    "p-3 rounded-full",
                    plan.popular ? "bg-primary text-primary-foreground" : "bg-muted"
                  )}>
                    <plan.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-6">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">
                      {formatPrice(isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice)}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      /{t('pricing.month')}
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-muted-foreground mt-2">
                      {formatPrice(plan.yearlyPrice)} {t('pricing.billedYearly')}
                      <Badge variant="outline" className="ml-2 text-xs">
                        -{getDiscount(plan.monthlyPrice, plan.yearlyPrice)}%
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button 
                  className={cn(
                    "w-full",
                    plan.popular && "bg-primary hover:bg-primary/90"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link to="/contact">
                    {t('pricing.selectPlan')}
                  </Link>
                </Button>

                <div className="space-y-4">
                  <div className="text-sm font-semibold">
                    {t('pricing.features')}:
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('pricing.faq.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">{t('pricing.faq.q1.question')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.q1.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('pricing.faq.q2.question')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.q2.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('pricing.faq.q3.question')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.q3.answer')}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">{t('pricing.faq.q4.question')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.q4.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('pricing.faq.q5.question')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.q5.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('pricing.faq.q6.question')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.q6.answer')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('pricing.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('pricing.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Users className="h-5 w-5 mr-2" />
                  {t('pricing.cta.contact')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/faq">
                  {t('pricing.cta.faq')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;