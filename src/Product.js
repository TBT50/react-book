import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

const Product = ({ title, id }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/id/${id}/400/400`}
        />
      </CardActionArea>
      <CardContent>{title}</CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          BUTTON2
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
