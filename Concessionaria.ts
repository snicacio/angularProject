import {ConcessionariaInterface} from './ConcessionariaInterface';
import  Carro,{} from './Carro'

export default class Concessionaria implements ConcessionariaInterface{



    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
    
    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionarmento(): string {
        return 'De Segunda a Sexta das 08:00 as 18 e Sábado das 08:00 as 12:00'
    }    
}