import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);      
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('load(): should return undefined when store is empty',
    () => {      
      expect(service.load('token')).toEqual(undefined);
  });  

  it('add() should store the value to store and load() should return matching value',
    () => {
      service.add('token', 'test value');
      expect(service.load('token')).toEqual({"id": "token", "notes": "test value"});
  });

  it('update(): should store the value',
  () => {          
    service.update('token', 'new value')
    expect(service.load('token')).toEqual({"id": "token", "notes": "new value"});
  });

  it('update(): should update the value',
    () => {      
      service.add('token', 'test value');
      service.update('token', 'new value')
      expect(service.load('token')).toEqual({"id": "token", "notes": "new value"});
  });
});
