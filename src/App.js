import React from 'react'
import ListaDeAlumnos1 from './1ListaDeAlumnos'
import ListaDeAlumnos2 from './2Iteracion'
import ListaDeAlumnos3 from './3ListaDeAlumnos'
import CicloDeVida from './4ComponenteEjemplo'

function App() {
  return (
    <div>
      <h2>Ejemplo Listas</h2>
      <ListaDeAlumnos1 />
      <h2>Ejemplo Iteración</h2>
      <ListaDeAlumnos2 centrado="center" sinViñeta="none"/>
      <h2>Ejemplo Keys Prop</h2>
      <ListaDeAlumnos3 />
      <h2>Ejemplo Ciclo de vida</h2>
      <CicloDeVida />
    </div>
  )
}
export default App

