export default class ProductService {
    productsData = [
      { id: 1,
        title: 'Дерево 1',
        price: 32,
        coverImage:'',
      },
      { id: 2,
        title: 'Дерево 2',
        price: 32,
        coverImage:''
      },
      { id: 3,
        title: 'Дерево 3',
        price: 4.79,
        coverImage:''
      },
      { id: 4,
        title: 'Дерево 4',
        price: 5.99,
        coverImage:''
      },
      { id: 5,
        title: 'Дерево 5',
        price: 5.99,
        coverImage:''
      },
      { id: 6,
        title: 'Дерево 6',
        price: 5.05,
        coverImage:''
      },
      { id: 7,
        title: 'Дерево 7',
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
    ]
  
    getProducts() {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          // if (Math.random() > 0.75) {
          //   reject(new Error('Something bad happened!'));
          // } else resolve(this.data);
          resolve(this.productsData)
        }, 700);
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

    setProduct(productId) {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
  }