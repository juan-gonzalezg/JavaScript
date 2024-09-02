const generarAcronimo = (frase) => {
   return frase.split(' ')
               .map(palabra => palabra.charAt(0))
               .join('');
};