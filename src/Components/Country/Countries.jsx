import React, { use } from 'react';
import Country from '../Country';

const Countries = ({ countryMessage }) => {
    const allCountries = use(countryMessage);
     const countriesData=allCountries.countries


  return (
    <div>
      <h1 className="">countries :{countriesData.length}</h1>
      <div className='country'>

        {countriesData.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  )
}

export default Countries;