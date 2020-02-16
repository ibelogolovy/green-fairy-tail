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
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload: product
  };
};

const productRequested = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_REQUESTED
  };
};

const productsRequested = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_REQUESTED
  };
};

const productError = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCT_ERROR,
    payload: error
  };
};

const productsError = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_ERROR,
    payload: error
  };
};

const aboutCircleOpened = () => {
  return {
    type: actionTypes.OPEN_ABOUTCIRCLE
  };
};

const aboutCircleClosed= () => {
  return {
    type: actionTypes.CLOSE_ABOUTCIRCLE
  };
};

const fetchProducts = (productService, dispatch) => () => {
  dispatch(productsRequested());
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
  fetchProduct,
  aboutCircleOpened,
  aboutCircleClosed
};
