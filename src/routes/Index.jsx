import { lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import OtpVerification from "../components/auth/otp";
import ForgotPassword from "../components/auth/forget";
import ResetPassword from "../components/auth/reset";

const Home = lazy(() => import("../components/pages/home"));
const About = lazy(() => import("../components/pages/about"));
const Institution = lazy(() => import("../components/pages/institution"));
const Privacy = lazy(() => import("../components/pages/privacy"));
const Contact = lazy(() => import("../components/pages/contact"));
const Login = lazy(() => import("../components/auth/login"));

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/institutions" element={<Institution />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgotPassword />} />
      <Route path="/otp" element={<OtpVerification />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoutes;
