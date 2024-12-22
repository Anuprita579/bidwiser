import React from "react";
import "./itemFormPage.css";
import "../../index.css";

const ItemFormPage = () => {
  return (
    <div className="auction-page">
      <div className="overlay">
        <div className="content w-2/4">
          <h2 className="mt-5">Enter Event Details</h2>
          <div className="grid gap-6 py-14 m-auto mb-6 md:grid-cols-1">
            <div>
              <input
                type="text"
                id="first_name"
                className="w-4/5 h-14 rounded-2xl border border-gray-300 p-4 bg-transparent"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="w-4/5 h-14 rounded-2xl border border-gray-300 p-4 bg-transparent"
                placeholder="Upload Image"
                required
              />
            </div>
            <div>
              <input
                type="number"
                id="first_name"
                className="w-4/5 h-14 rounded-2xl border border-gray-300 p-4 bg-transparent"
                placeholder="Base Price"
                required
              />
            </div>
            <div>
              <input
                type="number"
                id="first_name"
                className="w-4/5 h-14 rounded-2xl border border-gray-300 p-4 bg-transparent"
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="w-4/5 h-14 rounded-2xl border border-gray-300 p-4 bg-transparent"
                placeholder="Portfolio"
                required
              />
            </div>
            
            {/* Centering the Add Participant button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold w-2/5 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Participant
              </button>
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <button
                className="text-white font-medium rounded-lg border border-[#2C2C2C] text-sm px-5 py-2.5 text-center bg-transparent"
              >
                Add More
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFormPage;
