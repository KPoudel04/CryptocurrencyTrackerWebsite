import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import {
  LinearProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";
import { mergeClasses } from "@material-ui/styles";

const CoinInfo = ({ coin }) => {
const [historicData, setHistoricData] = useState()
const [days,setDays] = useState(1);

const fetchHistoricalData=async()=>{
    const {data} = await axios.get(HistoricalChart(coin.id, days))
    setHistoricData(data.prices)
};
useEffect(()=>{
    fetchHistoricalData();
},[days]);
console.log("data", historicData)
const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));
  const classes = useStyles();
return (
    <div className={classes.container}>
        {!historicData ? (
            <LinearProgress color={"Black"}/>
        ):(
            <>
            <Line
            data={{
                labels:historicData.map(coin=>{
                    let date = new Date(coin[0])
                    let time =
                        date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                return days=== 1? time : date.toLocaleDateString()
                }),

                datasets:[
                    {data:historicData.map((coin)=>coin[1]),
                        label: `Price (Past ${days} Days) in USD`,
                    borderColor:"BLACK"
                    }
                ]
            }}
            options={{
                elements:{
                    point:{
                        radius:1
                    }
                }
            }}
            />
            <div
                style={{
                    display: "flex",
                    marginTop: 20,
                    justifyContent: "space-around",
                    width: "100%",
                  }}
            
            >
                {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value)
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
            </>
        )}
    </div>
)
};

export default CoinInfo;
