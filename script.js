Chart.defaults.global.defaultFontColor = '#FFFFFF'
Chart.defaults.global.defaultFontFamily = 'timeburner'

/*pie chart*/
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
            labels: {
                fontColor: '#FFFFFF',
                fontFamily: 'timeburner'
            }
        }
    }
});

/*line chart*/
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
            data: [0, 32, 53, 94, 110, 149, 166, 205]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                fontColor: '#FFFFFF',
                fontFamily: 'timeburner'
            }
        },
        tooltips: {
            bodyFontFamily: 'timeburner'
        }
    }
});

/*aantal mensen + water*/
var m = 100;

document.getElementById('water').innerHTML = m * 111;
document.getElementById('balk').style.width = (m / 5) + '%';

document.getElementById('min_mensen').onclick = function(){
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

document.getElementById('plus_mensen').onclick = function(){
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

document.getElementById('opslaan').onclick = function(){
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


