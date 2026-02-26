import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import { MovieProvider } from './context/MovieContext';

export default function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main>
        {/* Create Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
