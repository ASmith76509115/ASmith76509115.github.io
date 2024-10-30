// Set timer variables
let timeLimit = 100 * 60; // 50 minutes in seconds
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

    const correctAnswers = {
        q1: { answer: "C", explanation: "Authorization ensures users have limited access to the database by controlling permissions and restricting actions based on their roles." },
        q2: { answer: "C", explanation: "A conceptual design specifies database requirements without regard to a specific system." },
        q3: { answer: "B", explanation: "Relational databases ensure data integrity and relationships." },
        q4: { answer: "B", explanation: "MySQL will return an error when encountering duplicate primary keys." },
        q5: { answer: "C", explanation: "The INT data type should be used to store whole integer values, such as age." },
        q6: { answer: "A", explanation: "MySQL includes a command-line interface (CLI) for managing the server, called MySQL Shell." },
        q7: { answer: "A", explanation: "MySQL includes the 'World' database during installation for practice." },
        q8: { answer: "B", explanation: "SQL (Structured Query Language) is the standardized language for managing relational databases." },
        q9: { answer: "C", explanation: "DCL (Data Control Language) is used to manage database access." },
        q10: { answer: "C", explanation: "TCL (Transaction Control Language) is used to roll back database changes." },
        q11: { answer: "A", explanation: "The TIME data type uses the 'HH:MM:SS' format in MySQL." },
        q12: { answer: "C", explanation: "The logical operator OR has lower precedence than other operators." },
        q13: { answer: "A", explanation: "An inner join uses only the '=' operator to compare columns." },
        q14: { answer: "C", explanation: "A cross join combines tables without comparing columns." },
        q15: { answer: "A", explanation: "An inner join uses only the '=' operator to compare columns." },
        q16: { answer: "A", explanation: "The join is matching KennelID from the Dog table with ID from the Kennel table, which is an INNER JOIN." },
        q17: { answer: "B", explanation: "A subquery is also called a nested query or inline view." },
        q18: { answer: "B", explanation: "The IN operator compares against a list of values." },
        q19: { answer: "A", explanation: "The '%' wildcard represents zero or more characters when searching with the LIKE operator." },
        q20: { answer: "A", explanation: "COUNT is an aggregating function in SQL, along with SUM, AVG, etc." },
        q21: { answer: "A", explanation: "The GROUP BY clause is used with aggregate functions to produce summary rows." },
        q22: { answer: "D", explanation: "An inner join returns only matching rows from two or more tables." },
        q23: { answer: "B", explanation: "A natural join selects only matching rows from both tables." },
        q24: { answer: "D", explanation: "A materialized view is a persistent copy of query results, automatically updated with changes." },
        q25: { answer: "A", explanation: "The UPDATE command modifies data in a table." },
        q26: { answer: "A", explanation: "Metadata describes table elements, such as column names and data types." },
        q27: { answer: "A", explanation: "A tuple refers to an ordered collection of elements in a table." },
        q28: { answer: "A", explanation: "The SELECT command with the WHERE clause and ORDER BY sorts results in descending order." },
        q29: { answer: "A", explanation: "INSERT INTO TableName (col1, col2) VALUES (value1, value2);" },
        q30: { answer: "C", explanation: "The UPDATE statement modifies rows in a table." },
        q31: { answer: "B", explanation: "The DROP command removes a table or database." },
        q32: { answer: "D", explanation: "CREATE is a DDL (Data Definition Language) keyword in SQL." },
        q33: { answer: "B", explanation: "The primary key ensures uniqueness of data and prevents null values." },
        q34: { answer: "B", explanation: "DEFAULT allows SQL to insert a value if no input is provided." },
        q35: { answer: "A", explanation: "A CHECK constraint specifies an expression that enforces data validation on one or more columns." },
        q36: { answer: "D", explanation: "A primary key is used to uniquely identify a row in a table." },
        q37: { answer: "B", explanation: "A composite key involves multiple columns used to identify unique rows." },
        q38: { answer: "B", explanation: "A natural key is easy to type and store and represents real-world data." },
        q39: { answer: "C", explanation: "A junction table creates many-to-many relationships between two tables." },
        q40: { answer: "B", explanation: "A foreign key establishes a one-to-many relationship in a relational database." },
        q41: { answer: "A", explanation: "A foreign key constraint may reject statements that violate referential integrity." },
        q42: { answer: "C", explanation: "Candidate keys are unique columns in a table but are not primary keys." },
        q43: { answer: "A", explanation: "A B-Tree index stores column values and row pointers in a hierarchy." },
        q44: { answer: "B", explanation: "A hash index assigns entries to buckets for quicker lookup." },
        q45: { answer: "C", explanation: "A bitmap index uses a grid of bits to correspond to rows in a table." },
        q46: { answer: "A", explanation: "A materialized view persists data and is automatically updated." },
        q47: { answer: "C", explanation: "Database implementation converts the ER model into tables, columns, and keys." },
        q48: { answer: "B", explanation: "Denormalization is the process of merging tables to increase performance." },
        q49: { answer: "A", explanation: "A table with a primary key and no duplicate rows is in First Normal Form (1NF)." },
        q50: { answer: "B", explanation: "Normalization eliminates redundancy by decomposing a table into multiple tables." },
        q51: { answer: "C", explanation: "Third Normal Form (3NF) is optimal for frequent inserts, updates, and deletes." },
        q52: { answer: "B", explanation: "The relationship in the ER diagram is One-to-Many." },
        q53: { answer: "B", explanation: "A supertype-subtype relationship is one-to-many." },
        q54: { answer: "A", explanation: "An entity is represented by a rectangle in an ER diagram." },
        q55: { answer: "B", explanation: "An attribute is represented by an ellipse in an ER diagram." },
        q56: { answer: "A", explanation: "Common attributes must be identified before creating supertype and subtype entities." },
        q57: { answer: "A", explanation: "Functional dependency means columns in A depend on columns in B." },
        q58: { answer: "B", explanation: "The primary key follows the attribute name and is placed outside parentheses in ER diagrams." },
        q59: { answer: "A", explanation: "Unique fields can help identify primary keys when investigating relationships." },
        q60: { answer: "A", explanation: "An ER diagram should be read from left to right to understand the relationships." },
        q61: { answer: "A", explanation: "A B-Tree index stores column values and row pointers in a hierarchy." },
        q62: { answer: "C", explanation: "Third Normal Form (3NF) is optimal for frequent data modifications." },
        q63: { answer: "B", explanation: "A supertype-subtype relationship is one-to-many." },
        q64: { answer: "A", explanation: "An entity is represented by a rectangle in an ER diagram." },
        q65: { answer: "B", explanation: "An attribute is represented by an ellipse in an ER diagram." },
        q66: { answer: "B", explanation: "Common attributes must be identified before creating supertype and subtype entities." },
        q67: { answer: "C", explanation: "Denormalization involves combining normalized tables to improve performance." },
        q68: { answer: "A", explanation: "A junction table stores key information in a many-to-many relationship." },
        q69: { answer: "A", explanation: "An ER diagram should be read from left to right to correctly understand relationships." }
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
