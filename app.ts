import Carro, {} from './Carro'
import Pessoa, {} from './Pessoa'
import Concessionaria,{} from './Concessionaria'
/* ---- criar carros ---*/

let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarros()) 

let cliente = new Pessoa('João', 'Veloster')
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())