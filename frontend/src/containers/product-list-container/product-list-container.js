import React, { useEffect, Fragment } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import ProductList from '../../components/product-list';

import { useDispatch, useSelector } from "react-redux";
import { withProductService } from '../../components/hoc';

import './product-list-container.css'
import { fetchProducts } from '../../actions';;


const ProductListContainer = ({ productService }) => {
    const products = useSelector(state => state.productList.products);
    const loading = useSelector(state => state.productList.loading);
    const error = useSelector(state => state.productList.error);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchProducts(productService, dispatch)();
    }, [productService, dispatch]);

    if (error) {
        return <ErrorIndicator />;
    }
    
    return (
        <Fragment>
            {
                loading ? <div className = "spinner-back"><div className = "spinner-back-main"><Spinner/></div></div> : null
            }
            <ProductList products = {products} backLoading = {loading} />
        </Fragment>
    );

}

export default withProductService()(ProductListContainer);
