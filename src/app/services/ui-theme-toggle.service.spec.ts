import { TestBed } from '@angular/core/testing';

import { UiThemeToggleService } from './ui-theme-toggle.service';

describe('UiThemeToggleService', () => {
  let service: UiThemeToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiThemeToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
