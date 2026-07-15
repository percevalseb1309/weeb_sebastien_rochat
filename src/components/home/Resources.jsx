import weebApp from "../../assets/weeb-app.svg";

function Resources() {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-6 py-10">
            <div className="max-w-xl text-white">
                <p className="text-center font-semibold uppercase tracking-wider">
                    Des ressources pour tous les niveaux
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                    <span className="text-violet-500">Apprenez</span> et <span className="text-violet-500">progressez</span>
                </h2>
                <p className="mt-4 text-sm">
                    Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.
                </p>
                <a href="#" className="mt-6 inline-block font-semibold hover:text-violet-500 transition duration-200">
                    Explorer les ressources &rarr;
                </a>
            </div>
            <div>
                <img className="" src={weebApp} alt="Aperçu de l'application Weeb"/>
            </div>
        </div>
    );
}

export default Resources;