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
    q1: { answer: "A", explanation: "A database system enforces authorization rules to limit user access." },
    q2: { answer: "B", explanation: "Synchronization rules ensure that data remains consistent across multiple locations." },
    q3: { answer: "D", explanation: "If a course does not exist in the catalog but is in a registration record, it violates the database rules." },
    q4: { answer: "C", explanation: "The query processor optimizes query execution to ensure efficient data retrieval." },
    q5: { answer: "B", explanation: "The WHERE clause in an UPDATE statement modifies only specific rows." },
    q6: { answer: "B", explanation: "The SET clause specifies new values for columns to be updated." },
    q7: { answer: "C", explanation: "TRUNCATE deletes all rows in a table efficiently, while DELETE can use a WHERE clause." },
    q8: { answer: "A", explanation: "ORDER BY is used to sort rows in a query." },
    q9: { answer: "B", explanation: "DISTINCT keyword returns only non-duplicate values." },
    q10: { answer: "A", explanation: "To sort in descending order, use the DESC keyword after the column name." },
    q11: { answer: "B", explanation: "BIGINT is used to store large integer values." },
    q12: { answer: "B", explanation: "VARCHAR(N) stores text with a defined maximum length." },
    q13: { answer: "B", explanation: "DECIMAL(M, D) is for fixed-point numeric values." },
    q14: { answer: "B", explanation: "SMALLINT uses 2 bytes in storage." },
    q15: { answer: "A", explanation: "The storage range of an unsigned TINYINT is from 0 to 255." },
    q16: { answer: "A", explanation: "A foreign key constraint violation during a DELETE operation rejects the operation." },
    q17: { answer: "A", explanation: "A composite primary key consists of more than one column." },
    q18: { answer: "A", explanation: "A foreign key constraint enforces valid references to a primary key." },
    q19: { answer: "A", explanation: "RESTRICT prevents updates or deletes that violate referential integrity." },
    q20: { answer: "B", explanation: "The CASCADE constraint automatically propagates updates or deletes." },
    q21: { answer: "A", explanation: "A unique constraint ensures values in a column are unique." },
    q22: { answer: "B", explanation: "An index improves the speed of data retrieval in a database." },
    q23: { answer: "B", explanation: "A bitmap index uses a grid of bits to represent data in a table." },
    q24: { answer: "A", explanation: "A dense index has an entry for every row, while a sparse index has an entry for each block." },
    q25: { answer: "A", explanation: "A table scan reads table blocks directly, without accessing an index." },
    q26: { answer: "B", explanation: "CREATE INDEX creates an index for query performance." },
    q27: { answer: "B", explanation: "A hash index uses a hash function for fast row retrieval." },
    q28: { answer: "C", explanation: "The storage manager translates database commands into file-system commands." },
    q29: { answer: "A", explanation: "An equijoin compares tables using the '=' operator." },
    q30: { answer: "B", explanation: "A cross-join combines tables without any condition." },
    q31: { answer: "B", explanation: "A FULL JOIN returns all rows from both tables." },
    q32: { answer: "A", explanation: "A non-equijoin uses operators like '<' or '>' to compare columns." },
    q33: { answer: "B", explanation: "A subquery nests one query inside another." },
    q34: { answer: "A", explanation: "An alias is a temporary name for a column or table, created with the AS keyword." },
    q35: { answer: "B", explanation: "COUNT() counts rows in a table." },
    q36: { answer: "B", explanation: "AVG() calculates the average value of a numeric column." },
    q37: { answer: "C", explanation: "SUM() returns the total sum of a numeric column." },
    q38: { answer: "C", explanation: "MAX() returns the maximum value in a column." },
    q39: { answer: "C", explanation: "MIN() returns the minimum value in a column." },
    q40: { answer: "B", explanation: "HAVING filters group results after grouping." },
    q41: { answer: "B", explanation: "A reflexive relationship relates an entity to itself." },
    q42: { answer: "B", explanation: "Supertype and subtype entities model inheritance relationships." },
    q43: { answer: "A", explanation: "An ER diagram represents entities, relationships, and attributes." },
    q44: { answer: "B", explanation: "A relationship type represents associations between entities." },
    q45: { answer: "B", explanation: "A transaction groups SQL statements into a single unit." },
    q46: { answer: "A", explanation: "The transaction manager rolls back to restore consistency if a transaction fails." },
    q47: { answer: "B", explanation: "COMMIT saves all changes made in a transaction." },
    q48: { answer: "C", explanation: "ROLLBACK undoes all changes in a transaction." },
    q49: { answer: "B", explanation: "A view is a virtual table created by a query." },
    q50: { answer: "B", explanation: "A materialized view stores data and must be refreshed when base data changes." },
    q51: { answer: "A", explanation: "WITH CHECK OPTION ensures inserts and updates meet the view's WHERE clause." },
    q52: { answer: "B", explanation: "A tablespace is a logical storage unit in a database." },
    q53: { answer: "A", explanation: "A heap table does not impose row order and is optimized for bulk insert operations." },
    q54: { answer: "A", explanation: "A sorted table organizes rows by a specific column, unlike a heap table." },
    q55: { answer: "B", explanation: "A hash table uses a hash function to distribute rows across buckets." },
    q56: { answer: "B", explanation: "TRIM() removes leading and trailing spaces from a string." },
    q57: { answer: "A", explanation: "A tuple is an ordered collection of elements representing a row." },
    q58: { answer: "A", explanation: "A simple primary key is a single column, while a composite key consists of multiple columns." },
    q59: { answer: "B", explanation: "GROUP BY groups rows that have the same values into summary rows." },
    q60: { answer: "A", explanation: "A clustered index stores data in order of the clustered column." },
    q61: { answer: "A", explanation: "A dense index has an entry for every row in a table." },
    q62: { answer: "B", explanation: "A sparse index has an entry for each block of rows." },
    q63: { answer: "B", explanation: "A foreign key references a primary key in another table." },
    q64: { answer: "C", explanation: "A surrogate key is an artificial key used when no natural key exists." },
    q65: { answer: "B", explanation: "A candidate key is a column or set of columns that could be a primary key." },
    q66: { answer: "A", explanation: "A unique constraint ensures that all values in a column are distinct." },
    q67: { answer: "A", explanation: "Referential integrity ensures foreign keys refer to valid primary keys." },
    q68: { answer: "A", explanation: "Denormalization adds redundancy to improve performance." },
    q69: { answer: "B", explanation: "A composite primary key consists of multiple columns." },
    q70: { answer: "A", explanation: "Third normal form (3NF) eliminates transitive dependencies." }
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
