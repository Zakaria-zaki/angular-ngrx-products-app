import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
bookForm: any;
submitProduct() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ProductForm = new FormGroup({
      productName: new FormControl(),
      productPrice: new FormControl(),
      productQuantity: new FormControl()
  });


  ngOnInit(): void {
  }

  getSelectedProducts() {
    throw new Error('Method not implemented.');
    }

  getAllProducts() {
  throw new Error('Method not implemented.');
  }

  addNewProduct() {
  throw new Error('Method not implemented.');
  }

  submitBook() {
    console.log(this.ProductForm.value)
  }

}
