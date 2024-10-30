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
    q1: { answer: "A", explanation: "The Audit component in MySQL Enterprise Edition tracks all database changes, including time and user details." },
    q2: { answer: "B", explanation: "The LIKE operator is used to search for a specified pattern in a column." },
    q3: { answer: "D", explanation: "A heap table is a table in which no specific order is imposed on rows." },
    q4: { answer: "A", explanation: "A database is defined as a structured collection of data." },
    q5: { answer: "A", explanation: "The 'heap table' structure tracks free space as a linked list for future inserts after row deletion." },
    q6: { answer: "A", explanation: "An ER Diagram visually represents the data model of a system." },
    q7: { answer: "A", explanation: "The LOWER() function is used in SQL to convert a string to lowercase." },
    q8: { answer: "A", explanation: "A binary relationship involves two entities, such as a salesperson and the products they sell." },
    q9: { answer: "A", explanation: "An attribute in ER modeling is a descriptive property or characteristic of an entity." },
    q10: { answer: "A", explanation: "Denormalization is the process of merging tables to reduce joins." },
    q11: { answer: "A", explanation: "The BETWEEN operator checks if a value is within an inclusive range of two values." },
    q12: { answer: "A", explanation: "The storage engine in MySQL is also known as the storage manager." },
    q13: { answer: "A", explanation: "Data characteristics describe data in terms of scope, format, and access." },
    q14: { answer: "A", explanation: "The Order table satisfies First Normal Form (1NF) if each entry is atomic and has a unique primary key." },
    q15: { answer: "A", explanation: "An entity in ER modeling can be a person, place, product, concept, or activity." },
    q16: { answer: "A", explanation: "In Second Normal Form (2NF), all non-key attributes are fully functionally dependent on the primary key." },
    q17: { answer: "A", explanation: "MySQL Enterprise Edition includes components for high-end commercial installations, such as backup and security features." },
    q18: { answer: "A", explanation: "A binary relationship in ER modeling refers to a relationship between two entity types." },
    q19: { answer: "A", explanation: "The 'Schedules' relationship in an ER Diagram is read as Airline-Schedules-Flight." },
    q20: { answer: "A", explanation: "A database administrator designs data layout, secures the database, and monitors performance." },
    q21: { answer: "A", explanation: "A primary function of a DBMS is managing database security and access." },
    q22: { answer: "A", explanation: "A crow's foot symbol in ER diagrams represents a one-to-many relationship." },
    q23: { answer: "A", explanation: "In an ER diagram, weak entities are represented with a double rectangle." },
    q24: { answer: "A", explanation: "The MIN() function is used to find the least value in a set." },
    q25: { answer: "A", explanation: "The CURDATE() function in SQL returns the current date." },
    q26: { answer: "A", explanation: "The IN operator in a WHERE clause checks if a value matches any value in a list." },
    q27: { answer: "B", explanation: "MySQL architecture is organized into three layers." },
    q28: { answer: "C", explanation: "MySQL Workbench is designed for both database administrators and users." },
    q29: { answer: "A", explanation: "The JOIN operation combines rows from two tables based on related columns." },
    q30: { answer: "B", explanation: "The DELETE statement is used to remove rows of data from a database." },
    q31: { answer: "B", explanation: "SQL stands for Structured Query Language." },
    q32: { answer: "A", explanation: "A composite attribute can be divided into smaller parts, each representing a more basic attribute." },
    q33: { answer: "A", explanation: "The CONCAT() function combines two or more columns or strings into a single string." },
    q34: { answer: "A", explanation: "The GROUP BY statement is used to aggregate rows of data based on a common criterion." },
    q35: { answer: "A", explanation: "NoSQL databases are optimized for big data." },
    q36: { answer: "A", explanation: "Deleting a row in an indexed column causes the index to be updated." },
    q37: { answer: "A", explanation: "A strong entity has a unique identifying attribute." },
    q38: { answer: "A", explanation: "The result of a SELECT statement is a set of tuples." },
    q39: { answer: "A", explanation: "E.F. Codd introduced the relational model." },
    q40: { answer: "A", explanation: "The query processor layer in MySQL manages connections from multiple users." },
    q41: { answer: "A", explanation: "A row in a relational database is called a tuple." },
    q42: { answer: "A", explanation: "The query processor in MySQL compiles queries into low-level instructions." },
    q43: { answer: "A", explanation: "A database system does not store data in an unstructured format." },
    q44: { answer: "A", explanation: "The UNIQUE KEY constraint ensures that all values in a column are unique." },
    q45: { answer: "A", explanation: "CRUD stands for Create, Read, Update, and Delete." },
    q46: { answer: "A", explanation: "A one-to-one relationship describes the relationship between a salesperson and an office space." },
    q47: { answer: "A", explanation: "The COUNT() function finds the number of non-NULL rows in a column." },
    q48: { answer: "A", explanation: "DROP TABLE is used to delete a table from the database." },
    q49: { answer: "A", explanation: "INSERT INTO adds a new row of data into a table." },
    q50: { answer: "A", explanation: "The storage engine is responsible for executing instructions from the query processor." },
    q51: { answer: "A", explanation: "The WHERE clause is used to filter rows in a SELECT statement." },
    q52: { answer: "A", explanation: "A sorted table is optimal for queries that read data in sort order." },
    q53: { answer: "A", explanation: "In a unary relationship, an entity is related to itself." },
    q54: { answer: "A", explanation: "Modality in an ER Diagram represents the minimum number of entity occurrences that can be involved in a relationship." },
    q55: { answer: "A", explanation: "An associative entity represents a many-to-many relationship with attributes." },
    q56: { answer: "A", explanation: "VARCHAR is a valid SQL data type." },
    q57: { answer: "A", explanation: "A table cluster interleaves rows of two or more tables in the same storage area." },
    q58: { answer: "A", explanation: "Main memory (RAM) has the fastest access time among storage media." },
    q59: { answer: "A", explanation: "Cardinality in a relationship indicates the maximum and minimum number of entity instances." },
    q60: { answer: "A", explanation: "The MySQL Monitor in Enterprise Edition collects and displays system performance information." },
    q61: { answer: "A", explanation: "Referential integrity ensures the consistency and validity of relationships between tables." },
    q62: { answer: "A", explanation: "Second Normal Form (2NF) removes partial dependencies." },
    q63: { answer: "A", explanation: "A unique attribute in ER modeling identifies each entity instance uniquely." },
    q64: { answer: "A", explanation: "The SQRT() function calculates the square root of a number in SQL." },
    q65: { answer: "A", explanation: "A disadvantage of table clusters is that they perform poorly for joins on non-cluster key columns." },
    q66: { answer: "A", explanation: "A hash table determines the bucket containing each row using a hash function and key." },
    q67: { answer: "A", explanation: "Tables are a primary feature of relational databases." },
    q68: { answer: "A", explanation: "Second Normal Form (2NF) removes partial dependencies." },
    q69: { answer: "A", explanation: "A unique attribute in ER modeling identifies each entity instance uniquely." },
    q70: { answer: "A", explanation: "Third Normal Form (3NF) ensures all non-key columns depend only on unique columns." }
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
