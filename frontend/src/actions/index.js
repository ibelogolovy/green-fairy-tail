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

const categoriesRequested = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_REQUESTED
  };
};

const categoriesLoaded = (category) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: category
  };
};

const categoriesError = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_ERROR,
    payload: error
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

const fetchCategories = (productService, dispatch) => () => {
  dispatch(categoriesRequested());
  productService.getCategories()
    .then((data) => dispatch(categoriesLoaded(data)))
    .catch((error) => dispatch(categoriesError(error)));
};

export {
  fetchProducts,
  fetchProduct,
  aboutCircleOpened,
  aboutCircleClosed,
  fetchCategories
};
