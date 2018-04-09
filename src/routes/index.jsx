import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Documentation from "layouts/Documentation/Documentation.jsx";

const indexRoutes = [
  { path: "/documentation", name: "Components", component: Documentation },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
