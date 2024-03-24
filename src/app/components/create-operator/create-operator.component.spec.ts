import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperatorComponent } from './create-operator.component';

describe('CreateOperatorComponent', () => {
  let component: CreateOperatorComponent;
  let fixture: ComponentFixture<CreateOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
