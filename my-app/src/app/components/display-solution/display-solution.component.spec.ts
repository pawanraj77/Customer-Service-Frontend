import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySolutionComponent } from './display-solution.component';

describe('DisplaySolutionComponent', () => {
  let component: DisplaySolutionComponent;
  let fixture: ComponentFixture<DisplaySolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaySolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaySolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
