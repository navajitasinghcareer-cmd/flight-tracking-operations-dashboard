export type FlightStatus =
  | 'Active'
  | 'Delayed'
  | 'Arrived'
  | 'Scheduled';

export interface Airport {
  code: string;
  name: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface Flight {
  id: string;
  flightNumber: string;
  callsign: string;
  aircraftType: string;

  origin: Airport;
  destination: Airport;

  status: FlightStatus;

  estimatedDeparture: string;
  estimatedArrival: string;

  currentPosition: {
    latitude: number;
    longitude: number;
  };
}