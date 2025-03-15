import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  man = './images/menu.png';

  navigationLinks = [
    { path: 'home', label: 'Home' },
    { path: 'build', label: 'Build' },
    { path: 'working', label: 'Works' },
    { path: 'portfolio', label: 'Portfolio' },
    { path: 'resume', label: 'Resume' },
    { path: 'pricing', label: 'Pricing' },
    { path: 'contact', label: 'Contact' }
  ];
  constructor(private router: Router) {}

}
