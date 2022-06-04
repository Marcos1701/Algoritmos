import fs from 'fs';
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')

function main(){
  const indice_max_para_leitura = entradas.length
   
 let indice = 1
 let frase = entradas[indice]
    
  while(indice < indice_max_para_leitura){

    // primeira passada (deslocar as letras da frase 
   // em três posições da tabela ASCII)
   const frase_com_as_letras_deslocadas = primeira_passada(frase)

   // segunda passada (inverter a frase por completo)
   const frase_invertida = segunda_passada(frase_com_as_letras_deslocadas)

    // terceira passada (deslocar os caracteres da metade em
   // diante uma posição na tabela ASCII)

   const frase_terceira_mod = terceira_passada(frase_invertida)
   console.log(frase_terceira_mod)

   indice++
   frase = entradas[indice]
  }


}

function primeira_passada(frase){
 let frase_retorno = ''
 let index = 0

 while(index < frase.length){

   if(intervalo_aceito(frase[index])){
     //conferir se o caractere é uma letra
       const cod_caractere = frase[index].charCodeAt(0)
       frase_retorno += (String.fromCharCode(cod_caractere + 3))

    }else{

        frase_retorno += frase[index]
    }

    index ++
   }

return frase_retorno
}


function intervalo_aceito(caractere){

//conferir se um caractere específico é uma letra(maiuscula ou minuscula)
 const cod_caractere = caractere.charCodeAt(0)
return ((65 <= cod_caractere && cod_caractere <= 90) ||(97 <= cod_caractere && cod_caractere <= 122))

}


function segunda_passada(frase){

// inverter frase
 let frase_invertida = ''
 let index = (frase.length - 1)

    while(0 <= index){
        frase_invertida += frase[index]
        index--
   }
 return frase_invertida
}


function terceira_passada(frase){

  let index_metade = (frase.length)/2
  let indice_atual = 0
  let nova_frase = ''

   while(indice_atual < frase.length){
    
     if(indice_atual < index_metade){
        nova_frase += frase[indice_atual]
        
     }else{
        //pegar o codigo do caractere específico da tabela ASCII
       // e retornar com a modficação
      const cod_caractere = frase[indice_atual].charCodeAt(0)
      nova_frase += (String.fromCharCode(cod_caractere - 1))

     }
      indice_atual++
   }
 return nova_frase

}


main()