import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  selectedProduct: Product | undefined;
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name:  'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ];
  today = new Date();

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }
  onBuy() {
    window.alert('You just bought ${this.selectedProduct?.name}!');
  }


  trackByProducts(index: number, name: string): string {
    return name;
  }

}
