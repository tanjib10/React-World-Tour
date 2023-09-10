import './country.css';
const Country = ({country}) => {
   const {name,flags,area,population} = country
   return (
      <div className="country" >
         <h5>Country Name : {name.common} </h5>
         <img className='image' src={flags.png} alt="" />
         <p>area : {area}</p>
         <p>population : {population}</p>
      </div>
   );
};

export default Country;