import fs from 'fs';
const input = fs.readFileSync('lista_q24', 'utf-8')
const entradas = input.split('\n')


function main(){

pegar_media_salarial_e_de_filhos_da_populacao()

}


function pegar_media_salarial_e_de_filhos_da_populacao(){

  let soma_salario = 0
  let soma_qtd_filhos = 0
  let num_pessoas_com_salario_menor_igual_1000 = 0
  
  let i = 0

  for(;i < entradas.length;i++){
    const dados = entradas[i].split(';')  
    const salario = Number(dados[0])

    if(salario <= 1000) {
        num_pessoas_com_salario_menor_igual_1000++
    }

    soma_salario += salario
    soma_qtd_filhos += Number(dados[1])

  }
  const media_salarios = soma_salario / i
  const media_qtd_filhos = soma_qtd_filhos / i

  console.log(`\nMédia salarial da população = R$ ${media_salarios.toFixed(2)}
Média de filhos da população: ${media_qtd_filhos.toFixed(0)} filhos
Percentual de pessoas com salário menor ou igual a R$ 1000: ${((num_pessoas_com_salario_menor_igual_1000/i) * 100).toFixed(2)}%\n`)
}



main()