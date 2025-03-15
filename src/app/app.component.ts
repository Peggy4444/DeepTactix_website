import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeepTactix';

  constructor(private router: Router) {} // Inject Router

  navigateToAboutUs() {
    this.router.navigate(['/about-us']); // Programmatic navigation
  }
}