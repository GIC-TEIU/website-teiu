import Navbar from "../components/navbar";
import BannerMaster from "../sections/AboutUs/BannerMaster";
import FounderSection from "../sections/AboutUs/FounderSection.jsx";
import OurFacilities from "../sections/AboutUs/OurFacilities";
import OurHistory from "../sections/AboutUs/OurHistory";
import OurMission from "../sections/AboutUs/OurMission.jsx";
import SocialProof from "../sections/AboutUs/SocialProof.jsx";
import Footer from "../components/Footer.jsx";

function AboutUs() {
    return ( 
    <>
        <Navbar/>
        <BannerMaster
        title={'Lorem Impsum Dolor'}
        text={' Lorem ipsum dolor sit, amet consectetur adipisicing elit.  At repellendus beatae distinctio suscipit esse, eveniet, animi laboriosam dolorum, sit repudiandae obcaecati accusamus rerum soluta nam perspiciatis quas voluptatem. Tempora, veniam!'}
        />
        <OurFacilities/>
        <OurHistory/>
        <FounderSection/>
        <div className="bg-gradient-to-br from-[#02D1FF] to-[#074B9A] pt-20 rounded-t-4xl">
           <SocialProof/>
           <OurMission/>

           <Footer/>
        </div>
    </>
    );
}

export default AboutUs;