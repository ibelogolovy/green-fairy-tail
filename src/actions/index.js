import actionTypes from '../constants/actionTypes';

// action creators
const productsLoaded = (newProducts) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: newProducts
  };
};

const productLoaded = (product) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: product
  };
};

const productRequested = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_REQUESTED
  };
};

const productError = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_ERROR,
    payload: error
  };
};

const productError = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCT_ERROR,
    payload: error
  };
};


const fetchProducts = (productService) => () => (dispatch) => {
  dispatch(booksRequested());
  productService.getProducts()
    .then((data) => dispatch(productsLoaded(data)))
    .catch((error) => dispatch(productsError(error)));
};

const fetchProduct = (productService) => (id) => (dispatch) => {
  dispatch(productRequested());
  productService.getProduct(id)
    .then((data) => dispatch(productLoaded(data)))
    .catch((error) => dispatch(productError(error)));
};

export {
  fetchProducts,
  fetchProduct
};
