function checkAnswer() {
    const correctAnswer = "4";

    const checkedRadioButton = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    if (!checkedRadioButton) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    const userAnswer = checkedRadioButton.value;

    /*console.log("User selected:", userAnswer); 
    console.log("Correct answer is:", correctAnswer);
    */
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else{
        feedback.textContent = "That's incorrect. Try again!";

    }
}

const submitAnswerButton = document.getElementById('submit-answer');

submitAnswerButton.addEventListener('click', checkAnswer);
