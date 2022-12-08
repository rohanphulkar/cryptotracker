import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllCoins from "./AllCoins";
import CoinDetails from "./CoinDetails";
import Navbar from "./Navbar";
const App = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const fetchCoins = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  };
  var allCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    fetchCoins();
  }, [page]);
  return (
    <div className="min-h-screen max-w-[70%] mx-auto container">
      <Navbar setSearch={setSearch} showSearch={showSearch} />
      <Routes>
        <Route
          path="/"
          exact
          element={<AllCoins coins={allCoins} page={page} setPage={setPage} />}
        />
        <Route
          path="/:id"
          element={<CoinDetails setShowSearch={setShowSearch} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
