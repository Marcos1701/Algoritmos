import prompt from 'prompt-sync'
const input = prompt()


function main(){
    
    console.log('Digite a frase: ')
    const frase = input('=> ')

    const frase_com_caracteres_duplicados = pegar_nova_frase(frase)

    console.log(frase_com_caracteres_duplicados)
}


function pegar_nova_frase(frase){

    let frase_retorno = ''
  for(let caractere of frase){
      frase_retorno += caractere + caractere
  }
  return frase_retorno
}

main()