var botao = document.getElementById('loginbtn')


function logar(){
    var login = document.getElementById('nome').value;
    var senha = document.getElementById('password').value;

    if(login == "Admin" && senha == '12345'){
        alert('tudo certo')
        location.href = './ADM/index.html';
    }
    else{
        alert('Nome ou Senha incorreto')
    }
}
