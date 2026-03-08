import { Link } from "react-router-dom";

export default function Cases() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Casos</h1>
      <p>(placeholder)</p>

      <ul>
        <li><Link to="/app/case/1">Abrir Caso #1</Link></li>
      </ul>
    </div>
  );
}