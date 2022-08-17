let actualYear = new Date().getFullYear()

const birthdayLuiz =   new Date(`aug 05, ${actualYear} 23:59:59`).getTime();
const birthdayPedro =  new Date(`dec 31, ${actualYear} 23:59:59`).getTime();
const birthdayDaniel = new Date(`aug 17, ${actualYear} 23:59:59`).getTime();
const birthdayRyan =   new Date(`apr 17, ${actualYear} 23:59:59`).getTime();
const birthdayPaulo =  new Date(`dec 25, ${actualYear} 23:59:59`).getTime();
const birthdayBia =    new Date(`may 25, ${actualYear} 23:59:59`).getTime();
const birthdayOsmar =  new Date(`nov 25, ${actualYear} 23:59:59`).getTime();
const birthdayNov =    new Date(`mar 04, ${actualYear} 23:59:59`).getTime();

function calcLuiz() {
    var now = new Date().getTime();
    let difference = birthdayLuiz - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));
    if (difference < 0) {
        timerLuiz.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerLuiz.innerText = "é hoje"
    } else {
        timerLuiz.innerText = `${days} dia(s)`
    }
}

function calcPedro() {
    var now = new Date().getTime();
    let difference = birthdayPedro - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        timerPedro.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerPedro.innerText = "é hoje"
    } else {
        timerPedro.innerText = `${days} dia(s)`
    }
}

function calcDaniel() {
    var now = new Date().getTime();
    let difference = birthdayDaniel - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));
    
    if (difference < 0) {
        timerDaniel.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerDaniel.innerText = "é hoje"
    } else {
        timerDaniel.innerText = `${days} dia(s)`
    }
}

function calcRyan() {
    var now = new Date().getTime();
    let difference = birthdayRyan - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        timerRyan.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerRyan.innerText = "é hoje"
    } else {
        timerRyan.innerText = `${days} dia(s)`
    }
}

function calcPaulo() {
    var now = new Date().getTime();
    let difference = birthdayPaulo - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        timerPaulo.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerPaulo.innerText = "é hoje"
    } else {
        timerPaulo.innerText = `${days} dia(s)`
    }
}

function calcBia() {
    var now = new Date().getTime();
    let difference = birthdayBia - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        timerBia.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerBia.innerText = "é hoje"
    } else {
        timerBia.innerText = `${days} dia(s)`
    }
}

function calcOsmar() {
    var now = new Date().getTime();
    let difference = birthdayOsmar - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        timerOsmar.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerOsmar.innerText = "é hoje"
    } else {
        timerOsmar.innerText = `${days} dia(s)`
    }
}
function calcNov() {
    var now = new Date().getTime();
    let difference = birthdayNov - now 
    var days = Math.floor((difference) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        timerNov.innerText = "Já passou"
    } else if (difference > 0 && difference < 86400000) {
        timerNov.innerText = "é hoje"
    } else {
        timerNov.innerText = `${days} dia(s)`
    }
}

var timeCalcInterval = setInterval(function () {
    calcLuiz()
    calcPedro()
    calcDaniel()
    calcRyan()
    calcPaulo()
    calcBia()
    calcOsmar()
    calcNov()
}, 100);
