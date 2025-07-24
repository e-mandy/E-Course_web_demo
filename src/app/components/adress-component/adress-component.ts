import { Component, Input } from '@angular/core';
import { Adress } from '../../interfaces/adress';

@Component({
  selector: 'app-adress-component',
  imports: [],
  templateUrl: './adress-component.html',
  styleUrl: './adress-component.css'
})
export class AdressComponent {
  @Input() adress!: Adress
}
