function checkAnswers() {
    const answers = {
        q1: 'A',
        q2: 'A',
        q3: 'A',
        q4: 'B',
        q5: 'C',
    };

    let score = 0;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    for (let i = 1; i <= 5; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const isCorrect = userAnswer === answers[`q${i}`];
            const resultText = document.createElement('p');
            resultText.textContent = `Q${i}: Your answer: ${userAnswer} - ${isCorrect ? 'Correct!' : 'Wrong!'}`;
            resultText.style.color = isCorrect ? 'green' : 'red';
            resultDiv.appendChild(resultText);

            if (isCorrect) {
                score++;
            }
        }
    }

    const scoreText = document.createElement('p');
    scoreText.textContent = `Your total score: ${score}/5`;
    resultDiv.appendChild(scoreText);
}
