import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [role, setRole] = useState<"ANALISTA" | "OPERACOES">("ANALISTA");

  function handleLogin() {
    localStorage.setItem("rsdc_role", role);
    nav("/app");
  }

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Login</h1>

      <label>Perfil (temporário)</label>
      <div>
        <select value={role} onChange={(e) => setRole(e.target.value as any)}>
          <option value="ANALISTA">ANALISTA</option>
          <option value="OPERACOES">OPERACOES</option>
        </select>
      </div>

      <button style={{ marginTop: 12 }} onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
}