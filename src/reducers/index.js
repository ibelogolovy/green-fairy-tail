import updateSelectedProduct from './product';
import updateProductList from './product-list';


const reducer = (state, action) => {
    return {
      selectedProduct: updateSelectedProduct(state,action),
      productList: updateProductList(state,action)
    }
};

export default reducer;
