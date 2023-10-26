import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(
    private readonly productService: ProductService
  ) { }


  async ngOnInit() {
     this.allProducts = await this.productService.getProducts().toPromise();
  }

  isSelectedStatus(product: Product): void{
    product.selected = !product.selected;
    try {
      this.productService.update(product).toPromise();
    }
    catch(err) {
      console.log(err)
    }
  }

  deleteProductWithId(productId: number) {
    console.log('zak')
    console.log(productId)
    try {
      this.productService.delete(productId).toPromise();
    }
    catch(err) {
      console.log(err)
    }
  }

}
