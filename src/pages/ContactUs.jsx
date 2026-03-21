import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BannerContactSession from "../sections/ContactUs/BannerContact";
import ContactForm from "../sections/ContactUs/ContactForm";

function ConatctUs() {
    return (
    <>
    <Navbar/>
    <BannerContactSession/>
    <ContactForm/>
    <div className="bg-gradient-to-br from-[#02D1FF] to-[#074B9A] pt-20 rounded-t-4xl">
        <Footer/>
    </div>

    </>
    );
}

export default ConatctUs;