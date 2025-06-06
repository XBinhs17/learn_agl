import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { currencyPipe } from "../pipes/CurrencyPipe.pipe";
import { upperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { NgFor, NgIf } from "@angular/common";
import { ProductItems } from "../types/productItem";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    FormsModule,
    currencyPipe,
    upperCasePipe,
    NgFor,
    RouterLink
  ],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.scss'
})

export class ProductItemComponent{
  @Input() products: ProductItems[] = [];

  @Output() dataEvent = new EventEmitter<number>();

  get totalprice(): string{
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);
    return `total Price ${sum}`;
  }

  handleDelete = (id: number) =>{
    this.dataEvent.emit(id);
  }
}
