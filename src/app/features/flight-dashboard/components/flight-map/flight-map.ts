import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { Flight } from '../../../../core/models/flight.model';
import { FlightService } from '../../../../core/services/flight';
import * as L from 'leaflet';

@Component({
  imports: [],
  selector: 'app-flight-map',
  styleUrl: './flight-map.scss',
  templateUrl: './flight-map.html',
})
export class FlightMap implements AfterViewInit {

  private flightIcon = L.icon({
    iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
    iconUrl: 'assets/leaflet/marker-icon.png',
    shadowUrl: 'assets/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  constructor(private flightService: FlightService) { }

  private flights: Flight[] = [];

  selectedFlight: Flight | null = null;

  private routeLine?: L.Polyline;

  @Output() flightSelected = new EventEmitter<Flight>();

  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initializeMap();
    this.loadFlights();
  }

  private loadFlights(): void {
    this.flightService.getFlights().subscribe({
      next: (flights) => {
        this.flights = flights;
        this.addFlightMarkers();
      },
      error: (error) => {
        console.error('Failed to load flights', error);
      }
    });
  }

  private addFlightMarkers(): void {
    this.flights.forEach((flight) => {

      const marker = L.marker(
        [
          flight.currentPosition.latitude,
          flight.currentPosition.longitude
        ],
        {
          icon: this.flightIcon
        }
      ).addTo(this.map);

      marker.bindPopup(`
      <strong>${flight.flightNumber}</strong><br>
      Callsign: ${flight.callsign}<br>
      ${flight.origin.code} → ${flight.destination.code}<br>
      Status: ${flight.status}
    `);

      marker.on('click', () => {
        this.selectedFlight = flight;
        this.flightSelected.emit(flight);
        this.drawRoute(flight);
      });
    });
  }

  private drawRoute(flight: Flight): void {
    if (this.routeLine) {
      this.map.removeLayer(this.routeLine);
    }

    const routePoints: L.LatLngExpression[] = [
      [
        flight.origin.latitude,
        flight.origin.longitude
      ],
      [
        flight.currentPosition.latitude,
        flight.currentPosition.longitude
      ],
      [
        flight.destination.latitude,
        flight.destination.longitude
      ]
    ];

    this.routeLine = L.polyline(routePoints).addTo(this.map);
  }

  private initializeMap(): void {
    this.map = L.map('flightMap').setView([20.5937, 78.9629], 5);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors'
      }
    ).addTo(this.map);
  }
}