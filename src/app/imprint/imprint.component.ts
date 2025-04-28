import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-imprint', 
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink
  ],
  templateUrl: './imprint.component.html', 
  styleUrl: './imprint.component.scss' 
})
export class ImprintComponent implements OnInit {
  
  constructor(private viewportScroller: ViewportScroller) {}
  
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}