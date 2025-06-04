import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Patients          from './pages/Patients';
import Especializations          from './pages/Especializations';
import Doctors        from './pages/Doctors';
import Labs         from './pages/Labs';
import Results          from './pages/Results';
import Appointments          from './pages/Appointments';
import Hospitalizations          from './pages/Hospitalizations';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* ---------- Públicas ---------- */}
          <Route path="/"      element={<Patients />} />
          <Route path="/especializations" element={<Especializations />} />
          <Route path="/especialidad/:name" element={<Doctors />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/results" element={<Results />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/hospitalizations" element={<Hospitalizations />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
}