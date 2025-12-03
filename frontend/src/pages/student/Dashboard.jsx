import React, { useState } from 'react';

// Icônes SVG personnalisées
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UserIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

export default function StudentDashboard() {
  const levelRequirements = {
    '3ème année': ['Médecine Interne', 'Pédiatrie', 'Chirurgie Générale'],
    '4ème année': ['Cardiologie', 'Pneumologie', 'Gastro-entérologie', 'Néphrologie'],
    '5ème année': ['Neurologie', 'Endocrinologie', 'Rhumatologie', 'Dermatologie', 'ORL'],
    '6ème année': ['Gynécologie-Obstétrique', 'Urologie', 'Ophtalmologie', 'Orthopédie', 'Anesthésie-Réanimation'],
    '7ème année': ['Urgences Médicales', 'Urgences Chirurgicales', 'Réanimation Médicale', 'Réanimation Chirurgicale', 'Médecine du Travail', 'Epidémiologie', 'Santé Publique'],
  };

  const hospitalsByService = {
    'Médecine Interne': ['EPH Boumerdès', 'Polyclinique Boudouaou', 'Clinique El Amal Boumerdès'],
    'Pédiatrie': ['EPH Boumerdès', 'Hôpital Mère-Enfant Boumerdès', 'Polyclinique Dellys'],
    'Chirurgie Générale': ['EPH Boumerdès', 'Clinique Chirurgicale Boudouaou', 'Hôpital de Khemis El Khechna'],
    'Cardiologie': ['EPH Boumerdès', 'Clinique du Cœur Boumerdès', 'Centre Médical Réghaia'],
    'Pneumologie': ['EPH Boumerdès', 'Centre Anti-Tuberculose Boumerdès', 'Polyclinique Thénia'],
    'Gastro-entérologie': ['EPH Boumerdès', 'Clinique Digestive Boudouaou', 'Polyclinique Corso'],
    'Néphrologie': ['EPH Boumerdès', 'Centre Hémodialyse Boumerdès', 'Clinique Rénale Boudouaou'],
    'Neurologie': ['EPH Boumerdès', 'Clinique Neurologique Réghaia', 'Centre Médical Dellys'],
    'Endocrinologie': ['EPH Boumerdès', 'Polyclinique Boudouaou', 'Centre Diabète Boumerdès'],
    'Rhumatologie': ['EPH Boumerdès', 'Clinique Rhumatologique Thénia', 'Polyclinique Khemis El Khechna'],
    'Dermatologie': ['EPH Boumerdès', 'Clinique Dermatologique Boumerdès', 'Polyclinique Corso'],
    'ORL': ['EPH Boumerdès', 'Clinique ORL Boudouaou', 'Centre Médical Réghaia'],
    'Gynécologie-Obstétrique': ['EPH Boumerdès', 'Maternité Boumerdès', 'Clinique Gynécologique Boudouaou', 'Polyclinique Dellys'],
    'Urologie': ['EPH Boumerdès', 'Clinique Urologique Réghaia', 'Hôpital Khemis El Khechna'],
    'Ophtalmologie': ['EPH Boumerdès', 'Clinique Ophtalmologique Boumerdès', 'Centre Vision Boudouaou'],
    'Orthopédie': ['EPH Boumerdès', 'Clinique Orthopédique Thénia', 'Centre Traumatologie Boumerdès'],
    'Anesthésie-Réanimation': ['EPH Boumerdès', 'Clinique Chirurgicale Boudouaou', 'Hôpital Khemis El Khechna'],
    'Urgences Médicales': ['EPH Boumerdès', 'Service Urgences Boudouaou', 'Polyclinique Corso', 'SAMU Boumerdès'],
    'Urgences Chirurgicales': ['EPH Boumerdès', 'Clinique Chirurgicale Boudouaou', 'Hôpital Khemis El Khechna'],
    'Réanimation Médicale': ['EPH Boumerdès', 'Clinique Réanimation Réghaia'],
    'Réanimation Chirurgicale': ['EPH Boumerdès', 'Clinique Chirurgicale Boudouaou'],
    'Médecine du Travail': ['Centre Médecine du Travail Boumerdès', 'Polyclinique Boudouaou', 'Centre Santé Thénia'],
    'Epidémiologie': ['DSP Boumerdès', 'Centre Epidémiologie Boumerdès', 'Institut Santé Publique'],
    'Santé Publique': ['DSP Boumerdès', 'Centre PMI Boumerdès', 'Polyclinique Corso', 'Centre Protection Sanitaire'],
  };

  const [studentName] = useState('Kaouther Adjou');
  const [level, setLevel] = useState('3ème année');
  const [availableServices, setAvailableServices] = useState(levelRequirements['3ème année']);
  const [service, setService] = useState('Médecine Interne');
  const [availableHospitals, setAvailableHospitals] = useState(hospitalsByService['Médecine Interne']);
  const [hospital, setHospital] = useState(hospitalsByService['Médecine Interne'][0]);
  const [candidatures, setCandidatures] = useState([
    { hospital: 'EPH Boumerdès', service: 'Médecine Interne', status: 'En attente' },
    { hospital: 'Polyclinique Boudouaou', service: 'Pédiatrie', status: 'Acceptée' },
  ]);

  function onLevelChange(e) {
    const lvl = e.target.value;
    setLevel(lvl);
    const services = levelRequirements[lvl] || [];
    setAvailableServices(services);
    const newService = services[0] || '';
    setService(newService);
    setAvailableHospitals(hospitalsByService[newService] || []);
    setHospital((hospitalsByService[newService] || [])[0] || '');
  }

  function onServiceChange(e) {
    const srv = e.target.value;
    setService(srv);
    const hospitals = hospitalsByService[srv] || [];
    setAvailableHospitals(hospitals);
    setHospital(hospitals[0] || '');
  }

  function onApply() {
    if (!service || !hospital) return alert('Veuillez choisir un service et un hôpital.');
    const newApp = { hospital, service, status: 'En attente' };
    setCandidatures(prev => [newApp, ...prev]);
  }

  return (
    <div className="app-root">
      <aside className="sidebar">
        <div className="brand">MedStage</div>
        <nav>
          <a className="nav-link"> <HomeIcon /> <span>Dashboard</span></a>
          <a className="nav-link"> <UserIcon /> <span>Mon Profil</span></a>
          <a className="nav-link"> <ClipboardIcon /> <span>Mes Candidatures</span></a>
        </nav>
      </aside>

      <main className="main-area">
        <header className="header">
          <h1>Dashboard Étudiant</h1>
          <div className="user">
            <UserIcon size={36} />
            <div className="user-name">{studentName}</div>
          </div>
        </header>

        <section className="card apply-card">
          <h2>Postuler à un Stage</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Année scolaire</label>
              <select value={level} onChange={onLevelChange}>
                {Object.keys(levelRequirements).map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Services demandés (selon l&apos;année)</label>
              <select value={service} onChange={onServiceChange}>
                {availableServices.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Choisir Hôpital</label>
              <select value={hospital} onChange={e => setHospital(e.target.value)}>
                {availableHospitals.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="actions">
            <button className="btn-primary" onClick={onApply}>Envoyer Candidature</button>
          </div>
        </section>

        <section className="card table-card">
          <h2>Mes Candidatures</h2>
          <table>
            <thead>
              <tr>
                <th>Hôpital</th>
                <th>Service</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {candidatures.map((c, i) => (
                <tr key={i}>
                  <td>{c.hospital}</td>
                  <td>{c.service}</td>
                  <td className={`status ${c.status === 'Acceptée' ? 'green' : c.status === 'Refusée' ? 'red' : 'orange'}`}>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <style>{`
        * { box-sizing: border-box; }
        .app-root { display: flex; height: 100vh; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: #f6f8fb; }
        .sidebar { width: 260px; background: #ffffff; padding: 28px; border-right: 1px solid #edf0f4; display: flex; flex-direction: column; }
        .brand { font-size: 20px; font-weight: 700; color: #2563eb; margin-bottom: 20px; }
        nav { display:flex; flex-direction:column; gap:12px; }
        .nav-link { display:flex; align-items:center; gap:10px; color:#475569; padding:10px; border-radius:8px; text-decoration:none; cursor:pointer; }
        .nav-link:hover { background: #f1f5f9; color:#1e40af; }

        .main-area { flex:1; padding:28px; overflow:auto; }
        .header { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }
        .header h1 { font-size:24px; margin:0; }
        .user { display:flex; gap:12px; align-items:center; color:#334155; }
        .user-name { font-weight:600; }

        .card { background:#fff; border-radius:12px; padding:18px; box-shadow: 0 6px 18px rgba(15,23,42,0.04); margin-bottom:18px; }
        .apply-card h2, .table-card h2 { margin-top:0; margin-bottom:12px; }

        .form-row { display:flex; gap:16px; flex-wrap:wrap; }
        .form-group { flex:1 1 240px; display:flex; flex-direction:column; }
        label { font-size:13px; color:#64748b; margin-bottom:6px; }
        select { padding:10px 12px; border:1px solid #e6edf3; border-radius:8px; background:#fcfdff; }

        .actions { margin-top:12px; }
        .btn-primary { background:#2563eb; color:#fff; padding:10px 16px; border-radius:8px; border:0; cursor:pointer; font-weight:600; }
        .btn-primary:hover { background:#1e40af; }

        table { width:100%; border-collapse:collapse; }
        th, td { text-align:left; padding:12px 8px; border-bottom:1px solid #eef2f6; color:#0f172a; }
        th { color:#475569; font-weight:600; }

        .status.green { color:#16a34a; font-weight:700; }
        .status.red { color:#dc2626; font-weight:700; }
        .status.orange { color:#d97706; font-weight:700; }

        @media (max-width:900px){
          .sidebar{display:none}
          .form-row{flex-direction:column}
        }
      `}</style>
    </div>
  );
}
