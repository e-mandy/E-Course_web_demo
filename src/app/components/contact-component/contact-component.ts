import { Component, Input } from '@angular/core';
import { Adress } from '../../interfaces/adress';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css'
})
export class ContactComponent {
  adresses: Adress[] = [
    {
       type: "Adress",
       icon: "fas fa-phone text-xs",
       description: "123 Demo Avenue, New York, NY 10160, United States"
    },
    {
       type: "Email",
       icon: "fas fa-envelope text-xs",
       description: "mail@example.com"
    },
    {
       type: "Adress",
       icon: "fas fa-phone text-xs",
       description: "+1 123-456-7890"
    }
  ]
}
