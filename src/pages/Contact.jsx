function Contact() {
  return (
      <div className="container mx-auto flex flex-col items-center px-6 py-20">
          <div className="max-w-2xl text-center text-white">
              <h1 className="text-5xl font-bold">
                  Votre avis compte !
              </h1>
              <p className="mt-4 text-sm">
                  Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
              </p>
          </div>

          <form className="mt-16 w-full max-w-2xl border-2 border-violet-500 rounded-2xl px-10 py-6 bg-[#21223f] text-center">
              <div className="grid grid-cols-2 gap-8">
                  <input type="text" placeholder="Nom"
                         className="border-b border-violet-500 text-violet-400 placeholder-violet-400 pb-2 text-center focus:outline-none focus:border focus:rounded focus:border-violet-400 transition duration-200"/>
                  <input type="text" placeholder="Prénom"
                         className="border-b border-violet-500 text-violet-400 placeholder-violet-400 pb-2 text-center focus:outline-none focus:border focus:rounded focus:border-violet-400 transition duration-200"/>
                  <input type="email" placeholder="Email"
                         className="col-span-2 border-b border-violet-500 text-violet-400 placeholder-violet-400 pb-2 text-center focus:outline-none focus:border focus:rounded focus:border-violet-400 transition duration-200"/>
                  <input type="text" placeholder="Message"
                         className="col-span-2 border-b border-violet-500 text-violet-400 placeholder-violet-400 pb-2 text-center focus:outline-none focus:border focus:rounded focus:border-violet-400 transition duration-200"/>
              </div>
              <button type="submit"
                      className="mt-8 bg-violet-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-violet-500 transition duration-200">Contact
              </button>
          </form>
      </div>
  );
}

export default Contact;