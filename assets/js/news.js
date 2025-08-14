function leiamais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnleiamais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        
        maisTexto.style.display = "none";

        btnLeiaMais.innerHTML = "Leia Mais"
    }

    else{
        pontos.style.display = "none";
        
        maisTexto.style.display = "inline";

        btnLeiaMais.innerHTML = "Leia Menos"
    }
}