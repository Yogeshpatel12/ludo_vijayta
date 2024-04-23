const ReferScroll = () => {
  return (
    <div className="w-full py-4 bg-black relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-fit min-w-[50%] md:min-w-fit z-50 bg-primary_light rounded-r-lg md:rounded-r-xl font-bold text-white px-8 md:px-12 py-2 md:py-4 shadow-custom">
        Refer Now & Win More
      </div>
      <div className=" w-full overflow-x-hidden bg-primary_light text-white relative">
        <div className="flex items-center gap-12 w-fit py-1  animate-referslide">
          <div className="min-w-fit text-lg "> Vidhya just earned Rs 20 Referral Bonus</div>
          <div className="min-w-fit text-lg "> Manav just earned Rs 20 Referral Bonus</div>
          <div className="min-w-fit text-lg "> Vidhya just earned Rs 20 Referral Bonus</div>
          <div className="min-w-fit text-lg "> Manav just earned Rs 20 Referral Bonus</div>
          <div className="min-w-fit text-lg "> Vidhya just earned Rs 20 Referral Bonus</div>
          <div className="min-w-fit text-lg "> Manav just earned Rs 20 Referral Bonus</div>
        </div>
      </div>
    </div>
  )
}

export default ReferScroll