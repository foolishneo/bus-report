export interface BusServiceData {
  data: BusService[];
}

export interface BusService {
  organisation: string;
  date: string;
  busData: BusData[];
}

export interface BusData {
  busId: string;
  routeVariant: string;
  deviationFromTimetable: number;
}

export const mockData: BusServiceData = {
  data: [
    {
      organisation: 'Mock Buses',
      date: '25/09/2015',
      busData: [
        {
          busId: '42612',
          routeVariant: '891 2 1',
          deviationFromTimetable: 77,
        }
      ]
    }
  ]
};