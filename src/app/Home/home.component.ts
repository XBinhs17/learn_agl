import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { upperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    FormsModule,
    currencyPipe,
    upperCasePipe,
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nameBtn = 'click me!';
  clickMessage = '';

  bindingMessage = '';

  isActive = false;
  isVisible = false;

  products = [
    {id: 1, name: 'product 1', price: 450000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {id: 2, name: 'product 2', price: 550000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {id: 3, name: 'product 3', price: 650000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {id: 4, name: 'product 4', price: 750000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'}
  ];

  handleClickMe(): void{
    this.clickMessage = 'Button clicked!';
  }

  updateField(): void{
    console.log('hello world');
  }
}
