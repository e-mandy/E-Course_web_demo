import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css', '../../style.css']
})
export class Footer {
  onFooterBtnClick(){
    window.scrollTo({top:0, behavior:'smooth'})
 }
}
