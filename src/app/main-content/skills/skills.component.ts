import { Component } from '@angular/core';
import { AssetService } from '../../models/asset-service/asset.service.js'; 

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public assetService: AssetService) {}
}
