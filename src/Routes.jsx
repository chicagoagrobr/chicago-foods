import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SubHeader from './components/TopHeader'
import Footer from './components/Footer'
import HomeContent from './components/HomeContent'
import ContactPage from './components/ContactContent'

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
