import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Flight } from '../models/flight.model';
import { FLIGHTS } from '../data/flights';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  getFlights(): Observable<Flight[]> {
    return of(FLIGHTS);
  }

}