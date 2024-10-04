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

    // Get all options for the current question
    const options = document.getElementsByName(question);
    
    // Reset colors for all options
    options.forEach(option => {
        const optionDiv = option.parentElement;
        optionDiv.style.backgroundColor = 'lightblue'; // Reset to original blue color
    });

    // Get the selected option block
    const selectedOptionDiv = document.querySelector(`input[name="${question}"][value="${selectedAnswer}"]`).parentElement;

    // Check the answer
    if (selectedAnswer === correctAnswers[question]) {
        feedbackDiv.innerHTML = 'Correct!';
        feedbackDiv.className = 'feedback correct';
        selectedOptionDiv.style.backgroundColor = 'lightgreen'; // Change to green if correct
    } else {
        feedbackDiv.innerHTML = 'Wrong!';
        feedbackDiv.className = 'feedback wrong';
        selectedOptionDiv.style.backgroundColor = 'red'; // Change to red if wrong
        // Highlight the correct answer as well
        const correctOptionDiv = document.querySelector(`input[name="${question}"][value="${correctAnswers[question]}"]`).parentElement;
        correctOptionDiv.style.backgroundColor = 'lightgreen'; // Change correct option to green
    }
}
