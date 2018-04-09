import Dashboard from 'layouts/Dashboard/Dashboard.jsx';
import Components from 'layouts/Components/Components.jsx';

const indexRoutes = [
  { path: "/components", name: "Components", component: Components },
  { path: "/", name: "Home", component: Dashboard },
]

export default indexRoutes;
