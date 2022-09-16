import { Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '../portfolio/context/LanguageProvider';
import { PortfolioPage } from '../portfolio/pages/PortfolioPage';

export const AppRouter = () => {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/*" element={<PortfolioPage />} />
      </Routes>
    </LanguageProvider>
  );
};
