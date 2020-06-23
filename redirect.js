
    var usuario = window.document.querySelector("input#usuario")
    var senha = window.document.getElementById("senha")
    var btnentrar =  window.document.getElementById("btnentrar")
    
    function redirecionar(){   
        if(String(usuario.value) == "caio"){
            if(String(senha.value)=="1234"){
                window.location.href = "tela1.html"
            }else{
                alert("Senha incorreta")
            }
        }else{
            alert("USUARIO INEXISTENTE")
        }}
    btnentrar.addEventListener("click", redirecionar());
