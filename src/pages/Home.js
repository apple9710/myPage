import { useEffect, useState } from "react";
import styled from "styled-components";


import { getPrice } from '../services/api';
import { getBinanceAllPrice } from '../services/exchangeAPI/Binance';


 

const Home = () => {
    const [price, setPrice] = useState(null);


    const [allPrice, setAllPrice] = useState([]);

    const fetchAllPrices = async () => {
        try {
            const pricesData = await getBinanceAllPrice();
            setAllPrice(pricesData);
        } catch (error) {
            console.error('Error', error)
        }
    }
    const fetchPrice = async () => {
        try {
            const binancePrice = await getPrice('binance', 'BTC');
            setPrice(binancePrice);
        } catch (error) {
            console.error('Error fetching Binance price:', error);
        }
    };


    useEffect(() => {
        fetchAllPrices();
        fetchPrice();
      }, []);


      return (
        <div>
        <h1>Binance BTC Price</h1>
  
        {allPrice.length > 0 ? (
          <ul>
            {allPrice.map(({ symbol, price }) => (
              <li key={symbol}>
                {symbol}: {price} USD
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
        {price !== null ? <p>{price} USD</p> : <p>Loading...</p>}
      </div>
      )
}


export default Home;