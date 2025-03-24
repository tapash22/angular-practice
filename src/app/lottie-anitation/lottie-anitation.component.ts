import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
// import { LottieModule } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-anitation',
  imports: [LottieComponent],
  templateUrl: './lottie-anitation.component.html',
  styleUrl: './lottie-anitation.component.css'
})
export class LottieAnitationComponent {

  lottieOptions = {
    // path: 'animation/animation.json', 
    path:'animation/preloader.json',
    loop: true,
    autoplay: true,
    background:'red'
  };
}
