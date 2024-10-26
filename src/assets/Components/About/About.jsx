import "../About/About.css";
import image from "../../images/3.png";

export default function About() {
  return (
    <section className="About h-auto md:h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row text-center">
      <div className="z-50 md:w-[45%] ms-6 md:ms-32">
        <h1 className="text-white font-bold mt-5">About Us</h1>
        <p className="w-[90%] md:w-[75%] text-white font-semibold text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ducimus debitis illo laborum quia aperiam assumenda explicabo dolorem,
          possimus at quos quis aut commodi Lorem ipsum dolor sit amet
          consectetur adipisicing.
        </p>
        <img className="rounded-xl mt-6 w-[70%]" src={image} alt="" />
      </div>
      <div className="z-50 md:w-[55%] flex justify-end px-6 md:px-16 first relative">
        <div className="text-right">
          <h1 className="text-white font-bold pt-6 md:pt-24">Where</h1>
          <p className="text-white font-semibold md:ms-56 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            perspiciatis expedita vel. Quaerat magnam quos a architecto ex
            necessitatibus, qui blanditiis impedit optio quae mollitia
            reiciendis voluptatem voluptate repellendus, recusandae, asperiores
            deleniti nihil accusantium amet? Dolore, debitis possimus?
            Temporibus quisquam atque totam asperiores reprehenderit repellendus
            mollitia assumenda obcaecati, sint iusto eaque veniam minima laborum
            modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quasi, sit rerum cumque beatae voluptatem dicta vero inventore
            provident accusamus nostrum. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae inventore cumque vel nobis quibusdam
            debitis.
          </p>
          <button className="relative md:absolute bottom-0 right-1/2 mb-10 bg-yellow-400 rounded-full font-semibold ps-8 hover:bg-yellow-500 sm:relative pe-8">
            Help Me
          </button>
        </div>
      </div>
    </section>
  );
}
