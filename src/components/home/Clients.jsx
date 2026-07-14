import { LuMonitorSmartphone, LuZoomIn, LuShell, LuWaves, LuMartini } from "react-icons/lu";

function Clients() {
    return (
        <div className="container mx-auto flex flex-col items-center text-center px-6 py-10 text-white">
            <h2 className="text-4xl font-bold">
                Ils nous font confiance
            </h2>
            <div className="mt-16 flex items-center gap-24">
                <a href="#" className="flex items-center gap-2 text-xl hover:text-violet-500 transition duration-200">
                    <LuMonitorSmartphone/>
                    <span className="font-semibold">SmartFinder</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-xl hover:text-violet-500 transition duration-200">
                    <LuZoomIn/>
                    <span className="font-semibold">Zoomerr</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-xl hover:text-violet-500 transition duration-200">
                    <LuShell/>
                    <span className="font-semibold">SHELLS</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-xl hover:text-violet-500 transition duration-200">
                    <LuWaves/>
                    <span className="font-semibold">WAVES</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-xl hover:text-violet-500 transition duration-200">
                    <LuMartini/>
                    <span className="font-semibold">ArtVenue</span>
                </a>
            </div>
        </div>
    );
}

export default Clients;