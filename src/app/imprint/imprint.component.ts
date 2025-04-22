import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

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
export class ImprintComponent { 
  constructor() {}
}