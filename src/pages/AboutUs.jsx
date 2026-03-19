import Navbar from "../components/navbar";
import BannerMaster from "../sections/BannerMaster";
import FounderSection from "../sections/FounderSection.jsx";
import OurFacilities from "../sections/OurFacilities";
import OurHistory from "../sections/OurHistory";

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
        <div className="bg-gradient-to-br from-[#02D1FF] to-[#074B9A]">

        </div>
    </>
    );
}

export default AboutUs;