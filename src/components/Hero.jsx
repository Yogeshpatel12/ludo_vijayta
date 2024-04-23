import Button from "./Button"

const Hero = () => {
  return (
    <div className="bg-black w-full h-full pb-10">
      <div className="bg-primary lg:bg-transparent lg:bg-[url('/banner_large.png')] w-full lg:min-h-screen h-auto bg-no-repeat bg-center bg-cover relative">
        <div className="hidden lg:block w-fit mx-auto absolute bottom-0 inset-x-0 translate-y-1/4">
          <Button text="Download Now" size="xl" />
        </div>
        <div className="lg:hidden">
          <div className="text-white text-center py-3">
            <h3 className="text-3xl font-bold uppercase">Now Earn <span className="text-hovered">Real Money</span></h3>
            <div className="bg-white h-[2px] w-72 mx-auto my-2"></div>
            <p className="text-lg">with INDIA&#39;s Most Trusted</p>
            <p className="text-lg">Ludo Earning App</p>
          </div>
          <img src="/banner_small.png" className="w-full h-auto mx-auto" alt="" />
          <div className=" mx-auto h-fit">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero