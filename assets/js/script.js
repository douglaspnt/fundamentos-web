
/*
case sensitive = reconhece letras maiusculas e minusculas 
aceso ao dom pode ser

por tag: getElementByTagName()
por id: getElementById()
por Classe: getElementsByClassName
por seletor Seletor: querySelector()

*/


/*validacao de campo*/

let nome = window.document.getElementById('nome'); 
let email = window.document.getElementById('email') 
let assunto = window.document.getElementById('assunto') /*nao funcionou */
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '70%' 
email.style.width = '70%'
assunto.style.width = '70%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3 ){
        txtNome.innerHTML ='Nome Invalido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}



    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
            txtEmail.innerHTML = 'E-mail Invalido'
            txtEmail.style.color = 'red'
        } else{
            txtEmail.innerHTML = 'E-mail Validado'
            txtEmail.style.color = 'green'
            emailOK = true
        }
    }


 /*nao funcionou */

        function validaAssunto() {
            let txtAssunto = document.querySelector('#txtAssunto')

            if (assunto.value.length >= 100) { /*nao funcionou */
                txtAssunto.innerHTML = 'Texto é muito grande, digite no maximo 100 caracteres'
                txtAssunto.style.color = 'red'
                txtAssunto.style.display = 'block'
            } else{
                txtAssunto.style.display = 'none'
                assuntoOK = true
        }
        }

         /*nao funcionou */

        function enviar (){
            if (nomeOK == true && emailOK == true && assuntoOK == true){
                alert('Formulario enviado com sucesso') /*nao funcionou */
            } else {
                alert('Preencha o formulario corretamente antes de enviar...')

            }
        }
     
        function mapaZoom(){
            mapa.style.width = '800px'
            mapa.style.height = '600px'


        }
    

   function mapaNormal(){

    mapa.style.width = '400px'
    mapa.style.height = '250px'
            
        }

    