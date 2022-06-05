import fs from 'fs';
const input = fs.readFileSync('lista_q23', 'utf-8')
const entradas = input.split('\n')


function main(){

const msg_retorno = calcular_valores()
console.log(msg_retorno)    

}

function calcular_valores(){

    let index = 0

    let msg_retorno = ''
    let dados

    while(index < entradas.length){
      
       dados = entradas[index].split(';')
      const num_ident = dados[0]
      const hrs_trabalhadas = Number(dados[1])
      const num_dependentes = Number(dados[2])
      const salario_bruto = (hrs_trabalhadas * 12) + (num_dependentes * 40)
   
      msg_retorno += pegar_salario_liquido(num_ident,salario_bruto)
      index++
    }
    return msg_retorno

}

function pegar_salario_liquido(identificacao, salario_bruto){

    const INSS = salario_bruto * 0.085
    const IR = salario_bruto * 0.005
    const salario_liquido = salario_bruto - (INSS + IR)
    return `n° identificação ${identificacao}
INSS: R$ ${INSS.toFixed(2)}
IR: R$ ${IR.toFixed(2)}
salário líquido: R$ ${salario_liquido}\n\n`
}

main()