const filtrarEstudiantesAprobados = (estudiantes) => {
   const aprobados=[]
   for(let i=0; i<estudiantes.length; i++){
      const alumno=estudiantes[i].calificaciones
         const sumaDeNotas=alumno.reduce((acumulador, numeroActual) => {
         return acumulador+numeroActual
      }, 0)
      const promedio=sumaDeNotas/estudiantes[i].calificaciones.length
      if(promedio>=70){
         aprobados.push(estudiantes[i].nombre)
      }
   }
   return aprobados
};