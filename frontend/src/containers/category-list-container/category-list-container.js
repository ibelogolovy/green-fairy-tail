import React, { useEffect } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import ProductFilter from '../../components/product-filter';

import { useDispatch, useSelector } from "react-redux";

import { withProductService } from '../../components/hoc';

import { fetchCategories } from '../../actions';;

const CategoryListContainer = ({ productService }) => {
   

    const categories = useSelector(state => state.categoryList.categories);
    const loading = useSelector(state => state.categoryList.loading);
    const error = useSelector(state => state.categoryList.error);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchCategories(productService, dispatch)();
    }, [productService, dispatch]);

    if (error) {
        return <ErrorIndicator />;
    }

    if (loading) {
        return (<div className = "spinner-back"><div className = "spinner-back-main"><Spinner/></div></div>);
    }

    return (
        <ProductFilter categories={categories}/>
    )
}

export default withProductService()(CategoryListContainer);

