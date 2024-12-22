import React from "react";
import "./portfolioForm.css";
import "../../index.css";

const EventFormPage = () => {
  return (
    <div className="auction-page">
      <div className="overlay">
        <div className="content w-2/4">
          <h2 className="py-8 mt-6">Enter Event Details</h2>
          <div className="grid gap-6 py-32 m-auto mb-6 md:grid-cols-1">
            <div>
              <input
                type="number"
                id="visitors"
                className="w-4/5 h-14 rounded-2xl border border-gray-300 p-4 bg-transparent"
                placeholder="Enter number of Portfolios"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="w-4/5 h-14 rounded-2xl border border-gray-300 p-4 bg-transparent"
                placeholder="Enter name of Portfolios"
                required
              />
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

export default EventFormPage;
