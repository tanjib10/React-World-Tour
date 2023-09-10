import { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountries }) => {
   const {name,flags,area,population} = country
   const [visited,setVisited] = useState(false)
   const handleVisited = () => {
      setVisited(!visited)
   }
   return (
      <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
         <h5 style={{color : 'steelblue'}}>Country Name : {name.common} </h5>
         <img className='image' src={flags.png} alt="" />
         <p>area : {area} km <sup>2</sup></p>
         <p>population: {population} </p>
         <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
         <button onClick={handleVisitedCountries}>Mark as visited</button>
      </div>
   );
};

export default Country;