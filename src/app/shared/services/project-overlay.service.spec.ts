import { TestBed } from '@angular/core/testing';

import { ProjectOverlayService } from './project-overlay.service';

describe('ProjectOverlayService', () => {
  let service: ProjectOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
