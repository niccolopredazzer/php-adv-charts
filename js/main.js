$(document).ready(function () {

    $.ajax({
            url: 'server.php',
            method: 'GET',
            success: function (data) {
                var mesi = ['Gennaio', 'Febbraio','Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                graficoLinea(mesi, data);
            },
            error: function () {
                alert('errore');
            }
        });


    function graficoLinea(labels, data) {
        var ctx = $('#grafico-linea');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Vendite',
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    data: data
                }]
            }
        });
    };

});
