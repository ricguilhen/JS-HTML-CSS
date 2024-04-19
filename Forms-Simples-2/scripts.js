function conf(){
    if(document.getElementById('nome').value === '' || document.getElementById('cont').value === ''|| document.getElementById('qtd').value === ''|| document.getElementById('dis').value === ''){
        alert('\nPreencha todos os campos');
    } else{
        if(confirm("Tem certeza?")){
        document.getElementById('nome').value = '';
        document.getElementById('cont').value = '';
        document.getElementById('qtd').value = '';
        document.getElementById('dis').value = '';
        document.getElementById('opcao').value = document.getElementById('opcao').value = 's';
        }else{
            
        }
    }
}