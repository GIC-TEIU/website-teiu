import Navbar from "./components/navbar"
import ProductsHome from "./pages/ProductsHome"
import Hero from "./pages/Hero"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductsHome />
        <Footer/>
      </main>
    </>
  )
}
export default App