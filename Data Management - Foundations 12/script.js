// Set timer variables
let timeLimit = 100 * 60; // 100 minutes in seconds
let warningLimit = 5 * 60; // 5 minutes in seconds
let timerInterval;


    // Array of questions with randomized answers
const questions = [
    { text: "What is a database?", options: ["A structured collection of data.", "A list of files.", "A collection of text files.", "A type of spreadsheet."] },
    { text: "The LIKE operator is used to:", options: ["Compare two values for equality.", "Search for a specified pattern in a column.", "Convert data types.", "Create a new table."] },
    { text: "Which of the following does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integration, Data", "Authentication, Compression, Isolation, Durability", "Authorization, Consistency, Integrity, Data"] },
    { text: "Which SQL clause is used to filter results?", options: ["ORDER BY", "FILTER", "WHERE", "GROUP BY"] },
    { text: "Which key uniquely identifies a record in a database table?", options: ["Foreign Key", "Primary Key", "Secondary Key", "Index"] },
    { text: "A NoSQL database is best suited for:", options: ["Structured data", "Unstructured or semi-structured data", "Spreadsheets", "File storage"] },
    { text: "Which command is used to retrieve data from a SQL database?", options: ["UPDATE", "SELECT", "DELETE", "CREATE"] },
    { text: "Normalization in databases aims to:", options: ["Increase redundancy", "Ensure data accuracy", "Reduce redundancy", "Combine tables"] },
    { text: "What does CRUD stand for?", options: ["Create, Retrieve, Update, Delete", "Create, Read, Update, Delete", "Combine, Run, Update, Delete", "Create, Restore, Update, Delete"] },
    { text: "Which type of JOIN returns all records when there is a match in either table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"] },
    { text: "What is the purpose of indexing in a database?", options: ["To store large files", "To speed up data retrieval", "To update records", "To delete records"] },
    { text: "In an Entity-Relationship Diagram (ERD), a relationship is represented by:", options: ["A rectangle", "A diamond", "A circle", "A line"] },
    { text: "Data integrity ensures:", options: ["Data is encrypted", "Data is accurate and consistent", "Data is backed up", "Data is in alphabetical order"] },
    { text: "An incremental backup includes:", options: ["Only data that has changed since the last backup", "The entire database", "Metadata and indices only", "Only critical data"] },
    { text: "What does 1NF (First Normal Form) require?", options: ["No repeating groups", "No primary keys", "Only numeric data", "All fields are unique"] },
    { text: "The term 'denormalization' refers to:", options: ["Adding redundancy for faster reads", "Removing redundancy to save space", "Creating more indexes", "Securing data with encryption"] },
    { text: "Which SQL keyword is used to combine rows from two tables based on a related column?", options: ["MERGE", "COMBINE", "JOIN", "GROUP"] },
    { text: "In a database, which of the following is a characteristic of a foreign key?", options: ["It uniquely identifies each record", "It links to a primary key in another table", "It is always a numeric value", "It only exists in one table"] },
    { text: "What is the purpose of the GROUP BY clause in SQL?", options: ["To group rows by columns", "To join two tables", "To sort data", "To filter data"] },
    { text: "The ACID property 'Durability' ensures that:", options: ["A transaction remains committed even in case of a system failure", "Data is consistent across tables", "Transactions are isolated from each other", "All transactions are atomic"] },
    { text: "Which command in SQL is used to update data in a database?", options: ["SELECT", "UPDATE", "INSERT", "DELETE"] },
    { text: "The PRIMARY KEY constraint ensures:", options: ["All values in a column are unique", "No values are null", "Both A and B", "Values are automatically indexed"] },
    { text: "What is the purpose of the SELECT DISTINCT clause?", options: ["To select unique values", "To select random rows", "To sort results", "To filter null values"] },
    { text: "What is a trigger in a database?", options: ["A way to start a transaction", "A procedure executed in response to certain events", "A method to backup data", "A type of index"] },
    { text: "The SQL keyword 'HAVING' is used with:", options: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"] },
    { text: "Which of the following is not a type of JOIN in SQL?", options: ["INNER", "OUTER", "RIGHT", "FILTER"] },
    { text: "Which command deletes rows from a table?", options: ["DROP", "DELETE", "REMOVE", "EXTRACT"] },
    { text: "What is a schema in a database?", options: ["A layout of the database structure", "A command to retrieve data", "A method for indexing data", "A process to backup data"] },
    { text: "Which statement is true about SQL indexes?", options: ["Indexes slow down data retrieval", "Indexes speed up data retrieval", "Indexes are mandatory in all tables", "Indexes only apply to text columns"] },
    { text: "In SQL, a view is:", options: ["A virtual table based on a query", "A permanent table", "An index on a table", "A backup of a table"] },
    { text: "What does the DELETE statement do?", options: ["Deletes columns from a table", "Deletes all data from a table", "Deletes specific rows from a table", "Deletes the entire database"] },
    { text: "In databases, what is a constraint?", options: ["A rule to enforce data integrity", "A way to backup data", "A command to update data", "A process to import data"] },
    { text: "What is a relational database?", options: ["A database that organizes data in tables with relationships", "A flat file database", "A NoSQL database", "A cloud-based database"] },
    { text: "Which SQL clause is used to sort results?", options: ["ORDER BY", "SORT BY", "GROUP BY", "WHERE"] },
    { text: "Which term is used for a database design that reduces redundancy?", options: ["Denormalization", "Normalization", "Indexing", "Schema"] },
    { text: "A primary function of a Database Management System (DBMS) is:", options: ["To manage and organize data", "To create web pages", "To connect computers in a network", "To compile code"] },
    { text: "A clustered index in SQL is:", options: ["An index that defines the physical order of data", "A unique constraint", "An index for non-key columns", "An index that does not enforce uniqueness"] },
    { text: "Which is a popular NoSQL database?", options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle Database"] },
    { text: "Which SQL clause groups records that have the same values?", options: ["GROUP BY", "ORDER BY", "HAVING", "UNION"] },
    { text: "The SQL function AVG() calculates:", options: ["The average value of a numeric column", "The sum of all values", "The minimum value", "The count of rows"] },
    { text: "The purpose of the SQL UNION operator is to:", options: ["Combine results of two queries", "Create a backup of data", "Delete duplicate rows", "Sort data in descending order"] },
    { text: "In an SQL database, a sequence is used to:", options: ["Generate a unique sequence of numbers", "Sort records alphabetically", "Back up the database", "Define a foreign key"] },
    { text: "The term 'schema' refers to:", options: ["The layout or structure of a database", "The process of encrypting data", "A way to back up data", "A technique for indexing data"] },
    { text: "What is the purpose of a foreign key in a relational database?", options: ["To link records between two tables", "To ensure unique values", "To store encrypted data", "To generate unique sequences"] },
    { text: "Which of the following SQL statements is used to create a table?", options: ["CREATE TABLE", "NEW TABLE", "ADD TABLE", "GENERATE TABLE"] },
    { text: "What is a tuple in the context of databases?", options: ["A row in a table", "A type of relationship", "A database schema", "A column in a table"] },
    { text: "In SQL, what does the COUNT() function do?", options: ["Counts the number of rows", "Sums up a column", "Finds the maximum value", "Calculates the average"] },
    { text: "Which constraint enforces that values in a column must be unique?", options: ["UNIQUE", "PRIMARY KEY", "CHECK", "FOREIGN KEY"] },
    { text: "What is a composite key?", options: ["A primary key consisting of multiple columns", "A foreign key in multiple tables", "A unique index on one column", "A temporary key used in views"] },
    { text: "Which SQL function returns the largest value in a set?", options: ["MAX()", "MIN()", "SUM()", "AVG()"] },
    { text: "In SQL, the DEFAULT constraint:", options: ["Specifies a default value for a column", "Ensures values are unique", "Prevents duplicate records", "Assigns a primary key"] },
    { text: "What is a data warehouse?", options: ["A system for reporting and data analysis", "A relational database", "A backup storage system", "A temporary database"] },
    { text: "What does the SQL DROP statement do?", options: ["Deletes a table or database", "Inserts a new record", "Updates records", "Creates a new table"] },
    { text: "The HAVING clause in SQL is used:", options: ["To filter grouped rows", "To join tables", "To sort results", "To remove duplicates"] },
    { text: "In SQL, which operator is used to test for null values?", options: ["IS NULL", "EQUALS NULL", "CHECK NULL", "NULL VALUE"] },
    { text: "What does the UNIQUE constraint ensure?", options: ["No duplicate values in a column", "Only numeric values in a column", "All values are non-null", "A column is indexed"] },
    { text: "Which SQL command is used to change data in a table?", options: ["UPDATE", "SELECT", "DROP", "JOIN"] },
    { text: "Which of the following is a transaction control command?", options: ["COMMIT", "SELECT", "JOIN", "WHERE"] },
    { text: "What is a NULL value in a database?", options: ["A missing or undefined value", "A zero value", "An empty string", "A unique identifier"] },
    { text: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Standard Query Language"] },
    { text: "In an ERD, entities are usually represented as:", options: ["Rectangles", "Circles", "Diamonds", "Triangles"] },
    { text: "What is an index in a database?", options: ["A data structure that improves search speed", "A key to enforce uniqueness", "A type of backup file", "A constraint on foreign keys"] },
    { text: "The SQL function MIN() is used to:", options: ["Return the smallest value", "Calculate the average", "Count rows", "Find duplicates"] },
    { text: "Which SQL keyword is used to retrieve data in ascending or descending order?", options: ["ORDER BY", "GROUP BY", "SORT BY", "ALIGN BY"] },
    { text: "A relationship between tables is typically established using:", options: ["Foreign keys", "Unique indexes", "Default constraints", "Composite keys"] },
    { text: "A data mart is:", options: ["A subset of a data warehouse", "A flat file database", "A primary database", "A temporary table"] },
    { text: "Which of the following best describes OLAP?", options: ["A tool for complex data analysis", "An operational database", "A web-based application", "A data encryption method"] },
    { text: "In SQL, a stored procedure is:", options: ["A set of SQL statements that can be executed as a single unit", "A primary key", "A default constraint", "A query to delete data"] },
    { text: "Which SQL keyword is used to specify the columns to return in a query?", options: ["SELECT", "WHERE", "FROM", "JOIN"] },
    { text: "The SQL statement ROLLBACK is used for:", options: ["Undoing changes in a transaction", "Committing a transaction", "Starting a transaction", "Updating records"] },
    { text: "In a database, what does 'cardinality' refer to?", options: ["The uniqueness of data values in a column", "The order of columns in a table", "The size of the database", "The number of users"] },
    { text: "What is the purpose of the SQL LIMIT clause?", options: ["To limit the number of rows returned", "To limit the number of columns", "To restrict access", "To sort data in ascending order"] },
    { text: "Which of the following is a DDL (Data Definition Language) command?", options: ["CREATE", "SELECT", "INSERT", "UPDATE"] },
    { text: "A primary key in a database table must be:", options: ["Unique and non-null", "Only numeric", "Always indexed", "A foreign key in another table"] },
    { text: "The purpose of a data lake is to:", options: ["Store raw data from various sources", "Act as a backup for relational databases", "Archive historical records", "Provide real-time data analysis"] },
    { text: "What is referential integrity?", options: ["Ensuring foreign keys match primary keys in related tables", "Making data available 24/7", "Limiting access to data", "Storing encrypted data"] },
    { text: "In database terms, 'scaling horizontally' refers to:", options: ["Adding more servers to distribute data", "Increasing CPU power", "Adding more storage", "Using cloud backups"] },
    { text: "Which SQL command is used to permanently delete a table from a database?", options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "TRUNCATE TABLE"] },
    { text: "Which of the following SQL functions is used to get the remainder of a division?", options: ["MOD()", "DIV()", "REMAINDER()", "LEFTOVER()"] },
    { text: "What does the SQL TRUNCATE command do?", options: ["Deletes all rows from a table without logging individual row deletions", "Deletes specific rows based on a condition", "Removes the table schema", "Creates an index on the table"] },
    { text: "What is an atomic transaction?", options: ["A transaction that is completed fully or not at all", "A transaction that only reads data", "A transaction involving only one table", "A transaction that is logged"] },
    { text: "What is a view in SQL?", options: ["A virtual table created by a query", "A physical table in the database", "An index on a table", "A backup of a table"] },
    { text: "A schema in a database is:", options: ["The organizational structure of tables and relationships", "A table's unique identifier", "A stored procedure", "A default constraint"] },
    { text: "Which of the following is a valid SQL data type?", options: ["VARCHAR", "STRING", "ALPHA", "CHARACTERSET"] },
    { text: "The SQL command ALTER TABLE is used to:", options: ["Modify an existing table structure", "Delete data from a table", "Insert data into a table", "Create a new table"] },
    { text: "The term 'scalability' in databases refers to:", options: ["The ability to handle increased workload", "How quickly a query is executed", "Data consistency", "Data normalization"] }
];


    


// Correct answers mapping with explanations

    const correctAnswers = {
    1: { answer: "A structured collection of data.", explanation: "A database is a structured collection of data, organized for easy access and management." },
    2: { answer: "Search for a specified pattern in a column.", explanation: "The LIKE operator in SQL is used to search for a specific pattern within a column." },
    3: { answer: "Atomicity, Consistency, Isolation, Durability", explanation: "ACID stands for Atomicity, Consistency, Isolation, Durability." },
    4: { answer: "WHERE", explanation: "The WHERE clause is used to filter records in SQL." },
    5: { answer: "Primary Key", explanation: "A primary key uniquely identifies a record in a database table." },
    6: { answer: "Unstructured or semi-structured data", explanation: "NoSQL databases are best suited for unstructured or semi-structured data." },
    7: { answer: "SELECT", explanation: "The SELECT command retrieves data from a SQL database." },
    8: { answer: "Reduce redundancy", explanation: "Normalization reduces redundancy in databases." },
    9: { answer: "Create, Read, Update, Delete", explanation: "CRUD stands for Create, Read, Update, Delete." },
    10: { answer: "FULL JOIN", explanation: "A FULL JOIN returns all records when there is a match in either table." },
    11: { answer: "To speed up data retrieval", explanation: "Indexing speeds up data retrieval in a database." },
    12: { answer: "A diamond", explanation: "In an ERD, a relationship is represented by a diamond." },
    13: { answer: "Data is accurate and consistent", explanation: "Data integrity ensures data accuracy and consistency." },
    14: { answer: "Only data that has changed since the last backup", explanation: "An incremental backup includes only data that has changed since the last backup." },
    15: { answer: "No repeating groups", explanation: "1NF requires no repeating groups." },
    16: { answer: "Adding redundancy for faster reads", explanation: "Denormalization adds redundancy for faster reads." },
    17: { answer: "JOIN", explanation: "JOIN is used to combine rows from two tables." },
    18: { answer: "It links to a primary key in another table", explanation: "A foreign key links to a primary key in another table." },
    19: { answer: "To group rows by columns", explanation: "The GROUP BY clause is used to group rows by columns." },
    20: { answer: "A transaction remains committed even in case of a system failure", explanation: "Durability in ACID ensures that once a transaction is committed, it remains permanent." },
    21: { answer: "UPDATE", explanation: "The UPDATE command is used to change data in a SQL database." },
    22: { answer: "Both A and B", explanation: "The PRIMARY KEY constraint ensures all values in a column are unique and non-null." },
    23: { answer: "To select unique values", explanation: "The SELECT DISTINCT clause is used to return unique values in a query result." },
    24: { answer: "A procedure executed in response to certain events", explanation: "A trigger is a procedure that executes in response to specific events." },
    25: { answer: "GROUP BY", explanation: "HAVING is used with GROUP BY to filter grouped rows." },
    26: { answer: "FILTER", explanation: "FILTER is not a SQL JOIN type; common joins are INNER, OUTER, LEFT, and RIGHT." },
    27: { answer: "DELETE", explanation: "The DELETE command removes specific rows from a table." },
    28: { answer: "A layout of the database structure", explanation: "A schema is the layout of a database structure." },
    29: { answer: "Indexes speed up data retrieval", explanation: "Indexes speed up data retrieval in a database." },
    30: { answer: "A virtual table based on a query", explanation: "A view in SQL is a virtual table created by a query." },
    31: { answer: "Deletes specific rows from a table", explanation: "The DELETE statement removes specific rows from a table." },
    32: { answer: "A rule to enforce data integrity", explanation: "A constraint is a rule to enforce data integrity in a database." },
    33: { answer: "A database that organizes data in tables with relationships", explanation: "A relational database organizes data in tables with defined relationships." },
    34: { answer: "ORDER BY", explanation: "ORDER BY is used to sort results in SQL." },
    35: { answer: "Normalization", explanation: "Normalization is the process of reducing data redundancy." },
    36: { answer: "To manage and organize data", explanation: "A DBMS manages and organizes data in databases." },
    37: { answer: "An index that defines the physical order of data", explanation: "A clustered index organizes data rows in a table based on key values." },
    38: { answer: "MongoDB", explanation: "MongoDB is a popular NoSQL database." },
    39: { answer: "GROUP BY", explanation: "GROUP BY groups records with the same values in specified columns." },
    40: { answer: "The average value of a numeric column", explanation: "AVG() calculates the average of a numeric column." },
    41: { answer: "Combine results of two queries", explanation: "The UNION operator combines results of two queries, removing duplicates." },
    42: { answer: "Generate a unique sequence of numbers", explanation: "A sequence in SQL generates unique sequences of numbers." },
    43: { answer: "The layout or structure of a database", explanation: "A schema refers to the structure or layout of a database." },
    44: { answer: "To link records between two tables", explanation: "A foreign key links records between tables by referencing a primary key." },
    45: { answer: "CREATE TABLE", explanation: "CREATE TABLE is the SQL command to create a new table." },
    46: { answer: "A row in a table", explanation: "A tuple represents a single row in a database table." },
    47: { answer: "Counts the number of rows", explanation: "The COUNT() function returns the number of rows in a table." },
    48: { answer: "UNIQUE", explanation: "The UNIQUE constraint enforces uniqueness in column values." },
    49: { answer: "A primary key consisting of multiple columns", explanation: "A composite key is a primary key made up of multiple columns." },
    50: { answer: "MAX()", explanation: "MAX() returns the largest value in a set." },
    51: { answer: "Specifies a default value for a column", explanation: "The DEFAULT constraint sets a default value for a column." },
    52: { answer: "A system for reporting and data analysis", explanation: "A data warehouse is a system for reporting and data analysis." },
    53: { answer: "Deletes a table or database", explanation: "The DROP statement removes a table or database permanently." },
    54: { answer: "To filter grouped rows", explanation: "HAVING is used to filter grouped rows in SQL." },
    55: { answer: "IS NULL", explanation: "IS NULL tests for null values in SQL." },
    56: { answer: "No duplicate values in a column", explanation: "The UNIQUE constraint ensures no duplicate values in a column." },
    57: { answer: "UPDATE", explanation: "UPDATE changes data in a table." },
    58: { answer: "COMMIT", explanation: "COMMIT is a transaction control command to save changes." },
    59: { answer: "A missing or undefined value", explanation: "A NULL value indicates a missing or undefined value." },
    60: { answer: "Structured Query Language", explanation: "SQL stands for Structured Query Language." },
    61: { answer: "Rectangles", explanation: "In an ERD, entities are typically represented as rectangles." },
    62: { answer: "A data structure that improves search speed", explanation: "An index improves the speed of search operations in a database." },
    63: { answer: "Return the smallest value", explanation: "MIN() returns the smallest value in a set." },
    64: { answer: "ORDER BY", explanation: "ORDER BY retrieves data in a specified order." },
    65: { answer: "Foreign keys", explanation: "Foreign keys establish relationships between tables." },
    66: { answer: "A subset of a data warehouse", explanation: "A data mart is a subset of a data warehouse." },
    67: { answer: "A tool for complex data analysis", explanation: "OLAP is used for complex data analysis." },
    68: { answer: "A set of SQL statements that can be executed as a single unit", explanation: "A stored procedure is a set of SQL statements executed as a unit." },
    69: { answer: "SELECT", explanation: "SELECT specifies columns to return in a query." },
    70: { answer: "Undoing changes in a transaction", explanation: "ROLLBACK undoes changes in a transaction." },
    71: { answer: "The uniqueness of data values in a column", explanation: "Cardinality refers to the uniqueness of values in a column." },
    72: { answer: "To limit the number of rows returned", explanation: "LIMIT restricts the number of rows returned." },
    73: { answer: "CREATE", explanation: "CREATE is a Data Definition Language (DDL) command." },
    74: { answer: "Unique and non-null", explanation: "A primary key is unique and non-null." },
    75: { answer: "Store raw data from various sources", explanation: "A data lake stores raw data from various sources." },
    76: { answer: "Ensuring foreign keys match primary keys in related tables", explanation: "Referential integrity ensures that foreign keys match primary keys in related tables." },
    77: { answer: "Adding more servers to distribute data", explanation: "Horizontal scaling involves adding servers to distribute data." },
    78: { answer: "DROP TABLE", explanation: "DROP TABLE permanently removes a table from the database." },
    79: { answer: "MOD()", explanation: "MOD() returns the remainder of a division." },
    80: { answer: "Deletes all rows from a table without logging individual row deletions", explanation: "TRUNCATE removes all rows from a table without logging individual deletions." },
    81: { answer: "A transaction that is completed fully or not at all", explanation: "An atomic transaction completes fully or not at all." },
    82: { answer: "A virtual table created by a query", explanation: "A view in SQL is a virtual table based on a query." },
    83: { answer: "The organizational structure of tables and relationships", explanation: "A schema defines the structure of tables and relationships in a database." },
    84: { answer: "VARCHAR", explanation: "VARCHAR is a valid SQL data type." },
    85: { answer: "Modify an existing table structure", explanation: "ALTER TABLE modifies an existing table structure." },
    86: { answer: "The ability to handle increased workload", explanation: "Scalability refers to the database's ability to handle increased workloads." }
};





/// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Render questions with shuffled answers
function renderQuestions() {
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<h3>${index + 1}. ${question.text}</h3>`;
        
        const shuffledOptions = shuffle([...question.options]);
        shuffledOptions.forEach(option => {
            questionDiv.innerHTML += `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`;
        });
        
        questionsContainer.appendChild(questionDiv);
    });
}



// Timer Functionality
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


// Function to submit quiz
function submitQuiz() {
    clearInterval(timerInterval);

    let score = 0;
    let resultDetails = "";

    questions.forEach((question, index) => {
        const questionNum = index + 1;
        const selectedAnswer = document.querySelector(`input[name="q${questionNum}"]:checked`);
        const correctAnswerText = correctAnswers[questionNum].answer; // Correct answer text
        const explanation = correctAnswers[questionNum].explanation;

        if (selectedAnswer) {
            const selectedAnswerText = selectedAnswer.value; // Retrieve selected answer text directly
            
            if (selectedAnswerText === correctAnswerText) {
                score++;
                resultDetails += `<p><strong>Question ${questionNum}:</strong> Correct ✅</p>`;
            } else {
                resultDetails += `<p><strong>Question ${questionNum}:</strong> Incorrect ❌</p>
                                  <p>Your answer: <strong>${selectedAnswerText}</strong></p>
                                  <p>Correct answer: <strong>${correctAnswerText}</strong> - ${explanation}</p>`;
            }
        } else {
            resultDetails += `<p><strong>Question ${questionNum}:</strong> Incorrect ❌</p>
                              <p>Your answer: <strong>No Answer</strong></p>
                              <p>Correct answer: <strong>${correctAnswerText}</strong> - ${explanation}</p>`;
        }
    });

    document.getElementById('result').innerHTML = `<h3>You scored ${score} out of ${questions.length}.</h3>` + resultDetails;

    // Save attempt to localStorage
    saveAttempt(score, questions.length);
}




// Save attempt to localStorage
function saveAttempt(score, total) {
    let attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
    attempts.push({ score, total, date: new Date().toLocaleString() });
    localStorage.setItem("quizAttempts", JSON.stringify(attempts));
}

// Event listeners for buttons
document.getElementById('start-btn').addEventListener('click', function () {
    startTimer();
    renderQuestions();
    document.getElementById('quiz-form').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
});

document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (confirm("Are you sure you want to submit?")) {
        submitQuiz();
    }
});
