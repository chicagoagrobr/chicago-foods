import { Route, Routes } from 'react-router-dom'
import ContactContent from '../pages/ContactContent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubHeader from '../components/TopHeader'
import HomeContent from '../pages/HomeContent'
import ProductsContent from '../pages/ProductsContent'
import Parceiros from '../components/Parceiros'

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-lime-50">
      <SubHeader />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/contato" element={<ContactContent />} />
          <Route path="/produtos" element={<ProductsContent/>}/>
        </Routes>
      </main>
      <Parceiros />
      <Footer />
    </div>
  )
}
