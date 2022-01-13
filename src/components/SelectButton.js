import { makeStyles } from '@material-ui/core';
import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
    const useStyles = makeStyles({
      selectbutton: {
        display:"flex",
        borderStyle: "solid",
        borderWidth: "4px",
        borderImage: "linear-gradient(45deg, #74d680, #ff7878) 1",
        justifyContent:"Center",
        // padding: 10,
        marginBottom:20,
        // paddingLeft: 20,
        // paddingRight: 20,
        allignItems: "center",
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "Black" : "",
        color: selected ? "white" : "",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
          backgroundColor: "Black",
          color: "White",
        },
        width: "22%",
        margin: 5,
      },
    });
  
    const classes = useStyles();
  
    return (
      <span onClick={onClick} className={classes.selectbutton}>
        {children}
      </span>
    );
  };
  
  export default SelectButton;