import { Component, Input } from "@angular/core";
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
    RouterOutlet,
    FormsModule,
    currencyPipe,
    upperCasePipe,
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.scss'
})

export class ProductItemComponent{
  @Input() products: ProductItems[] = [];
}
