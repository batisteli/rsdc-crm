import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>rsdc-crm</h1>
      <p>Dashboard (em construção)</p>
      <Link to="/login">Entrar</Link>
    </div>
  );
}