import React from "react";
const Navbar = ({ setSearch, showSearch }) => {
  return (
    <div>
      <header aria-label="Page Header">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <div className="text-center sm:text-left">
              <a href="/">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-2">
                  Crypto Tracker
                </h1>
              </a>
            </div>
            <div
              className={`mt-4 flex w-full md:w-1/2 xl:w-1/3 gap-4 sm:mt-0 sm:flex-row sm:items-center ${
                showSearch ? "" : "hidden"
              }`}
            >
              <input
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="py-3 px-5 block w-full border border-gray-500 rounded-full text-lg focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                placeholder="Search Coin"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
