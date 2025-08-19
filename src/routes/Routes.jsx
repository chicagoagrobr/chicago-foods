import { Route, Routes } from 'react-router-dom'
import ContactContent from '../pages/ContactContent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubHeader from '../components/TopHeader'
import HomeContent from '../pages/HomeContent'
import ProductsContent from '../pages/ProductsContent'
import Parceiros from '../components/Parceiros'
import ProductDetail from '../pages/ProductDetail'
import ScrollToTop from "../components/ScrollToTop";
import PolicyPrivacyContent from '../pages/PrivacyPolicyContent'

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-lime-75">
      <ScrollToTop />
      <SubHeader />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/contato" element={<ContactContent />} />
          <Route path="/produtos" element={<ProductsContent/>}/>
          <Route path="/produtos/:id" element={<ProductDetail/>}/>
          <Route path="/politica" element={<PolicyPrivacyContent/>}/>
        </Routes>
      </main>
      <Parceiros />
      <Footer />
    </div>
  )
}
