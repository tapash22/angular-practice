import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-build',
  imports: [CommonModule],
  templateUrl: './build.component.html',
  styleUrl: './build.component.css'
})
export class BuildComponent {
  // socialIcons: string[] = ['fa-facebook', 'fa-linkedin', 'fa-square-linkedin'];


  cardList:any[]=[
    {
      id:1,
      name:'Web development',
      icon:'fa-book-open',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis'
    },
    {
      id:2,
      name:'Responsive',
      icon:'fa-mobile',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis'
    },
    {
      id:3,
      name:'App development',
      icon:'fa-tv',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis'
    },
    {
      id:4,
      name:'Web development',
      icon:'fa-book-open',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis'
    },
    {
      id:5,
      name:'Responsive',
      icon:'fa-mobile',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis'
    },
    {
      id:6,
      name:'App development',
      icon:'fa-tv',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sed perspiciatis'
    },
  ]
}
