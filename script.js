function changeRandImg() {
    let player1 = [
        "./images/dice1.png",
        "./images/dice2.png",
        "./images/dice3.png",
        "./images/dice4.png",
        "./images/dice5.png",
        "./images/dice6.png",
    ];

    let player2 = [
        "./images/dice1.png",
        "./images/dice2.png",
        "./images/dice3.png",
        "./images/dice4.png",
        "./images/dice5.png",
        "./images/dice6.png",
    ];

    let randomPlayer1 = Math.floor(Math.random() * player1.length);
    document.querySelector(".img1").setAttribute("src", [player1[randomPlayer1]]);

    let randomPlayer2 = Math.floor(Math.random() * player2.length);
    document.querySelector(".img2").setAttribute("src", [player2[randomPlayer2]]);

    if (randomPlayer1 > randomPlayer2) {
        return (document.querySelector("h1").innerHTML = "Player 1 Wins !");
    } else if (randomPlayer2 > randomPlayer1) {
        return (document.querySelector("h1").innerHTML = "Player 2 Wins !");
    } else if ((randomPlayer1 = randomPlayer2)) {
        return (document.querySelector("h1").innerHTML = "Draw!");
    }
}
changeRandImg();