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
        q1: { answer: "A", explanation: "Normalization is the process of organizing data to minimize redundancy and ensure data integrity." },
        q2: { answer: "B", explanation: "The primary goal is to reduce data redundancy and avoid anomalies during insertions, updates, and deletions." },
        q3: { answer: "B", explanation: "Data redundancy is the unnecessary duplication of data across a database." },
        q4: { answer: "B", explanation: "Data anomalies are inconsistencies that arise from redundant data." },
        q5: { answer: "B", explanation: "A Hierarchical DBMS organizes data in a tree-like structure." },
        q6: { answer: "B", explanation: "An update anomaly occurs when changes to redundant data are not applied consistently." },
        q7: { answer: "B", explanation: "An insertion anomaly prevents data from being added due to missing information in a non-normalized structure." },
        q8: { answer: "B", explanation: "A deletion anomaly removes additional data that should be retained due to improper structure." },
        q9: { answer: "B", explanation: "1NF eliminates repeating groups by ensuring that each column holds atomic, indivisible values." },
        q10: { answer: "B", explanation: "Atomic data is indivisible, containing the smallest units of information." },
        q11: { answer: "B", explanation: "1NF ensures columns hold atomic values to prevent repeating groups." },
        q12: { answer: "B", explanation: "Atomic data means the smallest possible indivisible values." },
        q13: { answer: "A", explanation: "2NF requires that all non-key attributes depend on the entire primary key." },
        q14: { answer: "B", explanation: "Partial dependency occurs when a non-key attribute depends only on part of a composite key." },
        q15: { answer: "C", explanation: "3NF removes transitive dependencies, ensuring non-key attributes only depend on the primary key." },
        q16: { answer: "B", explanation: "Transitive dependency occurs when a non-key attribute depends on another non-key attribute." },
        q17: { answer: "B", explanation: "3NF removes transitive dependencies, eliminating redundant data." },
        q18: { answer: "B", explanation: "Partial dependency involves part of a key; transitive dependency involves non-key attributes." },
        q19: { answer: "B", explanation: "BCNF is stricter than 3NF and requires every determinant to be a candidate key." },
        q20: { answer: "B", explanation: "A table is in BCNF if every determinant is a candidate key." },
        q21: { answer: "B", explanation: "A candidate key is an attribute that can uniquely identify records." },
        q22: { answer: "B", explanation: "4NF eliminates multi-valued dependencies, ensuring no redundant multi-valued attributes." },
        q23: { answer: "B", explanation: "A multi-valued dependency occurs when an attribute is associated with multiple independent values." },
        q24: { answer: "B", explanation: "4NF addresses multi-valued dependencies, preventing redundancy from these attributes." },
        q25: { answer: "B", explanation: "5NF handles join dependencies, ensuring no data loss during decomposition." },
        q26: { answer: "B", explanation: "Join dependency ensures a table can be reconstructed by joining smaller tables without data loss." },
        q27: { answer: "B", explanation: "5NF fully decomposes tables to prevent redundancy from complex relationships." },
        q28: { answer: "B", explanation: "Normalization reduces redundancy, ensures integrity, and optimizes performance." },
        q29: { answer: "B", explanation: "Denormalization introduces redundancy for performance optimization." },
        q30: { answer: "B", explanation: "Denormalization improves performance in read-heavy applications by reducing the need for joins." },
        q31: { answer: "B", explanation: "Dependency preservation ensures functional dependencies are maintained after normalization." },
        q32: { answer: "B", explanation: "BCNF does not handle multi-valued dependencies; 4NF addresses this." },
        q33: { answer: "B", explanation: "A table must be in BCNF before achieving 4NF." },
        q34: { answer: "B", explanation: "Over-normalization can lead to excessive tables, impacting query performance." },
        q35: { answer: "B", explanation: "1NF improves consistency by requiring atomic values and removing repeating groups." },
        q36: { answer: "A", explanation: "3NF is preferred over 2NF as it removes transitive dependencies, reducing redundancy." },
        q37: { answer: "B", explanation: "BCNF ensures non-key attributes do not depend on non-candidate keys." },
        q38: { answer: "B", explanation: "A fully normalized table meets the highest applicable normal form, like 5NF." },
        q39: { answer: "B", explanation: "4NF is achieved by removing multi-valued dependencies." },
        q40: { answer: "B", explanation: "3NF reduces insertion anomalies by eliminating transitive dependencies." },
        q41: { answer: "A", explanation: "The complexity and performance impact of 5NF may not justify its benefits." },
        q42: { answer: "B", explanation: "Lossless decomposition ensures that tables can be rejoined without data loss." },
        q43: { answer: "B", explanation: "4NF removes multi-valued dependencies, which can vary independently of primary keys." },
        q44: { answer: "B", explanation: "A multi-valued dependency example: multiple phone numbers and addresses." },
        q45: { answer: "B", explanation: "Denormalization reduces the need for joins by consolidating data into fewer tables." },
        q46: { answer: "B", explanation: "5NF can result in complex data retrieval due to increased tables." },
        q47: { answer: "B", explanation: "Partitioning improves manageability in normalized databases by dividing large tables." },
        q48: { answer: "B", explanation: "A surrogate key is a unique identifier used when no natural primary key exists." },
        q49: { answer: "B", explanation: "A unique constraint ensures specified columns have distinct values, maintaining integrity." },
        q50: { answer: "B", explanation: "3NF eliminates transitive dependencies, reducing deletion anomalies." },
        q51: { answer: "B", explanation: "Data independence allows changes in schema without affecting data access." },
        q52: { answer: "B", explanation: "Logical data independence allows changes to conceptual schema without altering external schemas." },
        q53: { answer: "A", explanation: "Physical data independence means changing storage without impacting the schema." },
        q54: { answer: "B", explanation: "BCNF is stricter than 3NF by requiring every determinant to be a candidate key." },
        q55: { answer: "A", explanation: "Transitive dependency involves indirect determination, while multi-valued dependency involves independent values." },
        q56: { answer: "B", explanation: "Dependency preservation ensures that all functional dependencies remain after normalization." },
        q57: { answer: "B", explanation: "Normalization reduces data anomalies by organizing data efficiently." },
        q58: { answer: "A", explanation: "1NF reduces redundancy by requiring atomic values, preventing multiple values per column." },
        q59: { answer: "B", explanation: "2NF requires all non-key attributes to depend on the entire composite key." },
        q60: { answer: "B", explanation: "Understanding dependencies aids in organizing tables to minimize redundancy." },
        q61: { answer: "B", explanation: "A candidate key can uniquely identify records and be chosen as a primary key." },
        q62: { answer: "B", explanation: "Denormalization may improve performance in read-heavy applications." },
        q63: { answer: "A", explanation: "A transitive dependency occurs when a non-key attribute depends on another non-key attribute." },
        q64: { answer: "B", explanation: "4NF removes multi-valued dependencies from tables." },
        q65: { answer: "B", explanation: "Surrogate keys provide a unique identifier when no natural key is present." },
        q66: { answer: "A", explanation: "BCNF requires all determinants to be candidate keys, making it stricter than 3NF." },
        q67: { answer: "B", explanation: "5NF addresses join dependencies, ensuring no data loss during decomposition." },
        q68: { answer: "B", explanation: "5NF handles complex join dependencies, further preventing redundancy." },
        q69: { answer: "B", explanation: "A student with multiple courses independent of an advisor is a multi-valued dependency." },
        q70: { answer: "B", explanation: "Normalization organizes data into related tables, minimizing redundancy." },
        q71: { answer: "B", explanation: "Lossless decomposition allows tables to be rejoined without losing information." },
        q72: { answer: "B", explanation: "A surrogate key is system-generated when no natural key is available." },
        q73: { answer: "B", explanation: "A composite key uses multiple columns to create a unique record identifier." },
        q74: { answer: "B", explanation: "Decomposition during normalization helps eliminate redundancy and maintain data integrity." },
        q75: { answer: "B", explanation: "Partitioning can improve the performance of normalized databases by splitting tables." }
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
