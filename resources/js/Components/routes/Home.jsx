import Navbar from "../Navbar";
import Hero from "../Hero";
import GetTicket from "../GetTicket";
import "../../../css/home.css"

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