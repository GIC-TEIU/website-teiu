import Navbar from "../components/navbar"
import ProductsHome from "../sections/ProductsHome"
import Hero from "../sections/Hero"
import Footer from "../components/Footer"
import InstitutionalVideo from "../sections/VideoPage"
function Home() {
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
     );
}

export default Home;