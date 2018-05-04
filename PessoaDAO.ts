import {DAOInterface} from './DAOInterface'
import Pessoa from './Pessoa'

export class PessoaDAO implements DAOInterface {
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('lógica de insert')
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('lógica de atualizar')
        return true
    }
    remover(id: number): Pessoa{
        console.log('lógica de remover')
        return new Pessoa('','')
    }
    selecionar(id: number): Pessoa {
        console.log('lógica de selecionar')
        return new Pessoa('','')
    }
    selecionarTodos(): [Pessoa] {
        console.log('lógica de selecionar todos')
        return [new Pessoa('','')]
    }
}