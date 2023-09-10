import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'
const Countries = () => {
   const  [countries, setCountries] = useState([]);
   const [visitedCountries, setVisitedCountries] = useState([])
   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))

   },[])
  const handleVisitedCountries = (country) => {
     const newArray = [...visitedCountries,country]
     setVisitedCountries(newArray)
  }

   return (
      <div>
         <h3>Countries: {countries.length}</h3>
         <div>
            <h5>Visited countries : {visitedCountries.length}</h5>
            <ul>
               {
                  visitedCountries.map(country => <li>{country.name.common}</li>)
               }
            </ul>
         </div>
         <div className="countries">
             {
            countries.map(country => <Country country={country}
            handleVisitedCountries={() => handleVisitedCountries(country)}
            >
            </Country>)
         }
            </div> 
        
      </div>
   );
};

export default Countries;