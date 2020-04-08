import React from 'react';
import {Cards , Chart , Country} from "./Components";
import styles from './App.module.css';
import {fetchData} from "./api";

import cornaImage from "./Images/image.png"
class App extends React.Component{

 state = {
   data : {} ,
   country: '',
 }

async componentDidMount() {
  const FetchData = await fetchData();

  this.setState({data: FetchData})
}


handleCountryChange = async(country)=>{
 //fetch the data and set --- 
 const FetchData = await fetchData(country);

 this.setState({data: FetchData , country: country})
}



  render() {
  
  const { data , country } = this.state;
    return (
    <div className={styles.container}>
    <img className={styles.image} src={cornaImage} alt="conid-19" />
    <Cards data={data} />
    <Country handleCountryChange={this.handleCountryChange}/>
    <Chart data={data} country={country} />
    </div>
    
  );
 }
}

export default App;
