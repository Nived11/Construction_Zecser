import { Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminOnlyRoute from "../components/route-protection/AdminOnlyRoute";
import {
  Login,
  Dashboard,
  Gallery,
  Projects,
  Reports,
  Services,
} from "../pages/admin";

const AdminRoutes = () => (
  <>
    <Route path="/admin/login" element={<Login />} />
    <Route path="/admin/*" element={<AdminOnlyRoute />}>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="projects" element={<Projects />} />
        <Route path="reports" element={<Reports />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Route>
  </>
);

export default AdminRoutes;
