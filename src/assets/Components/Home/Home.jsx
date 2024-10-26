import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faTruck } from "@fortawesome/free-solid-svg-icons";
import "../Home/Home.css";

export default function Home() {
  return (
    <section className="Home md:h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat flex justify-end items-start">
      {/* Right Content Section */}
      <div className="flex flex-col items-end text-end mt-10 space-y-8 w-full md:w-1/2 px-8">
        {/* Title Section */}
        <h1 className="h-style font me-[5vw] flex flex-col items-end text-end">
          <div className="flex items-center space-x-2 text-4xl md:text-5xl font-bold text-main poppins-regular">
            <FontAwesomeIcon
              icon={faRecycle}
              className="transition-transform duration-300 transform hover:scale-110"
            />
            <FontAwesomeIcon
              icon={faTruck}
              className="transition-transform duration-300 transform hover:scale-110"
            />
            <span className="transition-colors duration-300 hover:text-blue-500">
              Round Rock
            </span>
          </div>
          <h2 className="poppins-light text-main text-xl font-bold tracking-[0.7rem] transition-colors duration-300 hover:text-blue-500">
            Trush Hauling
          </h2>
        </h1>

        {/* Experts Button */}
        <button className="btn-color text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-transform duration-300 px-8 py-4 mt-40 md:me-[9vw]">
          Experts
        </button>

        {/* Main Content */}
        <div className="text-end text-6xl md:text-8xl font-thin leading-tight">
          <p className="pr-24 transition-colors duration-300 hover:text-blue-500">
            Lorem
          </p>
          <p className="font-extrabold transition-colors duration-300 hover:text-blue-500">
            Lorem lorem
          </p>
          <p className="text-lg md:w-[30rem] font-semibold mx-auto text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            ipsa eum ullam sequi, soluta mollitia, dolorem itaque asperiores
            eaque quam, aut odio repellendus suscipit vitae.
          </p>
        </div>

        {/* Help Me Button */}
        <button className="btn-color text-white font-bold text-xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300 px-8 py-4 mt-8 rounded-full ps-20 pe-20 me-[9vw]">
          Help Me
        </button>
      </div>
    </section>
  );
}
