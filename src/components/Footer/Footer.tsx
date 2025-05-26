import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { GrNext } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-[#1C1D1C] py-12 px-4 font-outfit">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <img
              src="/images/logo/logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-510">
              Empowering businesses through innovation
              <br />
              Driven by passion and excellence
              <br />
              Built for the future.
            </p>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-90">Follow Us</h2>
              <div className="flex gap-4">
                <Link
                  to="#"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-300 rounded-full cursor-pointer dark:bg-blue-80 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  to="#"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-300 rounded-full cursor-pointer dark:bg-blue-80 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  to="#"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-300 rounded-full cursor-pointer dark:bg-blue-80 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  to="#"
                  aria-label="Twitter"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-300 rounded-full cursor-pointer dark:bg-blue-80 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  <FaXTwitter size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-90">Site Map</h2>
            <ul className="space-y-2 text-sm font-normal text-gray-310">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <GrNext />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us (Links) */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-90">Follow Us</h2>
            <ul className="space-y-2 text-sm font-normal text-gray-310">
              {[
                { label: "Facebook", color: "blue-600" },
                { label: "Instagram", color: "pink-600" },
                { label: "LinkedIn", color: "blue-700" },
                { label: "X", color: "black" },
              ].map(({ label, color }) => (
                <li key={label}>
                  <Link
                    to="#"
                    className={`hover:text-${color} dark:hover:text-${color.replace(
                      "-600",
                      "-400"
                    )} transition-colors flex items-center gap-2`}
                  >
                    <GrNext />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-90">
              Our Services
            </h2>
            <ul className="space-y-2 text-sm font-normal text-gray-310">
              {[
                { label: "Digital Marketing", path: "/services/digital-marketing" },
                { label: "Web Development", path: "/services/web-development" },
                { label: "Cyber Security", path: "/services/cyber-security" },
                { label: "Graphic Design", path: "/services/graphic-design" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <GrNext />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="flex flex-col items-center justify-between text-sm text-gray-600 md:flex-row dark:text-gray-400">
          <p className="text-gray-710 dark:text-gray-75">
            © 2025 Created By:{" "}
            <span className="font-normal text-gray-320">ODwely</span>
          </p>
          <div className="flex gap-4 mt-4 text-base md:mt-0 text-gray-320">
            <Link
              to="/terms-of-use"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms Of Use
            </Link>
            <span>|</span>
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
