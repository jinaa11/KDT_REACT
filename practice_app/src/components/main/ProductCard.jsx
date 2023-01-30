import React from 'react';

function ProductCard({product}) {
   return ( 
      <div className='productCard'>
         <img src={product.thumbnail} alt={product.description} />
         <p>{product.title}</p>
      </div>
    );
}

export default ProductCard;