import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scouts',
  imports: [],
  templateUrl: './scouts.component.html',
  styleUrl: './scouts.component.css'
})
export class ScoutsComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}