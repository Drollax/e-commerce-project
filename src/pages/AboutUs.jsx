import BrandLogos from "../components/BrandLogos";
import TeamPage from "./TeamPage";

const AboutUsSection = () => {
  return (
    <>
    <section className="bg-white py-30 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* LAYER 1: The Decorative Circles 
         We put these first in the HTML and give them z-0 
      */}
      <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full relative">
           {/* Top Right Circle */}
           <div className="absolute top-50 right-40 lg:!top-0 lg:right-10 w-110 h-110 lg:w-150 lg:h-150  bg-[#FFDCD1] rounded-full opacity-60 z-0 translate-x-20"></div>
           
           {/* Bottom Left Circle */}
           <div className="absolute bottom-50 left-4 w-20 h-20 lg:!bottom-150 lg:!left-160 bg-[#FFDCD1] rounded-full opacity-40 z-0 translate-y-20"></div>
        </div>
      </div>

      {/* LAYER 2: The Content 
         We give this z-10 to force it on top of the circles
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 max-w-lg mx-auto lg:mx-0 text-center lg:!text-left">
            <p className="!text-1xl !font-bold text-[#252B42] hidden lg:block leading-tight uppercase">
            About Company
          </p>
          <h1 className="!text-5xl !font-bold text-[#252B42] !mt-10 leading-tight uppercase">
            About Us
          </h1>
          <p className="text-[#737373] text-lg font-medium !mt-10 leading-relaxed">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <div className="pt-4">
            <button className="bg-[#23A6F0] text-white font-bold py-4 px-10 rounded-lg text-sm uppercase tracking-wide shadow-md hover:bg-[#1a8cd3] transition-all active:scale-95">
              Get Quote Now
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full flex justify-center items-center">
          <img 
            src="/AboutUs.png" // Ensure this is in your 'public' folder
            alt="About Us"
            className="w-full h-auto object-contain max-w-xl sm:scale-150 lg:scale-200 md:max-w-full drop-shadow-xl lg:-translate-y-10"
          />
        </div>

      </div>
    </section>
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-center items-center lg:px-20 lg:!text-left lg:items-start justify-between gap-10 md:gap-20">
        
        {/* Left Column: Headline */}
        <div className="md:w-1/2 !space-y-10">
          <p className="text-[#E74040] !font-bold text-sm">
            Problems trying
          </p>
          <h2 className="text-2xl lg:!text-4xl lg:!mt-10 !font-bold text-[#252B42] leading-tight max-w-md">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>

        {/* Right Column: Body Text */}
        <div className="md:w-1/2 md:pt-11">
          <p className="text-[#737373] text-[20px] !text-left !mt-6 mx-20 lg:!mx-0 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of 
            Classical physics: Newtonian mechanics
          </p>
        </div>

      </div>
    </section>

    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 lg:grid-cols-4">
        <div className="rounded-3xl bg-white p-8 text-center">
          <p className="text-6xl font-extrabold text-[#252B42]">15K</p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#737373]">Happy Customers</p>
        </div>
        <div className="rounded-3xl bg-white p-8 text-center">
          <p className="text-6xl font-extrabold text-[#252B42]">150K</p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#737373]">Monthly Visitors</p>
        </div>
        <div className="rounded-3xl bg-white p-8 text-center">
          <p className="text-6xl font-extrabold text-[#252B42]">15</p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#737373]">Countries Worldwide</p>
        </div>
        <div className="rounded-3xl bg-white p-8 text-center">
          <p className="text-6xl font-extrabold text-[#252B42]">100+</p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#737373]">Top Partners</p>
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-transparent bg-slate-100">
          <img
            src="/SplashImage.jpg"
            alt="Video preview"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/30"></div>
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center !rounded-full bg-blue-500 text-white shadow-2xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Play video"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <TeamPage/>

     <section className="bg-light-grey py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="!text-6xl !font-extrabold text-[#252B42]">Big Companies Are Here</h2>
        <p className="mx-auto sm:max-w-md mt-4 max-w-2xl !mt-10 !text-[20px] text-[#6B7280] lg:max-w-2xl leading-7">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </section>

    <section className="bg-[#2278F2] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div className="p-10 sm:p-16 text-white">
          <span className="inline-block text-xs uppercase tracking-[0.3em] !font-semibold text-white/80">
            Work with us
          </span>
          <h2 className="!mt-6 text-4xl sm:text-5xl !font-extrabold leading-tight">
            Now Let’s grow Yours
          </h2>
          <p className="!mt-6 max-w-xl text-sm leading-7 text-white/80">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century
          </p>
          <button className="!mt-10 inline-flex !rounded-sm border border-white/70 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
            Button
          </button>
        </div>
        <div className="hidden lg:block">
          <img
            src="/Workwithus.jpg"
            alt="Work with us"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
    
    <BrandLogos/>
    </>
  );
};

export default AboutUsSection;