import { makeStyles } from "@material-ui/core";
import axios from "axios"
import React, { useEffect, useState } from "react"
import { TrendingCoins } from '../../config/api'
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { AppBar, Container, Typography, Box, IconButt, Toolbar } from '@material-ui/core'
const useStyles = makeStyles((theme) =>({

    carousel:{
        paddingTop:"50px",
        height:"50%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        overflow:"hidden"
    },
    carouselItem:{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        cursor:"pointer",
        textTransform:"uppercase",
        color:"White",
        overflow:"hidden",
        background: "Black",
        paddingTop:"20px",
        paddingBottom:"20px",
        borderStyle: "solid",
        borderWidth: "2px",
        borderImage: "linear-gradient(45deg, #74d680, #ff7878) 1",
    },
    
}));
export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}
const Carousel = () => {
    // const CoinGecko = require('coingecko-api');
    // const CoinGeckoClient = new CoinGecko();
    const [trending, setTrending] = useState([])
    const classes = useStyles();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins());
    
        console.log(data);
        setTrending(data);
      };
    console.log(trending)
    useEffect(() => {
        fetchTrendingCoins();
    }, [])
    const responsive = {
        0:{
            items: 2,
        },
        512: {
            items:6,
        }
    }
    const items = trending.map((crypto) =>{
        let trendProfit = crypto.price_change_percentage_24h;
        return (
            
            <Container maxWidth="lg">
            <Link className={classes.carouselItem} to={`/coin/${crypto.id}`}>
                
                <img
                src={crypto?.image}
                alt={crypto.name}
                height="80"
                style={{ marginBottom:10 }}
                    />
                <span>{crypto?.symbol}
                &nbsp;
                <span>
                    
                    {(() => {
                        if (crypto?.price_change_percentage_24h > 0.0) {
                            return (
                                <span
                                style={{textTransform: "uppercase", fontFamily:"Montserrat", color:"#90ee90"}}>
                                {trendProfit && "+"}{crypto?.price_change_percentage_24h?.toFixed(2)}%
                                </span>
                            )
                            } else{
                            return (
                                <span
                                style={{textTransform: "uppercase", fontFamily:"Montserrat", color:"#e9967a"}}>
                                {trendProfit && ""}{crypto?.price_change_percentage_24h?.toFixed(2)}%
                                </span>
                            )
                            } 
                        })()}
                </span>
                </span>
                <span style={{ fontSize: 24, fontWeight : 600}}>
                    ${numberWithCommas(crypto?.current_price.toFixed(2))}
                </span>
                
            </Link>
            </Container>
        )
    })
    return <div className={classes.carousel}>
        <AliceCarousel 
            mouseTracking
            infinite
            autoPlayInterval={100}
            animationDuration={5000}
            responsive={responsive}
            autoPlay
            disableButtonsControls
            disableDotsControls
            items={items}
        />
            
        
    </div>
};

export default Carousel;