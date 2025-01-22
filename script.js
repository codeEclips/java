function verificar(){
 var nel = document.getElementById('nome')
 var del = (nel.value)
 var em = document.getElementById('rodri')
 var ema = (em.value)
 var te = document.getElementById('tele')
 var tel = (te.value)
 if(nel.value.length==0||em.value.length==0||te.value.length==0){
    window.alert('Erro verifique os dados e tente novamente!');
 } else {
    localStorage.setItem('userData',JSON.stringify({nome: nel, email: em, telefone: te}));
    window.alert(`Informações confirmadas!\nNome: ${del} \nEmail: ${ema} \nTelefone: ${tel}`);
    
 }
}
function login(){
var nel = document.getElementById('nome')
 var del = (nel.value)
document.write(`Óla ${del}`);
}
