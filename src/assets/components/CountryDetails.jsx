import React, { useEffect, useState } from 'react'
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CountryDetailsSimmerEffect from './CountryDetailsSimmerEffect.jsx'
import { useThemeHook } from '../../../hooks/useThemeHook.jsx';
export default function CountryDetails() {
    const [countryDetail, setCountryDetail] = useState(null);
    const [notFound, setNotFound] = useState(false);
    //const countryName = new URLSearchParams(location.search).get('name');
    const params = useParams();
    const countryName = params.country;
    const { state } = useLocation();
    //const [isDark] = useContext(themeContext);
    const [isDark] = useThemeHook();

    function updateCountryData(data) {
        setCountryDetail({
            name: data.name || countryName,
            native: (data.nativeName || {}),
            population: data.population,
            region: data.region,
            capital: data.capital,
            topleveldomain: data.topLevelDomain[0],
            subregion: data.subregion,
            currency: Object.values(data.currencies || {}).map((currency) => currency.name).join(','),
            languages: (data.languages || {}),
            flag: data.flags.svg,
            borders: []
        })

        Promise.all((data.borders ?? []).map((border) => {
            return fetch(`https://countries.dev/alpha/${border}`)
                .then((res) => {
                    if (!res.ok)
                        throw new Error("Failed to fetch the Border Country")
                    return res.json();
                })
                .then((borderCountries) => borderCountries.name)
        }))
            .then((borders) => {
                // here we are getting error due to f
                // etching the borders are taking time so setCountryDetails are running early. 
                // Due to that we are seeting timer
                setTimeout(() => {
                    setCountryDetail((prevState) => ({ ...prevState, borders }))
                })

            })

        //For Borders 
    }

    useEffect(() => {
        if (state) {
            updateCountryData(state)
        }
        fetch(`https://countries.dev/countries/name/${countryName.trim().toLocaleLowerCase()}?fullText=true`)
            .then(res => res.json())
            .then(([data]) => {
                updateCountryData(data);

            }).catch(err => {
                setNotFound(true);
            })

    }, [countryName])
    if (notFound) {
        return <div>
            <span className="back-button">
                <button onClick={() => history.back()} ><i className='fa-solid fa-arrow-left'></i>&nbsp;Back</button>
            </span>
            <br />
            Country Not Found
        </div>
    }
    return (
        countryDetail === null ? (<CountryDetailsSimmerEffect />) : (

            <main className={`${(isDark) ? 'dark' : ''}`}>
                <div className="country-details-container">
                    <span className="back-button">
                        <button onClick={() => history.back()} ><i className='fa-solid fa-arrow-left'></i>&nbsp;Back</button>
                    </span>
                    <div className="country-details">
                        <img src={`${countryDetail.flag}`} alt={`${countryDetail.name} flag`} />
                        <div className="details-text-container">
                            <h1>  <b>{countryDetail.name} </b></h1>
                            <div className="details-text">
                                <p>
                                    <b>Native Name :{countryDetail.native} </b>
                                    <span className="native-name"></span>
                                </p>
                                <p>
                                    <b>Population :{countryDetail.population.toLocaleString('en-IN')}</b>
                                    <span className="population"></span>
                                </p>
                                <p>
                                    <b>Region: {countryDetail.region} </b>
                                    <span className="region"></span>
                                </p>
                                <p>
                                    <b>Sub-Region: {countryDetail.subregion}</b>
                                    <span className="sub-region"></span>
                                </p>
                                <p>
                                    <b>Capital : {countryDetail.capital}</b>
                                    <span className="capital"></span>
                                </p>
                                <p>
                                    <b>Top level Domain: {countryDetail.topleveldomain}</b>
                                    <span className="top-level-domain"></span>
                                </p>
                                <p>
                                    <b>Currencies: {countryDetail.currency}</b>
                                    <span className="currencies"></span>
                                </p>
                                <p>
                                    <b>Language :{countryDetail.languages.map((lang) => { return lang.name }).join(", ")}</b>
                                    <span className="language"></span>
                                </p>
                                <br />
                                {countryDetail.borders?.length > 0 ? (
                                    <p className='border-countries'>
                                        <b >Border Countries:
                                            {
                                                countryDetail.borders.map((border) => {

                                                    return <Link key={border} to={`/${border}`}>{border}</Link>;
                                                })

                                            }
                                        </b>
                                        <span className="language"></span>
                                    </p>
                                ) : "No borders available"}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    )
}
