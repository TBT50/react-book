import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

const ProductCard = ({ title, id }) => {
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
    </Card>
  );
};

export default ProductCard;
