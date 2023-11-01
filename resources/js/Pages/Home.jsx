import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import GetTicket from "../Components/GetTicket";
import "../../css/home.css"

function Home (){
    return (
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg=""
                title={<>
                    Travel Anywhere <br />
                    Less Worry
                  </>}
                text="Find hotel and ticket with best experience"
            />
            <div className="img">

            </div>
            <GetTicket />
            <div className="h-60 bg-white"></div>
        </>
    )
}

export default Home;