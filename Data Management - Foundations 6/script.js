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
    q1: { answer: 'B', explanation: 'A primary key uniquely identifies each row in a table, ensuring no duplicates.' },
    q2: { answer: 'B', explanation: 'A table can only have one primary key, which may be a composite key.' },
    q3: { answer: 'B', explanation: 'A composite primary key is made up of multiple columns to ensure uniqueness.' },
    q4: { answer: 'B', explanation: 'A foreign key links two tables and maintains referential integrity.' },
    q5: { answer: 'B', explanation: 'Foreign keys ensure referential integrity by restricting values to those that exist in the referenced table.' },
    q6: { answer: 'B', explanation: 'Foreign key constraints preserve data integrity by preventing violations.' },
    q7: { answer: 'B', explanation: 'Foreign keys can contain NULL values unless they are part of a primary key.' },
    q8: { answer: 'B', explanation: 'A unique constraint ensures all values in a column are unique.' },
    q9: { answer: 'B', explanation: 'A unique constraint allows one NULL, while a primary key does not.' },
    q10: { answer: 'B', explanation: 'A table can have multiple unique constraints, each on different columns.' },
    q11: { answer: 'B', explanation: 'A CHECK constraint enforces specific conditions on column values.' },
    q12: { answer: 'B', explanation: 'A DEFAULT constraint sets a default value when none is provided.' },
    q13: { answer: 'B', explanation: 'A NOT NULL constraint prohibits NULL values in a column.' },
    q14: { answer: 'B', explanation: 'A CHECK constraint enforces conditions, while UNIQUE ensures no duplicates.' },
    q15: { answer: 'B', explanation: 'Referential integrity keeps relationships between tables consistent.' },
    q16: { answer: 'B', explanation: 'CASCADE DELETE removes related records in a child table when the parent record is deleted.' },
    q17: { answer: 'B', explanation: 'ON DELETE SET NULL sets foreign key values to NULL when the referenced record is deleted.' },
    q18: { answer: 'B', explanation: 'ON UPDATE CASCADE updates foreign key values if the referenced primary key changes.' },
    q19: { answer: 'B', explanation: 'A candidate key can uniquely identify rows but is not chosen as the primary key.' },
    q20: { answer: 'B', explanation: 'A primary key can be changed if references are updated in related tables.' },
    q21: { answer: 'B', explanation: 'A surrogate key is an artificial identifier not derived from application data.' },
    q22: { answer: 'A', explanation: 'A composite foreign key references multiple columns from a composite primary key.' },
    q23: { answer: 'B', explanation: 'A self-referencing foreign key references a column within the same table.' },
    q24: { answer: 'B', explanation: 'A UNIQUE constraint on multiple columns ensures the combination of values is unique.' },
    q25: { answer: 'B', explanation: 'A foreign key can reference a composite primary key.' },
    q26: { answer: 'B', explanation: 'A composite key combines multiple columns to uniquely identify a record.' },
    q27: { answer: 'A', explanation: 'A CHECK constraint enforces business rules by validating specific conditions.' },
    q28: { answer: 'B', explanation: 'CHECK constraints can only reference columns within the same table.' },
    q29: { answer: 'A', explanation: 'An alternate key is a candidate key not chosen as the primary key.' },
    q30: { answer: 'B', explanation: 'An exclusion constraint ensures no two rows match a specified combination of columns.' },
    q31: { answer: 'B', explanation: 'An index speeds up data retrieval by providing quick lookup.' },
    q32: { answer: 'A', explanation: 'An index improves performance by allowing direct row access without scanning the table.' },
    q33: { answer: 'B', explanation: 'A clustered index organizes data rows in the table based on the index key.' },
    q34: { answer: 'B', explanation: 'A non-clustered index creates a separate structure from the data table.' },
    q35: { answer: 'B', explanation: 'A unique index ensures all values in the indexed column(s) are unique.' },
    q36: { answer: 'B', explanation: 'Only one clustered index is allowed per table as it dictates the row storage order.' },
    q37: { answer: 'B', explanation: 'A covering index includes all columns needed by a query, avoiding access to the base table.' },
    q38: { answer: 'B', explanation: 'A partial index is used to index a subset of rows based on a specific condition.' },
    q39: { answer: 'B', explanation: 'A composite index improves multi-column queries by indexing multiple columns.' },
    q40: { answer: 'B', explanation: 'Indexing can slow down inserts and updates as the index itself must be updated.' },
    q41: { answer: 'B', explanation: 'A primary key index is automatically created to ensure uniqueness of primary key values.' },
    q42: { answer: 'B', explanation: 'Bitmap indexes are efficient for columns with limited distinct values.' },
    q43: { answer: 'B', explanation: 'Hash indexes are used for fast equality comparisons but are not efficient for range queries.' },
    q44: { answer: 'B', explanation: 'Indexes are created using the CREATE INDEX statement.' },
    q45: { answer: 'B', explanation: 'The correct syntax to drop an index is DROP INDEX index_name.' },
    q46: { answer: 'B', explanation: 'Indexes on foreign key columns speed up joins and referential integrity checks.' },
    q47: { answer: 'B', explanation: 'The EXPLAIN statement shows the execution plan for a query.' },
    q48: { answer: 'B', explanation: 'Unique indexes improve query speed but can add overhead to inserts and updates.' },
    q49: { answer: 'B', explanation: 'An indexed view has an index that improves performance, especially for complex joins.' },
    q50: { answer: 'B', explanation: 'Indexing increases disk usage as it requires additional storage.' },
    q51: { answer: 'B', explanation: 'A filtered index includes only rows that meet a specified condition.' },
    q52: { answer: 'B', explanation: 'Computed columns can be indexed if they are deterministic, meaning they consistently return the same result.' },
    q53: { answer: 'B', explanation: 'Index fragmentation occurs when index pages are not contiguous, reducing performance.' },
    q54: { answer: 'B', explanation: 'Rebuilding or reorganizing an index helps fix fragmentation and improves performance.' },
    q55: { answer: 'B', explanation: 'A full-text index is optimized for text searching.' },
    q56: { answer: 'B', explanation: 'Spatial indexes are used for geographical or spatial data queries.' },
    q57: { answer: 'B', explanation: 'Indexes speed up reads but can slow down writes as they require updates.' },
    q58: { answer: 'A', explanation: 'An index scan searches through the entire index to find rows.' },
    q59: { answer: 'B', explanation: 'An index seek quickly locates rows that meet a condition, avoiding a full scan.' },
    q60: { answer: 'B', explanation: 'A descending index optimizes queries that order results in descending order.' },
    q61: { answer: 'B', explanation: 'Periodic analysis of indexes ensures they align with current query patterns.' },
    q62: { answer: 'B', explanation: 'Too many indexes can slow down write operations, as all indexes need to be updated.' },
    q63: { answer: 'B', explanation: 'The trade-off with indexing is that it speeds up reads but slows down writes.' },
    q64: { answer: 'B', explanation: 'A covering index reduces I/O by containing all necessary columns for a query.' },
    q65: { answer: 'A', explanation: 'Frequently updated columns with many unique values should be avoided for indexing, as this can slow down performance.' },
    q66: { answer: 'B', explanation: 'Indexing large tables requires considering the impact on storage and performance.' },
    q67: { answer: 'B', explanation: 'A materialized view stores query results as a table, which can be indexed.' },
    q68: { answer: 'A', explanation: 'A full-table scan examines every row in a table.' },
    q69: { answer: 'A', explanation: 'Index pruning improves performance by removing unused indexes.' },
    q70: { answer: 'B', explanation: 'Indexing foreign keys speeds up joins by providing quick access to related data.' },
    q71: { answer: 'A', explanation: 'A dense index has an entry for every row, while a sparse index has entries only for some rows.' },
    q72: { answer: 'B', explanation: 'Rebuilding an index is necessary when fragmentation affects performance.' },
    q73: { answer: 'B', explanation: 'An indexed view improves performance on complex joins by allowing indexed access to a view.' },
    q74: { answer: 'A', explanation: 'A dense index has an entry for every row, while a sparse index has entries only for some rows.' },
    q75: { answer: 'B', explanation: 'Rebuilding or reorganizing an index helps to resolve fragmentation and optimize performance.' },
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
