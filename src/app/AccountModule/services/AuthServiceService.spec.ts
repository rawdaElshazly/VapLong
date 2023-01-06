import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './AuthService';

describe('AuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    expect(service).toBeTruthy();
  });
});
