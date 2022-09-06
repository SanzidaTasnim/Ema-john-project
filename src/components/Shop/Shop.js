import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import fakeData from "./../../fakeData/products.json";
import "./Shop.css";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { Link } from 'react-router-dom';

const Shop = () => {
  const tenFakeData = fakeData.slice(0, 10);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(tenFakeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cardProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.id === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cardProducts);
  }, []);

  const handleClick = (product) => {
    const toBeAddedId = product.id;
    const sameProduct = cart.find((pd) => pd.id === toBeAddedId); //same id product or same product
    let count = 1;
    let newCart;

    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.id !== toBeAddedId);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDatabaseCart(product.id, count);
  };
  return (
    <div className="shop">
      <div className="shop-product">
        {items.map((item) => (
          <Product
            item={item}
            key={item.id}
            handleClick={handleClick}
            showAddToCart={true}
          />
        ))}
      </div>
      <div className="shop-cart">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="reviewCart">Review Your Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
