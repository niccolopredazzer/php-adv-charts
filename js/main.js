$(document).ready(function () {

    var mesi = ['Gennaio', 'Febbraio','Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    //milestone 1

    $.ajax({
            url: 'server.php',
            method: 'GET',
            success: function (data) {

                graficoLinea('#grafico-linea', mesi, data);
            },
            error: function () {
                alert('errore');
            }
        });

    //milestone 2

    $.ajax({
        url: 'server2.php',
        method: 'GET',
        success: function (data) {
            graficoLinea('#grafico-linea-due', mesi, data.fatturato.data);
            graficoTorta('#grafico-torta', data);

        },
        error: function () {
            alert('errore')
        }
    });

    //milestone 3

    $.ajax({
        url: 'server3.php',
        method: 'GET',
        success: function (data) {
            var rawData = data;
            var datiMulti = dataGraficoMulti(rawData);
            graficoLinea('#grafico-linea-tre', mesi, data.fatturato.data);
            graficoTorta('#grafico-torta-due', data);
            graficoTeam('#grafico-team', mesi, datiMulti.data.Team1, datiMulti.data.Team2, datiMulti.data.Team3);
        },
        error: function () {
            alert('errore')
        }
    });

    // FUNCTIONS


    function dataGraficoMulti(data) {
        for (var key in data) {
            if (key == 'team_efficiency') {
                if (data[key]['type'] == 'line') {
                    var datiMulti = data[key];
                }
            }
        }
        return datiMulti;
    }

    function graficoLinea(index, labels, data) {
        var ctx = $(index);
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'vendite per mese',
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    data: data
                }]
            }
        });
    };

    function graficoTorta (index, data) {
        var sellers = Object.keys(data.fatturato_by_agent.data);
        var vendite = Object.values(data.fatturato_by_agent.data);
        var ctx = $(index);
        var chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: sellers,
                datasets: [{
                    data: vendite,
                    backgroundColor: ['lightyellow', 'lightblue', 'lightcoral', 'lightgreen']
                }]
            },
        });
    }

    function graficoTeam (index, labels, data1, data2, data3) {
       var ctx = $(index);
       var chart = new Chart(ctx, {
       type: 'line',
       data: {
           labels: labels,
           datasets: [{
                   label: 'Team 1',
                   backgroundColor: 'rgba(232,232,232,0.1)',
                   borderColor: 'green',
                   data: data1
               },
               {
                   label: 'Team 2',
                   backgroundColor: 'rgba(232,232,232,0.3)',
                   borderColor: 'blue',
                   data: data2
               },
               {
                   label: 'Team 3',
                   backgroundColor: 'rgba(232,232,232,0.5)',
                   borderColor: 'red',
                   data: data3
               }
           ]
       },

   });
}




});
