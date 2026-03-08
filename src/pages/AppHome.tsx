import { Link } from "react-router-dom";

export default function AppHome() {
  const role = localStorage.getItem("rsdc_role") || "—";

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>rsdc-crm</h1>
      <p>
        Perfil: <strong>{role}</strong>
      </p>

      <ul>
        <li><Link to="/app/cases">Casos</Link></li>
        <li><Link to="/app/work-queue">Work Queue</Link></li>
      </ul>
    </div>
  );
}