import prompt from 'prompt-sync'
const input = prompt()


function main(){

    console.log('Digite a msg a ser exibida na diagonal (ex: Algoritmos): ')
    const comando = input('=> ')

    retorno(comando)
}


function retorno(comando){ 

    let num_espacos = 1
    const caracteres = comando.split('')
    let msg_a_ser_exibida =  ''

  for(let i = 0; i < caracteres.length; i++){
      msg_a_ser_exibida += org_retorno(num_espacos,caracteres[i])
      num_espacos++
  }

  console.log(msg_a_ser_exibida)
}

function org_retorno(num_espacos,caractere){

  let espacos = 0
  let msg_retorno = ''
  
    while(espacos <= num_espacos){
      if(espacos < num_espacos){
        msg_retorno += ' '
      }else{
        msg_retorno += `${caractere}\n`
      }
        espacos++
    }

    return msg_retorno
}


main()