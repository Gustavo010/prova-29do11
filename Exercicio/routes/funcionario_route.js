const express = require('express')
const router = express.Router()

const funcionario_controll = require('../controll/funcionario_controll.js')
router.get('/loja/funcionarios', funcionario_controll.all)
router.get('/loja/funcionarios/:id', funcionario_controll.get_id)
router.post('/loja/create',funcinario_controll.add_aluno)
router.delete('/loja/delete/:id', funcionario_controll.delete_aluno)
router.put('/loja/update', funcionario_controll.update_aluno)
module.exports = router