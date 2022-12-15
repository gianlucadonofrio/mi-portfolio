import {
  Footer,
  Home,
  Navbar,
  Projects,
  ButtonToTop,
  StarsBackground,
  AboutMe,
  ContactMePage,
} from "../components";

export const PortfolioPage = () => {
  return (
    <div className="position-relative">
      <Navbar />
      <StarsBackground />
      <ButtonToTop />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMePage />
      <Footer />
    </div>
  );
};
