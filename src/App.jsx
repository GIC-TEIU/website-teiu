import Navbar from "./components/navbar"
import ProductsHome from "./pages/ProductsHome"
import Hero from "./pages/Hero"
import Footer from "./components/Footer"
import InstitutionalVideo from "./pages/VideoPage"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductsHome />
        <InstitutionalVideo />
        <div className="bg-linear-to-r from-cyan-500 to-blue-500">
        <Footer/>
        </div>
      </main>
    </>
  )
}
export default App