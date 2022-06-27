import React from 'react';

const CoinCard = ({ id, name, price, symbol, marketCap, volume, image, priceChange }) => {

    return (
        <div className="col" key={id}>
            <div className="card coin-card border-secondary mb-3 text-center">
                <img src={image} className="card-img-top coin-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title coin-name">{name}</h5>
                    <p className="card-text coin-sym">{symbol}</p>
                    <p className="card-text coin-price">Price: ${price.toLocaleString()}</p>
                    <p className="card-text coin-market-cap">Market Cap: ${marketCap.toLocaleString()}</p>
                    <p className="card-text coin-volume">VOLUME(24H): {volume.toLocaleString()}</p>
                </div>
                {priceChange > 0 ? (<div className="card-footer coin-price-change price-up">
                    <i className="fa-solid fa-arrow-up"></i> {priceChange.toFixed(2)}%
                </div>)
                    :
                    (<div className="card-footer coin-price-change price-down">
                        <i className="fa-solid fa-arrow-down"></i> {priceChange.toFixed(2)}%
                    </div>)
                }

            </div>
        </div>
    )
}

export default CoinCard
