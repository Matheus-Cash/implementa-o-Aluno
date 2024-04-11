const dataatual=Date();
let dataniver=prompt ("Data do próximo Niver")
dataniver = new Date (dataniver + "T23:59:59");
let diasquefaltam = Math.floor((dataniver - dataatual)/86400000);
document.querySelector("#dias_restantes").textContent = diasquefaltam;

