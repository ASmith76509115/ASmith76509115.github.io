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
const correctAnswers = {
    q1: { answer: "A", explanation: "File System, Hash Index, Web Architecture, Multi-tier Architecture." },
    q2: { answer: "B", explanation: "Specifies indexes, table structures, and partitions." },
    q3: { answer: "C", explanation: "Starts at the foreign key, pointing to the referenced table." },
    q4: { answer: "C", explanation: "Rejects operations that violate referential integrity." },
    q5: { answer: "C", explanation: "Each B value is related to at most one A value." },
    q6: { answer: "C", explanation: "Defines maxima and minima of relationships." },
    q7: { answer: "C", explanation: "Database determines partition expression automatically." },
    q8: { answer: "B", explanation: "Returns only matching values." },
    q9: { answer: "B", explanation: "Runs on parallel computer or cluster." },
    q10: { answer: "A", explanation: "Specifies partition expression using VALUES IN." },
    q11: { answer: "B", explanation: "Permanently removes an object and associated data." },
    q12: { answer: "B", explanation: "Includes unmatched data, resulting in empty fields." },
    q13: { answer: "B", explanation: "Data describing elements such as columns, names, and types." },
    q14: { answer: "D", explanation: "References outer query column in subquery WHERE clause." },
    q15: { answer: "A", explanation: "An ordered collection of elements." },
    q16: { answer: "B", explanation: "Implements database requirements in a specific system." },
    q17: { answer: "C", explanation: "Uses VALUES LESS THAN or MAXVALUE for range specification." },
    q18: { answer: "A", explanation: "Manages connections and communication between tools." },
    q19: { answer: "A", explanation: "Raw, unprocessed data from multiple sources." },
    q20: { answer: "B", explanation: "Combines tables, uses more space, may cause redundancy." },
    q21: { answer: "D", explanation: "Creates additional buckets and distributes rows dynamically." },
    q22: { answer: "C", explanation: "Design rules to reduce redundancy." },
    q23: { answer: "D", explanation: "High-level data requirements representation." },
    q24: { answer: "A", explanation: "Name for database objects in a federated database." },
    q25: { answer: "B", explanation: "Can exist independently in the database." },
    q26: { answer: "B", explanation: "Subset of table columns." },
    q27: { answer: "A", explanation: "Sparse clustering index." },
    q28: { answer: "A", explanation: "Defines allowable values based on relational rules." },
    q29: { answer: "C", explanation: "Maps tables to a single file." },
    q30: { answer: "B", explanation: "ETL five-step data integration process." },
    q31: { answer: "C", explanation: "Checks for syntax errors and converts queries." },
    q32: { answer: "C", explanation: "Compiles and executes query plans." },
    q33: { answer: "C", explanation: "Primary memory for program execution." },
    q34: { answer: "C", explanation: "Path from top-level to bottom-level block." },
    q35: { answer: "B", explanation: "Defines and manages database structures." },
    q36: { answer: "B", explanation: "Unique, minimal identifier for table values." },
    q37: { answer: "A", explanation: "Bottom level contains all indexed values." },
    q38: { answer: "D", explanation: "Gets data only from right table." },
    q39: { answer: "C", explanation: "Two-phase commit across multiple nodes." },
    q40: { answer: "C", explanation: "Defines keys like Primary, Composite, Surrogate." },
    q41: { answer: "B", explanation: "Case-sensitive LIKE operator keyword." },
    q42: { answer: "C", explanation: "Sequentially scans index to find needed blocks." },
    q43: { answer: "B", explanation: "Records long-running queries." },
    q44: { answer: "C", explanation: "Database user interfaces like Workbench, APIs." },
    q45: { answer: "C", explanation: "Multiple replicas ensure availability." },
    q46: { answer: "C", explanation: "Catalog resides on a single node." },
    q47: { answer: "C", explanation: "Directory of participating database objects." },
    q48: { answer: "C", explanation: "Basic unit of storage for data transfer." },
    q49: { answer: "B", explanation: "Controls access to the database." },
    q50: { answer: "C", explanation: "Eliminates transitive dependencies." },
    q51: { answer: "B", explanation: "Data storage with pages between 2 and 16 KB." },
    q52: { answer: "C", explanation: "Depicted with square corners in diagrams." },
    q53: { answer: "C", explanation: "Unique, singular, and required element." },
    q54: { answer: "C", explanation: "Statement inferred from another statement." },
    q55: { answer: "C", explanation: "Retrieves data from the database." },
    q56: { answer: "C", explanation: "Stores data in main memory." },
    q57: { answer: "B", explanation: "Group of blocks containing rows." },
    q58: { answer: "D", explanation: "Gets data only from the left table." },
    q59: { answer: "C", explanation: "Stores values and pointers in hierarchy." },
    q60: { answer: "C", explanation: "Intersection of data sets." },
    q61: { answer: "A", explanation: "Optimized for analytics." },
    q62: { answer: "C", explanation: "Stored, updated view of data." },
    q63: { answer: "B", explanation: "Associates federated and participating users." },
    q64: { answer: "C", explanation: "Internally manages replicas." },
    q65: { answer: "A", explanation: "Higher level values are not repeated." },
    q66: { answer: "A", explanation: "Replaces pointers with primary key values." },
    q67: { answer: "B", explanation: "Eliminates partial dependencies." },
    q68: { answer: "C", explanation: "Run on different systems or schema." },
    q69: { answer: "D", explanation: "Table Clusters are multi-table storage areas that interleave rows from multiple tables in the same storage space and use cluster keys to organize the data." }
    q70: { answer: "A", explanation: "Emulates a complete, independent environment." }
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
