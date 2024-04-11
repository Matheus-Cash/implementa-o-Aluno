const dataatual=Date();
let dataniver=prompt (''Data do próximo Niver)
data=new Date (dataniver + ''T23:59:59);
let diasquefaltam = Math.floor((dataniver-dataatual)/86400000);
documento.queryselector(''#dias_restantes").textcontet=diasquefaltam

