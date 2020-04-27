<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>adscharts</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    </head>
    <body>



        <div class="container">
            <p>Prima milestone</p>
            <canvas id="grafico-linea"></canvas>
        </div>
        <div class="container">
            <p>Seconda milestone</p>
            <div class="secondo-grafico-linea">
                <canvas id="grafico-linea-due"></canvas>
            </div>
            <div class="grafco-a-torta">
                <canvas id="grafico-torta"></canvas>
            </div>
        </div>
        <div class="container">

        </div>



        <div class="container">
            <p>Terza milestone</p>
            <?php

                $access = $_GET['level'];

            ?>

            <?php if ($access == 'guest') {; ?>
                <div class="livello-guest">
                    <canvas id="grafico-linea-tre"></canvas>
                </div>
            <?php } elseif ($access == 'employee') {; ?>
                <div class="livello-employee">
                    <canvas id="grafico-linea-tre"></canvas>
                    <canvas id="grafico-torta-due"></canvas>
                </div>
            <?php } elseif ($access == 'clevel') {; ?>
                <div class="livello-clevel">
                    <canvas id="grafico-linea-tre"></canvas>
                    <canvas id="grafico-torta-due"></canvas>
                    <canvas id="grafico-team"></canvas>

            <?php }; ?>
        </div>

        </div>




        <?php include 'database.php'; ?>
        <!-- <script>


        var data = <?php /* echo json_encode($data); */ ?>
        var mesi = ['Gennaio', 'Febbraio','Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

        var ctx = $('#grafico-linea');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: mesi,
                datasets: [{
                    label: 'Vendite',
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    data: data
                }]
            }
        });
        </script> -->

         <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
