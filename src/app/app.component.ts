import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { currencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { upperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent,  FormsModule, currencyPipe, upperCasePipe, NgFor ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nameBtn = 'click me!';
  clickMessage = '';

  bindingMessage = '';

  products = [
    {name: 'product 1', price: 450000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {name: 'product 2', price: 550000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {name: 'product 3', price: 650000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'},
    {name: 'product 4', price: 750000, image: 'https://res.cloudinary.com/dlteq4ism/image/upload/v1744352069/XB2_whitebg_ctaeq0.png'}
  ];

  handleClickMe(): void{
    this.clickMessage = 'Button clicked!';
  }

  updateField(): void{
    console.log('hello world');
  }
}
