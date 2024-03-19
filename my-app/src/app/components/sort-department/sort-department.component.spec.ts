import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDepartmentComponent } from './sort-department.component';

describe('SortDepartmentComponent', () => {
  let component: SortDepartmentComponent;
  let fixture: ComponentFixture<SortDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortDepartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
