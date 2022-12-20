import {
  Footer,
  Home,
  Navbar,
  Projects,
  ButtonToTop,
  AboutMe,
  ContactMePage,
} from './components'

export const PortfolioPage = () => {
  return (
    <div className='position-relative'>
      <Navbar />
      <ButtonToTop />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMePage />
      <Footer />
    </div>
  )
}
