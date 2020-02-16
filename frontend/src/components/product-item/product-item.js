import React from 'react';

import './product-item.css';

import exampleTree from '../../images/example_tree.jpg';

const ProductItem= ({ product }) => {
  
    let imgStyles = {
        backgroundSize: '100%',
        backgroundImage: `url(${exampleTree})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (

            <div key={ product.id } className="wrapper">
                <div className="container">
                    <div className="top" style={imgStyles}></div>
                    <div className="bottom">
                    <div className="details">
                        <h1>{ product.title }</h1>
                        Дерево крутое
                    </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="icon"><i className="material-icons">Подробнее</i></div>
                    <div className="contents">
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>Ширина</th>
                                <th>Высота</th>
                            </tr>
                            <tr>
                                <td>3000mm</td>
                                <td>4000mm</td>
                            </tr>
                            <tr>
                                <th>Что-то</th>
                                <th>Что-то</th>
                            </tr>
                            <tr>
                                <td>200mm</td>
                                <td>200mm</td>
                            </tr>
                            <tr>
                                <th>Что-то</th>
                                <th>Что-то</th>
                            </tr>
                            <tr>
                                <td>Что-то</td>
                                <td>Что-то</td>
                            </tr>
                            <tr>
                                <th>Что-то</th>
                                <th>Что-то</th>
                            </tr>
                            <tr>
                                <td>200mm</td>
                                <td>200mm</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
    );
};

export default ProductItem;


