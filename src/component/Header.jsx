import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Header = ({ kitchendata, newArr, average }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 ">
        <div
          className={`${
            scrolled ? "backdrop-blur-md bg-white/30" : "bg-white/30 "
          }`}
        >
          <div className="max-w-[1680px] mx-auto flex justify-between p-2 transition-all duration-300">
            <div className="flex items-center gap-1">
              <img
                className="h-10 w-10"
                src="/icons8-catering-100.png"
                alt="logo"
              />
              <h1 className="font-displaymain font-medium text-xl">
                Home Kitchen
              </h1>
            </div>
            <nav className="flex md:gap-16 items-center">
              <ul className="hidden md:flex gap-10 font-bodydisplay text-gray-500">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <button className="bg-orange-600 hover:bg-white hover:text-black hover:border hover:border-orange-500 cursor-pointer text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:scale-105">
                Book Now
              </button>
              <div className="text-3xl ml-3 md:hidden">
                <a href="#">
                  <IoIosMenu />
                </a>
              </div>
              <div></div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[url(/DARmaK3SG5zGJvYtAsJC5l-4096x4096.webp)] bg-[position:0%_58%] h-[680px] relative mt-16">
        <div className="absolute right-[250px] top-[100px]">
          <h1 className="font-displaymain text-[#303A40] text-[96px]">
            Discoure the joy of
          </h1>
          <p className="font-bodydisplay text-gray-500 max-w-[550px] text-xl mt-4">
            Welcome to our kitchen, where the aroma of freshly prepared dishes
            fills the air and the art of cooking comes alive. Explore our
            vibrant selection of recipes
          </p>
          <div className="flex gap-3 mt-14">
            <button className="px-10 py-3 cursor-pointer text-gray-400 text-xl  bg-[#303A40] rounded-2xl ">
              Order Now
            </button>
            <button className="px-10 py-3 border-gray-400 text-xl cursor-pointer border rounded-2xl text-gray-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#303A40]">
        <div className="max-w-[1600px] mx-auto flex justify-between text-2xl text-gray-100 py-3 font-bodydisplay">
          <h1 className="max-w-[130px] text-center">
            Totel Dish
            <span className="flex items-center justify-center gap-2 font-displaymain">
              {kitchendata.length}
              <img
                className="h-6 w-6"
                src="/icons8-dinner-100.png"
                alt="dish"
              />
            </span>
          </h1>
          <h1 className="max-w-[180px] text-center">
            Top Selling Dish
            <span className="flex items-center justify-center gap-2 font-displaymain">
              {newArr.length}
              <img
                className="h-6 w-6"
                src="/icons8-dinner-100.png"
                alt="dish"
              />
            </span>
          </h1>
          <h1 className="max-w-[300px] text-center">
            Coustomar Rating out of 5
            <span className="flex items-center justify-center gap-2 font-displaymain">
              {average}
            </span>
          </h1>
          <h1 className="max-w-[150px] text-center">Discover our most </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
