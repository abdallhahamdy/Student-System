import { TestBed } from '@angular/core/testing';

import { RouterActivatedServiceService } from './router-activated-service.service';

describe('RouterActivatedServiceService', () => {
  let service: RouterActivatedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterActivatedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
