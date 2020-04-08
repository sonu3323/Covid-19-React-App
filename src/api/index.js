import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// ******************  Fetch the data for Card*****************

export const fetchData= async (country)=>{

    let changableUrl = url;
    
    if(country) {
        changableUrl = `${url}/countries/${country}`;
       
    }
    try {
        const {data : { confirmed , recovered , deaths, lastUpdate}} = await axios.get(changableUrl);
        console.log({confirmed,recovered ,deaths , lastUpdate })
        return  {confirmed,recovered ,deaths , lastUpdate };
       
   
    } catch (error) {
        console.log(error)
    }
}


// ******************  Fetch the data for Chart *****************

export const fetchDailyData = async() => {

    try {
        const { data } = await axios.get(`${url}/daily`)
     
    
      const modifiedData = data.map((dailyData) => ({
          confirmed: dailyData.confirmed.total ,
          deaths: dailyData.deaths.total ,
          date : dailyData.reportDate 
      }));

  //    console.log(modifiedData)
      return modifiedData;

    } catch (error) {
        
    }
}


// ******************  Fetch the data for Country *****************

export const countries = async() => {
    try {
    
        const { data : {countries} } = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name);
    
    } catch (error) {
        console.log(error)
    }
}