// AppRouter

// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageProducts from '../pages/PageProducts';
import PageServices from '../pages/PageServices';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/products" element={<PageProducts />} />
            <Route path="/services" element={<PageServices />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
