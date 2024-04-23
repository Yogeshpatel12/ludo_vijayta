
const Button = ({ text, style = "green", size = "md" }) => {
  return (
    <button className={`${size == "xl" ? "w-[30rem] h-[6.5rem] text-3xl rounded-3xl " : "text-sm sm:text-xl rounded-lg sm:rounded-xl "} relative overflow-hidden flex items-center justify-center uppercase px-3 sm:px-10 py-2 sm:py-3  bg-gradient-to-b transition-all duration-200 font-bold text-white from-40% to-60% ${style === "green" ? "from-[#40CD65] to-[#05A370]" : "from-[#FFD31F] to-[#F4863E]"}`}>
      <div className="absolute top-0 left-0 h-full w-2 bg-white/35 animate-shiny-btn"></div>
      {text}
    </button>
  )
}

export default Button