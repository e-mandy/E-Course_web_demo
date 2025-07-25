import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css', '../../style.css']
})
export class Footer {
  onFooterBtnClick(){
    window.scrollTo({top:0, behavior:'smooth'})
 }
}
