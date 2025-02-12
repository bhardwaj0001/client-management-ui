import "./App.scss";

import { Routes, Route, Navigate } from "react-router-dom";
import { ClientLayout } from "./pages/Client/ClientLayout/ClientLayout";
import { ClientDashboard } from "./pages/Client/ClientDashboard/ClientDashboard";
import { OpsLayout } from "./pages/Operations/OpsLayout/OpsLayout";
import { OpsDashboard } from "./pages/Operations/OpsDashboard/OpsDashboard";
import { NotFound } from "./pages/NotFound/NotFound";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { CaseDetails } from "./pages/CaseDetails/CaseDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Client Parent Route */}
        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<ClientDashboard />} />{" "}
          <Route path="dashboard" element={<ClientDashboard />} />{" "}
        </Route>

        {/* Ops Parent Route */}
        <Route path="/ops" element={<OpsLayout />}>
          <Route index element={<OpsDashboard />} /> {/* /ops (default page) */}
          <Route path=":caseId" element={<CaseDetails />} />
          <Route path="overview" element={<OpsDashboard />} />{" "}
        </Route>

        {/* 404 - Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
