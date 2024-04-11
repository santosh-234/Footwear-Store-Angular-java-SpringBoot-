import { Component } from '@angular/core';
import categoryData from '../category.json';
import trendProductData from '../trendProduct.json';

interface Category {
  id: number;
  title: string;
  image: string;
}

interface TrendProduct {
  id: number;
  brand: string;
  name: string;
  image: string;
  sellingPrice: number;
  originalPrice: number;
  stock: boolean;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(){ }
  categories: Category[] = categoryData;
  categoryIds: number[] = [1,2, 3,4, 5,6,7];

  trendProducts: TrendProduct[] = trendProductData;
  trendProductIds: number[] = [1,2, 3,4, 5,6,7,8,9,10,11,12];



  ngOnInit(): void {
    
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find(category => category.id === id);
  }

  getTrendProductById(id:number) : TrendProduct | undefined{
    return this.trendProducts.find(trendProducts => trendProducts.id === id);
  }

}
