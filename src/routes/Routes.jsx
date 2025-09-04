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

function LazyOnView({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{visible ? children : null}</div>;
}

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

      <LazyOnView>
        <Suspense fallback={<div style={{ minHeight: "200px" }}></div>}>
          <Parceiros />
        </Suspense>
      </LazyOnView>
      
      <LazyOnView>
        <Suspense fallback={<div style={{ minHeight: "200px" }}></div>}>
          <Footer />
        </Suspense>
      </LazyOnView>
    </div>
  );
}
