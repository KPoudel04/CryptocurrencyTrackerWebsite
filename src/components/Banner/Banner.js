import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Carousel from './Carousel'
const responsive = {
    0:{
        textSize: "h1"
    },
    512: {
        textSize: "h1"
    }
}
const useStyles = makeStyles(() => ({
      bannerContent: {
        allignItems:"center",
        height: 200,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
        height: '100%',
        maxWidth: '100%',
        paddingLeft:"0",
        paddingRight:"0",
        background:"White"
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: '100%'
      },
      carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
        maxWidth: '120%'
      },
}))

const Banner = () => {
    const classes = useStyles()
    return (
        
        <>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <h1
            
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              fontSize:"4.0vw",
              color:"Black"
            }}
          >
           Coins Trending Worldwide
          </h1>
          
        </div>
        
        
      </Container>
      <Carousel />
      </>
    )
}

export default Banner
