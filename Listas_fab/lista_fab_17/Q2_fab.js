import prompt from 'prompt-sync';
const input = prompt()

function main(){

  
const valor_final = Number(input('Digite o valor: '))

    pegar_sequencia(valor_final)
}


function pegar_sequencia(valor){

  let valor_par_a_ser_exibido = 1

  while(valor_par_a_ser_exibido <= valor){
      if(valor_par_a_ser_exibido % 2 === 0){
     console.log(valor_par_a_ser_exibido)
      }
     valor_par_a_ser_exibido++
  }

}
main()