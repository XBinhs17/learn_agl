import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent,  FormsModule ],
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
