import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  imagePath: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectOverlayService {
  private showOverlaySubject = new BehaviorSubject<boolean>(false);
  private selectedProjectSubject = new BehaviorSubject<Project | null>(null);
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  private currentProjectIndexSubject = new BehaviorSubject<number>(0);
  showOverlay$: Observable<boolean> = this.showOverlaySubject.asObservable();
  selectedProject$: Observable<Project | null> = this.selectedProjectSubject.asObservable();
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();
  currentProjectIndex$: Observable<number> = this.currentProjectIndexSubject.asObservable();

  constructor() { }

  openProjectDetails(project: Project, projects: Project[]): void {
    this.projectsSubject.next(projects);
    this.selectedProjectSubject.next(project);
    this.currentProjectIndexSubject.next(projects.findIndex(p => p.id === project.id));
    this.showOverlaySubject.next(true);
  }

  nextProject(): void {
    const projects = this.projectsSubject.getValue();
    const currentIndex = this.currentProjectIndexSubject.getValue();
    const nextIndex = (currentIndex + 1) % projects.length;
    
    this.currentProjectIndexSubject.next(nextIndex);
    this.selectedProjectSubject.next(projects[nextIndex]);
  }

  previousProject(): void {
    const projects = this.projectsSubject.getValue();
    const currentIndex = this.currentProjectIndexSubject.getValue();
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    
    this.currentProjectIndexSubject.next(prevIndex);
    this.selectedProjectSubject.next(projects[prevIndex]);
  }

  closeOverlay(): void {
    this.showOverlaySubject.next(false);
  }
}