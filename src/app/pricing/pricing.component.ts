import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  pricingData = [
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
    },
  ];

  activeTab = 1;
}
