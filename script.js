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

    // Check the answer
    if (selectedAnswer === correctAnswers[question]) {
        feedbackDiv.innerHTML = 'Correct!';
        feedbackDiv.className = 'feedback correct';
    } else {
        feedbackDiv.innerHTML = 'Wrong!';
        feedbackDiv.className = 'feedback wrong';
    }
}
