import { useEffect } from 'react';
import { useRef } from 'react';
import {
  AboutMe,
  ContactMeForm,
  Footer,
  Home,
  Navbar,
  Projects,
} from '../components';
import { StarsSpans } from '../components/StarsSpans';

export const PortfolioPage = () => {
  const buttonScrollTop = useRef(null);

  const scrollTop = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      buttonScrollTop.current.style.display = 'block';
    } else {
      buttonScrollTop.current.style.display = 'none';
    }
  };

  useEffect(() => {
    window.onscroll = () => scrollTop();
  });

  return (
    <div className="stars-container">
      <StarsSpans  />
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMeForm />
      <Footer />
      <button
        className="btn btn-lg btn-scroll-top animate__animated animate__fadeIn"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        ref={buttonScrollTop}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};
