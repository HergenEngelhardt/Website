import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    CommonModule,
    RouterModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(private viewportScroller: ViewportScroller) {}
  
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
