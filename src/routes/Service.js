import Hero from"../components/Hero";
import Navbar from"../components/Navbar";
import ServiceImg from"../assests/9.jpg";
import Trip from "../components/Trip"
import Footer from "../components/Footer";

function Service() {
    return(
        <>
     <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg = {ServiceImg}
    title="Our Services"
    text = "Choose Your Favourite Destination.Start Your Journey"
    btnClass = "hide"
     />
     <Trip/>
  
            <Footer/>
        
        </>
    )
    }
    export default Service;