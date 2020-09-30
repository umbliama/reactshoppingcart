import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import "./BookCard.scss";

const BookCard = (book) => {
  const { title, author, price, image, addToCart, addedCount } = book;

  return (
    <Card className="book__card">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="/#">
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>
        Добавить в корзину{addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};
export default BookCard;
