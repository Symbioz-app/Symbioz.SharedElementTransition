import { TestBed } from '@angular/core/testing';

import { SymbiozSharedElementTransitionService } from './symbioz-shared-element-transition.service';

describe('SymbiozSharedElementTransitionService', () => {
  let service: SymbiozSharedElementTransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymbiozSharedElementTransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
