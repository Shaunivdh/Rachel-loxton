// Sections
import TermDates from './sections/termdates';
import About from './sections/about';
import Contact from './sections/contact';
import HomeSection from './sections/home';
import Workshops from './sections/workshops';
import Classes from './sections/classes';
import Testimonials from './sections/testimonials';

// -------------------

function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <Classes />
      <Workshops />
      <TermDates />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;
