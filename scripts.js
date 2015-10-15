/**
 * Created by session2 on 10/8/15.
 */

alert("Osu is the Best Game");





google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total Hours in Game', 'Total Amount of PP'],
        ['Hvick225, Taiwan', 2925, 10588],
        ['Rafis, Poland', 3495, 10471],
        ['Kuu01, Japan', 1921, 9493],
        ['_index, Russia', 829, 9441],
        ['WubWoofWolf, Poland', 4084, 9428]
    ]);


    var options = {
        title: 'Top 5 Osu! Players in Numbers',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Hours In Game vs Total PP',
            minValue: 0
        },
        vAxis: {
            title: 'Top 5 in the World'
        }
    };





    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);

}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total Plays', 'Accuracy'],
        ['Hvick225, Taiwan', 130555, 99.10],
        ['Rafis, Poland', 156545, 99.11],
        ['Kuu01, Japan', 86121, 98.73],
        ['_index, Russia', 37169, 98.84],
        ['WubWoofWolf, Poland', 182802, 99.46]
    ]);

    var options = {
        title: 'Top 5 Osu! Plays',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Plays',
            minValue: 0
        },
        vAxis: {
            title: 'Top 5 in the World'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

    chart.draw(data, options);
}