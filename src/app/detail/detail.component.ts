import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { upperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  id='';
  constructor(private route: ActivatedRoute){
    this.id = String(route.snapshot.paramMap.get('id'));
  }
}
