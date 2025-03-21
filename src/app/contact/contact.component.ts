import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule,PageHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact_image = './images/contact.png';
  email='tapasp263@gmail.com'
  socialIcons: string[] = ['fa-facebook', 'fa-linkedin', 'fa-square-instagram'];

  title:string = 'contact'
  sub_title:string = 'contact with me'

  formData:any={
    name:'',
    email:'',
    subject:'',
    message:'',
    phone:''
  }

}
