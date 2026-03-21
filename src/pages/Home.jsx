import Navbar from "../components/navbar"
import ProductsHome from "../sections/Home/ProductsHome"
import Hero from "../sections/Home/Hero"
import Footer from "../components/Footer"
import InstitutionalVideo from "../sections/Home/VideoPage"
import InstagramSection from "../sections/Home/InstagramSection"

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