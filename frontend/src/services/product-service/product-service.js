export default class ProductService {
    productsData = [
      { id: 1,
        title: 'Дерево 1',
        category: 1,
        price: 32,
        coverImage:'',
      },
      { id: 2,
        title: 'Дерево 2',
        category: 1,
        price: 32,
        coverImage:''
      },
      { id: 3,
        title: 'Дерево 3',
        category: 1,
        price: 4.79,
        coverImage:''
      },
      { id: 4,
        title: 'Дерево 4',
        category: 2,
        price: 5.99,
        coverImage:''
      },
      { id: 5,
        title: 'Дерево 5',
        category: 1,
        price: 5.99,
        coverImage:''
      },
      { id: 6,
        title: 'Дерево 6',
        category: 1,
        price: 5.05,
        coverImage:''
      },
      { id: 7,
        title: 'Дерево 7',
        category: 1,
        price: 5.99,
        coverImage:''
      }
    ];
  
    productDataExt = [
      { id: 1,
        title: 'Дерево 1',
        price: 32,
        images:[
          { id: 1, url:'' }
        ],
        description: 'самое крутое дерево на свете'
      }
    ];

    categoryData = [
      {
        id: 1,
        name: "Хвойные"
      },
      {
        id: 2,
        name: "Лиственные"
      }
    ];
  
    getProducts() {
      return new Promise((resolve, reject) => {
          fetch('/api/products/', { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Basic '+btoa('database:welcome1'), 
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          }).then((response) => response.json()).then((responseData) => {
            resolve(responseData);
          });
      });
    }

    getCategories() {
        return new Promise((resolve, reject) => {
          fetch('/api/products/', { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Basic '+btoa('database:welcome1'), 
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          }).then((response) => response.json()).then((responseData) => {
            resolve(responseData);
          });
      });
    }
  
    getProduct(productId) {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
  
          let filtered = this.productDataExt.filter(({ id }) => id === productId);
  
          if (filtered.length > 0) {
            resolve(filtered[0]);
          } else {
            reject(new Error('Can not find book!'));
          }
        }, 700);
      });
    }

    getCategory() {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          // if (Math.random() > 0.75) {
          //   reject(new Error('Something bad happened!'));
          // } else resolve(this.data);
          resolve(this.categoryData)
        }, 500);
      });
    }
    setProduct(productId) {
        return new Promise((resolve, reject) => {
            resolve(true);
    });
    }
  }