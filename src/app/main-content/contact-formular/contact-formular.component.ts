import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule 
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

  mailTest = true; 

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php', 
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(response); 
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
       console.log('Mail Test: Form valid and submitted', this.contactData); 
      ngForm.resetForm();
    } else {
       Object.values(ngForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}