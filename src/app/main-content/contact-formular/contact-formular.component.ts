import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    RouterLink 
  ],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss'
})
export class ContactFormularComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicyAccepted: false
  };

  mailTest = false; 
  messageSent = false;
  post = {
    endPoint: 'www.engelhardt-hergen.de', 
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.messageSent = false; 
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(response); 
            ngForm.resetForm();
            this.messageSent = true;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
       console.log('Mail Test: Form valid and submitted', this.contactData); 
      ngForm.resetForm();
      this.messageSent = true;
    } else {
       Object.values(ngForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}