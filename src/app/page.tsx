import VerticalScrollCards from '../components/VerticalScrollCards';

import Hero from '../components/Hero';
import VerticalPanels from '../components/VerticalPanels';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <VerticalPanels />
      <VerticalScrollCards />
      <ContactForm />
    </>
  );
}
