import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { currencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { upperCasePipe } from './shared/pipes/UpperCasePipe.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent,  FormsModule, currencyPipe, upperCasePipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nameBtn = 'click me!';
  clickMessage = '';

  bindingMessage = '';

  handleClickMe(): void{
    this.clickMessage = 'Button clicked!';
  }

  updateField(): void{
    console.log('hello world');
  }
}
