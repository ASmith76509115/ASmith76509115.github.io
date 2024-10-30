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
    q1: { answer: "A", explanation: "A structured collection of data that is organized for easy access, management, and updating." },
    q2: { answer: "B", explanation: "LIKE operator searches for a specified pattern in a column." },
    q3: { answer: "D", explanation: "A heap table does not impose any specific order on rows." },
    q4: { answer: "A", explanation: "Data is stored in rows and columns, often in tables, making it easy to retrieve and manage." },
    q5: { answer: "A", explanation: "A Database Management System (DBMS) enables retrieval, modification, or deletion of data by authorized users." },
    q6: { answer: "A", explanation: "To store, organize, and manage large amounts of data efficiently." },
    q7: { answer: "A", explanation: "By organizing data logically and avoiding duplicate storage." },
    q8: { answer: "A", explanation: "Searching, filtering, sorting, and generating reports." },
    q9: { answer: "A", explanation: "Indexing, queries, and optimization techniques ensure the efficiency of databases." },
    q10: { answer: "A", explanation: "A relational database organizes data into tables with structured relationships via keys." },
    q11: { answer: "A", explanation: "A primary key is a unique identifier for each record in a table." },
    q12: { answer: "A", explanation: "A foreign key is a field in one table that links to the primary key in another table." },
    q13: { answer: "A", explanation: "ACID stands for Atomicity, Consistency, Isolation, Durability." },
    q14: { answer: "A", explanation: "MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server use the relational model." },
    q15: { answer: "A", explanation: "A NoSQL database handles unstructured or semi-structured data." },
    q16: { answer: "A", explanation: "A document-based NoSQL database stores data in documents, often in JSON or BSON formats." },
    q17: { answer: "A", explanation: "A key-value store is a type of NoSQL database that stores data as key-value pairs." },
    q18: { answer: "A", explanation: "Graph databases store data in nodes and edges, ideal for handling data with complex relationships." },
    q19: { answer: "A", explanation: "NoSQL databases scale horizontally by distributing data across multiple servers." },
    q20: { answer: "A", explanation: "A Database Management System (DBMS) is software that interacts with users and applications to manage and organize data in a database." },
    q21: { answer: "A", explanation: "The key functions of a DBMS include data storage, query processing, transaction management, backup, recovery, and security management." },
    q22: { answer: "A", explanation: "Query processing allows users to retrieve specific data by running queries (e.g., SELECT statements)." },
    q23: { answer: "A", explanation: "Transaction management ensures data integrity while managing multiple transactions." },
    q24: { answer: "A", explanation: "The purpose of backup and recovery in a DBMS is to provide tools for backing up the database and recovering data in case of a failure." },
    q25: { answer: "A", explanation: "Common DBMS software for relational databases includes MySQL, Microsoft SQL Server, and Oracle Database." },
    q26: { answer: "A", explanation: "MongoDB is a DBMS used for handling large-scale document-oriented data." },
    q27: { answer: "A", explanation: "CRUD stands for Create, Read, Update, Delete." },
    q28: { answer: "A", explanation: "The SQL command to create a new record in a database is INSERT INTO." },
    q29: { answer: "A", explanation: "The SQL command to retrieve data from a database is SELECT." },
    q30: { answer: "A", explanation: "The SQL command to update an existing record in a database is UPDATE." },
    q31: { answer: "A", explanation: "The SQL command to delete a record from a database is DELETE." },
    q32: { answer: "A", explanation: "Data integrity ensures the accuracy and consistency of data throughout its lifecycle." },
    q33: { answer: "A", explanation: "Referential integrity ensures that relationships between tables remain consistent." },
    q34: { answer: "A", explanation: "Constraints in a database are rules applied to ensure valid data (e.g., primary key, foreign key, unique constraints)." },
    q35: { answer: "A", explanation: "A unique constraint ensures that all values in a column are unique and no duplicates exist." },
    q36: { answer: "A", explanation: "Authentication in database security verifies the identity of a user (e.g., using a username and password)." },
    q37: { answer: "A", explanation: "Authorization ensures that authenticated users have the correct permissions to access or modify data." },
    q38: { answer: "A", explanation: "Encryption in databases protects sensitive data by converting it into unreadable code to prevent unauthorized access." },
    q39: { answer: "A", explanation: "Database auditing monitors and logs activities in the database to track who accessed or modified the data." },
    q40: { answer: "A", explanation: "Data modeling is the process of creating a visual representation of data structures and relationships." },
    q41: { answer: "A", explanation: "An Entity-Relationship Diagram (ERD) visually represents tables (entities) and the relationships between them." },
    q42: { answer: "A", explanation: "The purpose of normalization is to reduce redundancy and improve data integrity by organizing data into logical, non-redundant structures." },
    q43: { answer: "A", explanation: "1NF is a table that contains no repeating groups and has atomic values in each field." },
    q44: { answer: "A", explanation: "2NF is a table in 1NF where all non-key attributes are fully dependent on the primary key." },
    q45: { answer: "A", explanation: "3NF is a table in 2NF where no transitive dependencies exist." },
    q46: { answer: "A", explanation: "Denormalization intentionally introduces redundancy to improve read performance, often used in data warehousing." },
    q47: { answer: "A", explanation: "An SQL JOIN is used to combine rows from two or more tables based on a related column." },
    q48: { answer: "A", explanation: "An INNER JOIN returns rows when there is a match in both joined tables." },
    q49: { answer: "A", explanation: "A LEFT JOIN returns all rows from the left table and matched rows from the right table." },
    q50: { answer: "A", explanation: "A RIGHT JOIN returns all rows from the right table and matched rows from the left table." },
    q51: { answer: "A", explanation: "A FULL JOIN returns rows when there is a match in one of the tables." },
    q52: { answer: "A", explanation: "An index in a database improves the speed of data retrieval operations on a table." },
    q53: { answer: "A", explanation: "An aggregate function performs calculations on a set of values and returns a single result (e.g., COUNT, SUM, AVG)." },
    q54: { answer: "A", explanation: "The GROUP BY clause groups rows that have the same values in specified columns and allows aggregate functions to be applied." },
    q55: { answer: "A", explanation: "A subquery in SQL is a query nested inside another query to retrieve data used by the outer query." },
    q56: { answer: "A", explanation: "ACID properties in database transactions are Atomicity, Consistency, Isolation, Durability." },
    q57: { answer: "A", explanation: "Atomicity ensures that all parts of a transaction are completed; if one part fails, the entire transaction fails." },
    q58: { answer: "A", explanation: "Consistency ensures that a transaction takes the database from one valid state to another, maintaining database rules." },
    q59: { answer: "A", explanation: "Isolation ensures that transactions are processed independently of one another, preventing conflicts." },
    q60: { answer: "A", explanation: "Durability guarantees that once a transaction is committed, it remains permanent, even in the event of a system failure." },
    q61: { answer: "A", explanation: "A full backup in database management is a complete copy of the entire database." },
    q62: { answer: "A", explanation: "An incremental backup copies only the data that has changed since the last backup." },
    q63: { answer: "A", explanation: "A restore operation in a database recovers the database from a backup after a failure." },
    q64: { answer: "A", explanation: "Client-server architecture is a distributed system where the client sends requests to the server, and the server processes those requests and returns data." },
    q65: { answer: "A", explanation: "A distributed database is spread across multiple locations to improve performance and reliability." },
    q66: { answer: "A", explanation: "Replication is the process of copying data across multiple servers to ensure availability and fault tolerance." },
    q67: { answer: "A", explanation: "Database partitioning divides a large database into smaller, more manageable pieces for improved performance." },
    q68: { answer: "A", explanation: "Database sharding is a type of partitioning where data is distributed across multiple servers to improve performance and scalability." },
    q69: { answer: "A", explanation: "Role-based access control (RBAC) is a security model that assigns permissions to users based on their role within an organization." },
    q70: { answer: "A", explanation: "A database schema defines the organization of data in a database, including tables, relationships, and constraints." },
    q71: { answer: "A", explanation: "Data encryption at rest encrypts data stored in the database to protect it from unauthorized access." },
    q72: { answer: "A", explanation: "An SQL subquery is a query nested inside another query to retrieve data used by the outer query." },
    q73: { answer: "A", explanation: "The ON clause specifies the condition for the join between two tables." },
    q74: { answer: "A", explanation: "In an ER Diagram, a relationship is represented by a line connecting entities." },
    q75: { answer: "A", explanation: "Intersection data describes the relationship between two entities." },
    q76: { answer: "A", explanation: "A database is a structured collection of data organized for easy access, management, and updating." },
    q77: { answer: "A", explanation: "A DBMS is software that interacts with users and applications to manage and organize data in a database." },
    q78: { answer: "A", explanation: "Database auditing involves monitoring and logging actions on a database to track who accessed, modified, or deleted data." },
    q79: { answer: "A", explanation: "The primary purpose of a database is to store, organize, and manage large amounts of data efficiently." },
    q80: { answer: "A", explanation: "A full backup is a complete copy of the entire database." },
    q81: { answer: "A", explanation: "An incremental backup copies only the data that has changed since the last backup." },
    q82: { answer: "A", explanation: "A subquery in SQL is a query nested inside another query to retrieve data used by the outer query." },
    q83: { answer: "A", explanation: "Denormalization introduces redundancy to improve read performance, often used in data warehousing." },
    q84: { answer: "A", explanation: "Durability in the ACID property guarantees that once a transaction is committed, it remains permanent, even in the event of a system failure." }
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
