import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home-page";
import Layout from "./components/layout";
import { AuthProvider } from "./components/auth/AuthProvider";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminPage from "./components/admin/inde";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="news" element={<HomePage />} />
          <Route path="news/:id" element={<HomePage />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <div>Profile Page - Cần đăng nhập</div>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
