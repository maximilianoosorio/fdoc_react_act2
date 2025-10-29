
/*
  Comentario: CSS Global (app/globals.css)
  Apropiado para estilos que se reutilizan ampliamente (ej: .tarjeta, reset, fuentes base)
  o para definir el layout principal.
  Limitación: Las clases son accesibles globalmente, lo que puede causar
  conflictos si múltiples componentes usan accidentalmente el mismo nombre de clase.
  */
export default function PerfilGlobal() {
  return (
    <div className='tarjeta'>
        <h2 className='titulo'>Tienda Ropa</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam repudiandae repellendus vero fugit neque voluptatum delectus ipsa? Corporis nesciunt dicta itaque nihil labore minima voluptatum. Eaque sequi corporis soluta!</p>
        <button className='boton'> ver perfil </button>
    </div>
  )
}
