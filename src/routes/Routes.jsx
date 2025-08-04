import { Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/ContactContent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubHeader from '../components/TopHeader'
import HomeContent from '../pages/HomeContent'

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-lime-50">
      <SubHeader />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
