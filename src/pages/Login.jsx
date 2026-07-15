function Login() {
    return (
        <div className="container mx-auto flex flex-col items-center px-6 py-20 text-white">
            <h1 className="text-5xl font-bold">Se connecter</h1>

            <form className="mt-16 w-full max-w-xl text-center">
                <div className="grid grid-cols-1 gap-8">
                    <input type="email" placeholder="Email"
                           className="border-b border-violet-500 text-violet-400 placeholder-violet-400 pb-2 text-center focus:outline-none focus:border focus:rounded focus:border-violet-400 transition duration-200"/>
                    <input type="password" placeholder="Password"
                           className="border-b border-violet-500 text-violet-400 placeholder-violet-400 pb-2 text-center focus:outline-none focus:border focus:rounded focus:border-violet-400 transition duration-200"/>
                </div>
                <button type="submit"
                        className="mt-8 bg-violet-600 px-5 py-2 rounded-lg cursor-pointer hover:bg-violet-500 transition duration-200">Se connecter
                </button>
            </form>

            <a href="#" className="mt-8 text-sm  hover:text-violet-500 transition duration-200">Mot de passe oublié ?</a>

            <p className="mt-8 text-sm">
                Vous n'avez pas de compte ? Vous pouvez en <a href="#" className="font-semibold underline underline-offset-8 hover:text-violet-500 transition duration-200">créer un</a>
            </p>
        </div>
    );
}

export default Login;