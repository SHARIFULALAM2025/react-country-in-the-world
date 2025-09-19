import React, { use, useState } from 'react';
import Country from '../Country';

const Countries = ({ countryMessage }) => {
  const allCountries = use(countryMessage);
  const [count, setCount] = useState([])
  const visitedCountry = (country) => {
    const newVisitedCountry = [...count, country];
    setCount(newVisitedCountry)
  }
     const countriesData=allCountries.countries


  return (
    <div className="">
      <h1 className=""> all countries :{countriesData.length}</h1>
      <h2>countryCount Visited:{count.length}</h2>
      <ol>
        {count.map((x) => (
          <li key={x.cca3.cca3}>{x.name.common}</li>
        ))}
      </ol>
      <div className="country">
        {countriesData.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            visitedCountry={visitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  )
}

export default Countries;