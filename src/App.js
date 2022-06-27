import './App.css';
import CoinCard from './components/CoinCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState(" ");
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res) => {
      setCoins(res.data);
      console.log(res.data);
    })
  }, []);

const handleChange = (e) => {
  setSearch(e.target.value);
}


const filteredCoins = coins.filter((coin) => coin.name && coin.name.toLowerCase && coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <nav className="navbar nav mb-5">
        <div className="container-fluid">
          <a className="navbar-brand mb-3" href='/'><i className="fa-solid fa-coins"></i> CryptoTracker</a>
          <form className="d-flex">
            <input type="text" className="form-control search-ip" placeholder="Search a coin" onChange={handleChange}/>
          </form>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
       { filteredCoins.map((coin) => {
        return(
          <CoinCard
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />)
       })}
      </div>

    </>
  );
}

export default App;
