import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIntroComponent } from '../home-intro/home-intro.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HomeIntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  portfolio_image = './images/portfolio.png'

  socialIcons: string[] = ['fa-facebook', 'fa-linkedin', 'fa-square-instagram'];
  textArray: string[] = ['Developer', 'Designer', 'Freelancer', 'Creator'];
  currentIndex: number = 0;
  letterArray: { char: string, color: string }[] = [];
  isRemoving: boolean = false;
  wordColor: string = '';
  welcome_message = 'Welcome to my world'
  details_info = "  A professional front-end developer with a passion for building responsive, high-performance websites and applications. With expertise in HTML, CSS, JavaScript, and modern web technologies, I focus on creating seamless, user-friendly, and visually engaging digital experiences."

  colors: string[] = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFD700', '#FF1493', '#00FFFF'];

  ngOnInit(): void {
    this.initializeLetters();
    this.cycleText();
  }

  initializeLetters() {
    this.wordColor = this.getRandomColor(); // Assign a color to the whole word
    this.letterArray = this.textArray[this.currentIndex].split('').map(char => ({
      char,
      color: this.wordColor
    }));
  }

  cycleText() {
    setInterval(() => {
      this.removeLetters();
    }, 5000);
  }

  removeLetters() {
    this.isRemoving = true;
    /** declear variable with details */
let interval = setInterval(() => {
      if (this.letterArray.length > 0) {
        this.letterArray.pop();
      } else {
        clearInterval(interval);
        this.isRemoving = false;
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
        this.addLetters();
      }
    }, 100);
  }

  addLetters() {
    /** declear variable with details */
let newWord = this.textArray[this.currentIndex].split('');
    this.wordColor = this.getRandomColor(); // Assign a new color for the new word
    /** declear variable with details */
let i = 0;
    /** declear variable with details */
let interval = setInterval(() => {
      if (i < newWord.length) {
        this.letterArray.push({ char: newWord[i], color: this.wordColor });
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}
