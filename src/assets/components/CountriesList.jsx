import React, { useEffect, useState } from 'react'
//import CountriesData from '../../CountriesData'
import CountryCard from './CountryCard'
import CountriesListSimmerEffect from './CountriesListSimmerEffect';
export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://countries.dev/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      }
      );

    const intervalID = setInterval(() => {
      console.log("running ContriesList Componet");
    }, [10000])

    return () => {
      console.log("CLeaning up....")
      clearInterval(intervalID)
    }
  }, [])


  // when we are using api and setting the value of setCountriesData it render again and again to overcome this situation we are using useEffect hooks
  // if (countriesData.length === 0) {
  //   fetch("https://countries.dev/countries")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountriesData(data)
  //     }
  //     );
  // }
  let count = 0;

  return (
    <>
      {!countriesData.length ? <CountriesListSimmerEffect /> : (
        <div className="countries-container"  >
          {

            countriesData.filter((country) => country.name.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
              .map((country) => {
                count++;

                return (
                  <CountryCard key={count}
                    name={country.name}
                    flag={country.flags.svg}
                    region={country.region}
                    population={country.population}
                    capital={country.capital}
                    countrydata={country}

                  />
                )
              })
          }
        </div >
      )}
    </>
  )
}