import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.form.title')}</CardTitle>
              <CardDescription>{t('contact.form.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder={t('contact.form.firstName')} />
                  <Input placeholder={t('contact.form.lastName')} />
                </div>
                <Input type="email" placeholder={t('contact.form.email')} />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t('contact.form.subjectPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">{t('contact.form.subjects.support')}</SelectItem>
                    <SelectItem value="billing">{t('contact.form.subjects.billing')}</SelectItem>
                    <SelectItem value="partnership">{t('contact.form.subjects.partnership')}</SelectItem>
                    <SelectItem value="other">{t('contact.form.subjects.other')}</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder={t('contact.form.messagePlaceholder')} rows={5} />
                <Button type="submit" className="w-full">{t('contact.form.submit')}</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.info.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">{t('contact.info.email.label')}</p>
                    <p className="text-muted-foreground">{t('contact.info.email.value')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">{t('contact.info.phone.label')}</p>
                    <p className="text-muted-foreground">{t('contact.info.phone.value')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">{t('contact.info.address.label')}</p>
                    <p className="text-muted-foreground">{t('contact.info.address.value')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;