import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Layout() {
    return (
        <div className="min-h-screen bg-slate-900">
            <header className="pt-6">
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;