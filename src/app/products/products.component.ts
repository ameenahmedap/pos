import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  addItemForm;show:boolean=false;

  constructor() { }

  datas = [{name:'name',price:'5',quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},
  {name:'name'},{price:'5'},{quantity:'10'}];

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'alias': new FormControl('', [Validators.required]),
      'color': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),
      'images': new FormControl('', [Validators.required])
    });
  }
  toggle(){this.show=true;}

}
