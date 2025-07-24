import { Component } from '@angular/core';

@Component({
  selector: 'app-content-body1',
  imports: [],
  templateUrl: './content-body1.html',
  styleUrl: './content-body1.css'
})
export class ContentBody1 {
  featuredLogos = [
    'assets/images/ecourse-template-featured-in-logos-3.svg',
    'assets/images/ecourse-template-featured-in-logos-2.svg',
    'assets/images/ecourse-template-featured-in-logos-1.svg',
    // (Les fichiers 4, 5, 6 n'existent pas localement, donc non inclus)
  ];

  experiences = [
    {
      img: 'assets/images/about/body/content-body1/experience1.png',
      period: '2012 - 2014',
      title: 'Junior front-end developer at Circlesquare',
    },
    {
      img: 'assets/images/about/body/content-body1/experience2.png',
      period: '2015 - 2018',
      title: 'Full-stack developer at Moove',
    },
    {
      img: 'assets/images/about/body/content-body1/experience3.png',
      period: '2019 - Now',
      title: 'Senior Javascript Engineer at QC Media',
    },
  ];
}
