import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOperatorComponent } from './update-operator.component';

describe('UpdateOperatorComponent', () => {
  let component: UpdateOperatorComponent;
  let fixture: ComponentFixture<UpdateOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
