import React from 'react'
import '../../index.css'
export default function CountriesListSimmerEffect() {

    return (

        <div className="countries-container">
            {Array.from({ length: 10, }).map((ele, index) => {
                return (<div key={index} className="country-card shimmer-card" >
                    <div className="flag-container">
                        <div className="card-text">
                            <h3 className="card-title"></h3>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>)
            })}

        </div>
    )
}
