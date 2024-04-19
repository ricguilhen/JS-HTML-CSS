function  calc(){
    
    let lado = document.getElementById('lado').value;

    if(document.getElementById('opcao').value === 'area'){
    let area = lado * lado;

    document.getElementById('result').innerHTML = `A área do quadrado é ${area}`;
    } else{
        let perimetro = lado * 4;

        document.getElementById('result').innerHTML = `O perímetro do quadrado é ${perimetro}`;
    }
}