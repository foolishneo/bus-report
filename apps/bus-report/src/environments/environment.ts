import { Environment } from '@tnsw/core';

export const environment: Environment = {
  production: false,
  apiConfig: {
    baseUrl: '/assets/',
    busServicesData: 'bus-services-data.json'
  }
};
