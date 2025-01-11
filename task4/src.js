let datasource = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};



function get_total_value(object) {
    let acc = 0;
    // Usando Object.values() para obter um array com todos os valores
    acc = Object.values(object).reduce((total, currentValue) => total + currentValue, 0);
    return acc;
}
total = get_total_value(datasource)


function show_percent(object, total){

    for (let estado in object) {
        let percentual = (object[estado] / total) * 100;
        console.log(`O estado ${estado} teve participação percentual de ${percentual.toFixed(2)}%`);
    }
}
show_percent(datasource, total)