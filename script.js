const calcAverage = () => {
    let dolFirCom = document.getElementById("dolphinsFirstCompetition").value;
    let dolSecCom = document.getElementById("dolphinsSecondCompetition").value;
    let dolThiCom = document.getElementById("dolphinsThirdCompetition").value;
    let koaFirCom = document.getElementById("koalasFirstCompetition").value;
    let koaSecCom = document.getElementById("koalasSecondCompetition").value;
    let koaThiCom = document.getElementById("koalasThirdCompetition").value;
    let dolphinsAverageScore;
    let koalasAverageScore;

    dolphinsAverageScore = ((+dolFirCom + +dolSecCom + +dolThiCom) / 3).toFixed(2);
    koalasAverageScore = ((+koaFirCom + +koaSecCom + +koaThiCom) / 3).toFixed(2);

    document.getElementById('dolphinsAverage').innerHTML = "The average of the 3 Dolphins scores is: " + dolphinsAverageScore;
    document.getElementById('koalasAverage').innerHTML = "The average of the 3 Koalas scores is: " + koalasAverageScore;

    document.getElementById('koaVSdol').innerHTML = `Dolphins VS  Koalas: ${dolphinsAverageScore} / ${koalasAverageScore}`;

    if (dolphinsAverageScore >= koalasAverageScore * 2) {
        document.getElementById('winner').innerHTML = `CONGRATULATIONS! Dolphins is WINNER!!!`;
        document.getElementById('winnerScore').innerHTML = `Winner score is ${dolphinsAverageScore}`;
    } else if (koalasAverageScore >= dolphinsAverageScore * 2) {
        document.getElementById('winner').innerHTML = `CONGRATULATIONS! Koalas is WINNER!!!`;
        document.getElementById('winnerScore').innerHTML = `Winner score is ${koalasAverageScore}`;
    } else {
        document.getElementById('winner').innerHTML = `IT'S A PITY... NOBODY WON... :( `;
    }
}

function myFunctionRefresh() {
    dolFirCom = document.getElementById("dolphinsFirstCompetition").value = '';
    dolSecCom = document.getElementById("dolphinsSecondCompetition").value = '';
    dolThiCom = document.getElementById("dolphinsThirdCompetition").value = '';

    koaFirCom = document.getElementById("koalasFirstCompetition").value = '';
    koaSecCom = document.getElementById("koalasSecondCompetition").value = '';
    koaThiCom = document.getElementById("koalasThirdCompetition").value = '';

    document.getElementById('dolphinsAverage').innerHTML = ``;
    document.getElementById('koalasAverage').innerHTML = ``;
    document.getElementById('koaVSdol').innerHTML = ``;
    document.getElementById('winner').innerHTML = ``;
    document.getElementById('winnerScore').innerHTML = ``;
}