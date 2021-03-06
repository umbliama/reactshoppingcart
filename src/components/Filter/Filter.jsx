import React from "react";
import { Input, Menu } from "semantic-ui-react";
import "./Filter.scss";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <Menu className="menu--secondary" secondary>
    <Menu.Item
      active={filterBy === "all"}
      onClick={setFilter.bind(this, "all")}
    >
      Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === "price_high"}
      onClick={setFilter.bind(this, "price_high")}
    >
      Цена(дорогие)
    </Menu.Item>
    <Menu.Item
      active={filterBy === "price_low"}
      onClick={setFilter.bind(this, "price_low")}
    >
      Цена(дешевые)
    </Menu.Item>
    <Menu.Item
      active={filterBy === "author"}
      onClick={setFilter.bind(this, "author")}
    >
      Автор
    </Menu.Item>
    <Menu.Item>
      <Input
        icon="search"
        value={searchQuery}
        placeholder="Введите запрос..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Menu.Item>
  </Menu>
);
export default Filter;
