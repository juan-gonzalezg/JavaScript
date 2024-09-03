function convertirAGeringoso(texto) {
   let geringoso=''
   for(let i=0; i<texto.length; i++){
      if(texto[i]==='a'){
         geringoso=geringoso+texto[i]+"pa"
      }else if(texto[i]==='e'){
         geringoso=geringoso+texto[i]+"pe"
      }else if(texto[i]==='i'){
         geringoso=geringoso+texto[i]+"pi"
      }else if(texto[i]==='o'){
         geringoso=geringoso+texto[i]+"po"
      }else if(texto[i]==='u'){
         geringoso=geringoso+texto[i]+"pu"
      }else{
         geringoso=geringoso+texto[i]
      }
   }
   return geringoso
}