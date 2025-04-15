import { Component } from '@angular/core';
import { AssetService } from '../../models/asset-service/asset.service.js'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public assetService: AssetService) {}
}
