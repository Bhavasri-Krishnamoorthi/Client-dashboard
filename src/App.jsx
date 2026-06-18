import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/:id" element={<Payments />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/create-account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;