import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../models/asset-service/asset.service.js'; 

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  constructor(public assetService: AssetService) {}
}