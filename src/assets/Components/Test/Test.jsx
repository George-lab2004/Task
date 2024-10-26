import image from "../../images/7.png";
import { FaStar } from "react-icons/fa"; // Importing Font Awesome star icon

export default function Test() {
  const information = [
    {
      id: 1,
      image: image,
      Title: "Courtney Henry",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 2,
      image: image,
      Title: "Courtney Henry",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 3,
      image: image,
      Title: "Courtney Henry",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 4,
      image: image,
      Title: "Courtney Henry",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  return (
    <>
      <div className="flex justify-center overflow-x-hidden">
        <h1 className="text-center hello poppins-regular text-blue-600 font-bold mt-3 mb-3 relative">
          <div className="border1 borders text-center"></div>
          <div className="border2 borders text-center"></div>
          <div className="border3 borders text-center"></div>
          <div className="border4 borders text-center"></div>
          Testimonials
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mx-4 overflow-x-hidden">
        {information.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center p-2 w-full sm:w-full md:w-1/2"
          >
            <a
              href="#"
              className="flex bg-white border border-blue-400 hover:border-blue-700 rounded-xl shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-sm sm:max-w-full"
            >
              <img
                className="rounded-full w-1/2 h-1/2 p-5" // Adjust the image size for small screens
                src={item.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-main dark:text-white">
                  {item.Title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.Desc}
                </p>
                <div className="flex">
                  {/* Rendering 5 stars */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} className="text-main ms-1" />
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
