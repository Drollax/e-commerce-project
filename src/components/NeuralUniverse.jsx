export default function NeuralUniverse() {
  return (
    <div className="w-full  bg-white flex flex-col pt-50 md:flex-row items-center justify-center lg:pt-0 gap-8 lg:gap-0">

      {/*Content */}
      <div className="w-full lg:order-2 md:w-1/2 max-w-md text-center md:text-left">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
          Summer 2020
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
          Part of the <br /> Neural Universe
        </h1>

        <p className="text-gray-500 text-sm md:text-base mb-6">
          We know how large objects will act, but things on a small scale.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          
          <button className="bg-blue-500 hover:bg-blue-600 md:bg-green-500 md:hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium transition">
            BUY NOW
          </button>

          <button className="border border-blue-400 text-blue-500 md:border-green-500 md:text-green-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-50 md:hover:bg-green-50 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:order-1 flex justify-center items-center">
     <img
    src="/HomePageImages/BuyNow1.png"
    alt="couple"
    className="lg:w-full lg:h-full object-contain w-[800px]"
  />
</div>
    </div>
  );
}