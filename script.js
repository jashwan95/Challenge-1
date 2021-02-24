var pie = document.getElementById('pieChart').getContext('2d');
var line = document.getElementById('lineChart').getContext('2d');

var chart = new Chart(pie, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Man', 'Vrouw', 'Kind', 'Dier'],
        datasets: [{
            data: [48, 42, 28, 13,]
        }]
    },

    // Configuration options go here
    options: {}
});

var chart = new Chart(line, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug'],
        datasets: [{
            borderColor: '#FF0000',
            data: [0, 45, 70, 105, 120, 180, 205]
        }]
    },

    // Configuration options go here
    options: {}
});


var s = 50;

document.getElementById('speed').innerHTML = s;
document.getElementById('balk').style.width = s+'%';

document.getElementById('gas').onclick = function(){
s += 3;

 if(s > 100){
s = 100;
}
document.getElementById('speed').innerHTML = s;
document.getElementById('balk').style.width = s+'%';
};