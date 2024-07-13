import React from "react";

function ListaDeAlumnos1() {
	const alumnos = ['Yanina', 'Tobías', 'Héctor', 'Romina']
	return (
		<div>
			<h1>Lista de Alumnos</h1>
			<ul>
				{alumnos.map((alumno, index) => (
					<li key={index}>{alumno}</li>
				))}
			</ul>
		</div>
	)
}
export default ListaDeAlumnos1

