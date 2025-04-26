import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlayService, Project } from '../../services/project-overlay.service';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-overlay.component.html',
  styleUrls: ['./project-overlay.component.scss']
})
export class ProjectOverlayComponent implements OnInit {
  showOverlay$!: Observable<boolean>;
  selectedProject$!: Observable<Project | null>;

  constructor(private overlayService: ProjectOverlayService) { }

  ngOnInit(): void {
    this.showOverlay$ = this.overlayService.showOverlay$;
    this.selectedProject$ = this.overlayService.selectedProject$;
  }

  closeOverlay(): void {
    this.overlayService.closeOverlay();
  }

  previousProject(): void {
    this.overlayService.previousProject();
  }

  nextProject(): void {
    this.overlayService.nextProject();
  }
}