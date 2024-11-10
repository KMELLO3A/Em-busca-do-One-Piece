const avanca = document.querySelectorAll(".btn_proximo")
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo_' + this.getAttribute("data_proximo")

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo')
    })
})