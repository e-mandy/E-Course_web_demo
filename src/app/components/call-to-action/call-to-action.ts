import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  imports: [CommonModule],
  templateUrl: './call-to-action.html',
  styleUrl: './call-to-action.css'
})
export class CallToAction {
  plans=[
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

  reviews=[
    {
      text:'“Eget blandit faucibus amet feugiat ante semper mattis quam ornare senectus scelerisque consequat placerat quis a in etiam risus diam viverra mattis tellus.”',
      name:'LISA HALLWAY',
      add:'VP of Products',
      image:'ecourse-template-reviewer-avatar-img-3.jpg',
    },
    {
      text:'“Proin hac integer pellentesque diam ac nibh potenti euismod turpis fermentum diam tortor, odio eleifend orci.”',
      name:'Luis Alberto',
      add:'App developer',
      image:'ecourse-template-reviewer-avatar-img-2.jpg',
    },
    {
      text:'“Fringilla neque tristique feugiat nibh mauris, eget tincidunt senectus ut feugiat nec!”',
      name:'James Carter',
      add:'Front-end developer',
      image:'ecourse-template-reviewer-avatar-img-1.jpg',
    }
  ]
}
