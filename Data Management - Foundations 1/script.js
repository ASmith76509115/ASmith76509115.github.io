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
        q1: { answer: "A", explanation: "A DBMS defines, creates, maintains, and controls access to a database." },
        q2: { answer: "A", explanation: "The primary functions of a DBMS include data storage, retrieval, and updating." },
        q3: { answer: "B", explanation: "The main objectives of a DBMS are efficiency, integrity, security, and multi-user access." },
        q4: { answer: "B", explanation: "The four types of DBMS are Network, Hierarchical, Relational, and Object-oriented." },
        q5: { answer: "B", explanation: "A Hierarchical DBMS organizes data in a tree-like structure." },
        q6: { answer: "B", explanation: "An RDBMS is based on the relational model with tables and keys." },
        q7: { answer: "B", explanation: "SQL allows you to create, read, update, and delete data in an RDBMS." },
        q8: { answer: "B", explanation: "Data integrity ensures data accuracy and consistency." },
        q9: { answer: "A", explanation: "Data security involves protecting data from unauthorized access." },
        q10: { answer: "B", explanation: "Concurrency allows multiple users to access data simultaneously." },
        q11: { answer: "B", explanation: "Backup and recovery allow data to be restored after loss or corruption." },
        q12: { answer: "A", explanation: "A transaction is a sequence of operations treated as a single unit of work." },
        q13: { answer: "B", explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability." },
        q14: { answer: "B", explanation: "Atomicity ensures all operations in a transaction are completed or none are applied." },
        q15: { answer: "B", explanation: "Consistency ensures a transaction adheres to all rules and constraints." },
        q16: { answer: "A", explanation: "Isolation ensures one transaction does not affect others until complete." },
        q17: { answer: "B", explanation: "Durability guarantees transaction changes are permanent after commit." },
        q18: { answer: "B", explanation: "DBMS components include Hardware, Software, Data, Procedures, and Database Access Language." },
        q19: { answer: "A", explanation: "Hardware physically stores and retrieves data using devices." },
        q20: { answer: "B", explanation: "Software manages and controls access to the database." },
        q21: { answer: "B", explanation: "A schema is a visual representation of the structure of a database." },
        q22: { answer: "A", explanation: "Logical schema is for design, while physical schema is for data storage." },
        q23: { answer: "B", explanation: "A database view is a virtual table created by a query." },
        q24: { answer: "B", explanation: "Data redundancy is the repetition of data within a database." },
        q25: { answer: "B", explanation: "A primary key uniquely identifies each record in a table." },
        q26: { answer: "A", explanation: "A foreign key links tables by referencing primary keys in other tables." },
        q27: { answer: "B", explanation: "An entity is an object about which data is stored in a database." },
        q28: { answer: "A", explanation: "An attribute is a characteristic or property of an entity." },
        q29: { answer: "B", explanation: "Referential integrity maintains consistent relationships between tables." },
        q30: { answer: "B", explanation: "An index is a data structure that improves query performance." },
        q31: { answer: "A", explanation: "A clustered index sorts data rows directly in the table." },
        q32: { answer: "B", explanation: "A non-clustered index uses a separate structure to point to data." },
        q33: { answer: "B", explanation: "A stored procedure is a set of SQL statements saved for repeated use." },
        q34: { answer: "B", explanation: "A database trigger automatically executes in response to specific events." },
        q35: { answer: "B", explanation: "Data concurrency allows multiple users access to data simultaneously without conflicts." },
        q36: { answer: "B", explanation: "Data integrity ensures accuracy and consistency throughout the data lifecycle." },
        q37: { answer: "B", explanation: "Data security protects against unauthorized access and corruption." },
        q38: { answer: "B", explanation: "Data abstraction separates logical data structures from physical storage." },
        q39: { answer: "B", explanation: "Data abstraction levels include conceptual, external, and internal levels." },
        q40: { answer: "B", explanation: "The external level provides user-specific views of the data." },
        q41: { answer: "B", explanation: "The conceptual level provides a unified view of the entire database." },
        q42: { answer: "A", explanation: "The internal level details the physical storage of data on hardware." },
        q43: { answer: "B", explanation: "Data independence allows changes in one level without affecting others." },
        q44: { answer: "B", explanation: "Logical data independence allows changes in the conceptual schema without altering external schemas." },
        q45: { answer: "A", explanation: "Physical data independence allows changes in storage without affecting the conceptual schema." },
        q46: { answer: "A", explanation: "A candidate key could be used as a primary key in a table." },
        q47: { answer: "B", explanation: "A composite key consists of multiple columns to uniquely identify records." },
        q48: { answer: "A", explanation: "A surrogate key is a unique identifier generated by the system." },
        q49: { answer: "B", explanation: "Referential integrity ensures foreign keys correctly reference primary keys." },
        q50: { answer: "B", explanation: "A foreign key links one table to another by referencing a primary key." },
        q51: { answer: "A", explanation: "A self-referencing relationship links a table to itself." },
        q52: { answer: "B", explanation: "A database view is a virtual table based on a query, not physically stored." },
        q53: { answer: "B", explanation: "A trigger is a set of SQL commands that execute in response to specific events." },
        q54: { answer: "B", explanation: "An entity is a real-world object about which data is stored." },
        q55: { answer: "A", explanation: "An attribute is a column that defines a characteristic of an entity." },
        q56: { answer: "A", explanation: "A relationship is a link between two or more entities in a database." },
        q57: { answer: "B", explanation: "A one-to-many relationship links one entity to multiple entities in another table." },
        q58: { answer: "B", explanation: "A many-to-many relationship allows multiple entities in each table to relate to each other." },
        q59: { answer: "B", explanation: "A recursive relationship is where an entity is related to itself." },
        q60: { answer: "B", explanation: "A domain is a set of permissible values for an attribute." },
        q61: { answer: "B", explanation: "Data redundancy is storing the same data in multiple places, which can lead to inefficiencies." },
        q62: { answer: "B", explanation: "A NULL value represents a missing or undefined value in a database." },
        q63: { answer: "B", explanation: "A primary key uniquely identifies each record in a table." },
        q64: { answer: "A", explanation: "An alternate key is a candidate key that is not chosen as the primary key." },
        q65: { answer: "B", explanation: "A data model is a visual representation of database structure, showing relationships." },
        q66: { answer: "B", explanation: "A logical data model defines data relationships and structures at the conceptual level." },
        q67: { answer: "A", explanation: "A physical data model shows how data is stored and accessed on hardware." },
        q68: { answer: "B", explanation: "A database schema is a blueprint defining the structure of a database." },
        q69: { answer: "A", explanation: "Metadata describes other data, providing information about data structure and constraints." },
        q70: { answer: "B", explanation: "A database index is an object that speeds up data retrieval by organizing the data for quick access." },
        q71: { answer: "B", explanation: "A clustered index sorts and stores data rows directly in the table." },
        q72: { answer: "B", explanation: "A domain is a set of permissible values for an attribute, defining what values are acceptable." },
        q73: { answer: "B", explanation: "A composite key combines multiple columns to create a unique identifier for records." },
        q74: { answer: "B", explanation: "Data redundancy involves storing the same data in multiple locations, potentially leading to inefficiencies." },
        q75: { answer: "B", explanation: "Logical data modeling abstractly defines data structure and relationships, independent of physical storage." }
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
