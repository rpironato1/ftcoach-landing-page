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
      popular<dyad-problem-report summary="339 problems">
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
<problem file="src/App.tsx" line="9" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/About&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="10" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/Team&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="11" column="23" code="2307">Cannot find module './pages/Investors' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="12" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/Press&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="13" column="8" code="1192">Module '&quot;C:/Users/rodol/dyad-apps/flying-alpaca-hop/src/pages/Plans&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="14" column="16" code="2307">Cannot find module './pages/AI' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="15" column="17" code="2307">Cannot find module './pages/FAQ' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="16" column="21" code="2307">Cannot find module './pages/Contact' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="17" column="18" code="2307">Cannot find module './pages/Help' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="18" column="21" code="2307">Cannot find module './pages/Privacy' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="19" column="19" code="2307">Cannot find module './pages/Terms' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="20" column="20" code="2307">Cannot find module './pages/Refund' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="21" column="21" code="2307">Cannot find module './pages/Cookies' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="22" column="27" code="2307">Cannot find module './pages/Accessibility' or its corresponding type declarations.</problem>
</dyad-problem-report>I can see the issue - the files got corrupted with `<dyad-write>` tags mixed into the TypeScript code. Let me fix all the pages by rewriting them properly:

<dyad-write path="src/pages/About.tsx">
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, Zap, TrendingUp, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const milestones = [
    {
      year: 2020,
      title: "Fundação da FitCoach",
      description: "Começamos com a missão de democratizar o acesso a treinos personalizados",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      year: 2021,
      title: "Lançamento da IA",
      description: "Primeiro algoritmo de personalização fitness do Brasil",
      icon: Zap,
      color: "bg-purple-500"
    },
    {
      year: 2022,
      title: "10 Mil Usuários",
      description: "Alcançamos a marca de 10 mil transformações realizadas",
      icon: Target,
      color: "bg-green-500"
    },
    {
      year: 2023,
      title: "Expansão Internacional",
      description: "Lançamento em 5 países da América Latina",
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      year: 2024,
      title: "Líder de Mercado",
      description: "Maior plataforma de fitness com IA da América Latina",
      icon: Award,
      color: "bg-red-500"
    }
  ];

  const values = [
    {
      title: "Inovação Constante",
      description: "Investimos 40% da receita em P&D para manter a liderança tecnológica",
      icon: Zap,
      color: "text-purple-600"
    },
    {
      title: "Acessibilidade",
      description: "Fitness de qualidade deve estar ao alcance de todos, independentemente do nível",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Resultados Comprovados",
      description: "Cada feature é testada e validada com dados reais de milhares de usuários",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Transparência Total",
      description: "Dados claros, políticas transparentes e comunicação honesta",
      icon: Award,
      color: "text-orange-600"
    }
  ];

  const stats = [
    { label: "Usuários Ativos", value: "50.000+", suffix: "" },
    { label: "Treinos Criados", value: "2.5", suffix: "M+" },
    { label: "Taxa de Sucesso", value: "98", suffix: "%" },
    { label: "Países", value: "8", suffix: "" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Sobre Nós
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformando Vidas Através da
              <span className="text-primary"> Tecnologia</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Somos a maior plataforma de fitness com IA da América Latina, 
              com a missão de democratizar o acesso a treinos personalizados e nutrição inteligente.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                Conheça Nossa Equipe
              </Button>
              <Button variant="outline" size="lg">
                Nossa História
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-muted-foreground">
              Como crescemos para nos tornar líderes do mercado
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={cn(
                  "relative flex items-center mb-12",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}>
                  {/* Content */}
                  <div className={cn(
                    "w-5/12",
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  )}>
                    <Card className={cn(
                      "inline-block cursor-pointer transition-all hover:shadow-lg",
                      activeYear === milestone.year ? "border-primary shadow-lg" : ""
                    )}
                    onClick={() => setActiveYear(milestone.year)}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={cn("w-3 h-3 rounded-full", milestone.color)}></div>
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground">
              Princípios que guiam cada decisão que tomamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", value.color)}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para fazer parte da nossa história?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas com FitCoach
          </p>
          <Button size="lg" variant="secondary">
            Comece Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;