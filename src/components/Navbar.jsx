import Button from "./Button"

const Navbar = () => {
  return (
    <header className='w-full bg-primary '>

      <nav className="flex items-center justify-center px-3 lg:px-16 py-2 gap-5">
        <div>
          <img src="/Logo.png" className=" w-60 sm:w-72 h-auto" alt="Ludo Vijayta" />
        </div>
        <div className="flex items-center justify-between w-fit lg:w-full lg:pl-16">
          <ul className="hidden lg:flex items-center justify-between w-it gap-6 xl:gap-12">
            <li >
              <a className="hover:text-hovered text-white duration-200 transition-all font-semibold text-xl h-full" href="/">Home</a>
            </li>
            <li className="text-white">
              <p className=" text-white font-semibold text-xl py-3">|</p>
            </li>
            <li className="group relative text-white">
              <p className="group-hover:text-hovered text-white duration-200 transition-all font-semibold text-xl">How To Play</p>
              <ul className="bg-gradient-to-b from-primary_light to to-primary hidden group-hover:block absolute top-8 inset-0 w-72 h-full px-4 py-8 rounded-lg">
                <li className="hover:text-hovered duration-200 transition-all font-semibold text-xl"><a href="/classic">Ludo Vijayta Classic</a></li>
                <li className="hover:text-hovered duration-200 transition-all font-semibold text-xl"><a href="/classic">Ludo Vijayta Timer</a></li>
                <li className="hover:text-hovered duration-200 transition-all font-semibold text-xl"><a href="/classic">Ludo Vijayta Fixed Move</a></li>
                <li className="hover:text-hovered duration-200 transition-all font-semibold text-xl"><a href="/classic">Snamke & Ladder</a></li>
              </ul>
            </li>
            <li className="text-white">
              |
            </li>
            <li className="hover:text-hovered text-white duration-200 transition-all font-semibold text-xl">
              <a href="/about">About Us</a>
            </li>
            <li className="text-white">
              |
            </li>
            <li className="hover:text-hovered text-white duration-200 transition-all font-semibold text-xl">
              <a href="/">Direct Download</a>
            </li>
          </ul>
          <Button text="Start Earning" style="yellow" size="md" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar