
const SingleCountry = ({country, handleAddVisitedButton}) => {
    return (
        <div>
            <h2>{country?.name?.common}</h2>
            <img src={country.flags.png} alt="" />
            <button onClick={()=>handleAddVisitedButton(country)}> Add to Visited</button>
        </div>
    );
};

export default SingleCountry;