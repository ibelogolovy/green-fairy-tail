import React, { Component, Fragment } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import ProductList from '../../components/product-list';

import { connect } from 'react-redux';
import { withProductService } from '../../components/hoc';
import { compose } from '../../utils';
// import { bindActionCreators } from 'redux';

import './product-list-container.css'
import { fetchProducts } from '../../actions';;

class ProductListContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products, error, loading } = this.props;

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
    };

}


const mapStateToProps = ({ productList: { products, loading, error }}) => {
    return{ products, loading, error };
};

  const mapDispatchToProps = (dispatch, { productService }) => {
    return {
        fetchProducts: fetchProducts(productService, dispatch)
    };
  };

export default compose(
    withProductService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(ProductListContainer);

