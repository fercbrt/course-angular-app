import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
