import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbiozSharedElementTransitionComponent } from './symbioz-shared-element-transition.component';

describe('SymbiozSharedElementTransitionComponent', () => {
  let component: SymbiozSharedElementTransitionComponent;
  let fixture: ComponentFixture<SymbiozSharedElementTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymbiozSharedElementTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbiozSharedElementTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
