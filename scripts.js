
let cont_players = 0
let isWin = false

function draw(position) {
    if (document.getElementById(position).value == '' && !isWin){
        if (cont_players % 2 == 0) {
            document.getElementById(position).value = 'x';
            cont_players++;
        } else {
            document.getElementById(position).value = 'o';
            cont_players++;
        }
        if (checkWin(position)) {
            isWin = true
            document.getElementById("score").textContent = `Win from ${document.getElementById(position).value}!`
        }
    }
}

function checkWin(id) {
    pos_row = id[3]
    pos_col = id[4]

    if(checkWinRow(pos_row) || checkWinColumn(pos_col) || checkWinDiagonal()) return true
    
}

function checkWinRow(row) {
    if (document.getElementById(`btn${row}0`).value == document.getElementById(`btn${row}1`).value
     && document.getElementById(`btn${row}0`).value == document.getElementById(`btn${row}2`).value) {
        return true
    } else {
        return false
    }

}
function checkWinColumn(col) {
    
    if (document.getElementById(`btn0${col}`).value == document.getElementById(`btn1${col}`).value
     && document.getElementById(`btn0${col}`).value == document.getElementById(`btn2${col}`).value) {
        return true
    } else {
        return false
    }

}
function checkWinDiagonal() {
    if (document.getElementById("btn11").value != '' 
    && document.getElementById("btn00").value == document.getElementById("btn11").value
    && document.getElementById("btn00").value == document.getElementById("btn22").value) {
        return true
    } 

    if (document.getElementById("btn11").value != '' 
    && document.getElementById("btn20").value == document.getElementById("btn11").value
    && document.getElementById("btn20").value == document.getElementById("btn02").value) {
        return true
    }
}

function reset() {
    for(let i_col = 0; i_col <= 2; i_col++) {
        for(let i_row = 0; i_row <= 2; i_row++) {
            document.getElementById(`btn${i_row}${i_col}`).value = ''
        }
    }
    isWin = false
    document.getElementById("score").textContent = ''
}