let nomeHeroi = "Hnuke";
let xpHeroi = 2599;
let nivel = "";

if (xpHeroi >= 0 && xpHeroi <= 1000){
    nivel = "Ferro";
}
else if (xpHeroi > 1000 && xpHeroi <= 2000){
    nivel = "Bronze";
}
else if (xpHeroi > 2000 && xpHeroi <= 5000){
    nivel = "Prata";
}
else if (xpHeroi > 5000 && xpHeroi <= 7000){
    nivel = "Ouro";
}
else if (xpHeroi > 7000 && xpHeroi <= 8000){
    nivel = "Platina";
}
else if (xpHeroi > 8000 && xpHeroi <= 9000){
    nivel = "Ascendente";
}
else if (xpHeroi > 9000 && xpHeroi < 10000){
    nivel = "Imortal";
}
else if (xpHeroi >= 10000){
    nivel = "Radiante";
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel);