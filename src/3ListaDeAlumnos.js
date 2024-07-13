import React from 'react'

function ListaDeAlumnos3() {
  const alumnos = [
    { id: 1, nombre: 'Paola'},
    { id: 2, nombre: 'Agustín'},
    { id: 3, nombre: 'Thomas'},
    { id: 4, nombre: 'Ariadna .'}
  ]
  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>{alumno.nombre}</li>
        ))}
      </ul>
    </div>
  )
}
export default ListaDeAlumnos3

