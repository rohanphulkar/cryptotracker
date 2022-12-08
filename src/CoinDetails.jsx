import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = ({ setShowSearch }) => {
  const [coin, setCoin] = useState([]);
  const { id } = useParams();
  const fetchCoin = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
      });
  };
  useEffect(() => {
    fetchCoin();
    if (id != undefined) {
      setShowSearch(false);
    }
  }, []);
  return (
    <div>
      {coin.length !== 0 ? (
        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center">
                <img src="" className=" mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {coin.name}
                </h2>
              </div>
              <p className="mt-4 text-gray-500 sm:text-xl">
                {coin.description.en.split(".")[0]}
                {coin.description.en.split(".")[1]}
                {coin.description.en.split(".")[2]}
                {coin.description.en.split(".")[3]}.
              </p>
            </div>
            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Market Cap Rank
                  </dt>
                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    {coin.market_cap_rank}
                  </dd>
                </div>
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Current Price
                  </dt>
                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    ₹{coin.market_data.current_price.inr.toLocaleString()}
                  </dd>
                </div>
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Price Change in 24 Hours
                  </dt>
                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    ₹
                    {coin.market_data.price_change_24h_in_currency.inr.toLocaleString()}
                  </dd>
                </div>
                <div className="flex col-span-3 flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Market Cap
                  </dt>
                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    {coin.market_data.market_cap.inr.toLocaleString()}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default CoinDetails;
