import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(private Http : HttpClient) {}

  items = [];

  addToCart(product){
    this.items.push(product)
  }

  getItems(){
    return this.items;
  }

  clearItems(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.Http.get('/asset/shipping.json')
  }

}