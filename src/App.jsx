import Footer from './components/Footer'
import Header from './components/Header'
import SubHeader from './components/SubHeader'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <SubHeader />
      <main className="flex-grow">
      </main>
      <Footer />
    </div>
  )
}
