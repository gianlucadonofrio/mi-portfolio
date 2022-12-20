import { PortfolioPage } from './portfolio/PortfolioPage'
import { LanguageProvider } from './portfolio/context/LanguageProvider'
import './styles/globals.css'

export const MiPortfolioApp = () => {
  return (
    <LanguageProvider>
      <PortfolioPage />
    </LanguageProvider>
  )
}
