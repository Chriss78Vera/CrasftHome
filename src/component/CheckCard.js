import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from  '../actions/StateProvider';
import { actionTypes }from '../actions/Reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "linear-gradient(180deg, rgba(255,182,182,1) 0%, rgba(171,255,220,1) 94%);",
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  CardActions :{
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardRating: {
      display: "flex",
  }

}));

export default function CheckCards({product : {id, name, productType,  price, rating, image, description}}) {
  const classes = useStyles();
  const [{basket}, dispatch ] = useStateValue();


  const removeitem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
              className = {classes.action}
                variant='h5'
                color = 'textSecondary'
            >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="En stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing className={classes.CardActions}>
          <div className={classes.cardRating}>
        {Array(rating)
            .fill()
            .map((_, i)=> (
            <p>&#11088;</p>
            ))}
        </div>
        <IconButton>

        <DeleteIcon fontSize= "large" onClick= {removeitem} />
        </IconButton>

        
      </CardActions>
    </Card>
  );
}
