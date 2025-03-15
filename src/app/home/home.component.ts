import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
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
    let newWord = this.textArray[this.currentIndex].split('');
    this.wordColor = this.getRandomColor(); // Assign a new color for the new word
    let i = 0;
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
