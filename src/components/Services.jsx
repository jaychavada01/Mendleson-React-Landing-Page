import engagementImg from "../assets/Engagement vector 1.png";
import communicationImg from "../assets/Coominucation vector 1.png";
import facilitationImg from "../assets/facilation vector 1.png";
import consultationImg from "../assets/Consultation vector 1.png";
import trainingImg from "../assets/Training and vector 1.png";
import backgroundImg1 from "../assets/Asset 5 2.png";
import backgroundImg2 from "../assets/Asset 6 1.png";
import backgroundImg3 from "../assets/Asset 7 1.png";
import backgroundImg4 from "../assets/Asset 8 2.png";
import groupBackground from "../assets/Group30.png";

const servicesData = [
  {
    title: "Engagement",
    description:
      "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.",
    img: engagementImg,
    reverse: false,
  },
  {
    title: "Communications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.",
    img: communicationImg,
    reverse: true,
  },
  {
    title: "Facilitation",
    description:
      "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism.",
    img: facilitationImg,
    reverse: false,
  },
  {
    title: "Consultation and Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.",
    img: consultationImg,
    reverse: true,
  },
  {
    title: "Training & Mentoring",
    description:
      "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism.",
    img: trainingImg,
    reverse: false,
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="relative w-full h-fit py-8 flex flex-col items-center gap-16"
    >
      {/* Decorative Images */}
      <img
        className="absolute -top-0 sm:-top-4 md:-top-16 left-0 -z-50 w-[10rem] sm:w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[20rem] transition-all duration-300 ease-in-out"
        src={backgroundImg1}
        alt="Decorative Background 1"
      />
      <img
        className="absolute right-0 top-[50rem] sm:top-[46rem] md:top-[25rem] lg:top-[30rem] xl:top-[32rem] -z-50 w-[5rem] sm:w-[7rem] md:w-[9rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out"
        src={backgroundImg2}
        alt="Decorative Background 2"
      />
      <img
        className="absolute left-0 top-[80rem] sm:top-[75rem] md:top-[40rem] lg:top-[50rem] xl:top-[60rem] -z-50 w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out"
        src={backgroundImg3}
        alt="Decorative Background 3"
      />
      <img
        className="absolute right-0 top-[108rem] sm:top-[100rem] md:top-[60rem] lg:top-[60rem] xl:top-[85rem] -z-50 w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out"
        src={backgroundImg4}
        alt="Decorative Background 4"
      />

      {/* Title */}
      <h2
        className="font-medium text-4xl sm:text-5xl leading-[56.88px] bg-no-repeat bg-left-bottom w-fit pb-2"
        style={{
          backgroundImage: `url(${groupBackground})`,
        }}
      >
        Services
      </h2>

      {/* Services Cards */}
      <div className="flex flex-col gap-12 w-full px-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              service.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 items-center justify-between text-[#2C2C2C]`}
          >
            <div
              className={`flex flex-col md:w-1/2 gap-4 text-center ${
                service.reverse ? "md:text-left" : "md:text-right"
              }`}
            >
              <h3 className="font-medium text-3xl lg:text-4xl">
                {service.title}
              </h3>
              <p
                className={`${
                  service.reverse
                    ? "font-normal text-base leading-6 max-w-[450px]"
                    : ""
                }`}
              >
                {service.description}
              </p>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
