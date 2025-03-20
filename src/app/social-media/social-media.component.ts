import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media',
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {

  @Input() social_media_title: string = ''
  @Input() personal_link_title: string = ''
  @Input() socialIcons: string[] =[]
}
