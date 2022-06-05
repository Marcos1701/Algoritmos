import prompt from 'prompt-sync'
const input = prompt()


function main(){
  
    console.log('Digite a frase: ')
    const frase = input('=> ')
    const caractere_substituto = input('Caractere q vai substituir as consoantes: ')
 
    const frase_modificada = trocar_consoantes_por_hashteg(frase, caractere_substituto)

    console.log(frase_modificada)

}

function trocar_consoantes_por_hashteg(frase,substituto){

 let nova_frase = ''
    for (let letra of frase){

       if((eh_letra(letra)) && (!eh_vogal(letra))){
         nova_frase += substituto
       }else{
           nova_frase += letra
       }
    }
    return nova_frase
}

function eh_letra(caractere){

   const cod_caractere = caractere.charCodeAt(0)
   return ((65 <= cod_caractere && cod_caractere <= 90) ||(97 <= cod_caractere && cod_caractere <= 122))
  
}

function eh_vogal(caractere){
    const vogais = 'aeiouAEIOUáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕ'

   for(let vogal of vogais){
       if(vogal === caractere){
           return true
       }
   }
   return false
}

main()