import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageManageUser from "../pages/PageManageUser";
import PageCreateUser from "../pages/PageCreateUser";
import PageContact from "../pages/PageContact";
import PageNotFound from "../pages/PageNotFound";
import UserStateProvider from "../context/UserStateProvider";
function AppRouter() {
  return (
    <BrowserRouter>
      <UserStateProvider>
        <div className="wrapper">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/manage-user" element={<PageManageUser />} />
            <Route path="/create-user" element={<PageCreateUser />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </UserStateProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
