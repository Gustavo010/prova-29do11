drop database if loja;
create database loja;
use loja;


create table funcionarios(
    matricula integer not null primary key auto_increment,
    Nome_Completo varchar(256) not null,
    Data_Desligamento date not null,
    Ultimo_Salario decimal(9,2) not null
);