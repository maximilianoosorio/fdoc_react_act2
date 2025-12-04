/**
 * BadgeEstado.jsx
 * Componente pequeño ideal para demostrar estilos atómicos con Tailwind.
 * 
 * Props:
 *  - estado: "Activo" | "Inactivo"
 *  - size: "sm" | "md" | "lg"
 */

export default function BadgeEstado({ estado = "Activo", size = "md" }) {
  const isActive = String(estado).toLowerCase() === "activo";

  // Tamaños dinámicos
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={`
        inline-flex items-center font-semibold rounded-full
        ${sizeClasses[size]}
        ${isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
      `}
    >
      {isActive ? "🟢 Activo" : "🔴 Inactivo"}
    </span>
  );
}
