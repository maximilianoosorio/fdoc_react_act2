import styles from './FichaProducto.module.css';

export default function FichaProducto({ nombre = "Camiseta", precio = "42.900", onAgregar }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.producto}>{nombre}</h2>
      <p className={styles.precio}>${precio}</p>

      <button 
        className={styles.boton}
        onClick={onAgregar}
      >
        Agregar
      </button>
    </div>
  );
}
