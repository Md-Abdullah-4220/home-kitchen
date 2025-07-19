import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Header = ({ kitchendata, newArr, average }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: 1, path: "/blog/react-intro", name: "Home" },
    { id: 2, path: "/blog/javascript-tips", name: "Menu" },
    { id: 3, path: "/blog/css-grid-vs-flexbox", name: "About" },
    { id: 4, path: "/blog/nextjs-routing", name: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="xl:px-0 px-2">
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
                {navLinks.map((res) => (
                  <li key={res.id}>
                    <a href={res.path}>{res.name}</a>
                  </li>
                ))}

                {/* <li>
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
                </li> */}
              </ul>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-xl text-sm cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-orange-500 transition-all duration-300 ease-in-out">
                Book Now
              </button>
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl ml-3 md:hidden"
              >
                {open === true ? <IoCloseSharp /> : <IoIosMenu />}
              </div>
              {open && (
                <ul className="absolute top-full left-0 w-full bg-white p-5 flex flex-col gap-4 text-gray-700 font-medium shadow-md z-10 md:hidden">
                  {navLinks.map((res) => (
                    <li key={res.id}>
                      <a
                        href={res.path}
                        className="hover:text-orange-600 block"
                        onClick={() => setOpen(false)}
                      >
                        {res.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[url(/DARmaK3SG5zGJvYtAsJC5l-4096x4096.webp)] bg-cover bg-no-repeat lg:bg-[position:0%_58%] bg-[position:50%_58%] xl:h-[680px] md:h-[400px] h-1/2 relative mt-16">
        <div className="xl:absolute md:p-0 p-5 right-[250px] top-[100px]">
          <h1 className="font-displaymain text-[#303A40] xl:text-[96px] md:text-7xl text-4xl">
            Discoure the joy of
          </h1>
          <p className="font-bodydisplay text-gray-500 max-w-[550px] md:text-xl mt-4">
            Welcome to our kitchen, where the aroma of freshly prepared dishes
            fills the air and the art of cooking comes alive. Explore our
            vibrant selection of recipes
          </p>
          <div className="flex gap-1 md:mt-14 mt-5">
            <button className="md:px-10 md:py-3 px-4 py-1 cursor-pointer text-gray-400 md:text-xl  bg-[#303A40] rounded-2xl ">
              Order Now
            </button>
            <button className="md:px-10 md:py-3 px-4 py-1 border-gray-400 text-xl cursor-pointer border rounded-2xl text-gray-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#303A40]">
        <div className="md:max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 text-gray-100 text-center font-bodydisplay md:text-2xl">
          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <span>Total Dish</span>
            <span className="flex items-center justify-center gap-2 font-displaymain">
              {kitchendata.length}
              <img
                className="h-6 w-6"
                src="/icons8-dinner-100.png"
                alt="dish"
              />
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <span>Top Selling Dish</span>
            <span className="flex items-center justify-center gap-2 font-displaymain">
              {newArr.length}
              <img
                className="h-6 w-6"
                src="/icons8-dinner-100.png"
                alt="dish"
              />
            </span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <span>Our Rating</span>
            <span className="font-displaymain">{average}</span>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <span>Discover our most</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
