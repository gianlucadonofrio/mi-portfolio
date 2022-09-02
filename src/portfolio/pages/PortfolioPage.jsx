import { ContactMeForm, Footer, Home, Navbar, Projects } from '../components';

export const PortfolioPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Navbar />
      <Home />
      <Projects />
      <ContactMeForm />
      <Footer />
    </div>
  );
};
