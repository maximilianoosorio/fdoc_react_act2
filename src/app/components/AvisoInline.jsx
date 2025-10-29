/*
  Comentario: Estilos en Línea (style={{ ... }})
  Apropiado para estilos que cambian dinámicamente según el estado de React
  (ej: color: isActive ? 'green' : 'red') o para estilos muy puntuales.
  Limitación: No permite pseudoclases (:hover), pseudoelementos (::before)
  ni media queries. Dificulta la gestión de estilos grandes y no optimiza su carga.
  */
 export default function AvisoInline() {
  return (
    <div
      style={{
        backgroundColor: '#FEF3C7',
        border: '1px solid #FBBF24',
        borderRadius: '10px',
        padding: '16px',
        maxWidth: '350px',
        margin: '20px auto',
      }}
    >
      <h4 style={{ color: '#92400E', marginBottom: '8px' }}>
        Aviso importante
      </h4>
      <p style={{ color: '#78350F', fontSize: '0.95rem' }}>
        Las ofertas estarán disponibles solo hasta fin de mes. ¡Aprovecha ya!
      </p>
    </div>
  );
}
