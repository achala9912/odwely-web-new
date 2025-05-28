import Home from "@/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";

function OdwelyRouter() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default OdwelyRouter;
