# Change Log

## [2.0.1] 2022-07-04

- Update dependencies
- Migration to React 18
- Migration to sass from node-sass

## [2.0.0] 2021-01-21

### IMPORTANT

- We have updated this product from Bootstrap 3 to Bootstrap 4, so in essence, this is a new product
- For this, we have followed the guidelines from [here](https://react-bootstrap.github.io/migrating/) and [here](https://getbootstrap.com/docs/4.0/migration/)
- We also did not add Bootstrap variables as part of our styles (we will do so in one of our next updates, probably in version 3.0.0 when we'll add Bootstrap 5)

### Bug fixing

- Renamed all files to `.js`, instead of `.jsx`
- Refactor all files from class components to functional ones, so now, you can use React Hooks
- https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/62
- https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/58
- https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/52
- https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues/50

### Major style changes

- Since the update from Bootstrap 3 to Bootstrap 4, all styles have been changed

### Deleted components

- src/components/Card/Card.jsx (we'll use the simple React Bootstrap tags instead)
- src/components/CustomButton/CustomButton.jsx (we'll use the simple React Bootstrap tags instead)
- src/components/CustomCheckbox/CustomCheckbox.jsx (we'll use the simple React Bootstrap tags instead)
- src/components/CustomRadio/CustomRadio.jsx (we'll use the simple React Bootstrap tags instead)
- src/components/FormInputs/FormInputs.jsx (we'll use the simple React Bootstrap tags instead)
- src/components/StatsCard/StatsCard.jsx (we'll use the simple React Bootstrap tags instead)
- src/components/Tasks/Tasks.jsx (we'll use the simple React Bootstrap tags instead)
- src/components/UserCard/UserCard.jsx (we'll use the simple React Bootstrap tags instead)

### Added components

### Deleted dependencies

- react-notification-system (we'll use react-notification-alert from now on)
- @types/googlemaps
- @types/markerclustererplus
- @types/react
- react-google-maps (we'll use simple Google Maps API with Vanilla JS)
- react-toggle (we'll use the simple React-Bootstrap Form.Check as a switch instead)

### Added dependencies

- react-notification-alert@0.0.13 (instead of the react-notification-system)
- reactstrap@8.9.0 (as part of the react-notification-alert)
- jquery@3.5.1 (since Bootstrap requires it)
- @fortawesome/fontawesome-free@5.15.2 (For easier update of the package - instead of a link inside public/index.html)
- gulp-append-prepend@1.0.8 (For Creative Tim licenses)
- gulp@4.0.2 (For Creative Tim licenses)

### Updated dependencies

```
bootstrap           3.3.7   →    4.6.0
node-sass          4.12.0   →   4.14.1
react              16.8.6   →   17.0.1
react-bootstrap    0.32.4   →    1.4.3
react-chartist     0.13.3   →   0.14.3
react-dom          16.8.6   →   17.0.1
react-router        5.0.0   →    5.2.0
react-router-dom    5.0.0   →    5.2.0
react-scripts       3.0.0   →    4.0.1
typescript          3.4.3   →    4.1.3
```

### Warning

**The TypeScript and jQuery dependencies are installed only to stop console warnings on install. They are not actually used in our product. So the product is not based on TypeScript or jQuery!**
_The following warnings will appear when running the installation command, but they do not affect the UI or the functionality of the product (they will be solved in our next update):_

```
npm WARN react-chartist@0.14.3 requires a peer of react@^0.14.9 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-popper@1.3.7 requires a peer of react@0.14.x || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
```

_If they will persist in our 2.4.\* version, we will drop their usages and replace them with other plugins._
_In development mode, some of the above plugins will throw a warning because they still use React v16 syntax. If the error will persist in our 2.4.\* version, we will drop their usage and replace them with other plugins._

### Upgrade details

- Updated all packages from `package.json` using `npm-upgrade`, link here: https://www.npmjs.com/package/npm-upgrade
- Renamed all `ControlLabel` components to `FormLabel` (this refers to the react-bootstrap components)
- Renamed all `Grid` components to `Container` (this refers to the react-bootstrap components)
- Rename all `HelpBlock` components to `FormText`
- Rename all `MenuItem` components to `Dropdown.Item` and `NavDropdown.Item`
- Rename all Panel components to Card
- Deleted variables folder
- Change the usage of `React Big Calendar` to the new API, so instead of

```
import BigCalendar from "react-big-calendar";
```

- And

```
const localizer = BigCalendar.momentLocalizer(moment);
```

- We will have:

```
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
```

- And

```
const localizer = momentLocalizer(moment);
```

- Change Panels with new react-bootstrap components
- For Col componets, replaced `size={number1} sizeOffest={number2}` with `size={{span: number1, offset: number2}}` where size can be `xs`, `sm`, `md`, `lg`
- Changed `bsStyle` to `variant`
- Changed `bsSize` to `size`
- Replace `<Navbar.Header>` with `<div className=“navbar-header”>`
- Replace `<Navbar.Form>` with `<div className="navbar-search-form navbar-form navbar-left">`
- Replace `<FormGroup>` with `<Form.Group>`
- Replace `<InputGroup.Addon>` with `<InputGroup.Prepend><InputGroup.Text>` and `<InputGroup.Append><InputGroup.Text>`
- All required images have a default prop at the end now, example: `const us_flag = require("../assets/img/flags/US.png");` was changed to `const us_flag = require("../assets/img/flags/US.png");`
- Rename all .jsx files to .js
- Added Row and Col inside StatsCard
- Delete eventKey from NavDropdown components
- Deleted noCaret from NavDropdown components
- Replace Navbar fluid with Navbar → Container fluid
- Add fontawesome as dependencie instead of font link insde public/index.html, it is now imported insde src/index.js
- In addition to these changes, we’ve chaned the structure of the pages and components as well to match those from the HTML version of the product: https://www.creative-tim.com/product/light-bootstrap-dashboard

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
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for _.jsx_, _.js_, _.html_ and _.css_ files
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

- node-sass 4.6.1 → 4.12.0
- react 16.2.0 → 16.8.6
- react-bootstrap 0.32.1 → 0.32.4
- react-chartist 0.13.1 → 0.13.3
- react-dom 16.2.0 → 16.8.6
- react-router-dom 4.2.2 → 5.0.0
- react-scripts 1.1.1 → 3.0.0

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
