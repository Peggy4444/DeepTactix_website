import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html', // Ensure this points to the correct file
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deep-tactix';
}