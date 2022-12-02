import { useEffect, useState } from "react";
import {
  ContactMeForm,
  Footer,
  Home,
  Navbar,
  Projects,
  ButtonToTop,
  StarsBackground,
  AboutMe,
  LoaderMain,
} from "../components";

export const PortfolioPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderMain />
      ) : (
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
      )}
    </>
  );
};
