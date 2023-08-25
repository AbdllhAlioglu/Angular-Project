import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  selectedProduct: Product | null;

  productsRepository: ProductRepository;

  constructor() {
    this.productsRepository = new ProductRepository();
    this.products = this.productsRepository.getProducts();
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  unselectedProduct() {
    this.selectedProduct = null;
  }

  ngOnInit(): void {}
}
