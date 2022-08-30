import React , {useState} from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData/products.json';
import './Shop.css';

const Shop = () => {
   const tenFakeData = fakeData.slice(0, 10);
   const [items, setItems] = useState(tenFakeData);
   const [cart , setCart] = useState([]);

   const handleClick = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
   }
   return (
      <div className='shop'>
         <div className="shop-product">
            {
               items.map(item => <Product item={item} key={item.id} handleClick= {handleClick} />)
            }
         </div>
         <div className="shop-cart">
            <Cart cart = {cart} />
         </div>
      </div>
   );
};

export default Shop;