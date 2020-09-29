import React from "react";
import { Menu, List, Popup, Button, Image } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button color="red" onClick={removeFromCart.bind(this, id)}>
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name="editorials">Магазин книг</Menu.Item>

    <Menu.Item name="reviews">Итого: {totalPrice}</Menu.Item>

    <Popup
      trigger={
        <Menu.Item name="help">
          Корзина (<b>{count}</b>)
        </Menu.Item>
      }
      content={
        items <= 0
          ? "Корзина пустая"
          : items.map((book, index) => <CartComponent key={index} {...book} />)
      }
      on="click"
      hideOnScroll
    />
  </Menu>
);

export default MenuComponent;
