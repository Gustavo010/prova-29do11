const { con } = require("./mysql_controll.js")
const modelo = require('../model/funcionario_modell.js')

const getFuncionarios = (req,res) => {
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}
const getFuncionarioMatricula = (req,res) => {
    let string = 'select * from funcionarios where matricula = '+ req.params.matricula
    con.query(string, (err, result)=>{
        res.json(result)
    })
}


const deleteFuncionario = (req,res) => {
    let string = 'delete from funcionarios where matricula = ' + req.params.matricula
    con.query(string, (err, result)=>{
       if(result.affectedRows == 0){
           res.send(400).end()
       }else{
           res.send(200).end()
       }
    })
}

module.exports = {
    getFuncionarios,
    getFuncionarioMatricula,
    deleteFuncionario,
}