const DB = require('nedb-async').default;

const db = new DB({ filename: '../db/historicoOS.db', autoload: true });

const OS = {
    cadastrar: dados => db.asyncInsert( dados ),
    
    buscarTodos: ()  => db.asyncFind({}),
    
    buscar: condicao => db.asyncFindOne( condicao ),
    
    alterar:condicao => db.asyncUpdate( condicao, {} ),
    
    excluir:condicao => db.asyncRemove( condicao ),
}

export default OS