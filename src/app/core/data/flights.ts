import { Flight } from '../models/flight.model';

const airports = {
  DEL: {
    code: 'DEL',
    name: 'Indira Gandhi International Airport',
    city: 'Delhi',
    latitude: 28.5562,
    longitude: 77.1000
  },
  BOM: {
    code: 'BOM',
    name: 'Chhatrapati Shivaji Maharaj International Airport',
    city: 'Mumbai',
    latitude: 19.0896,
    longitude: 72.8656
  },
  BLR: {
    code: 'BLR',
    name: 'Kempegowda International Airport',
    city: 'Bangalore',
    latitude: 13.1986,
    longitude: 77.7066
  },
  HYD: {
    code: 'HYD',
    name: 'Rajiv Gandhi International Airport',
    city: 'Hyderabad',
    latitude: 17.2403,
    longitude: 78.4294
  },
  MAA: {
    code: 'MAA',
    name: 'Chennai International Airport',
    city: 'Chennai',
    latitude: 12.9941,
    longitude: 80.1709
  },
  CCU: {
    code: 'CCU',
    name: 'Netaji Subhas Chandra Bose International Airport',
    city: 'Kolkata',
    latitude: 22.6547,
    longitude: 88.4467
  },
  GOI: {
    code: 'GOI',
    name: 'Manohar International Airport',
    city: 'Goa',
    latitude: 15.3808,
    longitude: 73.8314
  },
  PNQ: {
    code: 'PNQ',
    name: 'Pune Airport',
    city: 'Pune',
    latitude: 18.5821,
    longitude: 73.9197
  }
};

export const FLIGHTS: Flight[] = [
  {
    id: 'FL001',
    flightNumber: 'AI202',
    callsign: 'AIC202',
    aircraftType: 'Airbus A320',
    origin: airports.DEL,
    destination: airports.BLR,
    status: 'Active',
    estimatedDeparture: '2026-09-22 18:30',
    estimatedArrival: '2026-09-22 21:15',
    currentPosition: {
      latitude: 21.5,
      longitude: 78.5
    }
  },
  {
    id: 'FL002',
    flightNumber: '6E405',
    callsign: 'IGO405',
    aircraftType: 'Airbus A321',
    origin: airports.BOM,
    destination: airports.DEL,
    status: 'Delayed',
    estimatedDeparture: '2026-09-22 19:00',
    estimatedArrival: '2026-09-22 21:10',
    currentPosition: {
      latitude: 24.0,
      longitude: 74.5
    }
  },
  {
    id: 'FL003',
    flightNumber: 'UK808',
    callsign: 'VTI808',
    aircraftType: 'Boeing 737',
    origin: airports.BLR,
    destination: airports.HYD,
    status: 'Arrived',
    estimatedDeparture: '2026-09-22 15:00',
    estimatedArrival: '2026-09-22 16:10',
    currentPosition: {
      latitude: 17.2403,
      longitude: 78.4294
    }
  },
  {
    id: 'FL004',
    flightNumber: 'AI506',
    callsign: 'AIC506',
    aircraftType: 'Airbus A320',
    origin: airports.MAA,
    destination: airports.DEL,
    status: 'Scheduled',
    estimatedDeparture: '2026-09-23 07:30',
    estimatedArrival: '2026-09-23 10:20',
    currentPosition: {
      latitude: 12.9941,
      longitude: 80.1709
    }
  },
  {
    id: 'FL005',
    flightNumber: '6E721',
    callsign: 'IGO721',
    aircraftType: 'Airbus A320',
    origin: airports.HYD,
    destination: airports.BOM,
    status: 'Active',
    estimatedDeparture: '2026-09-22 17:45',
    estimatedArrival: '2026-09-22 19:20',
    currentPosition: {
      latitude: 18.1,
      longitude: 76.8
    }
  },
  {
    id: 'FL006',
    flightNumber: 'AI631',
    callsign: 'AIC631',
    aircraftType: 'Boeing 787',
    origin: airports.DEL,
    destination: airports.CCU,
    status: 'Active',
    estimatedDeparture: '2026-09-22 17:30',
    estimatedArrival: '2026-09-22 19:45',
    currentPosition: {
      latitude: 26.2,
      longitude: 82.1
    }
  },
  {
    id: 'FL007',
    flightNumber: '6E342',
    callsign: 'IGO342',
    aircraftType: 'Airbus A321',
    origin: airports.CCU,
    destination: airports.BLR,
    status: 'Delayed',
    estimatedDeparture: '2026-09-22 16:00',
    estimatedArrival: '2026-09-22 18:40',
    currentPosition: {
      latitude: 19.2,
      longitude: 83.5
    }
  },
  {
    id: 'FL008',
    flightNumber: 'AI879',
    callsign: 'AIC879',
    aircraftType: 'Airbus A320',
    origin: airports.BOM,
    destination: airports.GOI,
    status: 'Arrived',
    estimatedDeparture: '2026-09-22 12:00',
    estimatedArrival: '2026-09-22 13:15',
    currentPosition: {
      latitude: 15.3808,
      longitude: 73.8314
    }
  },
  {
    id: 'FL009',
    flightNumber: '6E514',
    callsign: 'IGO514',
    aircraftType: 'Airbus A320',
    origin: airports.PNQ,
    destination: airports.DEL,
    status: 'Active',
    estimatedDeparture: '2026-09-22 18:15',
    estimatedArrival: '2026-09-22 20:10',
    currentPosition: {
      latitude: 22.0,
      longitude: 75.4
    }
  },
  {
    id: 'FL010',
    flightNumber: 'UK955',
    callsign: 'VTI955',
    aircraftType: 'Airbus A320',
    origin: airports.DEL,
    destination: airports.BOM,
    status: 'Scheduled',
    estimatedDeparture: '2026-09-23 08:00',
    estimatedArrival: '2026-09-23 10:10',
    currentPosition: {
      latitude: 28.5562,
      longitude: 77.1000
    }
  },
  {
    id: 'FL011',
    flightNumber: 'AI442',
    callsign: 'AIC442',
    aircraftType: 'Airbus A321',
    origin: airports.BLR,
    destination: airports.MAA,
    status: 'Active',
    estimatedDeparture: '2026-09-22 18:00',
    estimatedArrival: '2026-09-22 19:00',
    currentPosition: {
      latitude: 12.9,
      longitude: 78.8
    }
  },
  {
    id: 'FL012',
    flightNumber: '6E901',
    callsign: 'IGO901',
    aircraftType: 'Airbus A320',
    origin: airports.GOI,
    destination: airports.BOM,
    status: 'Arrived',
    estimatedDeparture: '2026-09-22 11:30',
    estimatedArrival: '2026-09-22 12:40',
    currentPosition: {
      latitude: 19.0896,
      longitude: 72.8656
    }
  },
  {
    id: 'FL013',
    flightNumber: 'AI518',
    callsign: 'AIC518',
    aircraftType: 'Boeing 737',
    origin: airports.HYD,
    destination: airports.CCU,
    status: 'Delayed',
    estimatedDeparture: '2026-09-22 16:30',
    estimatedArrival: '2026-09-22 19:00',
    currentPosition: {
      latitude: 20.1,
      longitude: 81.5
    }
  },
  {
    id: 'FL014',
    flightNumber: '6E210',
    callsign: 'IGO210',
    aircraftType: 'Airbus A321',
    origin: airports.MAA,
    destination: airports.BLR,
    status: 'Active',
    estimatedDeparture: '2026-09-22 19:00',
    estimatedArrival: '2026-09-22 20:00',
    currentPosition: {
      latitude: 13.0,
      longitude: 80.8
    }
  },
  {
    id: 'FL015',
    flightNumber: 'AI721',
    callsign: 'AIC721',
    aircraftType: 'Airbus A320',
    origin: airports.BOM,
    destination: airports.HYD,
    status: 'Scheduled',
    estimatedDeparture: '2026-09-23 09:00',
    estimatedArrival: '2026-09-23 10:40',
    currentPosition: {
      latitude: 19.0896,
      longitude: 72.8656
    }
  },
  {
    id: 'FL016',
    flightNumber: 'UK311',
    callsign: 'VTI311',
    aircraftType: 'Airbus A320',
    origin: airports.BLR,
    destination: airports.PNQ,
    status: 'Active',
    estimatedDeparture: '2026-09-22 17:15',
    estimatedArrival: '2026-09-22 18:45',
    currentPosition: {
      latitude: 15.5,
      longitude: 76.8
    }
  },
  {
    id: 'FL017',
    flightNumber: '6E810',
    callsign: 'IGO810',
    aircraftType: 'Airbus A320',
    origin: airports.DEL,
    destination: airports.PNQ,
    status: 'Delayed',
    estimatedDeparture: '2026-09-22 15:30',
    estimatedArrival: '2026-09-22 17:50',
    currentPosition: {
      latitude: 24.1,
      longitude: 76.3
    }
  },
  {
    id: 'FL018',
    flightNumber: 'AI303',
    callsign: 'AIC303',
    aircraftType: 'Boeing 787',
    origin: airports.CCU,
    destination: airports.DEL,
    status: 'Arrived',
    estimatedDeparture: '2026-09-22 10:00',
    estimatedArrival: '2026-09-22 12:20',
    currentPosition: {
      latitude: 28.5562,
      longitude: 77.1000
    }
  },
  {
    id: 'FL019',
    flightNumber: '6E620',
    callsign: 'IGO620',
    aircraftType: 'Airbus A321',
    origin: airports.BOM,
    destination: airports.BLR,
    status: 'Active',
    estimatedDeparture: '2026-09-22 18:45',
    estimatedArrival: '2026-09-22 20:30',
    currentPosition: {
      latitude: 17.2,
      longitude: 74.8
    }
  },
  {
    id: 'FL020',
    flightNumber: 'AI909',
    callsign: 'AIC909',
    aircraftType: 'Airbus A320',
    origin: airports.BLR,
    destination: airports.DEL,
    status: 'Scheduled',
    estimatedDeparture: '2026-09-23 10:00',
    estimatedArrival: '2026-09-23 12:45',
    currentPosition: {
      latitude: 13.1986,
      longitude: 77.7066
    }
  }
];