import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { registerLoginGuardGuard } from './register-login-guard.guard';

describe('registerLoginGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registerLoginGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
