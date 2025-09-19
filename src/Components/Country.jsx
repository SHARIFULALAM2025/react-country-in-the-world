import React, { useState } from 'react';




const Country = ({ country, visitedCountry }) => {
  // console.log(visitedCountry)

  //  console.log(country.area.area)
  const [visited, setVisited] = useState(false)
  const handelClick = () => {
    //base system
    // if (visited) {
    //   setVisited(false)
    // } else {
    //   setVisited(true)

    // }
    //second system
    // setVisited(visited?false:true)
    //third system
    setVisited(!visited)
    visitedCountry(country)
  }
  // console.log(handelClick)

  return (
    <div>
      <div className={`box ${visited && 'country_visited'}`}>
        <h3>Name :{country.name.common}</h3>
        <figure>
          <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        </figure>
        <h1 className="">
          currencies :{Object.keys(country.currencies.currencies)[0]}
        </h1>
        <h1>capital:{country.capital.capital[0]}</h1>
        <h1>region:{country.region.region}</h1>
        <h1>language:{Object.keys(country.languages.languages)[0]}</h1>
        <h1>area:{country.area.area}</h1>
        <h2>sort name:{country.cca3.cca3}</h2>
        <h1>population:{country.population.population}</h1>
        <h1>continents:{country.continents.continents}</h1>
        <button onClick={handelClick}>
          {visited ? 'visited' : 'not visited'}
        </button>
      </div>
    </div>
  )
}

export default Country;