import { input } from "./funcoes_ocultas.js";

function main(){

    console.log('Digite o valor binário: ')
    const binario = input('=>').split('').map(Number)

    const decimal = pegar_decimal_de_um_binario(binario)

    const hexadecimal = pegar_hex_de_um_binario(binario)

    console.log(`Decimal: ${decimal}
Hexadecimal: ${hexadecimal}`)
}


function pegar_decimal_de_um_binario(binario){

    let decimal = 0


    let indice = 0
    for(let i = (binario.length - 1);i >= 0; i--){
        decimal += binario[i] * 2**indice
        indice++
    }
    return decimal
}

function pegar_hex_de_um_binario(binario){

    let hex = ''

    for(let i = binario.length - 1;i >= 0;i = i - 3){

       const indice_parte = i - 4

       const parte = binario.slice(indice_parte, i)
       console.log(parte)
        
       const valor = pegar_decimal_de_um_binario(parte)

       hex += conferir_valor_hex(valor)
    }

    return hex
}

function conferir_valor_hex(valor){

   if(valor == 15){
       return 'F'
   }else if(valor == 14){
       return 'E'
   }else if(valor == 13){
       return 'D'
   }else if(valor == 12){
       return 'C'
   }else if(valor == 11){
       return 'B'
   }else if(valor == 10){
       return 'A'
   }else{
       return `${valor}`
   }

}


main()