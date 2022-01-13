import { AppBar, Container, makeStyles, Typography, Box, IconButt, Toolbar } from '@material-ui/core'
import React from 'react'
import { Router,Route, Routes, Link, useHistory} from 'react-router-dom';



export default function Header (){
    const Styles = makeStyles(() => ({
        Text:{
            flex: 1,
            color: "White",

            fontFamily: "Montserrat",
            fontWeight: "bold",
            cursor: "pointer",
            textAlign: "center"
        },
        Bar:{
            margin:-1,
            boxShadow: 'none',
            backgroundColor: 'Black',
            paddingBottom:'20px'
        },
        Bar2:{
            maxHeight:"22px",
            margin:0,
            boxShadow: 'none',
            backgroundColor: 'Black'
        },
        Text2:{
            fontSize:"15px",
            // color: "#87CEEB",
            color: "#FFFFF",
            fontFamily: "Montserrat",
            cursor: "pointer",
            marginTop:"-28px",
            textAlign: "center"
        },
      }));
      const classes = Styles()
     const history = useHistory();
   return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static" className={classes.Bar2}>
                <Toolbar variant="dense">
                <Typography  color="inherit" className={classes.Text2}>
                    Developed by Kiran Poudel
                 </Typography>
                </Toolbar>
      </AppBar>
            <AppBar position = 'static' className={classes.Bar}> 
                <Container >
                <Typography
                    onClick={() => history.push(`/`)}
                    variant="h4"
                    className={classes.Text}
            >
              Cryptocurrency Price Tracker
            </Typography>
                </Container>
            </AppBar>


        </Box>
        
    )
}

