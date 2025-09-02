import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Footer from '../components/Footer';
import Header from '../components/Header';
import SubHeader from '../components/TopHeader';
import Parceiros from '../components/Parceiros';
import ScrollToTop from "../components/ScrollToTop";
import { lazyWithProgress } from "../utils/lazyWithProgress";

const HomeContent = lazyWithProgress(() => import('../pages/HomeContent'));
const ContactContent = lazyWithProgress(() => import('../pages/ContactContent'));
const ProductsContent = lazyWithProgress(() => import('../pages/ProductsContent'));
const ProductDetail = lazyWithProgress(() => import('../pages/ProductDetail'));
const PolicyPrivacyContent = lazyWithProgress(() => import('../pages/PrivacyPolicyContent'));

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-lime-75">
      <ScrollToTop />
      <SubHeader />
      <Header />

      <main className="flex-grow">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/contato" element={<ContactContent />} />
            <Route path="/produtos" element={<ProductsContent />} />
            <Route path="/produtos/:id" element={<ProductDetail />} />
            <Route path="/politica" element={<PolicyPrivacyContent />} />
          </Routes>
        </Suspense>
      </main>

      <Parceiros />
      <Footer />
    </div>
  );
}
