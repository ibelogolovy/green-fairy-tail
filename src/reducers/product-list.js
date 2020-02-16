import actionTypes from '../constants/actionTypes';

const updateProductList = (state, action) => {

  if (state === undefined){
    return {
      products: [],
      loading: true,
      error: null
    };
  };

  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUESTED:
      return {
        ...state.productList,
        loading:true,
        error: null
      };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading:false,
        error:null
      };

    case actionTypes.FETCH_PRODUCTS_ERROR:
      return {
        products: [],
        loading:false,
        error: action.payload
      };
    default:
      return state.productList;
  }
};

export default updateProductList;
