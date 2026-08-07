import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Cleaning } from './sections/Cleaning';
import { Chemical } from './sections/Chemical';
import { Windows } from './sections/Windows';
import { Form } from './sections/Form';
import { Footer } from './sections/Footer';
import { CookieBanner } from './components/CookieBanner';
import { StickyCTA } from './components/StickyCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cleaning />
        <Chemical />
        <Windows />
        <Form />
      </main>
      <div className="bg-white">
        <Footer />
      </div>
      <StickyCTA />
      <CookieBanner />
    </>
  );
}
