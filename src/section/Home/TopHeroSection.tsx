import { Link } from "react-router-dom";
import Button from "@/components/Buttons/Button";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function TopHeroSection() {
  return (
    <div className="flex flex-col items-center justify-center pt-2 lg:flex-row font-outfit lg:min-h-[80vh]">
      <div className="w-full md:px-0 lg:w-6/12">
        <div className="flex flex-col">

          <div className="flex gap-4 my-2 md:gap-4">
            <Link
              to="#"
              className="flex items-center justify-center text-gray-700 transition-colors rounded-[6px] w-9 h-9 bg-gray-80 hover:text-white hover:bg-blue-300 dark:bg-lightblack-100 dark:text-gray-30 dark:hover:bg-blue-80 dark:hover:text-lightblack-400"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center text-gray-700 transition-colors rounded-[6px] w-9 h-9 bg-gray-80 hover:text-white hover:bg-blue-300 dark:bg-lightblack-100 dark:text-gray-30 dark:hover:bg-blue-80 dark:hover:text-lightblack-400"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center text-gray-700 transition-colors rounded-[6px] w-9 h-9 bg-gray-80 hover:text-white hover:bg-blue-300 dark:bg-lightblack-100 dark:text-gray-30 dark:hover:bg-blue-80 dark:hover:text-lightblack-400"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center text-gray-700 transition-colors rounded-[6px] w-9 h-9 bg-gray-80 hover:text-white hover:bg-blue-300 dark:bg-lightblack-100 dark:text-gray-30 dark:hover:bg-blue-80 dark:hover:text-lightblack-400"
            >
              <FaYoutube size={20} />
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-lightblack-300 md:text-[52px] capitalize leading-[1.3] dark:text-gray-30">
            Excellent IT <span className="text-blue-300 dark:text-blue-80">Solutions</span> For Your Success
          </h2>

          {/* Description */}
          <p className="my-4 text-base leading-relaxed text-gray-710 dark:text-gray-75">
            At Any Rate, Lorem Ipsum Dolor Sit Amet Consectetur<br />
            Adipisicing Elit. Eaque Amet, Quod Doloribus The Framework<br />
            Of The Essence Represents A Bond Between The Flexible<br />
            Production Planning
          </p>

          {/* Button */}
          <div data-aos="fade-up" data-aos-delay="250">
            <Button className="hidden md:block">Join Now</Button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        className="flex justify-center w-full px-4 md:px-8 lg:w-8/12"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div>
          <img
            className="w-full"
            alt="IT solutions illustration"
            src="images/hero/TopHero.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default TopHeroSection;
