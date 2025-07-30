import VerticalScrollCards from '../components/VerticalScrollCards';

import Hero from '../components/Hero';
import VerticalPanels from '../components/VerticalPanels';
import ContactForm from '../components/ContactForm';
import SubscribeForm from '../components/SubscribeForm';

export default function Home() {
  return (
    <>
      <Hero />
      <VerticalPanels />
      <VerticalScrollCards />
      <ContactForm />
      <SubscribeForm />
    </>
  );
}
