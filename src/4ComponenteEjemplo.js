import React, { useState, useEffect } from 'react'

function CicloDeVida() {
  const [contador, setContador] = useState(0)
  //Montaje y Actualización: useEffect sin dependencias ([]) se ejecuta después de cada renderizado.
  useEffect(() => {
    console.log('Componente montado o actualizado')
    //Desmontaje: la función de limpieza dentro de useEffect se ejecuta antes de que el componente se desmonte.
    return () => {
      console.log('El componente se desmontará')
    }
  }, []) //[] indica que este efecto se ejecuta solo una vez después del primer renderizado (Montaje).
  // Actualización: useEffect con dependencias se ejecuta cada vez que cambia alguna dependencia.
  useEffect(() => {
    console.log(`El recuento cambió a ${contador}`)
  }, [contador]) //Se ejecuta cada vez que "contador" cambia.
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  )
}
export default CicloDeVida




