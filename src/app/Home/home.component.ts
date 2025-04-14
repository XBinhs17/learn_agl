import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from "../shared/product-item/productItem.component";
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../../services/BlogService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    ProductItemComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  nameBtn = 'click me!';
  clickMessage = '';

  bindingMessage = '';

  isActive = false;
  isVisible = false;

  getBlogApi: Subscription;


  products: ProductItems[] = [
    {id: 1, name: 'product 1', price: 450000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {id: 2, name: 'product 2', price: 550000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {id: 3, name: 'product 3', price: 650000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {id: 4, name: 'product 4', price: 750000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'}
  ];

  handleDelete = (id: number)=>{
    const productIndex = this.products.findIndex(item => item.id == id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }

  constructor(private blogService: BlogService){
    console.log('Initalize component');
    this.getBlogApi = new Subscription();
  }

  ngOnInit(): void {
    this.getBlogApi = this.blogService.getBlogs().subscribe(({data}) => {
      this.products = data.map((item:any) => {
        return{
          ...item,
          name: item.title,
          price: item.body,
          image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png',

        }
      });
    });
  }

  ngOnDestroy(): void {
      if(this.getBlogApi){
        this.getBlogApi.unsubscribe();
        console.log('getBlogApi unsub');
      }
  }

  handleClickMe(): void{
    this.clickMessage = 'Button clicked!';
  }

  updateField(): void{
    console.log('hello world');
  }
}
