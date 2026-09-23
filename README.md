# Flight Tracking & Operations Dashboard

A responsive flight tracking and operations dashboard built with Angular and Leaflet Maps. The application provides an aviation operations-style interface for monitoring mock flight data, filtering flights, viewing flight details, and visualizing flight routes on an interactive map.

## Features

* Interactive Leaflet map with flight markers
* Flight marker popups with:

  * Flight Number
  * Callsign
  * Origin
  * Destination
  * Status
* Flight selection with detailed operational information
* Origin → Current Position → Destination route visualization
* KPI cards for:

  * Total Flights
  * Active Flights
  * Delayed Flights
  * Arrived Flights
* Search flights by callsign
* Filter flights by:

  * Status
  * Origin
  * Destination
* Responsive layout for desktop, tablet, and mobile
* Mock flight data with 20 flights
* Angular service-based data access using RxJS

## Tech Stack

* Angular 16+
* TypeScript
* Reactive Forms
* RxJS
* Leaflet
* HTML5
* SCSS
* OpenStreetMap

## Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── data/
│   │   │   └── flights.ts
│   │   ├── models/
│   │   │   └── flight.model.ts
│   │   └── services/
│   │       └── flight.ts
│   │
│   ├── features/
│   │   └── flight-dashboard/
│   │       ├── components/
│   │       │   └── flight-map/
│   │       │       ├── flight-map.ts
│   │       │       ├── flight-map.html
│   │       │       └── flight-map.scss
│   │       ├── flight-dashboard.ts
│   │       ├── flight-dashboard.html
│   │       └── flight-dashboard.scss
│   │
│   └── shared/
│       └── components/
│           └── kpi-card/
│
├── styles.scss
└── ...
```

## Application Flow

1. The dashboard loads mock flight data through `FlightService`.
2. KPI values are calculated from the complete flight dataset.
3. Flights are displayed on the Leaflet map using their current positions.
4. Users can search by callsign and filter by status, origin, or destination.
5. Selecting a map marker displays flight details.
6. The selected flight's route is drawn from its origin through its current position to its destination.
7. Selecting another flight removes the previous route and displays the newly selected flight's route.

## Data

The application currently uses mock flight data for demonstration purposes.

Each flight contains information such as:

* Flight number
* Callsign
* Aircraft type
* Origin airport
* Destination airport
* Flight status
* Estimated departure
* Estimated arrival
* Current position

The service layer is intentionally separated from the UI so that the mock data source can later be replaced with a REST API or other backend source.

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Angular CLI

### Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Navigate to the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

### Run the Application

```bash
ng serve
```

Open the application in your browser:

```text
http://localhost:4200
```

## Design Approach

The dashboard is organized around an aviation operations workflow:

* KPI cards provide a quick fleet-level overview.
* Filters allow users to narrow the displayed flight list.
* The interactive map provides geographic context.
* Flight details provide additional operational information for the selected flight.

The UI uses responsive CSS Grid layouts and mobile-specific adjustments to maintain usability across different screen sizes.

## Key Angular Concepts Used

### Components

The application is divided into reusable components such as the KPI card and flight map.

### Services

`FlightService` provides a dedicated layer for accessing flight data.

### Reactive Forms

Reactive Forms are used for the search and filtering controls.

### RxJS

RxJS is used for observable-based flight data access and filter change handling.

### Event Communication

The flight map emits the selected flight to the dashboard using Angular `EventEmitter`.

### Routing

The dashboard is available through the `/dashboard` route.

## Map

The application uses Leaflet for map rendering and OpenStreetMap for map tiles.

Flight markers represent the current position of each mock flight.

When a flight is selected, a route polyline connects:

```text
Origin → Current Position → Destination
```

## Future Enhancements

Possible future improvements include:

* REST API integration for live flight data
* Airport markers
* Marker clustering
* Unit tests
* Flight status animations
* Weather information
* Dark mode
* Additional operational metrics

## Assessment

This project was developed as part of the Frontend Developer (Angular & UI/UX) technical assessment for Ramphal Technologies Pvt Ltd.

## Author

Navajita Singh

Software Engineer | Full Stack | Angular | Node.js | TypeScript

```

### Do only this now

1. Open `README.md`
2. Replace its contents with the README above.
3. Save it.
4. **Don't push to GitHub yet.**

Then tell me **“README done”**. We'll do the Git/GitHub part next, one step at a time.
```
