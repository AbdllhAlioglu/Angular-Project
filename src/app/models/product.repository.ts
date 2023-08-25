import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 2,
      name: 'Iphone 12',
      imageUrl: '2.jpg',
      price: 30000,
      isActive: false,
      description: 'Iphone 12 çok iyi telefon',
    },
    {
      id: 3,
      name: 'Iphone 13',
      imageUrl: '3.jpg',
      price: 40000,
      isActive: true,
      description: 'Iphone 13  mükemmel telefon',
    },
    {
      id: 4,
      name: 'Iphone 14',
      imageUrl: '4.jpg',
      price: 50000,
      isActive: true,
      description: 'Iphone 14 en iyi  telefon',
    },
    {
      id: 5,
      name: 'Iphone 15',
      imageUrl: '5.jpg',
      price: 60000,
      isActive: true,
      description: 'Iphone 15 çok iyi telefon',
    },
    {
      id: 6,
      name: 'Iphone 16',
      imageUrl: '4.jpg',
      price: 70000,
      isActive: true,
      description: 'Iphone 16 çok iyi telefon',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductsById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
