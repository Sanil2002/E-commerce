import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  datas: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

const Product: React.FC<ProductProps> = ({ datas }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/Store/${datas.id}`);
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover w-full h-full" src={datas.image} alt={datas.title} />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{datas.title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${datas.price}</span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
        </div>
        <button
          onClick={handleView}
          className="flex items-center justify-center rounded-md bg-yellow-300 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Product;
