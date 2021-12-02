const express = require('express')
const router = express.Router()

const funcionario_controll = require('../controll/funcionario_controll.js')
router.get('/loja/funcionarios', funcionario_controll.getFuncionarios)
router.get('/loja/funcionarios/:matricula', funcionario_controll.getFuncionarioMatricula)
router.delete('/loja/funcionarios/delete/:matricula', funcionario_controll.deleteFuncionario)

module.exports = router