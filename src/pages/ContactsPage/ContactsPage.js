import { useTranslation } from 'react-i18next';
import ContactsList from '../../components/ContactsList';
import Section from '../../components/Section';

function ContactsPage() {
  const { t, i18n } = useTranslation();
  return (
    <Section title={t('team__title')}>
      <ContactsList />
    </Section>
  );
}

export default ContactsPage;
