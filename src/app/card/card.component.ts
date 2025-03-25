import { Component, Input  } from '@angular/core';
import { DataType } from '../data-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() dataType : DataType =[]
}
