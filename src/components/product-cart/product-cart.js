import React from 'react';

import './product-cart.css';

import exampleTree from '../../images/example_tree.png';

const ProductCart = () => {
    return (
            //    <div className="product">
            //        <div className="productCover">
            //            <img src = {exampleTree} alt="cover"/>
            //        </div>
            //       <div className="product-title">Дуб зеленый</div>
            //        <div className="price"></div>
            //    </div>

                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                            <img src = {exampleTree} alt="cover"/>
                                <h3>Древо</h3>
                            </div>
                            </div>
                            <div className="face face2">
                            <div className="content">
                                <p>Большое зеленое древо как в сказке Пушкина.</p>
                                <a href="#">Подробнее</a>
                            </div>
                        </div>
                    </div>
    );
};

export default ProductCart;


