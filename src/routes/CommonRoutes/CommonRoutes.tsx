import { Route } from "react-router-dom";
import AboutPage from "../../components/pages/AboutPage/AboutPage";
import BooksPage from "../../components/pages/BooksPage/BooksPage";
import ContactPage from "../../components/pages/ContactPage/ContactPage";
import HomePage from "../../components/pages/HomePage/HomePage";
import LoginPage from "../../components/pages/LoginPage/LoginPage";
import FormPage from "../../components/pages/FormPage/FormPage";
import ToastPage from "../../components/pages/ToastPage/ToastPage";

const CommonRoutes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/books" element={<BooksPage />} />
    <Route path="/form" element={<FormPage />} />
    <Route path="/toast" element={<ToastPage />} />
  </>
);

export default CommonRoutes;
