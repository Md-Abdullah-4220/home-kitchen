import Card from "./Card";

const Topcard = ({ newArr }) => {
  return (
    <>
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-[70px] text-[#303A40] font-bold font-displaymain">
          Culinary Masterpieces
        </h1>
        <p className="text-gray-500 text-xl max-w-3xl text-center mt-5">
          Prepare to be captivated by our collection of mouthwatering dishes,
          each one a work of art. From vibrant salads to hearty entrees
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5 max-w-[1380px] mx-auto">
        {newArr.map((prop, inx) => (
          <Card key={inx} prop={prop}></Card>
        ))}
      </div>
      <div className="max-w-[1380px] mx-auto flex justify-end">
      <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-4 py-2 rounded-full text-sm transition">
        See All dishes
      </button>
      </div>
    </>
  );
};

export default Topcard;
