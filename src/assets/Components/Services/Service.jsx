import image from "../../images/4.png";
import image2 from "../../images/5.png";
import image3 from "../../images/6.jpg";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";
// Import Font Awesome
export default function Service() {
  const information = [
    {
      id: 1,
      image: image,
      Title: "Lorem Ipsum",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quibusdam id repellat commodi laborum omnis reiciendis minima vel reprehenderit voluptates nisi, hic optio est dolore delectus repudiandae tenetur blanditiis magni deleniti ipsa. Nobis expedita, rem cumque ratione vero facilis nihil.",
    },
    {
      id: 2,
      image: image2,
      Title: "Lorem Ipsum",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quibusdam id repellat commodi laborum omnis reiciendis minima vel reprehenderit voluptates nisi, hic optio est dolore delectus repudiandae tenetur blanditiis magni deleniti ipsa. Nobis expedita, rem cumque ratione vero facilis nihil.",
    },
    {
      id: 3,
      image: image3,
      Title: "Lorem Ipsum",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quibusdam id repellat commodi laborum omnis reiciendis minima vel reprehenderit voluptates nisi, hic optio est dolore delectus repudiandae tenetur blanditiis magni deleniti ipsa. Nobis expedita, rem cumque ratione vero facilis nihil.",
    },
  ];

  return (
    <section>
      <div className="flex justify-center">
        <h1 className="text-center hello poppins-regular text-blue-600 font-bold mt-3 mb-3 relative">
          <div className="border1 borders text-center"></div>
          <div className="border2 borders text-center"></div>
          <div className="border3 borders text-center"></div>
          <div className="border4 borders text-center"></div>
          Service
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ms-10 me-10">
          {information.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-fit"
            >
              <a href="#">
                <img
                  className="rounded-t-lg max-h-80 w-fit"
                  src={item.image}
                  alt={item.Title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.Title}
                  </h5>
                </a>
                <p className="mb-3 flex-col font-normal text-gray-700 dark:text-gray-400">
                  {item.Desc}
                  <i className="fas fa-star text-yellow-500 ml-2"></i>{" "}
                  {/* Font Awesome star icon */}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-color text-white font-semibold mt-6 px-6 py-2 rounded-full  mb-3">
          Help me
        </button>
      </div>
    </section>
  );
}
