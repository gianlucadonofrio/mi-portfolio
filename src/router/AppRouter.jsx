import { Route, Routes } from 'react-router-dom';
import { PortfolioPage } from '../portfolio/pages/PortfolioPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PortfolioPage />} />
    </Routes>
  );
};
