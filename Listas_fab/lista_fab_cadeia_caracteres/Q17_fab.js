import prompt from 'prompt-sync'
const input = prompt()


function main(){

    console.log('Digite o texto e o intervalo do trecho desejado (ex: texto, 10, 20): ')
    const comando = input('=> ').split(', ')

    pegar_trecho_desejado(comando)
}


function pegar_trecho_desejado(comando){
    const caracteres_texto = comando[0]
    const inicio_intervalo = Number(comando[1])
    const final_intervalo = Number(comando [2])
    let trecho_a_ser_exibida =  ''

  for(let i = inicio_intervalo- 1; i < (final_intervalo - 1); i++){
      trecho_a_ser_exibida += caracteres_texto[i]
  }

  console.log(trecho_a_ser_exibida)
}



main()