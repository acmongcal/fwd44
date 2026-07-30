// AppRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import PageNotFound from "../pages/PageNotFound";
import PageProducts from "../pages/PageProducts";
import PageServices from "../pages/PageServices";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome/>}/>
            <Route path="/about" exact element={<PageAbout/>}/>
            <Route path="/contact" exact element={<PageContact/>}/>
            <Route path="/products" exact element={<PageProducts/>}/>
            <Route path="/services" exact element={<PageServices/>}/>
            <Route path="*" exact element={<PageNotFound/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
