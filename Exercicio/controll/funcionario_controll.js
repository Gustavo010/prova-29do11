const { con } = require("./mysql_controll.js")
const modelo = require('../model/funcionario_modell.js')

const all = (req,res) => {
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}
const get_matricula = (req,res) => {
    let string = 'select * from funcionarios where id = '+ req.params.matricula
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

//parte da academia(alterarrrrr)
const add_funcinario = (req,res) => {
    let body = req.body
    let string = 'insert into alunos(nome, peso, altura, nacimento) values (\'' + body.nome + '\',' + body.peso + ',' + body.altura + ',\'' + body.nascimento + '\')' 
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}

const delete_funcionario = (req,res) => {
    let string = 'delete from alunos where id = ' + req.params.id
    con.query(string, (err, result)=>{
       if(result.affectedRows == 0){
           res.send(400).end()
       }else{
           res.send(200).end()
       }
    })
}

const update_funcionario = (req, res) => {
    let nome = '\''+req.body.nome+'\'';
    let peso = req.body.peso
    let altura = req.body.altura
    let nascimento = '\''+req.body.nascimento+'\''
    let id = req.body.id
    let string = `update alunos set nome = ${nome}, peso = ${peso}, altura = ${altura}, nacimento = ${nascimento} where id = ${id}`
    con.query(string,(err, result)=>{
        res.json(result)
    })
}
//alterar
module.exports = {
    all,
    get_matricula,
    add_funcinario,
    delete_funcionario,
    update_funcionario
}