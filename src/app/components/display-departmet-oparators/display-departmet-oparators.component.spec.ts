import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDepartmetOparatorsComponent } from './display-departmet-oparators.component';

describe('DisplayDepartmetOparatorsComponent', () => {
  let component: DisplayDepartmetOparatorsComponent;
  let fixture: ComponentFixture<DisplayDepartmetOparatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDepartmetOparatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDepartmetOparatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
