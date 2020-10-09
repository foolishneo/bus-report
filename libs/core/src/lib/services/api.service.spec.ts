import { of } from 'rxjs';

import { Environment, mockData } from '../models';
import { ApiService } from './api.service';

const testData = mockData;

describe('ApiService', () => {  
  let service: ApiService;
  const http = {
    get: jest.fn(() =>
      of(testData)
    )
  };

  const env: Environment = {
    production: false,
    apiConfig: {
      baseUrl: '/assets/',
      busServicesData: 'bus-services-data.json'
    }
  };

  beforeEach(() => {
    service = new ApiService(http as any, env);    
  });  

  it('getBusData$(): should return a BusServiceData object', () => {
    service.getBusData$().subscribe(busData => {
      expect(busData.data).toBeDefined();
      expect(busData.data.length).toBe(1);
      expect(busData.data[0].organisation).toBe('Sydney Buses');
    });    
  });
});
