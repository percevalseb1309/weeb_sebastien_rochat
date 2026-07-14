import Hero from "../components/home/Hero";
import Clients from "../components/home/Clients";
import Resources from "../components/home/Resources";
import News from "../components/home/News";

function Home() {
    return (
        <div>
            <Hero/>
            <Clients/>
            <Resources/>
            <News/>
        </div>
    );
}

export default Home;