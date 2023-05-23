import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from"../components/Hero";
import Navbar from"../components/Navbar";
import Trip from "../components/Trip";
import HomeImg from "../assests/22.jpg";



function Home(props) {
return(
    <>
    
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg ={HomeImg}
    title="Your Journey Your Story"
    text = "Choose Your Favourite Destination.Start Your Journey"
    buttonText = "Start Travel"
    url ="/"
    btnClass = "show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
)
}
export default Home;