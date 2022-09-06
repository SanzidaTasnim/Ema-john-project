import React from 'react';
import {useParams} from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from './../../fakeData/products.json';

const ProductDetail = () => {
   const {id} = useParams();
   const product = fakeData.find(pd => pd.id === id);
   return (
      <div>
         <Product item = {product} showAddToCart={false}/>
      </div>
   );
};

export default ProductDetail;