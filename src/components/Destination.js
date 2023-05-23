import Mountain1 from "../assests/3.jpg";
import Mountain2 from "../assests/16.jpg";
import Mountain3 from "../assests/24.jpg";
import Mountain4 from "../assests/12.jpg";

import "./DestinationStyles.css";
import DestinationData from "./DestinationData";


const Destination = () => {
    return (
     <div className="destination">
     <h1>Popular Destinations</h1>
     <p>Tours give you the opportunity to see a lot, within a time frame.</p>
     <DestinationData 
     className="first-des"
     heading="Taal Volcano,Batangas"
     text = "Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular view seen from Tagaytay Ridge. Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
     img1 ={Mountain1}
     img2 ={Mountain3} 

    />
     <DestinationData 
       className="first-des-reverse"
     heading="Mt.Daguldul,Batangas"
     text = "Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, the mountain was named as such because it describes the magnificence of the mountain range and the blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers. "
     img1 ={Mountain4}
     img2 ={Mountain2} 

    />


     </div>



    );
}

export default Destination;