let datasource = [
	{ "dia": 1, "valor": 22174.1664 },
	{ "dia": 2, "valor": 24537.6698 },
	{ "dia": 3, "valor": 26139.6134 },
	{ "dia": 4, "valor": 0.0 },
	{ "dia": 5, "valor": 0.0 },
	{ "dia": 6, "valor": 26742.6612 },
	{ "dia": 7, "valor": 0.0 },
	{ "dia": 8, "valor": 42889.2258 },
	{ "dia": 9, "valor": 46251.174 },
	{ "dia": 10, "valor": 11191.4722 },
	{ "dia": 11, "valor": 0.0 },
	{ "dia": 12, "valor": 0.0 },
	{ "dia": 13, "valor": 3847.4823 },
	{ "dia": 14, "valor": 373.7838 },
	{ "dia": 15, "valor": 2659.7563 },
	{ "dia": 16, "valor": 48924.2448 },
	{ "dia": 17, "valor": 18419.2614 },
	{ "dia": 18, "valor": 0.0 },
	{ "dia": 19, "valor": 0.0 },
	{ "dia": 20, "valor": 35240.1826 },
	{ "dia": 21, "valor": 43829.1667 },
	{ "dia": 22, "valor": 18235.6852 },
	{ "dia": 23, "valor": 4355.0662 },
	{ "dia": 24, "valor": 13327.1025 },
	{ "dia": 25, "valor": 0.0 },
	{ "dia": 26, "valor": 0.0 },
	{ "dia": 27, "valor": 25681.8318 },
	{ "dia": 28, "valor": 1718.1221 },
	{ "dia": 29, "valor": 13220.495 },
	{ "dia": 30, "valor": 8414.61 }
];

function get_total(array_objects) {
    let menor = Number.MAX_VALUE;  
    let maior = -Number.MAX_VALUE; 
    let total = 0        
    let unable_days = 0

    array_objects.forEach(function(item) {
        if (item.valor > 0) {  
            total += item.valor;

            if (item.valor < menor) {
                menor = item.valor;
            }

            if (item.valor > maior) {
                maior = item.valor;
            }
        } else {
            unable_days++; 
        }
    });

    return {
        total: total,
        unable_days: unable_days,
        menor: menor,
        maior: maior
    };
}



let mensal_info_object = get_total(datasource);
console.log("mensal_info_object", mensal_info_object);



function show_percent(array_objects, mensal_info_object){
	console.log(`O menor faturamento foi: ${mensal_info_object.menor}`);
	console.log(`O maior faturamento foi: ${mensal_info_object.maior}`);

    let media_mensal = mensal_info_object.total /  30 - mensal_info_object.unable_days
    console.log(`media mensal: ${media_mensal}`)

	let acc = 0;  
    array_objects.forEach(function(item) {
        let percentage = item.valor / mensal_info_object.total;
        console.log(`Porcentagem em relação ao total: ${(percentage * 100).toFixed(3)}%`);

        if (item.valor > media_mensal) {
            acc++;
        }
    });
	console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.: ${array_objects[1].menor}`);

}

show_percent(datasource, mensal_info_object)