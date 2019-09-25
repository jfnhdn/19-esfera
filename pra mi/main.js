//Grava nas variaveis os valores dos acertos das questoes, caso não tenha respondido ele salva o valor como 0;
var facil = parseFloat(localStorage.getItem("facil") || "0");
var medio = parseFloat(localStorage.getItem("medio") || "0");
var dificil = parseFloat(localStorage.getItem("dificil") || "0");

//Mostra nos elementos a porcentagem de acertos

document.getElementById("facil").innerHTML = facil + "%";
document.getElementById("medio").innerHTML = medio + "%";
document.getElementById("dificil").innerHTML = dificil + "%";





//funcao pra gerar graficos
window.onload = function () {
    var options = {
        animationEnabled: true,
        theme: "dark2",
        title: {
            text: "Meu desempenho"
        },
        axisX: {
            title: "Geographical Coordinates"
        },
        data: [
            {
                // Adicionar as colunas dos temas de matematica
                type: "column",
                
                dataPoints: [
                    
                    { label: "Fácil", y: facil},
                    { label: "Médio", y: medio },
                    { label: "Difícil", y: dificil },
                   
                    
                ]
            }
        ]
    };

    $("#chartContainer").CanvasJSChart(options);
}




