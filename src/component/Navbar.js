import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../images/logo.png";
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from  '../actions/StateProvider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "6rem",
  },
  AppBar:{
    
    background: "linear-gradient(180deg, rgba(227,182,255,1) 0%, rgba(255,221,171,1) 94%);",
    boxShadow: "none"
  },
  grow: {
    flexGrow: 1,
  },
  button: {

    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "3rem",
  },
  text: {
    fontFamily: "sans-serif",
   
    
},
  
}));

export default function Bar() {
  const classes = useStyles();
  const [{basket}, dispatch ] = useStateValue();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Link to="/"> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image}/>
          </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" className={classes.text}>
            Usuario
          </Typography>
          <div className= {classes.button}>
          <Link to="/InicioSession"> 
                <Button variant ="outlined" className={classes.text}>
                    <strong >Inicia Session</strong>
                </Button>
                </Link>
                <Link to = "checkout-pages">
                <IconButton aria-label= "Carrito de compras" color="inherit">
                    <Badge badgeContent= {basket?.length} color="secondary">
                    <ShoppingCart fontSize="large" color= "primary"/>
                    </Badge>
                </IconButton>
                </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
