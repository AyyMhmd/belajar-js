const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
  ];
  
  function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
  }
  
  function findProductById(products, id) {
    return products.find(product => product.id === id);
  }
  
  function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  function applyDiscount(products, discount) {
    return products.map(product => ({
      ...product,
      price: product.price - (product.price * discount) / 100,

      discountPercentage: `${discount}%` // Menyimpan diskon dalam bentuk persentase
    }));
  }
  
  // Testing the functions
  console.log("Products in Electronics category:", getProductsByCategory(sampleProducts, 'Electronics')); 
  console.log("Total price of all products:", calculateTotalPrice(sampleProducts));
  console.log("Products with 10% discount:", applyDiscount(sampleProducts, 10));
  console.log("Find product with ID 3:", findProductById(sampleProducts, 3));
  