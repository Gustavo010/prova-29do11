const mysql = require('mysql')
const con = mysql.createConnection({
    'user':'root',
    'database':'loja',
    'host':'localhost'
})

module.exports ={
    con
}