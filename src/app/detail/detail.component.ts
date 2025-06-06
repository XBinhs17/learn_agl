import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

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
