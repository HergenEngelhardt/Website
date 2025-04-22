import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
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
  errorMessage: string | null = null;

  post = {
    endPoint: 'https://engelhardt-hergen.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as 'json', 
    },
  };

  onSubmit(ngForm: NgForm): void {
    this.messageSent = false;
    this.errorMessage = null;

    if (!ngForm.submitted || !ngForm.form.valid) {
      this.markAllAsTouched(ngForm);
      return; 
    }

    if (this.mailTest) {
      this.handleMailTest(ngForm);
    } else {
      this.sendActualMail(ngForm);
    }
  }

  private sendActualMail(ngForm: NgForm): void {
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: (response) => this.handleSuccess(response, ngForm),
        error: (error) => this.handleError(error),
        complete: () => console.info('send post complete'),
      });
  }

  private handleMailTest(ngForm: NgForm): void {
    console.log('Mail Test: Form valid and submitted', this.contactData);
    ngForm.resetForm();
    this.showSuccessMessageTemporarily();
  }

  private handleSuccess(response: any, ngForm: NgForm): void {
    console.log('Server Response:', response);
    ngForm.resetForm();
    this.showSuccessMessageTemporarily();
  }

  private handleError(error: HttpErrorResponse): void {
    console.error('Error sending email:', error);
    this.errorMessage = 'Failed to send message. Please try again later.';
  }

  private showSuccessMessageTemporarily(): void {
    this.messageSent = true;
    setTimeout(() => {
      this.messageSent = false;
    }, 2000); 
  }

  private markAllAsTouched(ngForm: NgForm): void {
    Object.values(ngForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}