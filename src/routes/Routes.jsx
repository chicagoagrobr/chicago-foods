import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import Header from "../components/Header";
import SubHeader from "../components/TopHeader";
import ScrollToTop from "../components/ScrollToTop";
import { useState, useRef } from "react";

const HomeContent = lazy(() => import("../pages/HomeContent"));
const ContactContent = lazy(() => import("../pages/ContactContent"));
const ProductsContent = lazy(() => import("../pages/ProductsContent"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const PolicyPrivacyContent = lazy(() => import("../pages/PrivacyPolicyContent"));

const Parceiros = lazy(() => import("../components/Parceiros"));
const Footer = lazy(() => import("../components/Footer"));

export default function AppRoutes() {

  useEffect(() => {
    import("../pages/ProductsContent");
    import("../pages/ContactContent");
    import("../pages/PrivacyPolicyContent");
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-lime-75">
      <ScrollToTop />
      <SubHeader />
      <Header />

      <main className="flex-grow">
        <Suspense fallback={<div style={{ minHeight: "400px" }}></div>}>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/contato" element={<ContactContent />} />
            <Route path="/produtos" element={<ProductsContent />} />
            <Route path="/produtos/:id" element={<ProductDetail />} />
            <Route path="/politica" element={<PolicyPrivacyContent />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={<div />}>
        <Parceiros />
      </Suspense>

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
}
