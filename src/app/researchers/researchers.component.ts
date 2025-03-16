import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-researchers',
  imports: [],
  templateUrl: './researchers.component.html',
  styleUrl: './researchers.component.css'
})
export class ResearchersComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
