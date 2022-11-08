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
    <div className="position-relative">
      <Navbar />
      <StarsBackground />
      <ButtonToTop />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMeForm />
      <Footer />
    </div>
  );
};
