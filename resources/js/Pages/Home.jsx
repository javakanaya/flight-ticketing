import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import GetTicket from "@/Components/GetTicket";
import TransactionMessage from "@/Components/TransactionMessage";
import { Head } from '@inertiajs/react';
import "../../css/home.css";

const Home = ({ auth, airports, showTransactionMessage, transactionId }) => {
    console.log(showTransactionMessage);
    return (
        <>
            <Head title="Home" />
            <Navbar user={auth.user} />
            <div className="bg-[#60cff4] h-[500px]">
                <Hero
                    cName="hero"
                    heroImg=""
                    title={
                        <>
                            Travel Anywhere <br />
                            Less Worry
                        </>
                    }
                    text="Find ticket with best experience"
                />
            </div>

            <div className="img" />
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[450px]">
                <GetTicket airports={airports} />
            </div>

            <div className="h-60 bg-white"></div>

            {showTransactionMessage && <TransactionMessage transactionId={transactionId} />}
        </>
    );
};

export default Home;
