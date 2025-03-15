import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
image1 = './images/p.jpg'
image2 = './images/p1.jpg'
image3 = './images/p2.jpg'


demoList:any[]=[
  {
    id:1,
    name:'development',
    description:'this my website into this i added vue.js tailwind and animation also implement 3d',
    image:this.image1,
    count:65
  },
  {
    id:2,
    name:'development',
    description:'this my website into this i added vue.js tailwind and animation also implement 3d',
    image:this.image2,
    count:35
  },
  {
    id:3,
    name:'development',
    description:'this my website into this i added vue.js tailwind and animation also implement 3d',
    image:this.image3,
    count:55
  },
  {
    id:4,
    name:'development',
    description:'this my website into this i added vue.js tailwind and animation also implement 3d',
    image:this.image1,
    count:65
  },
  {
    id:5,
    name:'development',
    description:'this my website into this i added vue.js tailwind and animation also implement 3d',
    image:this.image2,
    count:35
  },
  {
    id:6,
    name:'development',
    description:'this my website into this i added vue.js tailwind and animation also implement 3d',
    image:this.image3,
    count:55
  }
]

}
