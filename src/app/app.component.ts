import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { ProductComponent } from './products/components/product/product.component';
import { FormComponent } from './products/components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello world!';
  enabled: boolean = false;

  courses = ['Angular', 'Spring Boot', 'MySQL'];

  changeEnabled(): void{
    this.enabled = !this.enabled;
  }
}
