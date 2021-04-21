interface Props {
  car: string;
}

const ListItem = (props: Props) => {
  console.log(props);
  return <li>{props.car}</li>;
};

export default ListItem;
