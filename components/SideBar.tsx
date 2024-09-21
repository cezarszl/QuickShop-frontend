import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white h-screen p-8 flex flex-col justify-between border-r">
      <div>
        <h1 className="text-2xl font-bold mb-8">Amad Furniture</h1>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-yellow-500">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-yellow-500">
              SHOP
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-yellow-500">
              PRODUCT
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-yellow-500">
              CART
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-yellow-500">
              CHECKOUT
            </a>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <button className="bg-yellow-500 text-white py-2 px-4 w-full rounded">
          %Discount%
        </button>
        <button className="bg-black text-white py-2 px-4 w-full rounded">
          New this week
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
