import { TestBed } from '@angular/core/testing';

import { ContactCrudService } from './contact-crud.service';

describe('ContactCrudService', () => {
  let service: ContactCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
