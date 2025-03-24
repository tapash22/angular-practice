import { Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
} from '@angular/animations';
import { delay } from 'rxjs';
import { commonTransition } from './shared/animations';
import { LottieAnitationComponent } from './lottie-anitation/lottie-anitation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent,LottieAnitationComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimation', [
      transition(':increment', commonTransition()),
      transition(':decrement', commonTransition(true)),
    ])
  ]
})
export class AppComponent {
  title = 'angular-practice';
  faCoffee = faCoffee;
  isDarkMode = false;
  loading = true

  previousRoute: string = '';
  currentRoute: string = '';
  constructor(private router: Router) {
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark';
    this.updateTheme();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.previousRoute = this.currentRoute;
        this.currentRoute = event.url;
      }
    });
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

  // getRouterOutletState(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animate']
  // }

  getRouterOutletState(outlet: RouterOutlet): number | null {
    return outlet && outlet.activatedRouteData
      ? outlet.activatedRouteData['index']
      : null;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false; // Hide preloader after 3 seconds
    }, 3000);
  }
}
