import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import {icons, createIcons} from 'lucide';
@Component({
  selector: 'app-highlights',
  imports: [CommonModule],
  templateUrl: './highlights.html',
  styleUrls:['./highlights.css', '../../style.css']
})


export class Highlights {
   highlights=[
    {
      icon:'calendar',
      title:'Website Development',
      text:'Sed pellentesque eget quis amet amet, proin sed sagittis in ligula semper cursus amet, ullamcorper volutpat rutrum.'
    },
    {
      icon:'smatphone',
      title:'Apps Development',
      text:'Et volutpat at interdum eros et sit augue mattis ut sed elit varius nunc pharetra pellentesque urna cum nullam urna.'
    },
    {
      icon:'layers',
      title:'JAM-Stack',
      text:'Sed pellentesque eget quis amet amet, proin sed sagittis in ligula semper cursus amet, ullamcorper volutpat rutrum.'
    }
   ];
   
   ngAfterViewInit(){
    createIcons({icons});
   }

   onHighlightClick(){
      window.scrollTo({top:0, behavior:'smooth'})
   }
}
