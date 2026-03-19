import Navbar from "../components/navbar"
import ProductsHome from "../sections/ProductsHome"
import Hero from "../sections/Hero"
import Footer from "../components/Footer"
import InstitutionalVideo from "../sections/VideoPage"
import InstagramSection from "../sections/InstagramSection"

function Home() {
    return ( 
        <>
        <Navbar />
        <main className="w-full">
          <Hero />
          <ProductsHome />
          <InstitutionalVideo />
          <div className="relative w-full bg-unificado-teiu overflow-hidden">
          <InstagramSection />
          <Footer/>
          </div>
        </main>
      </>
     );
}

export default Home;