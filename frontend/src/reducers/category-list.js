import actionTypes from '../constants/actionTypes';

const updateCategoryList = (state, action) => {

  if (state === undefined){
    return {
      categories: [],
      loading: true,
      error: null
    };
  };

  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_REQUESTED:
      return {
        ...state.categoryList,
        loading:true,
        error: null
      };

    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        categories: action.payload,
        loading:false,
        error:null
      };

    case actionTypes.FETCH_CATEGORIES_ERROR:
      return {
        categories: [],
        loading:false,
        error: action.payload
      };
    default:
      return state.categoryList;
  }
};

export default updateCategoryList;
