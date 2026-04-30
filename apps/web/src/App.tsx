import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ThreatDashboard from './pages/ThreatDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">Detection engineering is tuning the high-fidelity models for this module. Visibility will be restored shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ThreatDashboard />} />
          <Route path="/alerts" element={<Placeholder name="Active Alert Management Console" />} />
          <Route path="/risk" element={<Placeholder name="Dynamic Identity Risk Scoring" />} />
          <Route path="/timelines" element={<Placeholder name="Attack Reconstruction Timelines" />} />
          <Route path="/hunting" element={<Placeholder name="Advanced Threat Hunting Workspace" />} />
          <Route path="/playbooks" element={<Placeholder name="Automated Response Playbooks" />} />
          <Route path="/rules" element={<Placeholder name="Detection Rule Configuration" />} />
          <Route path="/logs" element={<Placeholder name="Federated Log Explorer" />} />
          <Route path="/reporting" element={<Placeholder name="SOC Performance & KPI Reporting" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Integration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
