import { useState } from "react";
import MyModal from "./style_component/MyModal";

const Card = ({ prop }) => {
  const { name, img, rating, price } = prop;
  const [showModal, setShowModal] = useState(false);

  const [showDetail, setShoDetail] = useState({});

  const handelDetails = (crde) => {
    setShoDetail(crde);
  };


  return (
    <div>
      <div className="p-5 rounded-xl overflow-hidden shadow-lg bg-white border-gray-300 border">
        <img
          className="w-full h-64 object-cover"
          src={img} // Replace with your real image URL
          alt="Grilled Salmon"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold font-serif text-gray-800 mb-2">
            Name of dish: <span className="font-displaymain">{name}</span>
          </h3>
          <p className="text-gray-600 text-md mb-4">
            Price: $<span>{price}</span>
          </p>
          <p className="text-gray-600 text-md mb-4">
            Rating of dish: <span>{rating}</span>
          </p>
          <div className="flex justify-between">
            <button className="bg-orange-600 hover:bg-white hover:text-black hover:border hover:border-orange-500 cursor-pointer text-white px-4 py-2 rounded-full text-sm transition-transform duration-300">
              Order Now
            </button>
            <button
              className="border border-orange-500 text-black hover:text-white hover:bg-orange-600 cursor-pointer px-4 py-2 rounded-full text-sm transition "
              onClick={() => {
                setShowModal(true), handelDetails(prop);
              }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <MyModal showDetail={showDetail} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Card;
