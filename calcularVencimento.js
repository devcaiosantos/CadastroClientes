var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {

    var cliente = clientes[i];

    var dtassinatura = cliente.querySelector(".info-dtassinatura");
    var assinatura = dtassinatura.textContent;
    

    var dtassinatura = cliente.querySelector(".info-tmassinatura");
    var tempo = tmassinatura.value;

    var tdVencimento = cliente.querySelector(".info-vencimento");
    
    var vencimento = calculaVencimento(assinatura, tempo);
    tdVencimento.textContent = vencimento ;
    
 
}

function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
  }
function formatDate(date) {
    const d = zeroFill(date.getDate());
    const mo = zeroFill(date.getMonth() + 1);
    const y = zeroFill(date.getFullYear());
    const h = zeroFill(date.getHours());
    const mi = zeroFill(date.getMinutes());
    const s = zeroFill(date.getSeconds());
  
    return `${d}/${mo}/${y}`;
  }


function calculaVencimento(assinatura, tempo) {
    var data = new Date(assinatura)
    if (tempo == "1") {
        data.setDate(data.getDate() + 1)
        return formatDate(data)
    } 
    else if(tempo == "2") {
        data.setDate(data.getMonth() + 1)
        return formatDate(data)
    }else {

        data.setDate(data.getMonth() + 6)
        return formatDate(data)
        }
        
    }
        

    

