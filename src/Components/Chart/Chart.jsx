import React , {useState, useEffect} from 'react'
import {fetchDailyData} from "../../api";

import { Line , Bar  } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure();

function Chart({data:{confirmed, recovered,deaths} , country}) {
    const [dailyData, setDailyData] = useState([]);
 

  useEffect(()=> {
      const fetchApi=async()=> {
          setDailyData(await fetchDailyData());
      }
      notify();
      fetchApi();
  },[])

  const notify = () => toast.success("Stay home , Stay Safe !");


  console.log(confirmed , recovered , deaths)
 
  const lineChart = ( 
    dailyData.length
    ? ( <Line 
     data={{
         labels: dailyData.map(({ date }) => date),
         datasets: [{
            data : dailyData.map(({ confirmed }) => confirmed) , 
            label: 'Infected' ,
            borderColor : '#3333ff' ,
            fill :  true
         },{
            data : dailyData.map(({ deaths }) => deaths) , 
            label: 'Deaths' ,
            borderColor : 'red' ,
            backgroundColor : 'rgba(255, 0, 0, 0.5)' ,
            fill :  true
         }],
     }}
    
    />)  : null
 );

 const Barchart = (
     confirmed
    ? (
        <Bar 
        data = {{
            labels:['Infeced' , "Recovered" , 'Deaths'],
            datasets: [{
                label: 'People' ,
                backgroundColor:[
                    `rgba(0, 0, 255, 0.5)`,
                    `rgba(0, 255, 0 ,0.5)`,
                    `rgba(255, 0, 0, 0.5)`,
                ],
                data:[confirmed.value , recovered.value , deaths.value]
            }]
        }}
        options={{
            legend: {display:false},
            title :{ display:true , text:'Current state in ${country}'},
        }}
        />
    ) : null

 )


    return (
        <div className={styles.container}>
              {notify}
            {country ? Barchart : lineChart}
        </div>
    )
}

export default Chart
