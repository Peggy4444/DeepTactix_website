import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sporting-directors',
  imports: [],
  templateUrl: './sporting-directors.component.html',
  styleUrl: './sporting-directors.component.css'
})

export class SportingDirectorsComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
