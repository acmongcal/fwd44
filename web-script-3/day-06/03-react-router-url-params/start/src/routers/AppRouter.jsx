// AppRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PagePortfolio from '../pages/PagePortfolio';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
        <div className="wrapper">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/portfolio" exact element={<PagePortfolio />} />
                    <Route path="/contact" element={<PageContact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default AppRouter;
