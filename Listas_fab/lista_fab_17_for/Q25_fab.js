import fs from 'fs';
const input = fs.readFileSync('lista_q25', 'utf-8')
const entradas = input.split('\n')

let qtd_votos_candidato1 = 0
let qtd_votos_candidato2 = 0
let qtd_votos_candidato3 = 0
let qtd_votos_nulos = 0
let qtd_votos_em_branco = 0


function main(){

pegar_qtd_votos_e_msg_retorno()

const vencedor = vencedor_da_eleicao()

retorno_dados(vencedor)
}

function pegar_qtd_votos_e_msg_retorno(){

  for(let i = 0;i < entradas.length;i++){

  const voto = Number(entradas[i])

  conferir_voto(voto)
  }

}

function conferir_voto(voto){

    if(voto === 1){
        qtd_votos_candidato1++
    }else if(voto == 2){
        qtd_votos_candidato2++
    }else if(voto === 3){
        qtd_votos_candidato3
    }else if(voto === 9){
        qtd_votos_nulos++
    }else if(voto === 0){
        qtd_votos_em_branco
    }else{
        console.log(`O numero ${voto} do voto inserido é inválido, logo será desconsiderado..`)
    }
}

function vencedor_da_eleicao(){
 
    const maior_qtd_votos = Math.max(qtd_votos_candidato1,qtd_votos_candidato2,qtd_votos_candidato3,qtd_votos_em_branco,qtd_votos_nulos)
    if(qtd_votos_candidato1 === maior_qtd_votos){
        return `O vencedor foi o candidato 1`
    }else if(qtd_votos_candidato2 === maior_qtd_votos){
        return `O vencedor foi o candidato 2`
    }else if(qtd_votos_candidato3 === maior_qtd_votos){
        return `O vencedor foi o candidato 3`
    }else if(qtd_votos_nulos === maior_qtd_votos){
        return `Não houve vencedor, pois os votos nulos foram a maioria`
    }else if(qtd_votos_candidato2 === maior_qtd_votos){
        return `Não houve vencedor, pois os votos em branco foram a maioria`
    }
}

function retorno_dados(vencedor){


    console.log(`\ntotal de votos candidado 1: ${qtd_votos_candidato1} votos
total de votos candidado 2: ${qtd_votos_candidato2} votos
total de votos candidado 3: ${qtd_votos_candidato3} votos
total de votos nulos: ${qtd_votos_nulos} votos
total de votos em branco: ${qtd_votos_em_branco} votos
${vencedor}\n`)

}


main()