import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nameBtn = 'click me!';
  clickMessage = '';

  handleClickMe(): void{
    this.clickMessage = 'Button clicked!';
  }

  updateField(): void{
    console.log('hello world');
  }
}
