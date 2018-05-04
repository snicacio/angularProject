import {DAOInterface} from './DAOInterface'

export class DAO<T> implements DAOInterface<T> {

    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('lógica de insert')
        return true
    }
    atualizar(object: T): boolean {
        console.log('lógica de atualizar')
        return true
    }
    remover(id: number): T{
        console.log('lógica de remover')
        return Object()
    }
    selecionar(id: number): T {
        console.log('lógica de selecionar')
        return Object()
    }
    selecionarTodos(): [T] {
        console.log('lógica de selecionar todos')
        return [Object()]
    }
}