import { Link, useParams } from "react-router-dom";

export default function CaseDetails() {
  const { id } = useParams();

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>Caso #{id}</h1>
        <Link to="/app/cases">voltar</Link>
      </div>

      <div style={{ marginTop: 16 }}>
        <button>Dossier</button>{" "}
        <button>Interações</button>{" "}
        <button>Financeiro</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <a
          href={`https://wa.me/351000000000?text=${encodeURIComponent(
            "Olá! (mensagem placeholder do rsdc-crm)"
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Abrir WhatsApp
        </a>
      </div>
    </div>
  );
}