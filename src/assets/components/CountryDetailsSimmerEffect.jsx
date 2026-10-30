import React from 'react'
import '../../App.css'

export default function CountryDetailsSimmerEffect() {
    return (
        <div className="country-details-container">
            <span className="back-button">
                <button><i className='fa-solid fa-arrow-left'></i>Back</button>
            </span>
            <div className="country-details">
                <img src="/scr" alt="" />
                <div className="details-text-container">

                    <div className="details-text">

                    </div>
                </div>
            </div>
        </div>
    )
}
