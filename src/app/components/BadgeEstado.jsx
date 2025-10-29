// BadgeEstado.jsx/*
//   Apropiado para estilos atómicos y rápidos. Ideal para componentes simples
//   como insignias o botones donde las utilidades bastan.
//   Limitación: Las clases pueden volverse verbose (largas) en elementos complejos.
//   Requiere configuración inicial del framework (postCSS/Tailwind).
//   */
export default function BadgeEstado({ estado = "Activo", size = "md" }) {
  const isActive = String(estado).toLowerCase() === "activo"; // <<-- Espera la prop 'estado'
  // ...
  return (
    <span
      // ...
    >
      {isActive ? "🟢 Activo" : "🔴 Inactivo"}
    </span>
  );
}