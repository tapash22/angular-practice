import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './navigation-list.component.html',
  styleUrl: './navigation-list.component.css'
})
export class NavigationListComponent {

  @Input() navigationLinks : {path: string, label:string}[]= []
}
