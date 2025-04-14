import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { currencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { upperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
