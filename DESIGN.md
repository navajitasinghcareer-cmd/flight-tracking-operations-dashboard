# Flight Tracking & Operations Dashboard

## Design Explanation

### 1. Overview

The Flight Tracking & Operations Dashboard is a responsive Angular application designed to provide an aviation operations-style interface for monitoring flight activity.

The dashboard combines operational KPIs, filtering controls, a flight list, an interactive Leaflet map, and a flight details panel into a single interface.

The application currently uses mock flight data to demonstrate the required functionality.

### 2. UI & Layout

The interface is organized into the following sections:

* **Header:** Provides the dashboard title and live-operations indicator.
* **KPI Cards:** Displays total, active, delayed, and arrived flight counts.
* **Filters:** Allows users to search by callsign and filter flights by status, origin, and destination.
* **Flight List:** Displays the filtered flights along with flight number, callsign, route, aircraft type, and status.
* **Interactive Map:** Displays the current position of flights using Leaflet markers.
* **Flight Details:** Displays detailed information for the flight selected on the map.

The layout uses CSS Grid and responsive media queries to adapt the interface for desktop, tablet, and mobile screen sizes.

### 3. Interaction Design

The main interaction flow is designed around selecting and monitoring individual flights.

When a user selects a flight marker:

1. The flight marker displays a popup containing key flight information.
2. The selected flight is emitted from the map component to the dashboard.
3. The flight details panel is updated with the selected flight's information.
4. A route polyline is drawn from the origin through the current position to the destination.
5. Selecting another flight removes the previous route and displays the newly selected route.

Filtering is implemented using Angular Reactive Forms. Filter changes are observed through RxJS and immediately update the displayed flight list.

### 4. Angular Architecture

The application follows a feature-oriented structure with separation between core functionality, feature components, and shared components.

```text
core/
├── data/
├── models/
└── services/

features/
└── flight-dashboard/
    └── components/
        └── flight-map/

shared/
└── components/
    └── kpi-card/
```

The `FlightService` provides access to flight data through an Observable. The current implementation uses mock data with RxJS `of()`, allowing the data source to be replaced with a REST API later without tightly coupling data access to the UI.

The flight map communicates the selected flight to the dashboard using Angular `EventEmitter`.

### 5. Map Design

Leaflet is used to provide the interactive map experience.

Each mock flight has a current latitude and longitude, which is used to position its marker on the map.

When a flight is selected, the route is represented using three points:

```text
Origin → Current Position → Destination
```

The previous route is removed before drawing a new route so that only the currently selected flight's route is displayed.

OpenStreetMap tiles are used as the map tile source.

### 6. Responsive Design

The dashboard uses responsive CSS Grid layouts and media queries.

* **Desktop:** KPI cards are displayed in four columns, while the map and details panel are displayed side by side.
* **Tablet:** KPI cards adapt to two columns and the map/details layout adjusts to available width.
* **Mobile:** KPI cards and filter controls stack vertically, and the map/details sections use a single-column layout.

Input and select controls are also configured to use the available mobile width.

### 7. Design Decisions

The implementation focuses on clarity, maintainability, and the core requirements of the assessment.

Key decisions include:

* Keeping flight data access inside a dedicated service.
* Using strongly typed TypeScript models for flight and airport information.
* Using Reactive Forms for filtering.
* Keeping the map implementation isolated in its own component.
* Using reusable KPI card components.
* Using mock data to demonstrate the complete UI and interaction flow without requiring an external backend.
* Keeping the implementation focused on the requested functionality rather than adding unnecessary dependencies or features.

### 8. Future Enhancements

For a production implementation, the following could be added:

* REST API integration for live flight data.
* Real-time updates using WebSockets.
* Airport markers and additional aviation information.
* Marker clustering for larger datasets.
* Unit and integration tests.
* Weather information.
* Dark mode.
* Additional operational metrics and alerts.

### 9. Conclusion

The dashboard demonstrates an Angular-based approach to building a responsive aviation operations interface with interactive mapping, reusable components, reactive filtering, service-based data access, and route visualization.
