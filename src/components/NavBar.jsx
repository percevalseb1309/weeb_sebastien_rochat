import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="container mx-auto flex items-center justify-between p-6 bg-slate-800 rounded-xl text-white">
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
        </nav>
    );
}

export default NavBar;