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
      
      {/* CORRECCIÓN: Usar la prop 'estado' con el valor de string esperado */}
      <main className='flex flex-col items-center gap-6 p-6'>
      <BadgeEstado estado="Activo" />
      </main>
      <BadgeEstado estado="Inactivo" />
      
    </main>
  );
}