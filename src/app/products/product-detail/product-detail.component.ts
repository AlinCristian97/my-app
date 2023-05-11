import { Component, Input, Output, OnInit, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, SimpleChanges  } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  @Input() product: Product | undefined;

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  buy() {
    this.bought.emit(this.name);
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

}
