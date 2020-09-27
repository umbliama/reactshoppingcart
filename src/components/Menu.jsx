import React from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = () => (
  <Menu>
    <Menu.Item name="editorials">Магазин книг</Menu.Item>

    <Menu.Item name="reviews">Итого</Menu.Item>

    <Menu.Item name="upcomingEvents">
      Корзина(<b>0</b>)
    </Menu.Item>
  </Menu>
);

export default MenuComponent;
