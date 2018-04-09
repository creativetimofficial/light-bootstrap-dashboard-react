import RowButtons from 'layouts/Documentation/Rows/RowButtons.jsx';
import RowCard from 'layouts/Documentation/Rows/RowCard.jsx';
import RowCharts from 'layouts/Documentation/Rows/RowCharts.jsx';
import RowCheckbox from 'layouts/Documentation/Rows/RowCheckbox.jsx';
import RowDropdown from 'layouts/Documentation/Rows/RowDropdown.jsx';
import RowGettingStarted from 'layouts/Documentation/Rows/RowGettingStarted.jsx';
import RowIcons from 'layouts/Documentation/Rows/RowIcons.jsx';
import RowInputs from 'layouts/Documentation/Rows/RowInputs.jsx';
import RowLicense from 'layouts/Documentation/Rows/RowLicense.jsx';
import RowMap from 'layouts/Documentation/Rows/RowMap.jsx';
import RowNavigation from 'layouts/Documentation/Rows/RowNavigation.jsx';
import RowNotifications from 'layouts/Documentation/Rows/RowNotifications.jsx';
import RowRadio from 'layouts/Documentation/Rows/RowRadio.jsx';
import RowTable from 'layouts/Documentation/Rows/RowTable.jsx';
import RowTooltip from 'layouts/Documentation/Rows/RowTooltip.jsx';

const documentationRoutes = [
  { path: "/documentation/getting-started", name: "Getting Started", component: RowGettingStarted },
  { path: "/documentation/license", name: "License", component: RowLicense },
  { path: "/documentation/buttons", name: "Buttons", component: RowButtons },
  { path: "/documentation/cards", name: "Cards", component: RowCard },
  { path: "/documentation/charts", name: "Charts", component: RowCharts },
  { path: "/documentation/checkboxes", name: "Checkboxes", component: RowCheckbox },
  { path: "/documentation/dropdowns", name: "Dropdowns", component: RowDropdown },
  { path: "/documentation/icons", name: "Icons", component: RowIcons },
  { path: "/documentation/inputs", name: "Inputs", component: RowInputs },
  { path: "/documentation/maps", name: "Maps", component: RowMap },
  { path: "/documentation/navigation", name: "Navigation", component: RowNavigation },
  { path: "/documentation/notifications", name: "Notifications", component: RowNotifications },
  { path: "/documentation/radios", name: "Radios", component: RowRadio },
  { path: "/documentation/tables", name: "Tables", component: RowTable },
  { path: "/documentation/tooltips", name: "Tooltips", component: RowTooltip },
  { redirect: true, path:"/documentation", to:"/documentation/getting-started", name: "Documentation" }
];

export default documentationRoutes;
