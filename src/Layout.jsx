import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-900">
            <header className="pt-6">
                <NavBar/>
            </header>
            <main className="flex-1">
                <Outlet/>
            </main>
            <footer className="bg-gray-50">
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;