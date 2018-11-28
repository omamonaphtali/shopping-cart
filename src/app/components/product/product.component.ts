import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: ProductModel[];

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.prodService.getproducts();
  }

}
