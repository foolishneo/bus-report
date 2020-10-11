# Bus Reports

Load data from a json file to build reports on bus activities (Bus ID, Route Variant, and Status).

This project use [Nx](https://nx.dev/angular) as a set of Extensible Dev Tools for Monorepos.

## Assumptions

- Angular Material is the selected UI library
- Jest is the selected test library
- Organisation text value is used as key for local storage so it needs to be unique. If not, we can easily set up an unique id for the stored note.

## Code Structure

Shared modules and components are in `libs` folder. These can be shared between multiple apps. 
- `Core modules`: contains common data models, services, and pipes. Shared services include those to handle API connection and local storage.

- `Material UI modules`: loads required Angular material components

The `App` component will use the API service to load data and feed to `Bus Report` component via `@Input`. 

The `BusReport` component uses Material Accordion to show/hide bus report. It also use the `LocalStorage` service to save notes.

The `BusDataTable` component uses Material to construct the data table. 

## Implemented requirements

- On a single page, make all the data from "bus-services-data.json" available to the user.

- Data can be displayed in a table.

- Only the names of the organisation should be shown initially. When the user clicks on the name of the organisation, this should toggle the report showing the data for that organisation.

- The first three numbers of the route variant are most important, so they should be formatted as "bold".

- Display the following bus statuses based on its deviation from timetable - "On Time", "Late", "Early", or "Unknown".

- Use colors of your choice to signify the status of the buses (e.g. green text might mean that the bus was on-time)

- Unit tests for components

## Requirements not implemented

- I do not display data in a list as data table is more suitable for the purpose.

## Run the application

`npm start` and navigate to `http://localhost:4200/`

## Run the tests

`npm run test`

You can also check out the test coverage reports in the `coverage` folder