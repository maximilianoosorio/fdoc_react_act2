// page.js (Corregido)

import AvisoInline from './components/AvisoInline';
import BadgeEstado from './components/BadgeEstado';
import FichaProducto from './components/FichaProducto';
import PerfilGlobal from './components/PerfilGlobal';

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-6 p-6">
      <PerfilGlobal />

      <FichaProducto />

      <AvisoInline />

      {/* Estado Activo */}
      <BadgeEstado estado="Activo" />

      {/* Estado Inactivo */}
      <BadgeEstado estado="Inactivo" />
    </main>
  );
}
