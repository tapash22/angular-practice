import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlan } from '../data-model';
import { SinglePricingComponent } from '../single-pricing/single-pricing.component';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, SinglePricingComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {

  pricingData:PricingPlan[] = [
    {
      name: 'Basic',
      price: '$19/month',
      features: [
        'Page with Elementor',
        'Design Customization',
        'Responsive Design',
        'Content Upload',
        'Design Customization',
        'Plugins/Extensions',
        'multipage Elementor',
        'Design Figma',
        'MAintaine Design',
        'Content Upload',
        'Design With XD',
        'Plugins/Extensions',
      ],
      dalivery:['3 Days Delivery','ultimate revision']
    },
    {
      name: 'Pro',
      price: '$49/month',
      features: [
        'Page with Elementor',
        'Design Customization',
        'Responsive Design',
        'Content Upload',
        'Design Customization',
        'Plugins/Extensions',
        'multipage Elementor',
        'Design Figma',
        'MAintaine Design',
        'Content Upload',
        'Design With XD',
        'Plugins/Extensions',
      ],
      dalivery:['3 Days Delivery','ultimate revision']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Page with Elementor',
        'Design Customization',
        'Responsive Design',
        'Content Upload',
        'Design Customization',
        'Plugins/Extensions',
        'multipage Elementor',
        'Design Figma',
        'MAintaine Design',
        'Content Upload',
        'Design With XD',
        'Plugins/Extensions',
      ],
      dalivery:['3 Days Delivery','ultimate revision']
    },
  ];
  title: string ='pricing'
  sub_title: string = 'My pricing'

  activeTab = 1;
}
