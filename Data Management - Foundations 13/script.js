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
        q21: { answer: "D", explanation: "The GROUP BY clause works with aggregate functions to summarize rows." },
        q22: { answer: "D", explanation: "An INNER JOIN returns only the matching rows between tables." },
        q23: { answer: "D", explanation: "An INNER JOIN selects only matching rows from left and right tables." },
        q24: { answer: "A", explanation: "A Virtual View shows dynamically updated data as underlying data changes." },
        q25: { answer: "B", explanation: "The UPDATE statement uses correct SQL syntax to modify table data." },
        q26: { answer: "C", explanation: "Metadata refers to information such as column names and data types." },
        q27: { answer: "D", explanation: "A tuple represents an ordered collection of elements in a relational database." },
        q28: { answer: "A", explanation: "This SELECT statement correctly retrieves and sorts data by salary." },
        q29: { answer: "C", explanation: "This INSERT statement uses valid SQL syntax to insert values into a table." },
        q30: { answer: "B", explanation: "The UPDATE statement in SQL modifies column values with the correct syntax." },
        q31: { answer: "B", explanation: "DELETE removes data from temporary tables in SQL." },
        q32: { answer: "D", explanation: "CREATE is a DDL keyword used to define database structures." },
        q33: { answer: "A", explanation: "A primary key enforces the Not Null constraint, ensuring a unique identifier." },
        q34: { answer: "C", explanation: "The Auto-increment property automatically increases a field value." },
        q35: { answer: "A", explanation: "CHECK constraints enforce rules on column data values." },
        q36: { answer: "B", explanation: "A Simple Primary Key identifies a unique row using a single column." },
        q37: { answer: "A", explanation: "A composite key involves multiple columns, shown in parentheses." },
        q38: { answer: "D", explanation: "A Simple key should be easy to type and store." },
        q39: { answer: "C", explanation: "A Composite key in a junction table establishes many-to-many relationships." },
        q40: { answer: "C", explanation: "A one-to-many relationship is defined using a foreign key." },
        q41: { answer: "A", explanation: "INSERT statements may be rejected if they violate foreign key constraints." },
        q42: { answer: "C", explanation: "A candidate key uniquely identifies rows in a table, aside from the primary key." },
        q43: { answer: "C", explanation: "A Multi-level index organizes column values and row pointers hierarchically." },
        q44: { answer: "C", explanation: "A Hash index assigns entries to buckets for faster lookups." },
        q45: { answer: "D", explanation: "A Bitmap index uses a grid of bits where each index row corresponds to a table row." },
        q46: { answer: "B", explanation: "Physical design converts an entity-relationship model into tables and keys." },
        q47: { answer: "C", explanation: "Trivial dependency means columns are functionally dependent on one another." },
        q48: { answer: "A", explanation: "Denormalization involves merging tables to reduce redundancy." },
        q49: { answer: "D", explanation: "A first normal form table has a primary key and no duplicate rows." },
        q50: { answer: "D", explanation: "Normalization decomposes a table into higher normal forms, reducing redundancy." },
        q51: { answer: "D", explanation: "Third normal form is optimal for frequent inserts, updates, and deletes." },
        q52: { answer: "A", explanation: "A supertype entity is related to subtype entities via an IsA relationship." },
        q53: { answer: "B", explanation: "An entity in an ER diagram is represented by a square." },
        q54: { answer: "C", explanation: "An attribute in an ER diagram is represented by a circle." },
        q55: { answer: "A", explanation: "Entities must be identified before creating supertype and subtype entities." },
        q56: { answer: "C", explanation: "An entity is a distinctly identifiable real-world object like an employee." },
        q57: { answer: "B", explanation: "Attribute maxima indicate the maximum value or limit for an attribute." },
        q58: { answer: "B", explanation: "Unique identifier analysis helps identify primary keys." },
        q59: { answer: "C", explanation: "An entity-relationship phrase is read in the direction the relationship verb is facing." },
        q60: { answer: "C", explanation: "In an ER diagram, the relationship phrase should be read in the direction of the verb." }
};

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultDetails = '';

    for (let question in correctAnswers) {
        let selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        let questionResult = '';

        if (selectedAnswer && selectedAnswer.value === correctAnswers[question].answer) {
            score++;
            questionResult = `<p><strong>Question ${question.slice(1)}:</strong> Correct ✅</p>`;
        } else {
            questionResult = `<p><strong>Question ${question.slice(1)}:</strong> Incorrect ❌</p>
                              <p>Your answer: <strong>${selectedAnswer ? selectedAnswer.value : "No Answer"}</strong></p>
                              <p>Correct answer: <strong>${correctAnswers[question].answer}</strong> - ${correctAnswers[question].explanation}</p>`;
        }
        resultDetails += questionResult;
    }

    let resultText = `<h3>You scored ${score} out of ${totalQuestions}.</h3>`;
    resultText += resultDetails;
    document.getElementById('result').innerHTML = resultText;
}

// Event listeners for buttons
document.getElementById('start-btn').addEventListener('click', function () {
    startTimer();
    document.getElementById('quiz-form').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
});

document.getElementById('submit-btn').addEventListener('click', function () {
    if (confirm("Are you sure you want to submit?")) {
        clearInterval(timerInterval);
        submitQuiz();
    }
});
