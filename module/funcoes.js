/******************************************************************************
 * Objetivo: Realizar funções do whatsapp percorrendo a api que foi entregue
 * Data: 08/04/2026
 * Autor: Allan de Sousa Almeida
 * versão: 1.0
 ******************************************************************************/


const whatsApp = require('./contatos.js')


const getDadosContato = function(){
       
    return whatsApp.contatos['whats-users']
    
        
}

const getDadosUsuario = function(){
    let printDados = []

    whatsApp.contatos['whats-users'].forEach(function(usuario){
        
        printDados.push({
            nome : usuario.account,
            foto : usuario['profile-image'],
            apelido : usuario.nickname,
            numero : usuario.number,
            corFundo : usuario.background,
            dataCriacao: usuario['created-since'].start,
            dataEncerramento: usuario['created-since'].end
        })
            
    })
    return{
        printDados
    }
}

const getDadosComuns = function(dadoPesquisa){
    let dadosNaoSensiveis = []
    let status = false

    whatsApp.contatos['whats-users'].forEach(function(usuario){
        
        if (
            String(usuario.number).toUpperCase() == String(dadoPesquisa).toUpperCase() 
            ||String(usuario.account).toUpperCase() == String(dadoPesquisa).toUpperCase() 
            ||String(usuario.nickname).toUpperCase() == String(dadoPesquisa).toUpperCase()
            ) {

            status = true
            dadosNaoSensiveis.push({
                nome : usuario.account,
                foto : usuario['profile-image'],
                apelido : usuario.nickname,
                numero : usuario.number,
            })
            
        }
        
            
    })
    return dadosNaoSensiveis 
}

const getDadosConversas = function(){

}

console.log(getDadosComuns('Ricky'))