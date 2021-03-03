Chart.defaults.global.defaultFontColor = '#FFFFFF';
Chart.defaults.global.defaultFontFamily = 'timeburner';

/*----- aantal mensen + water -----*/
var m = 100;

document.getElementById('water').innerHTML = m * 111;
document.getElementById('balk').style.width = (m / 5) + '%';

document.getElementById('min_mensen').onclick = function(){ // de min knop om aantal mensen af te trekken en op te slaan in js
    var m = document.getElementById('aantal_mensen').value;
    if (m > 100) {
        m--
    };
    document.getElementById('aantal_mensen').value = m;
    document.getElementById('water').innerHTML = m * 111;
    document.getElementById('balk').style.width = (m / 5) + '%';
    if (m < 100 || m > 500) {
        document.getElementById('water').style.color = '#DE4A4A';
        document.getElementById('balk').style.backgroundColor = '#DE4A4A';
    }
    else {
        document.getElementById('water').style.color = '#FFFFFF';
        document.getElementById('balk').style.backgroundColor = '#88DFFF';
    };
}

document.getElementById('plus_mensen').onclick = function(){ // de plus knop om aantal mensen op te tellen en op te slaan in js
    var m = document.getElementById('aantal_mensen').value;
    if (m < 500) {
        m++
    };
    document.getElementById('aantal_mensen').value = m;
    document.getElementById('water').innerHTML = m * 111;
    document.getElementById('balk').style.width = (m / 5) + '%';
    if (m < 100 || m > 500) {
        document.getElementById('water').style.color = '#DE4A4A';
        document.getElementById('balk').style.backgroundColor = '#DE4A4A';
    }
    else {
        document.getElementById('water').style.color = '#FFFFFF';
        document.getElementById('balk').style.backgroundColor = '#88DFFF';
    };
}

document.getElementById('opslaan').onclick = function(){ // opslaan knop om zelf waarde in te invoeren en op te slaan in js
    var m = document.getElementById('aantal_mensen').value;
    if (m < 100) {
        alert('Het minimum is 100 mensen. Er moeten meer mensen vliegen!')
    };
    if (m > 500) {
        alert('Het maximum is 500 mensen. Er moeten minder mensen vliegen!')
    };
    document.getElementById('water').innerHTML = m * 111;
    document.getElementById('balk').style.width = (m / 5) + '%';
    if (m < 100 || m > 500) {
        document.getElementById('water').style.color = '#DE4A4A';
        document.getElementById('balk').style.backgroundColor = '#DE4A4A';
    }
    else {
        document.getElementById('water').style.color = '#FFFFFF';
        document.getElementById('balk').style.backgroundColor = '#88DFFF';
    };
};

/*----- pie chart -----*/
var pie = document.getElementById('pieChart').getContext('2d');
var chart = new Chart(pie, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Man', 'Vrouw', 'Kind', 'Dier'],
        datasets: [{
            data: [48, 42, 28, 13],
            backgroundColor: ['#A4C0F6', '#EDB7EF', '#86CF86', '#E9A876']
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'left'
        }
    }
});

/*----- line chart -----*/
var line = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(line, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug'],
        datasets: [{
            label: 'Afgelegde afstand',
            borderColor: '#FF0000',
            data: [0, 32, 53, 94, 110, 149, 166, 205],
            lineTension: 0
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    color: '#DEDEDE'
                }
            }]
        }
    }
});

/*----- bar-gas chart -----*/
var bar = document.getElementById('gasChart').getContext('2d');
var chart = new Chart(bar, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug'],
        datasets: [{
            label: 'brandstof',
            data: [100, 90, 85, 70, 50, 35, 20, 10, 0],
            backgroundColor: ['#69B34C', '#8DB446', '#B2B540', '#D6B639', '#FAB733', '#FC7E26', '#FD461A', '#FF0D0D']
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    color: '#FFFFFF'
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});