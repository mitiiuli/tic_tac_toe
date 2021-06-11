
var level = 0;
var moves = 0;
var occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var magicsquare = [2, 7, 6, 9, 5, 1, 4, 3, 8];
var player1 =[];
var player2 =[];

function winCondition(list) {
    for (var i = 0; i < list.length - 2; i++) {
        for (var j = i + 1; j < list.length - 1; j++) {
            for (var k = j + 1; k < list.length; k++) {
                if (list[i] + list[j] + list[k] === 15) {
                    return 1;
                }
            }
        }
    }
    return 0;
}
function playerVsPlayer(i) {
    if (moves % 2 === 1) {
        player1.push(magicsquare[i - 1]);
    } else {
        player2.push(magicsquare[i - 1]);
    }
    if (winCondition(player1)) {
        document.getElementById("status").innerHTML ="Player 1 win!!"; 
        setTimeout(function () {
            document.getElementById("status").innerHTML ="";       
        }, 3000);
        restartClicked();
        return;
    }
    if (winCondition(player2)) {
        document.getElementById("status").innerHTML ="Player 2 win!!";
        setTimeout(function () {
            document.getElementById("status").innerHTML ="";
        }, 3000);
        restartClicked();
        return;
    }
    if (moves === 9) {
        document.getElementById("status").innerHTML ="It's a Tie!!";
        setTimeout(function () {
            document.getElementById("status").innerHTML ="";    
        }, 3000);
        restartClicked();
    }
}
function playareaClicked(i) {
    if (occupied[i - 1]) {
        return;
    }
    occupied[i - 1] = 1;
    moves++;
    var x = document.getElementById(i);
    var zeroOne;
    if (level === 0) {
        zeroOne = moves % 2;
        x.innerHTML = '<img src="' + zeroOne + '.png" width="75%">';
        playerVsPlayer(i);
    } 
}
function restartClicked() {
    moves = 0;
    var x;
    for (var i = 1; i <= 9; i++) {
        x = document.getElementById(i);
        x.innerHTML = '';
    }
    for (var i = 0; i < 10; i++) {
        occupied[i] = 0;
    }
    player1 = [];
    player2 = [];
}

