import React from "react";
import Styles from "./Coin.module.css";

const Coin = ({ data }) => {
  const {
    id,
    name,
    image,
    symbol,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_percentage_24h,
  } = data;
  return (
    <>
      <div className={Styles.container}>
        <span className={Styles.marketCapRank}>{market_cap_rank}</span>
        <img className={Styles.image} src={image} alt={id} />
        <span className={Styles.name}>{name}</span>
        <span className={Styles.symbol}>{symbol.toUpperCase()}</span>
        <span className={Styles.currentPrice}>
          {current_price.toLocaleString()} $
        </span>
        <span className={Styles.marketCap}>
          {market_cap.toLocaleString()} ${" "}
        </span>
        <span
          className={
            price_change_percentage_24h > 0
              ? Styles.greenPriceChange
              : Styles.redPriceChange
          }>
          {price_change_percentage_24h.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default Coin;
