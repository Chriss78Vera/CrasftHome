import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Importaciones importantes para el carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../images/Slide1.png';
import Slide2 from '../images/Slide2.PNG';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  spacing :{
    marginTop: "10px",
    maxWidth: "100%"
    
   
  },
  
}));

export default function Carousels() {
  const classes = useStyles();

  return (
   // Aquí comienza el carousel
    <div className={classes.root}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {Slide2}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Slide1}
              alt="Second slide"
            />

          </Carousel.Item>
        </Carousel> 
        <div className= {classes.spacing}>
        </div>
     </div>   
  );
}
