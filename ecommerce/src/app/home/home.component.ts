import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  popularProducts: Product[] | undefined;
  trendyProducts : Product[] | undefined;

  activeIndex: number = 0;
  constructor(private product : ProductService){

  }
  nextSlide() {
    if (this.popularProducts && this.popularProducts.length > 0) {
      this.activeIndex = (this.activeIndex + 1) % this.popularProducts.length;
    }
  }

  prevSlide() {
    if (this.popularProducts && this.popularProducts.length > 0) {
      this.activeIndex = (this.activeIndex - 1 + this.popularProducts.length) % this.popularProducts.length;
    }
  }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data) => {
      // console.warn( data) 
      this.popularProducts = data
    });

    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data
    })
  }
}
