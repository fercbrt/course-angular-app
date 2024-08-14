import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  product: Product = {
    id: 0,
    name: 'Keyboard',
    price: 800,
    description: 'It\'s a keyboard'
  };

  onSubmit(): void {
    console.log(this.product);
  }
}
