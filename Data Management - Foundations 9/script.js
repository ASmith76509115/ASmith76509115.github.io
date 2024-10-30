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
        q1: { answer: "A", explanation: "A database application helps business users interact with the database system." },
        q2: { answer: "B", explanation: "The database administrator manages security, enforces access rules, and maintains availability." },
        q3: { answer: "A", explanation: "Authorization limits user access to specific tables, columns, or rows." },
        q4: { answer: "C", explanation: "The query processor interprets queries, optimizes them, and returns results." },
        q5: { answer: "C", explanation: "The storage manager translates query instructions into file-system commands." },
        q6: { answer: "C", explanation: "The transaction manager ensures transactions are executed correctly and resolves conflicts." },
        q7: { answer: "C", explanation: "MongoDB is classified as a NoSQL database." },
        q8: { answer: "C", explanation: "The INSERT statement adds rows into a table in SQL." },
        q9: { answer: "C", explanation: "The SELECT statement retrieves data from a table." },
        q10: { answer: "C", explanation: "The INT data type is used to store integer values in SQL." },
        q11: { answer: "C", explanation: "VARCHAR is used to store textual values in SQL." },
        q12: { answer: "C", explanation: "DATE is used to store date values in SQL." },
        q13: { answer: "B", explanation: "DECIMAL is used to store fractional numeric values in SQL." },
        q14: { answer: "A", explanation: "The analysis phase specifies database requirements without focusing on a specific system." },
        q15: { answer: "C", explanation: "Logical design involves specifying requirements without regard to a system." },
        q16: { answer: "C", explanation: "Physical design focuses on organizing tables and creating indexes to improve performance." },
        q17: { answer: "B", explanation: "CREATE TABLE creates a new table in the database." },
        q18: { answer: "B", explanation: "ALTER TABLE modifies or adds columns in an existing table." },
        q19: { answer: "A", explanation: "The DROP TABLE statement deletes a table and all its rows from the database." },
        q20: { answer: "B", explanation: "UPDATE modifies existing rows in a table." },
        q21: { answer: "A", explanation: "The DELETE statement deletes rows from a table." },
        q22: { answer: "B", explanation: "TRUNCATE deletes all rows from a table but retains the table structure." },
        q23: { answer: "A", explanation: "A primary key uniquely identifies each row in a table." },
        q24: { answer: "A", explanation: "A foreign key refers to a primary key in another table." },
        q25: { answer: "B", explanation: "The FOREIGN KEY constraint ensures referential integrity between tables." },
        q26: { answer: "B", explanation: "AUTO_INCREMENT automatically assigns an incrementing value to new rows." },
        q27: { answer: "A", explanation: "LIKE matches text against patterns using wildcards." },
        q28: { answer: "C", explanation: "The BETWEEN operator checks if a value lies between two others." },
        q29: { answer: "B", explanation: "ABS() returns the absolute value of a numeric expression." },
        q30: { answer: "C", explanation: "COUNT() is used to count the number of rows in a result set." },
        q31: { answer: "B", explanation: "LOWER() converts a string to lowercase." },
        q32: { answer: "A", explanation: "INNER JOIN combines rows from two tables where there is a match." },
        q33: { answer: "B", explanation: "A LEFT JOIN selects all rows from the left table and matches from the right." },
        q34: { answer: "A", explanation: "FULL JOIN combines rows from two tables, including unmatched rows from both." },
        q35: { answer: "A", explanation: "A self-join relates a table to itself." },
        q36: { answer: "B", explanation: "Normalization reduces redundancy and improves data integrity by organizing data into related tables." },
        q37: { answer: "B", explanation: "A candidate key can uniquely identify rows and is minimal." },
        q38: { answer: "B", explanation: "Functional dependence means one column depends on another." },
        q39: { answer: "A", explanation: "Boyce-Codd normal form (BCNF) ensures every non-trivial functional dependency is based on a unique key." },
        q40: { answer: "A", explanation: "Denormalization merges tables to improve performance by introducing redundancy." },
        q41: { answer: "A", explanation: "An index improves the speed of data retrieval operations." },
        q42: { answer: "C", explanation: "CREATE INDEX creates an index on specified columns in a table." },
        q43: { answer: "B", explanation: "A hash index maps rows to buckets for fast data retrieval." },
        q44: { answer: "B", explanation: "A bitmap index uses a grid of bits to represent values." },
        q45: { answer: "B", explanation: "An entity represents a person, place, product, or concept tracked in a database." },
        q46: { answer: "B", explanation: "A relationship in an ER diagram is a connection between two entities." },
        q47: { answer: "A", explanation: "Cardinality defines the minimum and maximum number of relationships between entities." },
        q48: { answer: "A", explanation: "Crow's foot notation represents the cardinality of relationships in an ER diagram." },
        q49: { answer: "A", explanation: "A partition divides a supertype entity into mutually exclusive subtypes." },
        q50: { answer: "B", explanation: "A reflexive relationship is when an entity relates to itself." },
        q51: { answer: "B", explanation: "An artificial key is created when no natural key exists." },
        q52: { answer: "B", explanation: "An entity instance is a specific example of an entity, such as a single employee in a company." },
        q53: { answer: "B", explanation: "The CASCADE constraint automatically updates foreign keys when the primary key changes." },
        q54: { answer: "A", explanation: "SET NULL sets invalid foreign keys to NULL." },
        q55: { answer: "B", explanation: "SET DEFAULT sets foreign keys to their default values if they become invalid." },
        q56: { answer: "B", explanation: "The transaction manager ensures transactions are executed without conflict and restores consistency after failure." },
        q57: { answer: "B", explanation: "MERGE selects data from one table and inserts it into another." },
        q58: { answer: "A", explanation: "A heap table has no imposed row order and is optimized for bulk inserts." },
        q59: { answer: "B", explanation: "A table cluster interleaves rows of multiple tables in the same storage area." },
        q60: { answer: "A", explanation: "A table scan reads table blocks directly without accessing an index." },
        q61: { answer: "A", explanation: "A dense index contains an entry for every table row." },
        q62: { answer: "A", explanation: "A bitmap index uses a grid of bits to represent values." },
        q63: { answer: "B", explanation: "A materialized view stores data and must be refreshed when the underlying data changes." },
        q64: { answer: "A", explanation: "WITH CHECK OPTION ensures updates or inserts comply with the view's WHERE clause." },
        q65: { answer: "A", explanation: "A subtype entity is a subset of another entity type, called the supertype entity." },
        q66: { answer: "B", explanation: "An identifying relationship means a child entity is completely dependent on a parent entity." },
        q67: { answer: "A", explanation: "An intangible entity is documented in the data model but not tracked with data in the database." },
        q68: { answer: "B", explanation: "A candidate key is a simple or composite column that is unique and minimal." },
        q69: { answer: "B", explanation: "A non-key column is one that is not contained in a candidate key." },
        q70: { answer: "A", explanation: "Third normal form (3NF) ensures all non-key columns depend on unique columns only." }
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
