import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBucketComponent } from './issue-bucket.component';

describe('IssueBucketComponent', () => {
  let component: IssueBucketComponent;
  let fixture: ComponentFixture<IssueBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueBucketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssueBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
