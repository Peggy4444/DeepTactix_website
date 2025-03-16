import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-analysts',
  imports: [],
  templateUrl: './analysts.component.html',
  styleUrl: './analysts.component.css'
})
export class AnalystsComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
