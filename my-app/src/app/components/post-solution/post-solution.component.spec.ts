import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSolutionComponent } from './post-solution.component';

describe('PostSolutionComponent', () => {
  let component: PostSolutionComponent;
  let fixture: ComponentFixture<PostSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
