import ServiceCard from "@/components/Cards/ServiceCard";
import { HiCodeBracket } from "react-icons/hi2";
import { BsSearch, BsAndroid2 } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { PiBugBeetleFill } from "react-icons/pi";

const services = [
  {
    title: "Web Development",
    icon: <HiCodeBracket size={64} />,
    description:
      "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Optio unde, expedita nesciunt quibusdam quis tempore quas tenetur",
  },
  {
    title: "Digital Marketing",
    icon: <HiOutlineSpeakerphone size={64} />,
    description:
      "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Optio unde, expedita nesciunt quibusdam quis tempore quas tenetur",
  },
  {
    title: "SEO Service",
    icon: <BsSearch size={64} />,
    description:
      "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Optio unde, expedita nesciunt quibusdam quis tempore quas tenetur",
  },
  {
    title: "Cyber Security",
    icon: <PiBugBeetleFill size={64} />,
    description:
      "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Optio unde, expedita nesciunt quibusdam quis tempore quas tenetur",
  },
  {
    title: "Graphic Design",
    icon: <IoIosColorPalette size={64} />,
    description:
      "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Optio unde, expedita nesciunt quibusdam quis tempore quas tenetur",
  },
  {
    title: "Apps Development",
    icon: <BsAndroid2 size={64} />,
    description:
      "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Optio unde, expedita nesciunt quibusdam quis tempore quas tenetur",
  },
];

function HeroSection() {
  return (
    <div className="py-5 font-outfit">
      <h3 className="text-base font-semibold text-blue-300 uppercase dark:text-blue-80">
        Our Services
      </h3>
      <h1 className="text-[45px] text-lightblack-300 font-bold dark:text-gray-30">
        What We’re Offering?
      </h1>
      <h4 className="text-base text-gray-710 md:w-[756px] w-full dark:text-gray-75">
        As a matter of fact the unification of the coherent software provides a
        strict control over The Accomplishment of Intended Estimation
      </h4>
      <div className="grid gap-4 mt-4 grid-col-1 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
            onClick={() => console.log("Learn More clicked")}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
