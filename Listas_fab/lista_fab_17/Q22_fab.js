import fs from 'fs';
const input = fs.readFileSync('lista_q22', 'utf-8')
const entradas = input.split('\n') 



let num_ident_boi_mais_pesado = 0
let maior_peso = 0
let num_ident_boi_menos_pesado = 0
let menor_peso = 0

let indice = 0

function main(){

    //peso para referencia
    [num_ident_boi_menos_pesado, menor_peso] = entradas[indice].split(', ').map(Number)
    [num_ident_boi_mais_pesado, maior_peso] = entradas[indice].split(', ').map(Number)
    
    indice++
     org_dados()
     retorno_dados()
}


function org_dados(){
    
    while(indice < entradas.length){

let [num_ident, peso] = entradas[indice].split(', ').map(Number)
    
    if(peso > maior_peso){
        maior_peso = peso
        num_ident_boi_mais_pesado = num_ident
    }else if(peso < menor_peso){
        menor_peso = peso
        num_ident_boi_menos_pesado = num_ident
    }
    indice++
}
}

function retorno_dados(){

    console.log(`\n    O n° de identificação do boi com o maior peso é ${num_ident_boi_mais_pesado}
    O maior peso registrado foi de ${maior_peso}
    O n° de identificação do boi menos pesado é ${num_ident_boi_menos_pesado}
    O menor peso registrado foi de ${menor_peso}`
    )
}
main()