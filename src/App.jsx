import Footer from './components/Footer'
import Header from './components/Header'
import SubHeader from './components/TopHeader'
import HomeContent from './components/HomeContent'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-lime-50">
      <SubHeader />
      <Header />
      <main className="flex-grow">
        <HomeContent />
      </main>
      <Footer />
    </div>
  )
}
