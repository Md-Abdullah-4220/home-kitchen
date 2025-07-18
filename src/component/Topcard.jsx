import Card from "./Card";

const Topcard = ({ newArr }) => {
  return (
    <div className="xl:px-0 px-3">
      <div className="my-10 flex flex-col items-center">
        <h1 className="lg:text-[70px] text-3xl text-[#303A40] font-bold font-displaymain">
          Culinary Masterpieces
        </h1>
        <p className="text-gray-500 md:text-xl max-w-3xl text-center mt-5">
          Prepare to be captivated by our collection of mouthwatering dishes,
          each one a work of art. From vibrant salads to hearty entrees
        </p>
      </div>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-5 max-w-[1380px] mx-auto">
        {newArr.map((prop, inx) => (
          <Card key={inx} prop={prop}></Card>
        ))}
      </div>
      <div className="max-w-[1380px] mx-auto flex justify-end mt-5">
        <button
          className="bg-orange-600 text-white px-4 py-3 rounded-xl text-sm cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-orange-500 transition-all duration-300 ease-in-out"
        >
          See All dishes
        </button>
      </div>
    </div>
  );
};

export default Topcard;
