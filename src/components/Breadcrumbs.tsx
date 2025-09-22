"use client";

import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const breadcrumbNameMap: { [key: string]: string } = {
  '/about': 'navigation.about',
  '/team': 'navigation.team',
  '/investors': 'navigation.investors',
  '/press': 'navigation.press',
  '/personal-plans': 'navigation.personalPlans',
  '/student-plans': 'navigation.studentPlans',
  '/ai': 'navigation.ai',
  '/features': 'navigation.features',
  '/pricing': 'navigation.pricing',
  '/faq': 'navigation.faq',
  '/contact': 'navigation.contact',
  '/help': 'navigation.help',
  '/support': 'navigation.support',
  '/privacy': 'navigation.privacy',
  '/terms': 'navigation.terms',
  '/refund': 'navigation.refund',
  '/cookies': 'navigation.cookies',
  '/accessibility': 'navigation.accessibility',
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="bg-muted/50">
      <div className="container mx-auto px-4">
        <nav aria-label="breadcrumb" className="py-3 flex items-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <Home className="h-4 w-4" />
            {t('navigation.home')}
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const nameKey = breadcrumbNameMap[to];

            return (
              <span key={to} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1" />
                {isLast ? (
                  <span className="font-semibold text-foreground" aria-current="page">
                    {nameKey ? t(nameKey) : value}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-primary transition-colors">
                    {nameKey ? t(nameKey) : value}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};