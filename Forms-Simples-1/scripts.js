function submit(){
    if(document.getElementById('nome').value === '' || document.getElementById('email').value === ''){
        alert('\nPreencha todos os campos!');
        return false;
    } else{
        if(confirm("\nTem certeza?")){
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            alert("\nEnviado!");
        }else{
            alert("Não enviado!");
        }
    }
}