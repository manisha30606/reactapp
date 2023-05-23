import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assests/10.jpg"
import Trip2 from "../assests/21.jpg"
import Trip3 from "../assests/4.jpg"



function Trip(){
    return(
        <div className="trip">
        <h1 > Recent Trips</h1>
        <p>You can Discover unique destinations using Google Maps.</p>
       <div className="tripcard">
        <TripData
         image={Trip1}
         heading ="Trip in London"
         text="Travel on your private coach to London.
         On arrival you will be met by a local professional guide who will jump on-board your coach for a half day tour seeing some of the most well-known attractions, landmarks and areas within the city. Photo opportunities will be available and ask any questions as the guides are always happy to answer!"

        />

        <TripData
         image={Trip2}
         heading ="Trip in Indonesia"
         text="We have professional and experience team to focus on your satisfaction. We do not put the price on our tour packages, the price is depending on the boat used such as Phinisi boat, semi Phinisi boat, and standard boat (with Air condition and no AC) and the tour duration. You will know the price by correspondence with us to book the tour. "

        />

        <TripData
         image={Trip3}
         heading ="Trip in France"
         text="Tours is a popular culinary city with specialties such as: rillettes, rillons, Touraine vineyards, AOC Sainte-Maure-de-Touraine cheeses and nougats. The city is also the end-point of the annual Paris–Tours cycle race.!"

        />
       </div>
       
       
        </div>
    )
}


export default Trip;