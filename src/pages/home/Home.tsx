import bg from "../../assets/background.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-max">
      <section className="relative">
        <div className="w-full h-full absolute">
          <img
            src={bg}
            className="object-cover w-full absolute object-center"
            alt=""
          />
        </div>
        <div className="">
          <div className="h-20"></div> {/* Spacer div */}
          <div className="box relative z-10 px-10 py-2">
            <div className="arc-text  my-4">
              <h5 className="text-center relative mhome-txt text-5xl max-sm:text-2xl -mt-2 font-bold tracking-widest">
                Hi! I'm
              </h5>
              <h1 className="text-center relative home-txt text-[12rem] max-sm:text-6xl tracking-wider">
                Hashim
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center relative z-10 px-10 py-2">
            <h5 className="w-[80%] md:max-xl:w-[90%] text-center text-[#EDD1A1] coop-bold text-5xl md:max-xl:text-4xl font-bold tracking-widest">
              I'm an artist, graphic designer, brand devloper/curator and I make
              and sell custom merch
            </h5>
          </div>
          <div className="relative flex justify-evenly mt-80 md:max-xl:mt-[11%]">
            <div className="w-[45%]">
              <NavLink
                to="/work"
                className="home-btn w-[60%] mb-16 h-40 border-yellow-900 border-8 relative rounded-tr-[3.5rem] rounded-bl-[3.5rem]"
              >
                <h1 className="text-center hcard-txt text-7xl md:max-xl:text-6xl text-[#EDD1A1]">
                  View my work
                </h1>
              </NavLink>
              <NavLink
                to="/shop"
                className="home-btn w-[60%] h-40 border-yellow-900 border-8 relative rounded-tr-[3.5rem] rounded-bl-[3.5rem]"
              >
                <h1 className="text-center px-6 hcard-txt text-7xl md:max-xl:text-6xl text-[#EDD1A1]">
                  Shop Merch
                </h1>
              </NavLink>
            </div>
            <NavLink
              to="/work"
              className="home-btn w-[30%] h-40 border-yellow-900 border-8 relative rounded-tr-[3.5rem] rounded-bl-[3.5rem]"
            >
              <h1 className="text-center hcard-txt text-7xl md:max-xl:text-6xl text-[#EDD1A1]">
                Get to know me
              </h1>
            </NavLink>
          </div>
        </div>
      </section>

      <section>
        <input type="text" />
      </section>
    </div>
  );
};

export default Home;
