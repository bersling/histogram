import { TestBed, inject } from '@angular/core/testing';

import { FileStoreService } from './file-upload.service';

describe('FileStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileStoreService]
    });
  });

  it('should be created', inject([FileStoreService], (service: FileStoreService) => {
    expect(service).toBeTruthy();
  }));
});
