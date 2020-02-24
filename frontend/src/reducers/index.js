import updateSelectedProduct from './product';
import updateProductList from './product-list';
import updateShowState from './show-state';
import updateCategoryList from './category-list';


const reducer = (state, action) => {
    return {
      selectedProduct: updateSelectedProduct(state,action),
      productList: updateProductList(state,action),
      showState: updateShowState(state, action),
      categoryList: updateCategoryList(state, action)
    }
};

export default reducer;
