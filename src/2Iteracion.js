import React from "react";

function ListaDeAlumnos2(props) {
  const alumnos = ["Pilar", "Luciana", "Lucía", "Federico"]
  return (
    <div style={{ textAlign: props.centrado }}>
      <h1>Lista de Alumnos</h1>
      <ul style={{
          listStyleType: props.sinViñeta,
          padding: 0
        }}>
        {alumnos.map((alumno, index) => (
          <li key={index}>{alumno}</li>
        ))}
      </ul>
    </div>
  )
}
export default ListaDeAlumnos2
