import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">weeb</Link>
                </li>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;