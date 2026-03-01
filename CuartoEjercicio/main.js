const estudiantes = [
  { nombre: "Ana", notas: [7, 6, 5] },
  { nombre: "Luis", notas: [4, 5, 6] },
  { nombre: "Carla", notas: [6, 7, 7] },
  { nombre: "Pedro", notas: [3, 4, 5] }
];

const promedio = estudiantes.reduce((acc, {nombre, notas}) =>{
    const sumarNotas = notas.reduce((acc, nota) => acc + nota, 0);
    const promedioIndividual = sumarNotas / notas.length;
    acc.Estudiantes.push({nombre, notas, promedio: promedioIndividual});
    acc.totalNotas += sumarNotas;
    acc.cantidadNotas += notas.length;

    return acc;    
},{Estudiantes: [], totalNotas: 0, cantidadNotas: 0, PromedioClase: 0, mejorEstudiante: ""});

promedio.PromedioClase = promedio.totalNotas / promedio.cantidadNotas;

const mejorEstudiante = (mejorPromedio = 0, nombre = "") => {
    for(let estudiante in promedio.Estudiantes){
    let Promedio = promedio.Estudiantes[estudiante].promedio;
    let name = promedio.Estudiantes[estudiante].nombre;
    if(Promedio > mejorPromedio){
        mejorPromedio = Promedio;
        nombre = name;
        }
    }
    return nombre;
}
promedio.mejorEstudiante = mejorEstudiante();


console.log(promedio);