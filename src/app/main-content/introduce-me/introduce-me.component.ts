import { Component } from '@angular/core';
import { AssetService } from '../../models/asset-service/asset.service.js'; 

@Component({
  selector: 'app-introduce-me',
  standalone: true,
  imports: [
  ],
  providers: [AssetService],
  templateUrl: './introduce-me.component.html',
  styleUrl: './introduce-me.component.scss'
})
export class IntroduceMeComponent {
  constructor(public assetService: AssetService) {}
}
