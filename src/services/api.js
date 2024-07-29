import { getBinancePrice } from './exchangeAPI/Binance';



// 거래소별로 지원되는 코인들 (예시)
const SUPPORTED_EXCHANGES = {
    binance: getBinancePrice,
    // coinbase: getCoinbasePrice,
    // kraken: getKrakenPrice,
  };



  /**
   * 거래소와 코인 심볼을 입력받아 가격 데이터를 반환합니다.
   * @param {string} exchange - 거래소 이름 (예: 'binance')
   * @param {string} symbol - 코인 심볼 (예: 'BTC')
   * @returns {Promise<number>} - 코인 가격
   */
  export const getPrice = async (exchange, symbol) => {
    if (!SUPPORTED_EXCHANGES[exchange]) {
      throw new Error(`Unsupported exchange: ${exchange}`);
    }
  
    try {
      const price = await SUPPORTED_EXCHANGES[exchange](symbol);
      return price;
    } catch (error) {
      console.error(`Error fetching price from ${exchange}:`, error);
      throw error;
    }
  };

  
  
  /**
   * 여러 거래소에서 코인 가격을 가져옵니다.
   * @param {string[]} exchanges - 거래소 이름 배열
   * @param {string} symbol - 코인 심볼
   * @returns {Promise<object[]>} - 거래소별 가격 데이터
   */
  export const getPricesFromExchanges = async (exchanges, symbol) => {
    const pricePromises = exchanges.map(exchange => getPrice(exchange, symbol));
  
    try {
      const prices = await Promise.all(pricePromises);
      return prices.map((price, index) => ({
        exchange: exchanges[index],
        price,
      }));
    } catch (error) {
      console.error('Error fetching prices from exchanges:', error);
      throw error;
    }
  };