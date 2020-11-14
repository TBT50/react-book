import { Card, Image } from "semantic-ui-react";

const ProductCard = ({ title, id }) => {
  return (
    <Card>
      <Image src={`https://picsum.photos/id/${id}/400/400`} wrapped alt="" />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
