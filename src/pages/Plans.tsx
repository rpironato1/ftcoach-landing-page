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

          {/* Additional Plans Grid<dyad-problem-report summary="1220 problems">
<problem file="src/pages/About.tsx" line="84" column="6" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/About.tsx" line="113" column="8" code="17008">JSX element 'section' has no corresponding closing tag.</problem>
<problem file="src/pages/About.tsx" line="114" column="10" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/About.tsx" line="115" column="12" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/About.tsx" line="119" column="23" code="1005">'&gt;' expected.</problem>
<problem file="src/pages/About.tsx" line="119" column="38" code="1005">',' expected.</problem>
<problem file="src/pages/About.tsx" line="119" column="40" code="1002">Unterminated string literal.</problem>
<problem file="src/pages/About.tsx" line="120" column="1" code="1005">',' expected.</problem>
<problem file="src/pages/About.tsx" line="126" column="19" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/About.tsx" line="127" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/About.tsx" line="131" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="136" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="138" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="143" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="145" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="150" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="152" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="157" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="159" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="164" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="169" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="173" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="175" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="179" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="181" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="185" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="187" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="191" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="195" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="195" column="62" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="196" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="196" column="60" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="197" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="197" column="58" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="198" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/About.tsx" line="198" column="47" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="347" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/About.tsx" line="349" column="22" code="1005">'&lt;/' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="99" column="19" code="1005">',' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="99" column="35" code="1005">',' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="100" column="1" code="2657">JSX expressions must have one parent element.</problem>
<problem file="src/pages/FAQ.tsx" line="110" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="112" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="114" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="116" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="118" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="120" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="122" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="124" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="126" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="128" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="130" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="132" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="134" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="147" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="148" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="150" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="152" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="154" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="156" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="158" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="160" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="162" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="165" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="166" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="168" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="170" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="172" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="174" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="176" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="178" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="180" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="183" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="184" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="186" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="188" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="190" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="192" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="194" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="196" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="198" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="201" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="203" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="205" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="207" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="209" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="211" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="224" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="226" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="228" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="230" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="232" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="234" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="236" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="238" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="240" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="242" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="244" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="246" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="248" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="250" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="252" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="254" column="73" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="269" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="271" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="273" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="275" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="277" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="279" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="281" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="283" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="285" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="287" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="289" column="72" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="302" column="83" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="302" column="123" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="1" code="1005">',' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="25" code="1005">';' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="29" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="33" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="49" code="1005">';' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="55" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="59" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="74" code="1005">'(' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="89" code="1005">')' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="94" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="100" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="105" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="109" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="130" code="1005">';' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="133" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="137" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="141" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="145" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="151" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="154" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="164" code="1434">Unexpected keyword or identifier.</problem>
<problem file="src/pages/FAQ.tsx" line="442" column="2" code="17008">JSX element 'dyad-write' has no corresponding closing tag.</problem>
<problem file="src/pages/FAQ.tsx" line="450" column="19" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/FAQ.tsx" line="451" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/FAQ.tsx" line="455" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="460" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="462" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="467" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="469" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="474" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="476" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="481" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="483" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="488" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="493" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="497" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="499" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="503" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="505" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="509" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="511" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="515" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="519" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="519" column="62" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="520" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="520" column="60" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="521" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="521" column="58" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="522" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/FAQ.tsx" line="522" column="47" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="671" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/FAQ.tsx" line="673" column="22" code="1005">'&lt;/' expected.</problem>
<problem file="src/pages/Plans.tsx" line="136" column="6" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Plans.tsx" line="137" column="8" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Plans.tsx" line="167" column="10" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Plans.tsx" line="169" column="16" code="1005">')' expected.</problem>
<problem file="src/pages/Plans.tsx" line="169" column="19" code="1005">',' expected.</problem>
<problem file="src/pages/Plans.tsx" line="171" column="2" code="17008">JSX element 'dyad-write' has no corresponding closing tag.</problem>
<problem file="src/pages/Plans.tsx" line="185" column="1" code="1109">Expression expected.</problem>
<problem file="src/pages/Plans.tsx" line="187" column="19" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/Plans.tsx" line="188" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/Plans.tsx" line="193" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="200" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="200" column="58" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="201" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="201" column="46" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="202" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="202" column="53" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="203" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="203" column="56" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="204" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="204" column="59" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="205" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="205" column="55" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="206" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="206" column="61" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="207" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="207" column="54" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="209" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="211" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="218" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="218" column="58" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="219" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="219" column="46" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="220" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="220" column="53" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="221" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="221" column="56" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="222" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="222" column="58" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="223" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="223" column="54" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="224" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="224" column="60" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="225" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="225" column="54" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="227" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="229" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="236" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="236" column="58" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="237" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="237" column="46" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="238" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="238" column="53" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="239" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="239" column="56" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="240" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="240" column="58" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="241" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="241" column="54" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="242" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="242" column="60" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="243" column="15" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="243" column="53" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="245" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="250" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="257" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="259" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="266" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="268" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="275" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="277" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="284" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="286" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="293" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="295" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Plans.tsx" line="302" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="504" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Plans.tsx" line="506" column="22" code="1005">'&lt;/' expected.</problem>
<problem file="src/pages/Press.tsx" line="146" column="6" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Press.tsx" line="147" column="8" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Press.tsx" line="226" column="10" code="17008">JSX element 'section' has no corresponding closing tag.</problem>
<problem file="src/pages/Press.tsx" line="234" column="12" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Press.tsx" line="236" column="16" code="17008">JSX element 'Card' has no corresponding closing tag.</problem>
<problem file="src/pages/Press.tsx" line="250" column="18" code="17008">JSX element 'CardContent' has no corresponding closing tag.</problem>
<problem file="src/pages/Press.tsx" line="253" column="2" code="17008">JSX element 'dyad-write' has no corresponding closing tag.</problem>
<problem file="src/pages/Press.tsx" line="269" column="19" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/Press.tsx" line="270" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/Press.tsx" line="272" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="279" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="281" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="288" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="290" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="297" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="299" column="9" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="306" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="311" column="13" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="317" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="319" column="13" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="325" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="327" column="13" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="333" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="335" column="13" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="341" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="346" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="351" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="353" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="358" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="360" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="365" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="367" column="11" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="372" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="377" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="380" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="382" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="385" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="387" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="390" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="392" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Press.tsx" line="395" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="586" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Press.tsx" line="588" column="22" code="1005">'&lt;/' expected.</problem>
<problem file="src/pages/Team.tsx" line="144" column="6" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="145" column="8" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="157" column="10" code="17008">JSX element 'section' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="165" column="12" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="167" column="16" code="17008">JSX element 'Dialog' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="205" column="18" code="17008">JSX element 'DialogContent' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="206" column="20" code="17008">JSX element 'DialogHeader' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="207" column="22" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="220" column="2" code="17008">JSX element 'dyad-write' has no corresponding closing tag.</problem>
<problem file="src/pages/Team.tsx" line="235" column="23" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/Team.tsx" line="236" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/Team.tsx" line="238" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="243" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="245" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="250" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="252" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="257" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="259" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="264" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="269" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="275" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="277" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="283" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="285" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="291" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="293" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="299" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="304" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="309" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="311" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="316" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="318" column="12" code="1005">'}' expected.</problem>
<problem file="src/pages/Team.tsx" line="323" column="5" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="459" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/Team.tsx" line="461" column="26" code="1005">'&lt;/' expected.</problem>
<problem file="src/lib/i18n/config.ts" line="1" column="18" code="2307">Cannot find module 'i18next' or its corresponding type declarations.</problem>
<problem file="src/lib/i18n/config.ts" line="2" column="34" code="2307">Cannot find module 'react-i18next' or its corresponding type declarations.</problem>
<problem file="src/lib/i18n/config.ts" line="3" column="30" code="2307">Cannot find module 'i18next-browser-languagedetector' or its corresponding type declarations.</problem>
<problem file="src/lib/i18n/config.ts" line="4" column="21" code="2307">Cannot find module 'i18next-http-backend' or its corresponding type declarations.</problem>
<problem file="src/components/LanguageSwitcher.tsx" line="3" column="32" code="2307">Cannot find module 'react-i18next' or its corresponding type declarations.</problem>
<problem file="src/components/Header.tsx" line="5" column="32" code="2307">Cannot find module 'react-i18next' or its corresponding type declarations.</problem>
<problem file="src/components/Footer.tsx" line="4" column="32" code="2307">Cannot find module 'react-i18next' or its corresponding type declarations.</problem>
<problem file="src/pages/Index.tsx" line="3" column="32" code="2307">Cannot find module 'react-i18next' or its corresponding type declarations.</problem>
<problem file="src/pages/About.tsx" line="5" column="26" code="2307">Cannot find module '@/components/ui/timeline' or its corresponding type declarations.</problem>
<problem file="src/pages/About.tsx" line="119" column="19" code="2322">Type '{ key: number; className: string; src: true; }' is not assignable to type 'DetailedHTMLProps&lt;HTMLAttributes&lt;HTMLDivElement&gt;, HTMLDivElement&gt;'.
  Property 'src' does not exist on type 'DetailedHTMLProps&lt;HTMLAttributes&lt;HTMLDivElement&gt;, HTMLDivElement&gt;'.</problem>
<problem file="src/pages/About.tsx" line="119" column="23" code="2304">Cannot find name 'pages'.</problem>
<problem file="src/pages/About.tsx" line="119" column="35" code="2339">Property 'tsx' does not exist on type '() =&gt; Element'.</problem>
<problem file="src/pages/About.tsx" line="119" column="38" code="2554">Expected 1-2 arguments, but got 3.</problem>
<problem file="src/pages/About.tsx" line="122" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="122" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="122" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="122" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="124" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="124" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="124" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="124" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="124" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/About.tsx" line="131" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/About.tsx" line="138" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/About.tsx" line="145" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/About.tsx" line="152" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/About.tsx" line="159" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/About.tsx" line="169" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/About.tsx" line="175" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/About.tsx" line="181" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/About.tsx" line="187" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/About.tsx" line="195" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/About.tsx" line="196" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/About.tsx" line="197" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/About.tsx" line="198" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/About.tsx" line="266" column="45" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/About.tsx" line="271" column="35" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/About.tsx" line="275" column="38" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/About.tsx" line="282" column="43" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/About.tsx" line="316" column="35" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Team.tsx" line="220" column="1" code="2339">Property 'dyad-write' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/Team.tsx" line="221" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="221" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="221" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="221" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="225" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="225" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="225" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="225" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="225" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="225" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="225" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Team.tsx" line="227" column="3" code="2304">Cannot find name 'DollarSign'.</problem>
<problem file="src/pages/Team.tsx" line="228" column="3" code="2304">Cannot find name 'Target'.</problem>
<problem file="src/pages/Team.tsx" line="230" column="3" code="2552">Cannot find name 'Download'. Did you mean 'onload'?</problem>
<problem file="src/pages/Team.tsx" line="231" column="3" code="2304">Cannot find name 'FileText'.</problem>
<problem file="src/pages/Team.tsx" line="232" column="3" code="2304">Cannot find name 'Presentation'.</problem>
<problem file="src/pages/Team.tsx" line="238" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/Team.tsx" line="245" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/Team.tsx" line="252" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/Team.tsx" line="259" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/Team.tsx" line="269" column="7" code="2304">Cannot find name 'round'.</problem>
<problem file="src/pages/Team.tsx" line="277" column="7" code="2304">Cannot find name 'round'.</problem>
<problem file="src/pages/Team.tsx" line="285" column="7" code="2304">Cannot find name 'round'.</problem>
<problem file="src/pages/Team.tsx" line="293" column="7" code="2304">Cannot find name 'round'.</problem>
<problem file="src/pages/Team.tsx" line="304" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/Team.tsx" line="311" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/Team.tsx" line="318" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/Team.tsx" line="342" column="14" code="2304">Cannot find name 'metrics'.</problem>
<problem file="src/pages/Team.tsx" line="371" column="14" code="2304">Cannot find name 'fundingRounds'.</problem>
<problem file="src/pages/Team.tsx" line="413" column="14" code="2304">Cannot find name 'documents'.</problem>
<problem file="src/pages/Team.tsx" line="427" column="24" code="2304">Cannot find name 'Download'.</problem>
<problem file="src/pages/Press.tsx" line="253" column="1" code="2339">Property 'dyad-write' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/Press.tsx" line="254" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="254" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="254" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="254" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="258" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Press.tsx" line="272" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Press.tsx" line="281" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Press.tsx" line="290" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Press.tsx" line="299" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Press.tsx" line="311" column="7" code="2304">Cannot find name 'outlet'.</problem>
<problem file="src/pages/Press.tsx" line="319" column="7" code="2304">Cannot find name 'outlet'.</problem>
<problem file="src/pages/Press.tsx" line="327" column="7" code="2304">Cannot find name 'outlet'.</problem>
<problem file="src/pages/Press.tsx" line="335" column="7" code="2304">Cannot find name 'outlet'.</problem>
<problem file="src/pages/Press.tsx" line="377" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/Press.tsx" line="382" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/Press.tsx" line="387" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/Press.tsx" line="392" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/Press.tsx" line="575" column="16" code="2304">Cannot find name 'Mail'.</problem>
<problem file="src/pages/Plans.tsx" line="2" column="32" code="2307">Cannot find module 'react-i18next' or its corresponding type declarations.</problem>
<problem file="src/pages/Plans.tsx" line="150" column="28" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Plans.tsx" line="158" column="28" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Plans.tsx" line="169" column="12" code="2304">Cannot find name 'Let'.</problem>
<problem file="src/pages/Plans.tsx" line="169" column="16" code="2304">Cannot find name 'me'.</problem>
<problem file="src/pages/Plans.tsx" line="171" column="1" code="2339">Property 'dyad-write' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/Plans.tsx" line="175" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="175" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="175" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="175" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="178" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="178" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="179" column="10" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Plans.tsx" line="181" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="181" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="181" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="181" column="3" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/Plans.tsx" line="193" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="211" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="229" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="250" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="259" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="268" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="277" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="286" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="295" column="7" code="2304">Cannot find name 'id'.</problem>
<problem file="src/pages/Plans.tsx" line="323" column="30" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Plans.tsx" line="331" column="30" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Plans.tsx" line="342" column="46" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Plans.tsx" line="379" column="42" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/Plans.tsx" line="489" column="18" code="2304">Cannot find name 'Link'.</problem>
<problem file="src/pages/Plans.tsx" line="491" column="19" code="2304">Cannot find name 'Link'.</problem>
<problem file="src/pages/Plans.tsx" line="494" column="18" code="2304">Cannot find name 'Link'.</problem>
<problem file="src/pages/Plans.tsx" line="496" column="19" code="2304">Cannot find name 'Link'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="69" code="1101">'with' statements are not allowed in strict mode.</problem>
<problem file="src/pages/FAQ.tsx" line="94" column="5" code="2362">The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.</problem>
<problem file="src/pages/FAQ.tsx" line="99" column="20" code="2304">Cannot find name 'problem'.</problem>
<problem file="src/pages/FAQ.tsx" line="99" column="28" code="2304">Cannot find name 'report'.</problem>
<problem file="src/pages/FAQ.tsx" line="99" column="35" code="2304">Cannot find name 'summary'.</problem>
<problem file="src/pages/FAQ.tsx" line="99" column="43" code="2365">Operator '&gt;' cannot be applied to types 'string' and 'Element'.</problem>
<problem file="src/pages/FAQ.tsx" line="100" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="100" column="122" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="101" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="101" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="102" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="102" column="124" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="103" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="103" column="124" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="104" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="104" column="88" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="105" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="105" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="106" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="106" column="100" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="107" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="107" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="108" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="108" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="109" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="109" column="91" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="110" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="110" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="111" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="111" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="112" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="112" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="113" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="113" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="114" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="114" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="115" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="115" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="116" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="116" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="117" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="117" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="118" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="118" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="119" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="119" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="120" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="120" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="121" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="121" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="122" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="122" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="123" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="123" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="124" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="124" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="125" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="125" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="126" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="126" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="127" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="127" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="128" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="128" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="129" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="129" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="130" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="130" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="131" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="131" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="132" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="132" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="133" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="133" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="134" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="134" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="135" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="135" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="136" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="136" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="137" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="137" column="89" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="138" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="138" column="123" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="139" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="139" column="123" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="140" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="140" column="124" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="141" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="141" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="142" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="142" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="143" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="143" column="130" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="144" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="144" column="91" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="145" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="145" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="146" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="146" column="91" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="147" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="147" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="148" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="148" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="149" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="149" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="150" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="150" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="151" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="151" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="152" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="152" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="153" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="153" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="154" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="154" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="155" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="155" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="156" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="156" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="157" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="157" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="158" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="158" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="159" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="159" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="160" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="160" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="161" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="161" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="162" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="162" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="163" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="163" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="164" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="164" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="165" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="165" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="166" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="166" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="167" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="167" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="168" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="168" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="169" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="169" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="170" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="170" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="171" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="171" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="172" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="172" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="173" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="173" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="174" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="174" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="175" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="175" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="176" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="176" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="177" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="177" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="178" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="178" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="179" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="179" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="180" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="180" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="181" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="181" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="182" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="182" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="183" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="183" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="184" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="184" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="185" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="185" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="186" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="186" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="187" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="187" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="188" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="188" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="189" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="189" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="190" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="190" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="191" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="191" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="192" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="192" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="193" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="193" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="194" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="194" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="195" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="195" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="196" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="196" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="197" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="197" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="198" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="198" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="199" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="199" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="200" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="200" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="201" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="201" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="202" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="202" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="203" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="203" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="204" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="204" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="205" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="205" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="206" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="206" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="207" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="207" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="208" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="208" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="209" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="209" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="210" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="210" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="211" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="211" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="212" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="212" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="213" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="213" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="214" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="214" column="89" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="215" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="215" column="123" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="216" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="216" column="123" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="217" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="217" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="218" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="218" column="124" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="219" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="219" column="125" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="220" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="220" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="221" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="221" column="130" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="222" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="222" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="223" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="223" column="91" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="224" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="224" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="225" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="225" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="226" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="226" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="227" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="227" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="228" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="228" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="229" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="229" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="230" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="230" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="231" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="231" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="232" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="232" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="233" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="233" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="234" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="234" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="235" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="235" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="236" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="236" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="237" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="237" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="238" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="238" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="239" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="239" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="240" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="240" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="241" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="241" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="242" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="242" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="243" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="243" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="244" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="244" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="245" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="245" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="246" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="246" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="247" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="247" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="248" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="248" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="249" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="249" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="250" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="250" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="251" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="251" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="252" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="252" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="253" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="253" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="254" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="254" column="85" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="255" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="255" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="256" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="256" column="128" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="257" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="257" column="89" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="258" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="258" column="122" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="259" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="259" column="122" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="260" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="260" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="261" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="261" column="123" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="262" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="262" column="126" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="263" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="263" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="264" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="264" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="265" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="265" column="123" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="266" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="266" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="267" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="267" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="268" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="268" column="90" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="269" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="269" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="270" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="270" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="271" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="271" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="272" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="272" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="273" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="273" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="274" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="274" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="275" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="275" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="276" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="276" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="277" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="277" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="278" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="278" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="279" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="279" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="280" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="280" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="281" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="281" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="282" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="282" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="283" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="283" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="284" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="284" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="285" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="285" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="286" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="286" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="287" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="287" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="288" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="288" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="289" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="289" column="84" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="290" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="290" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="291" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="291" column="127" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="292" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="292" column="88" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="293" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="293" column="141" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="294" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="294" column="147" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="295" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="295" column="166" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="296" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="296" column="154" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="297" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="297" column="160" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="298" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="298" column="150" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="299" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="299" column="150" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="300" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="300" column="144" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="301" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="301" column="155" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="302" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="302" column="80" code="2304">Cannot find name 'key'.</problem>
<problem file="src/pages/FAQ.tsx" line="303" column="121" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="304" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="304" column="97" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="305" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="305" column="129" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="306" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="306" column="106" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="307" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="307" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="308" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="308" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="309" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="309" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="310" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="310" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="311" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="311" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="312" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="312" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="313" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="313" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="314" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="314" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="315" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="315" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="316" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="316" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="317" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="317" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="318" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="318" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="319" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="319" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="320" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="320" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="321" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="321" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="322" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="322" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="323" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="323" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="324" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="324" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="325" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="325" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="326" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="326" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="327" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="327" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="328" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="328" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="329" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="329" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="330" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="330" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="331" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="331" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="332" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="332" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="333" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="333" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="334" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="334" column="139" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="335" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="335" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="336" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="336" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="337" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="337" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="338" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="338" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="339" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="339" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="340" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="340" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="341" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="341" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="342" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="342" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="343" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="343" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="344" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="344" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="345" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="345" column="132" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="346" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="346" column="100" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="347" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="347" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="348" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="348" column="121" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="349" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="349" column="98" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="350" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="350" column="102" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="351" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="351" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="352" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="352" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="353" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="353" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="354" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="354" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="355" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="355" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="356" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="356" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="357" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="357" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="358" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="358" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="359" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="359" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="360" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="360" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="361" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="361" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="362" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="362" column="98" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="363" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="363" column="104" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="364" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="364" column="100" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="365" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="365" column="99" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="366" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="366" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="367" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="367" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="368" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="368" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="369" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="369" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="370" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="370" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="371" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="371" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="372" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="372" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="373" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="373" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="374" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="374" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="375" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="375" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="376" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="376" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="377" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="377" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="378" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="378" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="379" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="379" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="380" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="380" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="381" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="381" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="382" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="382" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="383" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="383" column="97" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="384" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="384" column="97" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="385" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="385" column="97" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="386" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="386" column="97" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="387" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="387" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="388" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="388" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="389" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="389" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="390" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="390" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="391" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="391" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="392" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="392" column="144" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="393" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="393" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="394" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="394" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="395" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="395" column="95" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="396" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="396" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="397" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="397" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="398" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="398" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="399" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="399" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="400" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="400" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="401" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="401" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="402" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="402" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="403" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="403" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="404" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="404" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="405" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="405" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="406" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="406" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="407" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="407" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="408" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="408" column="133" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="409" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="409" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="410" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="410" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="411" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="411" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="412" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="412" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="413" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="413" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="414" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="414" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="415" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="415" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="416" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="416" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="417" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="417" column="93" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="418" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="418" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="419" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="419" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="420" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="420" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="421" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="421" column="94" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="422" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="422" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="423" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="423" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="424" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="424" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="425" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="425" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="426" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="426" column="163" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="427" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="427" column="163" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="428" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="428" column="141" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="429" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="429" column="164" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="430" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="430" column="164" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="431" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="431" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="432" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="432" column="135" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="433" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="433" column="139" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="434" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="434" column="136" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="435" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="435" column="139" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="436" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="436" column="137" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="437" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="437" column="138" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="438" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="438" column="139" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="439" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="439" column="145" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="3" code="2304">Cannot find name 'dyad'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="8" code="2304">Cannot find name 'problem'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="16" code="2552">Cannot find name 'report'. Did you mean 'Report'?</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="23" code="2304">Cannot find name 'I'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="25" code="2304">Cannot find name 'can'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="29" code="2304">Cannot find name 'see'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="33" code="2304">Cannot find name 'the'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="37" code="2304">Cannot find name 'issue'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="45" code="2304">Cannot find name 'the'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="49" code="2552">Cannot find name 'files'. Did you mean 'File'?</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="55" code="2304">Cannot find name 'got'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="59" code="2304">Cannot find name 'corrupted'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="94" code="2304">Cannot find name 'mixed'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="100" code="2304">Cannot find name 'into'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="105" code="2304">Cannot find name 'the'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="109" code="2304">Cannot find name 'TypeScript'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="120" code="2304">Cannot find name 'code'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="130" code="2304">Cannot find name 'me'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="133" code="2304">Cannot find name 'fix'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="137" code="2304">Cannot find name 'all'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="141" code="2304">Cannot find name 'the'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="145" code="2304">Cannot find name 'pages'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="151" code="2304">Cannot find name 'by'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="154" code="2304">Cannot find name 'rewriting'.</problem>
<problem file="src/pages/FAQ.tsx" line="440" column="164" code="2304">Cannot find name 'them'.</problem>
<problem file="src/pages/FAQ.tsx" line="442" column="1" code="2339">Property 'dyad-write' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/FAQ.tsx" line="445" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="445" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="445" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="445" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="10" code="2304">Cannot find name 'ArrowRight'.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="10" code="2695">Left side of comma operator is unused and has no side effects.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="22" code="2304">Cannot find name 'Users'.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="29" code="2304">Cannot find name 'Target'.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="37" code="2304">Cannot find name 'Zap'.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="42" code="2304">Cannot find name 'TrendingUp'.</problem>
<problem file="src/pages/FAQ.tsx" line="447" column="54" code="2304">Cannot find name 'Award'.</problem>
<problem file="src/pages/FAQ.tsx" line="448" column="10" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/FAQ.tsx" line="455" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/FAQ.tsx" line="462" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/FAQ.tsx" line="469" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/FAQ.tsx" line="476" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/FAQ.tsx" line="483" column="7" code="2304">Cannot find name 'year'.</problem>
<problem file="src/pages/FAQ.tsx" line="493" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/FAQ.tsx" line="499" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/FAQ.tsx" line="505" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/FAQ.tsx" line="511" column="7" code="2304">Cannot find name 'title'.</problem>
<problem file="src/pages/FAQ.tsx" line="519" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/FAQ.tsx" line="520" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/FAQ.tsx" line="521" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/FAQ.tsx" line="522" column="7" code="2304">Cannot find name 'label'.</problem>
<problem file="src/pages/FAQ.tsx" line="558" column="14" code="2304">Cannot find name 'stats'.</problem>
<problem file="src/pages/FAQ.tsx" line="589" column="16" code="2304">Cannot find name 'milestones'.</problem>
<problem file="src/pages/FAQ.tsx" line="590" column="45" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/FAQ.tsx" line="595" column="35" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/FAQ.tsx" line="599" column="38" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/FAQ.tsx" line="601" column="23" code="2304">Cannot find name 'activeYear'.</problem>
<problem file="src/pages/FAQ.tsx" line="603" column="36" code="2304">Cannot find name 'setActiveYear'.</problem>
<problem file="src/pages/FAQ.tsx" line="606" column="43" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/FAQ.tsx" line="637" column="14" code="2304">Cannot find name 'values'.</problem>
<problem file="src/pages/FAQ.tsx" line="640" column="35" code="2304">Cannot find name 'cn'.</problem>
<problem file="src/pages/FAQ.tsx" line="665" column="14" code="2304">Cannot find name 'ArrowRight'.</problem>
<problem file="src/App.tsx" line="9" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/About&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="10" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/Team&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="11" column="23" code="2307">Cannot find module './pages/Investors' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="12" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/Press&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="13" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/Plans&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="14" column="16" code="2307">Cannot find module './pages/AI' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="15" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/FAQ&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="16" column="21" code="2307">Cannot find module './pages/Contact' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="17" column="18" code="2307">Cannot find module './pages/Help' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="18" column="21" code="2307">Cannot find module './pages/Privacy' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="19" column="19" code="2307">Cannot find module './pages/Terms' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="20" column="20" code="2307">Cannot find module './pages/Refund' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="21" column="21" code="2307">Cannot find module './pages/Cookies' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="22" column="27" code="2307">Cannot find module './pages/Accessibility' or its corresponding type declarations.</problem>
</dyad-problem-report>I can see the issue - the files got corrupted with `<dyad-write>` tags mixed into the TypeScript code. Let me fix all the pages by rewriting them properly:

<dyad-write path="src/pages/FAQ.tsx">
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
  Phone,
  BookOpen
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas', count: 12 },
    { id: 'getting-started', name: 'Primeiros Passos', count: 4 },
    { id: 'account', name: 'Conta', count: 3 },
    { id: 'workouts', name: 'Treinos', count: 3 },
    { id: 'billing', name: 'Pagamento', count: 2 }
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
      category: 'getting-started',
      question: 'Preciso de equipamentos para treinar?',
      answer: 'Não necessariamente! Oferecemos treinos com e sem equipamentos. Você pode escolher treinos apenas com peso corporal ou adicionar equipamentos que tenha disponível. A IA adapta os exercícios conforme seus recursos.',
      popular: false
    },
    {
      id: 3,
      category: 'getting-started',
      question: 'Qual é a duração dos treinos?',
      answer: 'Os treinos variam de 15 a 60 minutos, dependendo do seu nível, disponibilidade de tempo e objetivos. A maioria dos nossos usuários opta por sessões de 30-45 minutos, 3-5 vezes por semana.',
      popular: true
    },
    {
      id: 4,
      category: 'getting-started',
      question: 'Posso treinar em casa?',
      answer: 'Sim! A maioria dos nossos treinos pode ser feita em casa. O aplicativo mostra vídeos demonstrativos de cada exercício e você pode marcar que está treinando em casa para receber adaptações específicas.',
      popular: false
    },
    {
      id: 5,
      category: 'account',
      question: 'Como faço para cancelar minha assinatura?',
      answer: 'Você pode cancelar a qualquer momento nas configurações da sua conta. O acesso continua até o final do período pago. Não cobramos taxas de cancelamento e o processo é 100% online.',
      popular: true
    },
    {
      id: 6,
      category: 'account',
      question: 'Posso compartilhar minha conta?',
      answer: 'Cada conta é individual e personalizada. Oferecemos planos familiares que permitem até 5 perfis diferentes com treinos personalizados para cada membro da família.',
      popular: false
    },
    {
      id: 7,
      category: 'account',
      question: 'Como protegem meus dados?',
      answer: 'Utilizamos criptografia de ponta a ponta e seguimos as normas LGPD. Seus dados de saúde são armazenados separadamente e nunca são compartilhados sem seu consentimento explícito.',
      popular: false
    },
    {
      id: 8,
      category: 'workouts',
      question: 'Como a IA personaliza meus treinos?',
      answer: 'Nossa IA analisa seus dados biométricos, histórico de treinos, preferências, limitações físicas e progresso em tempo real. Cada sessão é adaptada baseada em sua performance e feedback.',
      popular: true
    },
    {
      id: 9,
      category: 'workouts',
      question: 'Posso pausar ou modificar um treino?',
      answer: 'Sim! Você pode pausar a qualquer momento, pular exercícios específicos ou solicitar modificações. A IA aprende com essas preferências para futuros treinos.',
      popular: false
    },
    {
      id: 10,
      category: 'workouts',
      question: 'O que acontece se eu perder um treino?',
      answer: 'Nada! O aplicativo automaticamente reprograma seu treino para o próximo dia disponível. A IA ajusta a intensidade para garantir progressão adequada.',
      popular: false
    },
    {
      id: 11,
      category: 'billing',
      question: 'Quais são as formas de pagamento?',
      answer: 'Aceitamos cartão de crédito, débito, boleto bancário e PIX. Todos os pagamentos são processados de forma segura e criptografada.',
      popular: false
    },
    {
      id: 12,
      category: 'billing',
      question: 'Existe período de garantia?',
      answer: 'Sim! Oferecemos 7 dias grátis para testar todos os recursos. Se não ficar satisfeito, cancele antes do período trial e não será cobrado.',
      popular: true
    }
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o FitCoach
          </p>
        </div>

        {/* Search and Categories */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {item.popular && (
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === item.category)?.name}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg cursor-pointer" onClick={() => toggleItem(item.id)}>
                      {item.question}
                    </CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleItem(item.id)}
                    className="ml-4"
                  >
                    {expandedItems.includes(item.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              {expandedItems.includes(item.id) && (
                <CardContent>
                  <CardDescription className="text-base">
                    {item.answer}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="border-0 bg-muted/50">
            <CardHeader>
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Ainda tem dúvidas?</CardTitle>
              <CardDescription>
                Nossa equipe de suporte está aqui para ajudar você
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="mailto:support@fitcouch.com.br">
                    <Mail className="h-4 w-4 mr-2" />
                    support@fitcouch.com.br
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+5511999999999">
                    <Phone className="h-4 w-4 mr-2" />
                    +55 (11) 99999-9999
                  </a>
                </Button>
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat ao Vivo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;