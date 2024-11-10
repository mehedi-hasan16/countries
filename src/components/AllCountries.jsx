import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "./singleCountry";

const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    const [visited, setVisited]= useState([]);

    const handleAddVisitedButton= (country)=>{
        const addCountryToVisitedList  = [...visited, country];
        setVisited(addCountryToVisitedList);
    }

    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, [])

    return (
        <div>
            <h2>Visited List</h2>
           <ul>
           {
                visited.map(element=><li>{element.name.common}</li>)
            }
           </ul>
            
            
            

            {
             countries.map(element => <SingleCountry country={element} handleAddVisitedButton={handleAddVisitedButton}></SingleCountry>)
            }
        </div>
    );
};

export default AllCountries;