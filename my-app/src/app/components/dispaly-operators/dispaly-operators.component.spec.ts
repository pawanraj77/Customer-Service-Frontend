import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyOperatorsComponent } from './dispaly-operators.component';

describe('DispalyOperatorsComponent', () => {
  let component: DispalyOperatorsComponent;
  let fixture: ComponentFixture<DispalyOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispalyOperatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispalyOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
