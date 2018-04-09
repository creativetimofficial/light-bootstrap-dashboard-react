# Change Log

## [1.2.0] 2018-04-10
### Bug fixing
- Added `fluid` prop on `Grid` component in `Footer`
- Moved all the contents of `elements` folder to `components` folder and delete it
- Renamed `containers` folder to `layouts`
- Renamed `App/App.jsx` to `Dashboard/Dashboard.jsx`
- Renamed `src/routes/app.jsx` to `src/routes/dashboard.jsx`
- Renamed `appRoutes` to `dashboardRoutes`
- Added `src/routes/index.jsx` and made the routes in `src/index.js` dynamically based on `indexRoutes` from `src/routes/index.jsx` (users can now make new layouts and routes for them easier)
### Removed dependencies/components
- `google-maps-react@1.1.0`
- `react-router@4.1.2`
### Added dependencies/components
- `node-sass@4.6.1`
- `react-google-maps@9.4.5` (insted of `google-maps-react@1.1.0`)
- `bootstrap@3.3.7` (and deleted `src/assets/bootstrap.min.css?v=3.3.5`)
### Update dependencies
- `npm-run-all@4.1.1` to `npm-run-all@4.1.2`
- `react@15.6.1` to `react@16.2.0`
- `react-bootstrap@0.31.1` to `react-bootstrap@0.32.1`
- `react-chartist@0.13.0` to `react-chartist@0.13.1`
- `react-dom@15.6.1` to `react-dom@16.2.0`
- `react-notification-system@0.2.15` to `react-notification-system@0.2.17`
- `react-router-dom@4.1.2` to `react-router-dom@4.2.2`
- `react-scripts@1.0.10` to `react-scripts@1.1.1`

## [1.1.0] 2017-10-30
### Bug fixing
- Changed property of `isChecked` in `CustomCheckbox`
- Removed hover state for checkboxes and radios
- Moved `NotificationSystem` outside of `.main-panel` (for responsive issues)
- All `div`'s with Bootstrap classes (`.container`,`.container-fluid`,`.row`,`.col-*`) were changed in React-Bootstrap components
- Changed `Notifications Places` buttons from buttons with `className` to our own button component `CustomButton`
- Added property `round` in `CustomButton` (for the button class `.btn-round`)
- Added dynamic routes


## [1.0.0] 2017-09-20
### Original Release
- Added React-Bootstrap as base framework
- Added design from Light Bootstrap Dashboard by Creative Tim
