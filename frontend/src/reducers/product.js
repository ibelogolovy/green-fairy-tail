import actionTypes from '../constants/actionTypes';

const updateSelectedProduct = (state, action) => {

  if (state === undefined){
    return {
      product: {},
      loading: true,
      error: null
    };
  };

  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_REQUESTED:
      return {
        ...state.selectedProduct,
        loading:true,
        error: null
      };

    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        product: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_PRODUCT_ERROR:
      return {
        product: {},
        loading:false,
        error: action.payload
      };
    default:
      return state.selectedProduct;
  }
};

export default updateSelectedProduct;
