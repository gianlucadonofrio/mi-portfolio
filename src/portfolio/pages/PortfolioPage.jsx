import {
  ContactMeForm,
  Footer,
  Home,
  Navbar,
  Projects,
  ButtonToTop,
} from '../components';
import { AboutMe } from '../components/AboutMe/AboutMe';

export const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMeForm />
      <Footer />
      <ButtonToTop />
    </>
  );
};
