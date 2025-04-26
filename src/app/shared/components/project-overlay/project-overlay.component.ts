import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlayService, Project } from '../../services/project-overlay.service';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

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
  private overlaySubscription!: Subscription;

  constructor(private overlayService: ProjectOverlayService) { }

  ngOnInit(): void {
    this.showOverlay$ = this.overlayService.showOverlay$;
    this.selectedProject$ = this.overlayService.selectedProject$;
    this.overlaySubscription = this.showOverlay$.subscribe(isVisible => {
      if (isVisible) {
        document.body.classList.add('overlay-open');
      } else {
        document.body.classList.remove('overlay-open');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
    document.body.classList.remove('overlay-open');
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