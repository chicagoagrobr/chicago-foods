import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import Header from "../components/Header";
import SubHeader from "../components/TopHeader";
import ScrollToTop from "../components/ScrollToTop";

const HomeContent = lazy(() => import("../pages/HomeContent"));
const ContactContent = lazy(() => import("../pages/ContactContent"));
const ProductsContent = lazy(() => import("../pages/ProductsContent"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const PolicyPrivacyContent = lazy(() => import("../pages/PrivacyPolicyContent"));
const AboutContent = lazy(() => import("../pages/AboutContent"));


const Parceiros = lazy(() => import("../components/Parceiros"));
const Footer = lazy(() => import("../components/Footer"));

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-700"></div>
    </div>
  );
}

export default function AppRoutes() {
  useEffect(() => {
    import("../pages/ProductsContent");
    import("../pages/ContactContent");
    import("../pages/PrivacyPolicyContent");
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="flex flex-col min-h-screen bg-lime-75">
        <ScrollToTop />
        <SubHeader />
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/contato" element={<ContactContent />} />
            <Route path="/produtos" element={<ProductsContent />} />
            <Route path="/produtos/:id" element={<ProductDetail />} />
            <Route path="/politica" element={<PolicyPrivacyContent />} />
            <Route path="/sobre" element={<AboutContent />} />
          </Routes>
        </main>

        <Parceiros />
        <Footer />
      </div>
    </Suspense>
  );
}
