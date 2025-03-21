import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../data-model';
import { CardComponent } from '../card/card.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-working',
  imports: [CommonModule, CardComponent,PageHeaderComponent],
  templateUrl: './working.component.html',
  styleUrl: './working.component.css',
})
export class WorkingComponent {
  image1 = './images/vue.jpg';
  image2 = './images/react.jpg';
  image3 = './images/angular.jpg';
  title: string = 'have multipul project experience';
  sub_title: string = 'working with';

  projectList: Project[] = [
    {
      name: 'Vue.js',
      type: 'Frontend Framework',
      image: this.image1,
      description: 'working with this last 4 years',
    },
    {
      name: 'React.js',
      type: 'Frontend Framework',
      image: this.image2,
      description: 'working with this last 3 years',
    },
    {
      name: 'Angular',
      type: 'Frontend Framework',
      image: this.image3,
      description: 'working with this last 2 years',
    },
    {
      name: 'Svelte',
      type: 'Frontend Framework',
      image: this.image1,
      description: 'working with this last 1 years',
    },
    {
      name: 'Three.js',
      type: '3D Project',
      image: this.image2,
      description: 'working with this last 1 years',
    },
  ];
}
