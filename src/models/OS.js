const DB = require('nedb-async').default;

const db = new DB({ filename: '../db/historicoOS.db', autoload: true });

export default {
    cadastrar: dados => db.asyncInsert( dados ),
    
    buscarTodos: ()  => db.asyncFind({}),
    
    gerarNumero:  () => db.asyncCount({}),
    
    buscar: condicao => db.asyncFindOne( condicao ),
    
    alterar:(condicao, dados) => db.asyncUpdate( condicao, dados ),
    
    excluir:condicao => db.asyncRemove( condicao ),
}