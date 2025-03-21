import { Component, Input } from '@angular/core';
import { PricingPlan } from '../data-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-pricing',
  imports: [CommonModule],
  templateUrl: './single-pricing.component.html',
  styleUrl: './single-pricing.component.css'
})
export class SinglePricingComponent {
@Input() pricingData : PricingPlan[] =[]
}
