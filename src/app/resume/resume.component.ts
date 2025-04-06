import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-resume',
  imports: [PageHeaderComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  downloadFile() {
    /** declear variable with details */
const fileUrl = './cv/cv.pdf'; 
    /** declear variable with details */
const fileName = 'cv.pdf';

    /** declear variable with details */
const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
