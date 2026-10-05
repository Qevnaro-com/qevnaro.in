
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { TechStack } from './components/TechStack'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Footer />
    </div>
  )
}

export default App
