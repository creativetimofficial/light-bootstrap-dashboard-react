import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Components from 'layouts/Components/Components.jsx';

var indexRoutes = [
  { path: "/", name: "Home", component: Dashboard },
  { path: "/components#license-row", name: "Documentation", component: Components },
];

export default indexRoutes;
