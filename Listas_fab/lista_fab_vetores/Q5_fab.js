import {pegar_array}  from './funcoes_ocultas.js'


function main(){

    const vetor = pegar_array(20)
    const S = calcular_s_a_partir_do_vetor(vetor)

    console.log(`S = ${S}`)
}




function calcular_s_a_partir_do_vetor(vetor){


  let indice_a = 19
  let S_resultante = 0
  

  for(let i = 0;i < 20; i++){

    S_resultante += (vetor[i] - vetor[indice_a])**2
  }
  return S_resultante

}


main()