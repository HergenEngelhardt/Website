import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceMeComponent } from './introduce-me.component';

describe('IntroduceMeComponent', () => {
  let component: IntroduceMeComponent;
  let fixture: ComponentFixture<IntroduceMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduceMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroduceMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
