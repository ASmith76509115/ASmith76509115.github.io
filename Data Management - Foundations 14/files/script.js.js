// Set timer variables
let timeLimit = 100 * 60; // 100 minutes in seconds
let warningLimit = 5 * 60; // 5 minutes in seconds
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        let minutes = Math.floor(timeLimit / 60);
        let seconds = timeLimit % 60;
        document.getElementById('timer').textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLimit === warningLimit) {
            alert("You have 5 minutes left!");
        }

        if (timeLimit <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting quiz.");
            submitQuiz();
        }

        timeLimit--;
    }, 1000);
}

function submitQuiz() {
    document.querySelectorAll('input[type="radio"]').forEach((radioButton) => radioButton.disabled = true);
    document.getElementById('submit-btn').disabled = true;

    // Array containing correct answers for each question
    const correctAnswers = {
        q1: { answer: "C", explanation: "Authorization ensures users have limited access based on their roles." },
        q2: { answer: "B", explanation: "Conceptual design focuses on requirements without concern for specific systems." },
        q3: { answer: "A", explanation: "Relational databases enforce logical constraints to maintain data validity." },
        q4: { answer: "C", explanation: "Syntactically incorrect SQL statements trigger error codes." },
        q5: { answer: "D", explanation: "The INT data type stores whole integer values like age." },
        q6: { answer: "A", explanation: "The MySQL Command-Line Client is a text-based interface included with MySQL." },
        q7: { answer: "A", explanation: "MySQL includes the World database during installation." },
        q8: { answer: "B", explanation: "Structured Query Language (SQL) is the standardized language for relational databases." },
        q9: { answer: "D", explanation: "Data Control Language (DCL) manages access to the database." },
        q10: { answer: "A", explanation: "Data Transaction Language (DTL) manages database transactions, including rollback." },
        q11: { answer: "C", explanation: "The TIME data type uses the hh:mm:ss format." },
        q12: { answer: "B", explanation: "The OR operator has the lowest precedence in MySQL." },
        q13: { answer: "C", explanation: "The = operator compares columns between left and right tables." },
        q14: { answer: "D", explanation: "A CROSS join combines two tables without comparing columns." },
        q15: { answer: "A", explanation: "An Equijoin compares columns using only the = operator." },
        q16: { answer: "D", explanation: "The query represents an EQUIJOIN, matching records based on a common key." },
        q17: { answer: "B", explanation: "A subquery is also known as a nested query." },
        q18: { answer: "A", explanation: "The IN operator checks if a value is in a list of specified values." },
        q19: { answer: "A", explanation: "The % wildcard represents zero or more characters in a LIKE query." },
        q20: { answer: "C", explanation: "MIN is an aggregate function that returns the smallest value in a set." },
