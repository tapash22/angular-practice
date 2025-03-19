import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './footer/footer.component';
import { trigger,style,animate, transition, group, query } from '@angular/animations';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ position: 'relative' }), // Prevents layout shifts
        group([
          query(':enter, :leave', [
            style({
              position: 'absolute',
              width: '100%',
              top: 0,
              left: 0,
            }),
          ], { optional: true }),

          query(':enter', [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ], { optional: true }),

          query(':leave', [
            animate('500ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
          ], { optional: true }),
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular-practice';
  faCoffee = faCoffee;
  isDarkMode = false;

  constructor() {
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark';
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animate'];
  }
  
}
