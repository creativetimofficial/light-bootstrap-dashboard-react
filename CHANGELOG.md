# Change Log

## [1.4.0] date
### Bug fixing
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
### Updated dependencies
```
node-sass                    4.12.0   →    4.14.1
react                        16.8.6   →   16.13.1
@types/react                16.8.13   →   16.9.49
react-chartist               0.13.3   →    0.14.3
react-dom                    16.8.6   →   16.13.1
react-notification-system    0.2.17   →     0.4.0
react-router                  5.0.0   →     5.2.0
react-router-dom              5.0.0   →     5.2.0
react-scripts                 3.0.0   →     3.4.3
react-toggle                  4.0.2   →     4.1.1
@types/googlemaps           3.30.19   →   3.39.13
typescript                    3.4.3   →     4.0.3
```
### Warning
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._
_Vulnerabilities: Since this product is Bootstrap 3 based, on installation (npm install), you will have the following warning: found 2 vulnerabilities (1 low, 1 moderate) (NOTE 1: the product works just fine. NOTE 2: we will solve this, when we will update this product to version 2.0.0, and we will replace the Bootstrap 3 support with Bootstrap 4 support one. At the moment we do not have a timeline for this.)_

## [1.3.0] 2019-05-03
### Bug fixing
- Renamed `src/layouts/Dashboard/Dashboard.jsx` to `src/layouts/Admin.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Dashboard.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Icons.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Maps.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Notifications.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/TableList.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Typography.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Upgrade.jsx`
- Renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/UserProfile.jsx`
- Renamed `src/components/Header` to `src/components/Navbars`
- Renamed `src/components/Navbars/Header.jsx` to `src/components/Navbars/AdminNavbar.jsx`
- Renamed `src/components/Navbars/HeaderLinks.jsx` to `src/components/Navbars/AdminNavbarLinks.jsx`
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for *.jsx*, *.js*, *.html* and *.css* files
- Changed our buggy routing system, now it should work flawlessly, for more info, please refer to our [live docs here](https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/documentation/routing-system)
- Solved
  - https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/48
  - https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/47
  - https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/34
  - https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/30
  - https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/19
  - https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/17
  - https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/15
- Removed `.env` file and replaced it with `jsconfig.json`
- Small bug fixes
### Removed dependencies/components
- Deleted `src/routes/*` folder
- node-sass-chokidar
- npm-run-all
### Added dependencies/components
- Added `src/routes.js` file (instead of the three files from `src/routes/*`)
- @types/markerclustererplus@2.1.33 (to stop install warnings)
- @types/googlemaps@3.30.19 (to stop install warnings)
- @types/react@16.8.13 (to stop install warnings)
- typescript@3.4.3 (to stop install warnings)
- react-router@5.0.0 (react-router-dom auto-installs this package, but it is better to have them both inside package.json)
- react-toggle@4.0.2
### Update dependencies
- node-sass           4.6.1   →   4.12.0
- react              16.2.0   →   16.8.6
- react-bootstrap    0.32.1   →   0.32.4
- react-chartist     0.13.1   →   0.13.3
- react-dom          16.2.0   →   16.8.6
- react-router-dom    4.2.2   →    5.0.0
- react-scripts       1.1.1   →    3.0.0

## [1.2.0] 2018-04-12
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
