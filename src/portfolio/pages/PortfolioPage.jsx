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
    <>
      <Navbar />
      <StarsBackground />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMeForm />
      <Footer />
      <ButtonToTop />
    </>
  );
};
