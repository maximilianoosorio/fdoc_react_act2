import styles from './FichaProducto.module.css';

export default function FichaProducto() {
  return (
    <div className={styles.card}>
        <h2 className={styles.producto}>camiseta</h2>
        <p className={styles.precio}>42.900 </p>
        <button className={styles.boton}> Agregar </button>
    </div>
  )
}

