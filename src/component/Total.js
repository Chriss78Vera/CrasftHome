import React from "react";
import accounting from "accounting";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";




 const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",  
    },
    text: {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        
    },
 }))


const Totals = () => {
    const classes = useStyles ()
    return(
     <div className={classes.root}>
        <h3 className={classes.text}>Total items: 5</h3>
        <h3 className={classes.text}>{accounting.formatMoney(5)}</h3>
        <Button className={classes.text} variant="outlined" color="secondary">Check out</Button>
    </div>
    )
}

export default Totals