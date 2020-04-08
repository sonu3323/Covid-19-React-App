import React ,{useEffect} from 'react'
import styles from "./Cards.module.css";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";





function Cards({data :{confirmed , recovered , deaths , lastUpdate} }) {
   
  useEffect(()=> {
 
  },[]);
  
 

  if(!confirmed) {
    return 'loading...' ;
    
}




    return (
        <div className={styles.container}>
     
         <Typography variant="h5" gutterBottom color="textSecondary"align="center">@Created by:Sonu Sharma</Typography>
        <Typography variant="h4" gutterBottom align="center">Global Coronavirus Cases:</Typography>
          <Grid container spacing={4} justify="center">
            <Grid item component={Card} xs={10} md={3} className={cx(styles.card , styles.infected)}>
            <CardContent>
             <Typography variant="h4"  color="primary"  gutterBottom >Infected </Typography>
             <Typography  variant="h5"> 
             <CountUp className={styles.countup}  start={0} end={confirmed.value}duration ={2.7}separator=","
            
           />
            </Typography>
    <Typography className={styles.date} color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body1">Number of active cases of COVID-19</Typography>
            </CardContent>            
            </Grid>
          
            <Grid item component={Card} xs={10} md={3} className={cx(styles.card , styles.recovered)}>

            <CardContent>
             <Typography variant="h4"  color="textSecondary"  gutterBottom >Recovered </Typography>
             <Typography varaint="h5"> 
             <CountUp className={styles.countup} start={0} end={recovered.value}duration ={2.7}separator=","
            />
             </Typography>
            <Typography className={styles.date} color="textSecondary" > {new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
            </CardContent>            
            </Grid>
            <Grid item component={Card} xs={10} md={3} className={cx(styles.card , styles.deaths)}>

            <CardContent>
             <Typography variant="h4"  color='error' gutterBottom >Deaths </Typography>
             <Typography varaint="h5">
             <CountUp className={styles.countup} start={0} end={deaths.value}duration ={2.7}separator=","
            />
             </Typography>
            <Typography className={styles.date} color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of Deaths due to COVID-19</Typography>
            </CardContent>            
            </Grid>
          </Grid>
       
          <Typography className={styles.countryText} variant="h4" gutterBottom align="center">View by country</Typography>
        </div>
    )
}

export default Cards
