import { Environment } from '@tnsw/core';

export const environment: Environment = {
  production: true,
  apiConfig: {
    baseUrl: '/assets/',
    busServicesData: 'bus-services-data.json'
  }
};
