import { TestBed } from '@angular/core/testing';

import { App.JsService } from './app.js.service';

describe('App.JsService', () => {
  let service: App.JsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.JsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
