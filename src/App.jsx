import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
