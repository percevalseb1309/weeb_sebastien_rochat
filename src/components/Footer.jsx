import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="container mx-auto">
            <div className="mx-20 my-10 md:m-10 grid md:grid-cols-5 items-baseline gap-5">
                <section>
                    <Link to="/" className="text-3xl font-bold hover:text-violet-500 transition duration-200">weeb</Link>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-400 uppercase">Product</h2>
                    <ul className="list-none mt-4 space-y-4 text-gray-700">
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Pricing</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Overview</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Browse</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Accessibility</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Five</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-400 uppercase">Solutions</h2>
                    <ul className="list-none mt-4 space-y-4 text-gray-700">
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Brainstorming</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Ideation</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Wireframing</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Research</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-400 uppercase">Resources</h2>
                    <ul className="list-none mt-4 space-y-4 text-gray-700">
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Help Center</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Blog</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Tutorials</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-400 uppercase">Company</h2>
                    <ul className="list-none mt-4 space-y-4 text-gray-700">
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">About</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Press</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Events</a></li>
                        <li><a href="#" className="hover:text-violet-500 transition duration-200">Careers</a></li>
                    </ul>
                </section>
            </div>

            <hr className="border-gray-200" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-10 my-10">
                <p className="text-gray-700">&copy; 2025 Weeb. Inc. All rights reserved.</p>
                <div className="flex gap-5 text-xl">
                    <a href="#" aria-label="YouTube" className="hover:text-violet-500 transition duration-200">
                        <FaYoutube />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-violet-500 transition duration-200">
                        <FaFacebook />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-violet-500 transition duration-200">
                        <FaTwitter />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-violet-500 transition duration-200">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-violet-500 transition duration-200">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;