import React from 'react';
import './App.css';

function Product({ image, title, description }) {
    return (
        <article className="product">
            <img src={image} alt={title}></img>
            <h2 className="product-name">
                {title}
            </h2>
            <p className="product-description">
                {description}
            </p>
        </article>
    );
}

export default Product;
