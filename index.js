 let randomNumber = Math.floor(Math.random() * 10) + 1;
    let score = 10;

    function check() {
        let userInput = Number(document.getElementById("number").value);
        let result = document.getElementById("result");
        let scoreText = document.getElementById("score");

        if (score === 0) {
            alert("Game Over!");
            return;
        }

        if (userInput === randomNumber) {
            result.textContent = "🎉 You Are Right!";
            alert("You Won!");
        } else {
            score--;
            result.textContent = "❌ You Are Wrong!";
            scoreText.textContent = "Your Score: " + score;

            if (score === 0) {
                alert("You Lost the Game!");
            }
        }
    }

    function resetGame() {
        score = 10;
        randomNumber = Math.floor(Math.random() * 10) + 1;
        document.getElementById("score").textContent = "Your Score: 10";
        document.getElementById("result").textContent = "";
        document.getElementById("number").value = "";
    }