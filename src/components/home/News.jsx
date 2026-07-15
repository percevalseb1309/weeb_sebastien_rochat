import rectangles from "../../assets/rectangles.svg";

function News() {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-6 pt-10 pb-20">
            <div>
                <img src={rectangles} alt="Superposition de rectangles" />
            </div>
            <div className="max-w-2xl text-white">
                <p className="text-center font-semibold uppercase tracking-wider">
                    Le web, un écosystème en constante évolution
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                    Restez informé des dernières <span className="text-violet-500">tendances</span>
                </h2>
                <p className="mt-4 text-sm">
                    Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !
                </p>
                <a href="#" className="mt-6 inline-block font-semibold hover:text-violet-500 transition duration-200">
                    Lire les articles récents &rarr;
                </a>
            </div>
        </div>
    );
}

export default News;