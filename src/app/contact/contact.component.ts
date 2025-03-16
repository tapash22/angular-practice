import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact_image = './images/contact.png';
  email='tapasp263@gmail.com'
  socialIcons: string[] = ['fa-facebook', 'fa-linkedin', 'fa-square-instagram'];

  formData:any={
    name:'',
    email:'',
    subject:'',
    message:'',
    phone:''
  }

}
