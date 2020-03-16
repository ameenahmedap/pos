import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  datas = [{name:'name'},{price:'5'},{quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},
  {name:'name'},{price:'5'},{quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},
  {name:'name'},{price:'5'},{quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},{name:'name'},{price:'5'},{quantity:'10'},
  {name:'name'},{price:'5'},{quantity:'10'}];

  ngOnInit(): void {
  }

}
