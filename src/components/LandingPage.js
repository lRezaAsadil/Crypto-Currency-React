import React, { useEffect, useState } from "react";
import getCoin from "../services/api";
import Loader from "./Loader";
import Coin from "./Coin";
import Styles from "./Landing.module.css";

const LandingPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const filterCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getCoin());
    };
    fetchAPI();
  }, []);
  const searchHadler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
      
        className={Styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHadler}
      />
      {!coins.length ? (
        <Loader />
      ) : (
        <>
          <div className={Styles.coinContainer2}>
            <div className={Styles.container}>
              <span className={Styles.marketCapRank}>#</span>
              <span className={Styles.name}>Coin</span>
              <span className={Styles.symbol}>symbol</span>
              <span className={Styles.currentPrice}>Price $</span>
              <span className={Styles.marketCap}>Mkt Cap </span>
              <span className={Styles.priceChange}>24h Volume</span>
            </div>
          </div>
          <div className={Styles.coinContainer}>
            {filterCoin.map((coin) => (
              <Coin key={coin.id} data={coin} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
