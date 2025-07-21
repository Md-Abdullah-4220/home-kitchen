const About = () => {
  return (
    <div className="max-w-[1680px] mx-auto">
      <div className="grid md:grid-cols-2">
        <div className="p-20">
          <h1 className=" text-[#303A40] text-5xl font-extrabold font-displaymain">
            About Our Restaurant
          </h1>
          <div className="flex gap-5 items-center mt-12">
            <img
              className="h-16 w-16"
              src="/public/D4SP0h0fZ35Ftjf3gYCimS-4096x4096.webp"
              alt=""
            />
            <div>
              <h1 className="text-[#303A40] text-xl">Established in 2015</h1>
              <p className="text-gray-500 text-lg mt-2">
                Our restaurant has been a beloved destination for food
                enthusiasts
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-12">
            <img
              className="h-16 w-16"
              src="/public/EYEUwkDjajDGawXWP63FXr-4096x4096.webp"
              alt=""
            />
            <div>
              <h1 className="text-[#303A40] text-xl">Locally Sourced</h1>
              <p className="text-gray-500 text-lg mt-2">
                We take pride in our partnerships with local farmers and
                producers
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-12">
            <img
              className="h-16 w-16"
              src="/public/Dt9LnFlzowNKxnqhrmtRTg-4096x4096.webp"
              alt=""
            />
            <div>
              <h1 className="text-[#303A40] text-xl">Ethical Practices</h1>
              <p className="text-gray-500 text-lg mt-2">
                At the heart of our mission is a deep respect for the
                environment and a dedication to
              </p>
            </div>
          </div>
          <button className="md:px-10 md:py-3 px-4 py-1 cursor-pointer text-white md:text-xl  bg-orange-500 rounded-2xl mt-5">
            Learn More
          </button>
        </div>
        <div className="p-20">
          <img
            className="h-[600px] w-full"
            src="/public/GjhdctA6dpCJDb8eaeFTa6-4096x4096.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
