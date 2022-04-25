function clicou(){
    const email = document.querySelector("#email").value
    const name = document.querySelector("#name").value
    const senha = document.querySelector("#senha").value
    const confsenha = document.querySelector("#senha-confirm").value

    if (name.length == 0 || email.length == 0 || senha.length == 0 || confsenha.length == 0) { 
        alert(`Por favor complete todos os campos`)
    } else if (senha != confsenha) {
        alert('As senhas não estão iguais!')
    } else {
        confirm(`Cadastrado com sucesso! Bem-vindo`)
    }
}