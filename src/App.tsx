import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;
