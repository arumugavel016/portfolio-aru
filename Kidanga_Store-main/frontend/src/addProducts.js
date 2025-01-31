const { store } = require('./redux/index');
const { setDataProduct } = require('./redux/productSlice');

// Define new products including vegetables
const newProducts = [
  {
    _id: '1',
    name: 'Fresh Mango',
    price: 2.5,
    description: 'Juicy and ripe mangoes.',
    image: 'https://example.com/path/to/mango-image.jpg',
  },
  {
    _id: '2',
    name: 'Organic Basmati Rice',
    price: 1.5,
    description: 'High-quality basmati rice.',
    image: 'https://example.com/path/to/rice-image.jpg',
  },
  {
    _id: '3',
    name: 'Chocolate Cake',
    price: 15.0,
    description: 'Delicious chocolate cake.',
    image: 'https://example.com/path/to/cake-image.jpg',
  },
  {
    _id: '4',
    name: 'Amaranthus',
    price: 1.0,
    description: 'Fresh amaranthus leaves.',
    image: 'https://example.com/path/to/amaranthus-image.jpg',
  },
  {
    _id: '5',
    name: 'Beetroot',
    price: 0.75,
    description: 'Organic beetroot.',
    image: 'https://example.com/path/to/beetroot-image.jpg',
  },
  {
    _id: '6',
    name: 'Cabbage',
    price: 1.5,
    description: 'Fresh green cabbage.',
    image: 'https://example.com/path/to/cabbage-image.jpg',
  },
];

// Dispatch action to set new products
store.dispatch(setDataProduct(newProducts));
console.log("Products dispatched:", newProducts); // Log the dispatched products
