function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
    // Disable all buttons after one is clicked
    const buttons = button.parentNode.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
}
