import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.

@Component({
  selector: 'app-about-us',
  standalone: true, // Mark the component as standalone
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule and CommonModule
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  contactForm: FormGroup; // Declare the form group

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      request: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize EmailJS with your Public Key
    emailjs.init('KxgDhNqq0bOrlxFrX'); // Replace with your Public Key
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      from_phone: this.contactForm.value.phone,
      message: this.contactForm.value.request
    };

    // Send email using EmailJS
    emailjs.send('service_wxggzyf', 'template_bjbgxkx', templateParams)
      .then((response) => {
        alert('Message sent successfully!');
        this.contactForm.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      });
  }
}