class TicTacToe {
   constructor() {
       this.tablero = [
           ['', '', ''],
           ['', '', ''],
           ['', '', '']
       ];
       this.jugadorActual = 'X';
   }

   imprimirTablero() {
       this.tablero.forEach(row => console.log(row.join(' | ')));
   }

   hacerMovimiento(fila, columna) {
       if(this.tablero[fila][columna]===''){
           this.tablero[fila][columna]=this.jugadorActual
           if(this.verificarGanador()){
               console.log(`¡El jugador ${this.jugadorActual} ha ganado!`)
           }
           this.imprimirTablero()
           if(this.jugadorActual==='X'){
               this.jugadorActual='O'
           }else{
               this.jugadorActual='X'
           }
       }
   }

   verificarGanador() {
       const lineas = [
           // Filas
           [this.tablero[0][0], this.tablero[0][1], this.tablero[0][2]],
           [this.tablero[1][0], this.tablero[1][1], this.tablero[1][2]],
           [this.tablero[2][0], this.tablero[2][1], this.tablero[2][2]],
           // Columnas
           [this.tablero[0][0], this.tablero[1][0], this.tablero[2][0]],
           [this.tablero[0][1], this.tablero[1][1], this.tablero[2][1]],
           [this.tablero[0][2], this.tablero[1][2], this.tablero[2][2]],
           // Diagonales
           [this.tablero[0][0], this.tablero[1][1], this.tablero[2][2]],
           [this.tablero[0][2], this.tablero[1][1], this.tablero[2][0]]
       ];

       for (const linea of lineas) {
           if (linea[0] !== '' && linea[0] === linea[1] && linea[1] === linea[2]) {
               return true;
           }
       }
       return false;
   }
}