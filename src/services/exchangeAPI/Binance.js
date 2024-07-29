import axios from 'axios';

/**
 * Binance에서 특정 코인의 가격을 가져옵니다.
 * @param {string} symbol - 코인 심볼 (예: 'BTC')
 * @returns {Promise<number>} - 코인 가격
 */
const getBinanceAllPrice = async (symbol) => {
    try {
      const response = await axios.get(`https://api.binance.com/api/v3/ticker/price`);
        const allPrices = response.data;

        const usdtPri = allPrices.filter(price => price.symbol.endsWith('USDT'));
      return usdtPri; // 모든 USDT페어 코인 가격 리스트 반환
    } catch (error) {
      console.error('Error fetching price from Binance:', error);
      throw error;
    }
  };
  const getBinancePrice = async (symbol) => {
    try {
    const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`);
    return parseFloat(response.data.price);
    } catch (error) {
    console.error('Error fetching price from Binance:', error);
    throw error;
    }
  };


export {getBinanceAllPrice, getBinancePrice}