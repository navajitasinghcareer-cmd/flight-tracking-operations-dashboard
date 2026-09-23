import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../core/services/flight';
import { Flight } from '../../core/models/flight.model';
import { KpiCard } from '../../shared/components/kpi-card/kpi-card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs';
import { FlightMap } from './components/flight-map/flight-map';

@Component({
  imports: [KpiCard,ReactiveFormsModule,FlightMap],
  selector: 'app-flight-dashboard',
  styleUrl: './flight-dashboard.scss',
  templateUrl: './flight-dashboard.html',
})
export class FlightDashboard implements OnInit {

  totalFlights = 0;
  activeFlights = 0;
  delayedFlights = 0;
  arrivedFlights = 0;

  filteredFlights: Flight[] = [];

  selectedFlight: Flight | null = null;

  airports = [
  'DEL',
  'BOM',
  'BLR',
  'HYD',
  'MAA',
  'CCU',
  'GOI',
  'PNQ'
];

statuses = [
  'All',
  'Active',
  'Delayed',
  'Arrived',
  'Scheduled'
];

  filterForm = new FormGroup({
  search: new FormControl(''),
  status: new FormControl('All'),
  origin: new FormControl('All'),
  destination: new FormControl('All')
});

  flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe({
      next: (flights) => {
        this.flights = flights;
        this.filteredFlights = flights;

        this.calculateKpis();
      },
      error: (error) => {
        console.error('Failed to load flights', error);
      }
    });

    this.filterForm.valueChanges
      .pipe(
        startWith(this.filterForm.value)
      )
      .subscribe(() => {
        this.applyFilters();
      });
  }

  private calculateKpis(): void {
    this.totalFlights = this.flights.length;

    this.activeFlights = this.flights.filter(
      flight => flight.status === 'Active'
    ).length;

    this.delayedFlights = this.flights.filter(
      flight => flight.status === 'Delayed'
    ).length;

    this.arrivedFlights = this.flights.filter(
      flight => flight.status === 'Arrived'
    ).length;
  }

applyFilters(): void {
  const {
    search,
    status,
    origin,
    destination
  } = this.filterForm.value;

  const searchTerm = (search ?? '').trim().toLowerCase();

  this.filteredFlights = this.flights.filter(flight => {

    const matchesSearch =
      !searchTerm ||
      flight.callsign.toLowerCase().includes(searchTerm);

    const matchesStatus =
      status === 'All' ||
      flight.status === status;

    const matchesOrigin =
      origin === 'All' ||
      flight.origin.code === origin;

    const matchesDestination =
      destination === 'All' ||
      flight.destination.code === destination;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesOrigin &&
      matchesDestination
    );
  });
}

onFlightSelected(flight: Flight): void {
  this.selectedFlight = flight;
}
}