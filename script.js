function checkAnswer(question, selectedAnswer) {
    const correctAnswers = {
        q1: 'A',
        q2: 'A',
        q3: 'A',
        q4: 'B',
        q5: 'C',
    };

    const feedbackDiv = document.getElementById(`feedback-${question}`);
    
    // Clear previous feedback
    feedbackDiv.innerHTML = '';

    if (selectedAnswer === correctAnswers[question]) {
        feedbackDiv.innerHTML = 'Correct!';
        feedbackDiv.style.color = 'green';
    } else {
        feedbackDiv.innerHTML = 'Wrong!';
        feedbackDiv.style.color = 'red';
    }
}
