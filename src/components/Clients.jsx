import group30 from '../assets/Group30.png';
import asset9 from '../assets/Assets 9 1.png';
import layer19 from '../assets/Layer 19.png';
import layer20 from '../assets/Layer 20.png';
import brigitteLogo from '../assets/1280px-Brigitte-Logo (1).png';
import layer22 from '../assets/Layer 22.png';
import bhpLogo from '../assets/BHP_2017_logo.png';
import layer21 from '../assets/Layer 21.png';
import layer23 from '../assets/Layer 23.png';
import layer24 from '../assets/Layer 24.png';
import melbourneWaterLogo from '../assets/MelbourneWaterLogo-1024x282.png';

const Clients = () => {
  return (
    <div id="ourClients" className="relative flex flex-col items-center gap-4 md:gap-16 px-8 w-full">
      <img
        className="absolute -top-36 left-0 -z-50 w-[4rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem] xl:w-[8rem]"
        src={asset9}
        alt="Decoration"
      />
      
      <div
        className="font-medium text-3xl sm:text-5xl leading-[56px] bg-no-repeat bg-left-bottom w-fit capitalize pb-2"
        style={{ backgroundImage: `url(${group30})` }}
      >
        Our Clients
      </div>

      <div className="flex flex-wrap items-center justify-around gap-6 md:gap-12">
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={layer19} alt="Client 1" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={layer20} alt="Client 2" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={brigitteLogo} alt="Client 3" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={layer22} alt="Client 4" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={bhpLogo} alt="Client 5" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={layer21} alt="Client 6" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={layer23} alt="Client 7" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={layer24} alt="Client 8" /></div>
        <div><img className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]" src={melbourneWaterLogo} alt="Client 9" /></div>
      </div>
    </div>
  );
};

export default Clients;