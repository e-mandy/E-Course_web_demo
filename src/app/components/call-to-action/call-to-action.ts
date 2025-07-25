import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { planItem } from '../../interfaces/planItem';

@Component({
  selector: 'app-call-to-action',
  imports: [CommonModule],
  templateUrl: './call-to-action.html',
  styleUrl: './call-to-action.css'
})
export class CallToAction {
  @Input() Item!: planItem
  
  plans: planItem[] = 
  [    
    {
      type:'STARTER',
      text:'Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque.',
      price:'$190',
      textColor:'gray',
      color:'#FCD75F',
      btnBg:'transparent',
      btnColor:'black'
    },
    {
      type:'PRO',
      text:'Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque.',
      textColor:'gray',
      price:'$245',
      color:'#FCD75F',
      btnBg:'#131416',
      btnColor:'white'
    },
    {
      type:'TEAM',
      text:'Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque.',
      topColor:'white',
      textColor:'white',
      price:'$1240',
      color:'#131416',
      btnBg:'transparent',
      btnColor:'black'
    },
  ]
  options=[
    'Proin gravida nibh vel velit auctor',
    'Bibendum auctor nisi elit consequat',
    'Ipsum nec sagittis sem nibh elit',
    'Sollicitudin lorem quis id',
    'Duis sed odio sit amet',
    'Orci sit gravida vestibulum',
    'Pretium nibh lobortis egestas',
    'Dolor purus tincidunt'
  ]

}
