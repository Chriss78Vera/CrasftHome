import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from '../Datas/product_data';
import Carousels from './Carousel';
import Typography from '@material-ui/core/Typography';
import banner from '../images/banner.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
  spacing :{
    marginBottom: 10,
  },
  images: {
    
    maxWidth: "1000px",
    width:"100%",
    borderRadius: "50px",
   
  }
  
}));

export default function PGrid() {
  const classes = useStyles();

  return (
   // Aquí comienza el carousel
    <div className={classes.root}>
        <Carousels/>
        <div className= {classes.spacing}>
           <Typography component="div" align="center" >
              <img src={banner} className={classes.images}/>
            </Typography>
        </div>
        <Grid container spacing={3} >
          {
              products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} >
                 <Product key={product.id} product={product} />  
                 </Grid>
              ))
          }
        </Grid>
      
    </div>
  );
}
