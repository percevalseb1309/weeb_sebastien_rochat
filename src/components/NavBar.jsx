import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative container mx-auto flex items-center justify-between p-6 bg-slate-800 rounded-xl text-white">
            <ul className="flex items-center gap-10 list-none">
                <li>
                    <Link to="/" className="text-3xl font-bold hover:text-violet-500 transition duration-200">weeb</Link>
                </li>
                <li>
                    <a href="#" className="hover:text-violet-500 transition duration-200">About us</a>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-violet-500 transition duration-200">Contact</Link>
                </li>
            </ul>
            <ul className="flex items-center gap-10 list-none">
                <li>
                    <Link to="/login" className="hover:text-violet-500 transition duration-200">Log In</Link>
                </li>
                <li>
                    <Link to="/login" className="bg-violet-600 py-2 px-5 rounded-lg hover:bg-violet-500 transition duration-200">Join Now</Link>
                </li>
            </ul>

            <div
                className={`absolute top-full left-0 z-10 w-full transition duration-300 ${
                    isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-6 list-none bg-slate-800 rounded-xl mt-2 p-6">
                    <li>
                        <a href="#" className="hover:text-violet-500 transition duration-200">About us</a>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-violet-500 transition duration-200">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-violet-500 transition duration-200">Log In</Link>
                    </li>
                    <li>
                        <Link to="/login" className="bg-violet-600 py-2 px-5 rounded-lg hover:bg-violet-500 transition duration-200">Join Now</Link>
                    </li>
                </ul>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-violet-600 p-2 rounded-lg text-3xl cursor-pointer hover:bg-violet-500 transition duration-200">
                {isMenuOpen ? <FaTimes/> : <FaBars/>}
            </button>
        </nav>
    );
}

export default NavBar;