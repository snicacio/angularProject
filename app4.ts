//import {ConcessionariaDAO} from './ConcessionariaDAO'
import Concesisonaria from './Concessionaria'
import Pessoa from './Pessoa'
import {DAO} from './DAO'
//let dao: ConcessionariaDAO = new ConcessionariaDAO()
let concessionaria = new Concesisonaria('',[])
let pessoa = new Pessoa('','')
//dao.inserir(concessionaria)
//dao.atualizar(concessionaria)
let dao3: DAO<Concesisonaria> = new DAO<Concesisonaria>()
let dao4: DAO<Pessoa> = new DAO<Pessoa>()

dao3.inserir(concessionaria)
dao4.remover(5)
