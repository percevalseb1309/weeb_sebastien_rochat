import weebApp from "../../assets/weeb-app.svg";

function Hero() {
    return (
        <div className="container mx-auto flex flex-col items-center text-center px-6 pt-20 pb-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Explorez le <span className="font-light text-violet-500">Web</span> sous toutes ses <span className="underline decoration-violet-500 underline-offset-8">facettes</span>
            </h1>
            <p className="mt-4 max-w-2xl">
                Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
                <a href="#" className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-500 transition duration-200">
                    Découvrir les articles
                </a>
                <a href="#" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition duration-200">
                    S'abonner à la newsletter
                </a>
            </div>
            <div className="mt-16">
                <img className="" src={weebApp} alt="Aperçu de l'application Weeb"/>
            </div>
        </div>
    );
}

export default Hero;