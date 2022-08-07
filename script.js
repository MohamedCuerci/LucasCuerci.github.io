function criptografar(texto){
    let lista1 = texto.split("")

    let lista2 = lista1.map(function(letra){
        if(letra === "a"){
            return "ai"
        }else if(letra === "e"){
            return "enter"
        }else if(letra === "i"){
            return "imes"
        }else if(letra === "o"){
            return "ober"
        }else if(letra === "u"){
            return "ufat"
        }else{
            return letra
        }
    });

    return lista2.join("")
}

function descriptografar(texto){
    resultado1 = texto.replace(/ai/g, "a")
    resultado2 = resultado1.replace(/enter/g, "e")
    resultado3 = resultado2.replace(/imes/g, "i")
    resultado4 = resultado3.replace(/ober/g, "o")
    resultado5 = resultado4.replace(/ufat/g, "u")

    return resultado5
}

function texto_para_criptografar() {

    let texto_area_1 = document.getElementById('campo1').value //pega o texto do textarea 1
    let textarea = document.querySelector('textarea')
    let texto_area_2 = document.getElementById('campo2')
    let texto_criptografado = criptografar(texto_area_1);
    texto_area_2.value = texto_criptografado
    textarea.value = "";  //limpa textarea

}

function texto_para_descriptografar() {

    let texto_area_2 = document.getElementById('campo2').value
    let texto_area_1 = document.getElementById('campo1')

    let texto_descriptografado = descriptografar(texto_area_2);

    texto_area_1.value = texto_descriptografado;
    //texto_area_2.value = " ";
    //textarea.value = "";
}


/*
texto = "dale dele doly"

console.log(criptografar(texto));
let texto_criptografado = criptografar(texto) //dailenter denterlenter doberly

console.log(descriptografar(texto_criptografado));
let texto_descriptografado = descriptografar(texto_criptografado) //dale dele
*/
