import { Container, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../config/api';
import CoinInfo from './CoinInfo.js'
import { render } from 'react-dom';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Coin = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();
  
  
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));
  
      setCoin(data);
    };
  
    useEffect(() => {
      fetchCoin();
    }, []);
    const useStyles = makeStyles((theme) => ({
      container: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      },
      topbar: {
        width: "100%%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        borderBottom: "2px solid Black",
      },
      heading: {
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Montserrat",
      },
      description: {
        width: "100%",
        fontFamily: "Montserrat",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "center",
      },
    }));
    const cleanHtmlString = DOMPurify.sanitize(coin?.description.en.split(". ")[0],
      { USE_PROFILES: { html: false } });
    const html = parse(cleanHtmlString);
    const classes = useStyles();
    if (!coin) return <LinearProgress style={{ backgroundColor: "black" }} />;
    console.log(coin)
    return (
        <div className={classes.container}>
          <Container>
            <div className={classes.topbar}>
                  <img
                  src={coin?.image.large}
                  alt={coin?.name}
                  height="200"
                  style={{marginBottom:20}}
                  />
                  <Typography variant="h2" className={classes.heading}>
                    {coin?.name}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.description}>
                  {(html)}.
                  </Typography>
                  
                  <span>
                    
                    {(() => {
                        if (coin?.market_data.price_change_percentage_24h_in_currency["usd"] > 0.0) {
                            return (
                              <Typography variant="h6" className={classes.description}>
                                {'Current Price: '}{"$"}
                                {numberWithCommas(
                                coin?.market_data.current_price["usd"]
                                )}
                                <span
                                style={{textTransform: "uppercase", fontFamily:"Montserrat", color:"#50C878",
                                
                                }}>
                               {"  +"}{coin?.market_data.price_change_percentage_24h_in_currency["usd"].toFixed(2)}%
                                </span>
                                </Typography>
                                
                            )
                            } else{
                            return (
                              <Typography variant="h6" className={classes.description}>
                              {'Current Price: '}{"$"}
                              {numberWithCommas(
                              coin?.market_data.current_price["usd"]
                              )}
                              <span
                              style={{textTransform: "uppercase", fontFamily:"Montserrat", color:"#D22B2B"}}>
                             {"      "}{coin?.market_data.price_change_percentage_24h_in_currency["usd"].toFixed(2)}%
                              </span>
                              </Typography>
                            )
                            } 
                        })()}
                </span>
            </div>
            <CoinInfo coin={coin} />
            </Container>
            
           {/*Chart */}
           
        </div>
        
    )
    
}

export default Coin
