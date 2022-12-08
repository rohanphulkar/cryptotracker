import React from "react";
import { Link } from "react-router-dom";
const AllCoins = ({ coins, page, setPage }) => {
  return (
    <div>
      <div className="container w-full px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="pl-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      No.
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Current Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Market Cap
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Price Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coins &&
                    coins.map((coin, index) => {
                      return (
                        <tr key={coin.id}>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {index + 1}
                            </p>
                          </td>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <Link to={`/${coin.id}`}>
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <p className="relative block">
                                    <img
                                      alt="profil"
                                      src={coin.image}
                                      className="mx-auto object-cover rounded-full h-10 w-10 "
                                    />
                                  </p>
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {coin.name}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                              ₹{coin.current_price.toLocaleString()}
                            </p>
                          </td>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                              ₹{coin.market_cap.toLocaleString()}
                            </p>
                          </td>
                          <td
                            className={`px-5 py-5 text-sm bg-white border-b border-gray-200`}
                          >
                            <span
                              className={`inline-flex items-center justify-center rounded-full  px-2.5 py-0.5 ${
                                coin.price_change_percentage_24h > 0
                                  ? "text-emerald-700 bg-emerald-100"
                                  : "bg-red-100 text-red-700"
                              } `}
                            >
                              <p className="whitespace-nowrap text-sm">
                                {coin.price_change_percentage_24h > 0
                                  ? "+"
                                  : ""}
                                {coin.price_change_percentage_24h.toFixed(2)} %
                              </p>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}
      <nav className="flex items-center space-x-2 justify-center mb-12">
        <p
          className={`text-gray-700 hover:bg-gray-900 px-3 py-2  hover:text-gray-100 cursor-pointer p-4 inline-flex items-center gap-2 rounded-md ${
            page == 1 ? "text-gray-400 pointer-events-none" : ""
          }`}
          onClick={() => setPage(page - 1)}
        >
          <span aria-hidden="true">«</span>
          <span>Previous</span>
        </p>
        <p
          className="w-10 h-10 bg-gray-800 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
          aria-current="page"
        >
          {page}
        </p>
        <p
          className={`text-gray-700 hover:bg-gray-900 px-3 py-2  hover:text-gray-100 p-4 cursor-pointer inline-flex items-center gap-2 rounded-md ${
            page == 4 ? "text-gray-400 pointer-events-none" : ""
          }`}
          onClick={() => {
            if (page < 4) {
              setPage(page + 1);
            }
          }}
        >
          <span>Next</span>
          <span aria-hidden="true">»</span>
        </p>
      </nav>

      {/* pagination end */}
    </div>
  );
};

export default AllCoins;
