import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../models/asset-service/asset.service';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule

interface Project {
  id: number;
  name: string; // Not translated here
  description: string; // Not translated here
  longDescription: string; // Not translated here
  imagePath: string;
  technologies: string[]; // Not translated here
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule], // Add TranslateModule
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showOverlay = false;
  selectedProject: Project | null = null;
  currentProjectIndex = 0;
  constructor(public assetService: AssetService) {}

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
    this.selectedProject = project;
    this.currentProjectIndex = this.projects.findIndex(p => p.id === project.id);
    this.showOverlay = true;
  }

  nextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentProjectIndex];
  }

  previousProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    this.selectedProject = this.projects[this.currentProjectIndex];
  }

  closeOverlay(): void {
    this.showOverlay = false;
    this.selectedProject = null;
  }
}