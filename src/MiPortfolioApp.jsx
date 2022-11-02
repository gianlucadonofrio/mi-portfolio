import { LanguageProvider } from './portfolio/context/LanguageProvider';
import { PortfolioPage } from './portfolio/pages/PortfolioPage';
import './styles/general.css';

export const MiPortfolioApp = () => {
  return (
    <LanguageProvider>
      <PortfolioPage />
    </LanguageProvider>
  );
};
