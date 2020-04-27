$(document).ready(function () {



    //milestone 1

    $.ajax({
            url: 'server.php',
            method: 'GET',
            success: function (data) {
                var mesi = ['Gennaio', 'Febbraio','Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
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
            var mesi = ['Gennaio', 'Febbraio','Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
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
            var mesi = ['Gennaio', 'Febbraio','Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            graficoLinea('#grafico-linea-tre', mesi, data.fatturato.data);
            graficoTorta('#grafico-torta-due', data);
            graficoTeam('#grafico-team', mesi, data);
        },
        error: function () {
            alert('errore')
        }
    });

    // FUNCTIONS

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

    function graficoTorta (index, dataInput) {
        var sellers = Object.keys(dataInput.fatturato_by_agent.data);
        var vendite = Object.values(dataInput.fatturato_by_agent.data);
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

    function graficoTeam (index, labels, data) {
        var ctx = (index);
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: "Primo Team",
                    backgroundColor: 'blue',
                    pointBackgroundColor: 'blue',
                    data: data.Team1.data

                },
                {
                    label: "Secondo team",
                    backgroundColor: 'red',
                    pointBackgroundColor: 'red',
                    data: data.Team2.data

                },
                {
                    label: "Terzo team",
                    backgroundColor:'green',
                    pointBackgroundColor: 'green',
                    data: data.Team3.data

                }
                ]

            }

        });
    }






});
