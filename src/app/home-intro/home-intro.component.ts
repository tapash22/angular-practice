import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-home-intro',
  imports: [CommonModule,SocialMediaComponent],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.css'
})
export class HomeIntroComponent implements OnInit {

  @Input() welcome_message: string = ''
  @Input() details_info: string = ''
  @Input() colors: string[]=[]
  @Input() socialIcons: string[] =[]
  @Input() textArray:string[]=[]

  letterArray: { char: string, color: string }[] = [];
  isRemoving: boolean = false;
  currentIndex: number = 0;
  wordColor: string = '';
  social_media_title='find with me'
  personal_link_title='best skill on'

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
