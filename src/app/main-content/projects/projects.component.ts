import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../models/asset-service/asset.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectOverlayService } from '../../shared/services/project-overlay.service';
interface Project {
  id: number;
  name: string;
  description: string; 
  longDescription: string; 
  imagePath: string;
  technologies: string[]; 
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public assetService: AssetService,
  private overlayService: ProjectOverlayService
  ) { }

  projects: Project[] = [
    {
      id: 1,
      name: 'Pokedex',
      description: 'Eine Webanwendung zur Anzeige von Pokémon-Daten.',
      longDescription: 'Eine Anwendung, die Daten von der Pokémon API abruft und darstellt. Benutzer können Pokémon suchen und detaillierte Informationen einsehen.',
      imagePath: this.assetService.getAssetUrl('img/pokedex.png'),
      technologies: ['API', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://pokedex-topaz-six.vercel.app/',
      githubUrl: 'https://github.com/HergenEngelhardt/Pokedex'
    },
    {
      id: 2,
      name: 'El Pollo Loco',
      description: 'Ein 2D Jump-&-Run-Spiel',
      longDescription: 'Ein 2D Jump-&-Run-Spiel, das mit HTML, CSS und JavaScript entwickelt wurde. Der Spieler steuert einen Charakter, der Objekte aufnehmen kann und muss dazu noch Hindernisse überwinden.',
      imagePath: this.assetService.getAssetUrl('img/EPL.png'),
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://el-pollo-loco-five.vercel.app/',
      githubUrl: 'https://github.com/HergenEngelhardt/EL-POLLO-LOCO'
    },
    {
      id: 3,
      name: 'JOIN',
      description: 'Task-Manager inspiriert vom Kanban-System.',
      longDescription: 'Ein Kanbanboard mit den Funktionen Aufgaben erstellen, Drag-and-Drop, Kategorien zuweisen und erstellen von Nutzern.',
      imagePath: this.assetService.getAssetUrl('img/Join.png'),
      technologies: ['HTML', 'CSS', 'Javascript'],
      liveUrl: 'https://kanbanboard-liard-five.vercel.app/login.html',
      githubUrl: 'https://github.com/HergenEngelhardt/Join'
    }
  ];

  openProjectDetails(project: Project): void {
    this.overlayService.openProjectDetails(project, this.projects);
  }
}