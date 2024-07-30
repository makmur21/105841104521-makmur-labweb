// src/data/productdata.js

const productsOnSale = [
  { id: '1', name: 'Evening Dress', brand: 'Dorothy Perkins', oldPrice: 150, newPrice: 125, discount: '20%', image: require('../assets/gambardrap.png') },
  { id: '2', name: 'Sport Dress', brand: 'Sitty', oldPrice: 225, newPrice: 195, discount: '15%', image: require('../assets/poto2drap.png') },
  { id: '3', name: 'Evening Dress', brand: 'Dorothy Perkins', oldPrice: 145, newPrice: 115, discount: '25%', image: require('../assets/poto3drap.png') },
];

const newProducts = [
  { id: '4', name: 'New Arrival 1', brand: 'Brand A', image: require('../assets/poto4drap.png') },
  { id: '5', name: 'New Arrival 2', brand: 'Brand B', image: require('../assets/gambar2.png') },
  { id: '6', name: 'New Arrival 3', brand: 'Brand C', image: require('../assets/gambar3.png') },
];

export { productsOnSale, newProducts };