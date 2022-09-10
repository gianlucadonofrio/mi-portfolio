import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import './styles/general.css';

export const MiPortfolioApp = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  );
};
