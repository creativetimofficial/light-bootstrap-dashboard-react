/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import RowButtons from "layouts/Documentation/Rows/RowButtons.js";
// import RowCard from "layouts/Documentation/Rows/RowCard.js";
// import RowCharts from "layouts/Documentation/Rows/RowCharts.js";
// import RowCheckbox from "layouts/Documentation/Rows/RowCheckbox.js";
// import RowDropdown from "layouts/Documentation/Rows/RowDropdown.js";
// import RowGettingStarted from "layouts/Documentation/Rows/RowGettingStarted.js";
// import RowIcons from "layouts/Documentation/Rows/RowIcons.js";
// import RowInputs from "layouts/Documentation/Rows/RowInputs.js";
// import RowLicense from "layouts/Documentation/Rows/RowLicense.js";
// import RowMap from "layouts/Documentation/Rows/RowMap.js";
// import RowNavigation from "layouts/Documentation/Rows/RowNavigation.js";
// import RowNotifications from "layouts/Documentation/Rows/RowNotifications.js";
// import RowRadio from "layouts/Documentation/Rows/RowRadio.js";
// import RowRoutingSystem from "layouts/Documentation/Rows/RowRoutingSystem.js";
// import RowTable from "layouts/Documentation/Rows/RowTable.js";
// import RowTooltip from "layouts/Documentation/Rows/RowTooltip.js";

const documentationRoutes = [
  // {
  //   path: "/documentation/getting-started",
  //   name: "Getting Started",
  //   component: RowGettingStarted
  // },
  // { path: "/documentation/license", name: "License", component: RowLicense },
  // {
  //   path: "/documentation/routing-system",
  //   name: "Routing System",
  //   component: RowRoutingSystem
  // },
  // { path: "/documentation/buttons", name: "Buttons", component: RowButtons },
  // { path: "/documentation/cards", name: "Cards", component: RowCard },
  // { path: "/documentation/charts", name: "Charts", component: RowCharts },
  // {
  //   path: "/documentation/checkboxes",
  //   name: "Checkboxes",
  //   component: RowCheckbox
  // },
  // {
  //   path: "/documentation/dropdowns",
  //   name: "Dropdowns",
  //   component: RowDropdown
  // },
  // { path: "/documentation/icons", name: "Icons", component: RowIcons },
  // { path: "/documentation/inputs", name: "Inputs", component: RowInputs },
  // { path: "/documentation/maps", name: "Maps", component: RowMap },
  // {
  //   path: "/documentation/navigation",
  //   name: "Navigation",
  //   component: RowNavigation
  // },
  // {
  //   path: "/documentation/notifications",
  //   name: "Notifications",
  //   component: RowNotifications
  // },
  // { path: "/documentation/radios", name: "Radios", component: RowRadio },
  // { path: "/documentation/tables", name: "Tables", component: RowTable },
  // { path: "/documentation/tooltips", name: "Tooltips", component: RowTooltip },
  {
    redirect: true,
    path: "/documentation",
    to: "/documentation/getting-started",
    name: "Documentation"
  }
];

export default documentationRoutes;
