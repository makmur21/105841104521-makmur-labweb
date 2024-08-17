import { StyleSheet } from 'react-native';

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

const summerSales = [
  { id: '7', name: 'Summer Dress', brand: 'Brand A', oldPrice: 500000, newPrice: 350000, discount: '30%', image: require('../assets/faforit1.png') },
  { id: '8', name: 'Beachwear', brand: 'Brand B', oldPrice: 300000, newPrice: 200000, discount: '33%', image: require('../assets/faforit2.png') },
  { id: '9', name: 'Sunglasses', brand: 'Brand C', oldPrice: 100000, newPrice: 75000, discount: '25%', image: require('../assets//faforit3.png') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  productCard: {
    marginHorizontal: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  productBrand: {
    fontSize: 14,
    color: '#888',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productOldPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  productNewPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  productDiscount: {
    fontSize: 12,
    color: '#d32f2f',
  },
});

export { productsOnSale, newProducts, summerSales, styles };
