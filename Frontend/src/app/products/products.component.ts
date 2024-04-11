import { Component, OnInit } from '@angular/core';
import productData from '../product.json';
import brandData from '../brands.json';

interface Brand {
  id: number;
  title: string;
  image: string;
}

interface Product {
  id: number;
  brand: string;
  name: string;
  image: string;
  sellingPrice: number;
  originalPrice: number;
  stock: boolean;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor() { }
  products: Product[] = productData;
  productIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

  brands: Brand[] = brandData;
  brandIds: number[] = [1, 2, 3, 4, 5];


  ngOnInit(): void {

  }

  getBrandById(id: number): Brand | undefined {
    return this.brands.find(brand => brand.id === id);
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
