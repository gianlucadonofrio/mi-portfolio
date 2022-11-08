import {
  ContactMeForm,
  Footer,
  Home,
  Navbar,
  Projects,
  ButtonToTop,
  StarsBackground,
} from '../components';
import { AboutMe } from '../components/AboutMe/AboutMe';

export const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMeForm />
      <Footer />
      <ButtonToTop />
      <StarsBackground />
    </div>
  );
};
