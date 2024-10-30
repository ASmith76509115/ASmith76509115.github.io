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
    q1: { answer: "B", explanation: "SQL (Structured Query Language) is a standard language for managing and manipulating relational databases." },
    q2: { answer: "B", explanation: "The SELECT statement retrieves data from one or more tables, returning it as a result set." },
    q3: { answer: "B", explanation: "SELECT column1, column2 FROM table_name; retrieves specified columns from a table." },
    q4: { answer: "B", explanation: "WHERE filters rows by specified conditions, limiting the data returned by a query." },
    q5: { answer: "B", explanation: "Operators like =, <>, >, <, >=, <=, AND, OR, BETWEEN, LIKE, and IN can be used in a WHERE clause." },
    q6: { answer: "B", explanation: "AND combines multiple conditions in a WHERE clause, returning rows where all conditions are true." },
    q7: { answer: "B", explanation: "OR combines multiple conditions in a WHERE clause, returning rows where at least one condition is true." },
    q8: { answer: "B", explanation: "LIKE is used for pattern matching in strings, often with wildcards (%) to match zero or more characters." },
    q9: { answer: "B", explanation: "GROUP BY groups rows with the same values in specified columns, often used with aggregate functions." },
    q10: { answer: "B", explanation: "HAVING filters groups created by GROUP BY, whereas WHERE filters rows before grouping." },
    q11: { answer: "B", explanation: "COUNT returns the number of rows that meet a specified condition or the total number of rows if no condition is applied." },
    q12: { answer: "B", explanation: "DISTINCT eliminates duplicate rows from the result set, returning only unique values." },
    q13: { answer: "B", explanation: "JOIN combines rows from two or more tables based on a related column between them." },
    q14: { answer: "B", explanation: "INNER JOIN returns only rows where there is a match in both joined tables." },
    q15: { answer: "B", explanation: "LEFT JOIN returns all rows from the left table and matched rows from the right table, with NULLs for non-matching rows in the right table." },
    q16: { answer: "B", explanation: "RIGHT JOIN returns all rows from the right table and matched rows from the left table, with NULLs for non-matching rows in the left table." },
    q17: { answer: "B", explanation: "FULL OUTER JOIN returns all rows when there is a match in either table, filling in NULLs for non-matching rows from both tables." },
    q18: { answer: "B", explanation: "CROSS JOIN returns the Cartesian product of two tables, combining all rows from both tables." },
    q19: { answer: "B", explanation: "A subquery is a query nested within another query, often used in SELECT, WHERE, or FROM clauses." },
    q20: { answer: "B", explanation: "A self-join is a join of a table with itself." },
    q21: { answer: "B", explanation: "An aggregate function performs calculations on multiple rows and returns a single value." },
    q22: { answer: "B", explanation: "GROUP BY groups rows that have the same values in specified columns." },
    q23: { answer: "B", explanation: "HAVING filters groups after they are created by the GROUP BY clause." },
    q24: { answer: "B", explanation: "WHERE filters rows before grouping, HAVING filters groups after grouping." },
    q25: { answer: "B", explanation: "ORDER BY sorts the result set by one or more columns." },
    q26: { answer: "A", explanation: "A subquery is a query within a query that can be used to return data to the main query." },
    q27: { answer: "B", explanation: "UNION combines the result sets of two or more SELECT statements, eliminating duplicates." },
    q28: { answer: "B", explanation: "UNION ALL includes duplicates, while UNION eliminates duplicates." },
    q29: { answer: "B", explanation: "A correlated subquery refers to columns from the outer query, executing once for each row processed by the outer query." },
    q30: { answer: "B", explanation: "EXISTS checks for the existence of rows returned by a subquery." },
    q31: { answer: "B", explanation: "DISTINCT eliminates duplicate rows from the result set." },
    q32: { answer: "B", explanation: "LIKE is used for pattern matching, often with wildcards." },
    q33: { answer: "B", explanation: "% wildcard represents zero, one, or multiple characters." },
    q34: { answer: "B", explanation: "_ wildcard represents exactly one character." },
    q35: { answer: "B", explanation: "INNER JOIN returns only rows where there is a match in both tables." },
    q36: { answer: "B", explanation: "LEFT JOIN returns all rows from the left table and matched rows from the right table." },
    q37: { answer: "B", explanation: "RIGHT JOIN returns all rows from the right table and matched rows from the left table." },
    q38: { answer: "B", explanation: "FULL OUTER JOIN returns all rows when there is a match in either table, filling in NULLs for unmatched rows." },
    q39: { answer: "B", explanation: "CROSS JOIN returns the Cartesian product of two tables, combining all rows from both tables." },
    q40: { answer: "B", explanation: "COUNT returns the number of rows that meet a specified condition or the total number of rows if no condition is applied." },
    q41: { answer: "B", explanation: "COUNT(DISTINCT column_name) counts unique values in a column." },
    q42: { answer: "B", explanation: "SUM adds up all numeric values in a specified column." },
    q43: { answer: "B", explanation: "AVG calculates the average of numeric values in a specified column." },
    q44: { answer: "A", explanation: "MIN returns the smallest value in a specified column." },
    q45: { answer: "B", explanation: "MAX returns the largest value in a specified column." },
    q46: { answer: "B", explanation: "A primary key constraint ensures that a column or combination of columns uniquely identifies each row in a table." },
    q47: { answer: "B", explanation: "A foreign key constraint establishes a link between columns in two tables, enforcing referential integrity." },
    q48: { answer: "B", explanation: "UNIQUE prevents duplicate values in a column and allows NULL values." },
    q49: { answer: "B", explanation: "A default constraint provides a default value for a column when no value is specified." },
    q50: { answer: "A", explanation: "CHECK enforces a condition that each value in a column must meet." },
    q51: { answer: "B", explanation: "ROLLBACK undoes changes made in the current transaction, restoring the database to its previous state." },
    q52: { answer: "A", explanation: "COMMIT permanently saves all changes made during the current transaction." },
    q53: { answer: "B", explanation: "A transaction is a sequence of SQL statements executed as a single unit, ensuring data integrity." },
    q54: { answer: "B", explanation: "BETWEEN selects values within a specified range, including the endpoints." },
    q55: { answer: "B", explanation: "IN checks if a value exists within a specified list of values." },
    q56: { answer: "B", explanation: "JOIN combines rows from two or more tables based on a related column between them." },
    q57: { answer: "A", explanation: "CASE allows for conditional logic within a query, returning values based on specified conditions." },
    q58: { answer: "B", explanation: "A correlated subquery refers to columns from the outer query, executing once for each row processed by the outer query." },
    q59: { answer: "B", explanation: "UNION combines the result sets of two or more SELECT statements, eliminating duplicates by default." },
    q60: { answer: "B", explanation: "TOP limits the number of rows returned by a query." },
    q61: { answer: "B", explanation: "CONCAT concatenates two or more strings into one string." },
    q62: { answer: "B", explanation: "SUBSTRING extracts a portion of a string from a specified starting point and length." },
    q63: { answer: "B", explanation: "COALESCE returns the first non-NULL value from a list of arguments." },
    q64: { answer: "B", explanation: "IFNULL (MySQL) or ISNULL (SQL Server) replaces NULL values with a specified value." },
    q65: { answer: "B", explanation: "A view is a virtual table based on a query that presents data from one or more tables." },
    q66: { answer: "B", explanation: "An index speeds up data retrieval by allowing the database to locate rows more quickly." }
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
