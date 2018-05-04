import {DAOInterface} from './DAOInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDAO implements DAOInterface {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('lógica de insert')
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('lógica de atualizar')
        return true
    }
    remover(id: number): Concessionaria{
        console.log('lógica de remover')
        return new Concessionaria('',[])
    }
    selecionar(id: number): Concessionaria {
        console.log('lógica de selecionar')
        return new Concessionaria('',[])
    }
    selecionarTodos(): [Concessionaria] {
        console.log('lógica de selecionar todos')
        return [new Concessionaria('',[])]
    }
}