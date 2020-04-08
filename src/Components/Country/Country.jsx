import React , {useEffect , useState} from 'react'
import {NativeSelect , FormControl} from '@material-ui/core';
import styles from "./Country.module.css";

import {countries} from "../../api"

function Country({handleCountryChange}) {
  
  const [fetchedCountries , setFetchedCountries] = useState([]);
   
  useEffect(()=> {

    const fetchCountries = async () => {
        setFetchedCountries( await countries());
    }

    fetchCountries();
    
    
  } , [setFetchedCountries] )
    
  console.log(fetchedCountries);
  
  return (
     <FormControl className={styles.formcontrol}>
         <NativeSelect defaultValue='' onChange={e => handleCountryChange(e.target.value)} >
            <option value="">Global</option>
          {fetchedCountries.map((country ,i) => (<option value={country} key={i}>{country}</option>))}
         </NativeSelect>
     </FormControl>
    )
}

export default Country
