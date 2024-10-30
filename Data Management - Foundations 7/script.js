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
    q1: { answer: "C", explanation: "A record consists of one or more fields." },
    q2: { answer: "C", explanation: "Data reports are not a function of DBMS." },
    q3: { answer: "B", explanation: "Unstructured data includes video, which is not organized in a predefined manner." },
    q4: { answer: "B", explanation: "Data refers to raw facts that can be processed into information." },
    q5: { answer: "A", explanation: "The box marked 'Registration' represents intersection data in an E-R Diagram." },
    q6: { answer: "B", explanation: "The relationship between Student and Course is many-to-many binary." },
    q7: { answer: "C", explanation: "One Invoice Line must include a minimum of one and a maximum of one Item." },
    q8: { answer: "B", explanation: "A pet owner can have many pets; a specific pet is linked to one owner, which represents a one-to-many relationship." },
    q9: { answer: "A", explanation: "Database models were developed to model real-world events or conditions." },
    q10: { answer: "C", explanation: "The modality on the right side of the association indicates a minimum of zero activities." },
    q11: { answer: "D", explanation: "The modality of Volunteer is 'At least one.'" },
    q12: { answer: "A", explanation: "A 'Painter paints one or more Paintings' represents a 1:M (one-to-many) relationship." },
    q13: { answer: "A", explanation: "The entity integrity rule requires that all primary key entries are unique." },
    q14: { answer: "C", explanation: "Referential integrity means that a foreign key in one table must refer to a valid primary key in another table." },
    q15: { answer: "B", explanation: "A table is perceived as a two-dimensional structure consisting of rows and columns." },
    q16: { answer: "C", explanation: "Another word for the term 'relation' is 'table' in a relational database." },
    q17: { answer: "C", explanation: "ORDER BY modifies the presentation by changing the order of the result set." },
    q18: { answer: "D", explanation: "A primary key must be unique to identify records in a table." },
    q19: { answer: "B", explanation: "A table can be logically connected to another table by defining a common attribute, such as a foreign key." },
    q20: { answer: "C", explanation: "The JOIN operator allows for the combination of information from two or more tables." },
    q21: { answer: "A", explanation: "All primary key entries must be unique." },
    q22: { answer: "C", explanation: "A primary key of one table appears again as a foreign key in a related table." },
    q23: { answer: "A", explanation: "It is a good idea to minimize data redundancy when designing a database." },
    q24: { answer: "A", explanation: "A superkey is an attribute (or combination of attributes) that uniquely identifies each entity in a table." },
    q25: { answer: "D", explanation: "A foreign key must match the value of a primary key in a related table." },
    q26: { answer: "D", explanation: "The ERD is used to graphically represent the conceptual database model." },
    q27: { answer: "B", explanation: "A derived attribute need not be physically stored within the database, as it is computed from other attributes." },
    q28: { answer: "B", explanation: "A relationship is an association between entities." },
    q29: { answer: "C", explanation: "A composite key is a key that consists of more than one attribute." },
    q30: { answer: "B", explanation: "An atomic attribute is one that cannot be subdivided." },
    q31: { answer: "A", explanation: "If an entity can exist apart from one or more related entities, it is said to be existence-independent." },
    q32: { answer: "C", explanation: "A ternary relationship exists when three entities are associated." },
    q33: { answer: "A", explanation: "The set of possible values for an attribute is called a domain." },
    q34: { answer: "C", explanation: "The combination of CRS_CODE and CLASS_SECTION uniquely identifies each class." },
    q35: { answer: "C", explanation: "A table that is in 2NF and contains no transitive dependencies is said to be in 3NF." },
    q36: { answer: "C", explanation: "A table in 2NF that has no transitive dependencies is in 3NF." },
    q37: { answer: "D", explanation: "Data redundancy produces data integrity problems." },
    q38: { answer: "D", explanation: "Normalization works through a series of normal forms." },
    q39: { answer: "B", explanation: "Dependencies based on only a part of a composite primary key are called partial dependencies." },
    q40: { answer: "A", explanation: "PROJ_NUM --> PROJ_NAME is an example of a partial dependency." },
    q41: { answer: "C", explanation: "A relation is NOT in 1NF if there are repeating groups in the table." },
    q42: { answer: "A", explanation: "The SQL INSERT command lets you insert data into a table, one row at a time." },
    q43: { answer: "D", explanation: "The SQL UPDATE command allows you to make changes in the data." },
    q44: { answer: "B", explanation: "To list all the contents of the PRODUCT table, you would use SELECT * FROM PRODUCT." },
    q45: { answer: "D", explanation: "UPDATE PRODUCT SET P_INDATE = '01/18/2004' WHERE P_CODE = '13-Q2/P2'; is used to make corrections to the PRODUCT table." },
    q46: { answer: "A", explanation: "DELETE FROM PRODUCT WHERE P_CODE = '2238/QPD'; is used to delete the table row." },
    q47: { answer: "C", explanation: "SELECT <column(s)> FROM <Table name> WHERE <Conditions>; is used to select partial table contents." },
    q48: { answer: "B", explanation: "SELECT P_DESCRIPT, P_INDATE, P_PRICE, V_CODE FROM PRODUCT WHERE V_CODE <= 21344; outputs the table contents when the value of V_CODE is less than or equal to 21344." },
    q49: { answer: "A", explanation: "SELECT P_DESCRIPT, P_QOH, P_MIN, P_PRICE, P_INDATE FROM PRODUCT WHERE P_INDICATE >= '01/20/2006'; lists all rows where inventory stock dates occur on or after January 20, 2006." },
    q50: { answer: "D", explanation: "SELECT P_DESCRIPT, P_INDATE, P_PRICE, V_CODE FROM PRODUCT WHERE V_CODE = 21344 OR V_CODE = 24288; lists the contents for V_CODE = 21344 or V_CODE = 24288." },
    q51: { answer: "B", explanation: "SELECT P_DESCRIPT, P_PRICE, V_NAME, V_CONTACT, V_AREACODE, V_PHONE FROM PRODUCT, VENDOR WHERE PRODUCT.V_CODE = VENDOR.V_CODE; joins the fields based on V_CODE." },
    q52: { answer: "C", explanation: "LIKE is a special operator used to check for similar character strings." },
    q53: { answer: "A", explanation: "A table can be deleted from the database by using the DROP command." },
    q54: { answer: "A", explanation: "The SQL syntax for updating data in a table is SET columnname = expression." },
    q55: { answer: "C", explanation: "A full outer join returns rows with matching values and includes all rows from both tables (T1 and T2) with unmatched values." },
    q56: { answer: "A", explanation: "During the transformation step in the ETL process, raw data sets are aggregated." },
    q57: { answer: "B", explanation: "Monitoring refreshing volume and frequency is an important issue associated with the loading component of ETL." },
    q58: { answer: "D", explanation: "To normalize the database to 3NF, create a separate table for campus address information and use a foreign key to relate it to the Teachers table." },
    q59: { answer: "B", explanation: "DELETE FROM Materials WHERE Status = ‘Obsolete’ AND VendorID IS NULL; removes rows where VendorID is NULL and Status is 'Obsolete'." },
    q60: { answer: "C", explanation: "StudentID, Test, and Date should be used as the primary key for the TestScores table." },
    q61: { answer: "C", explanation: "To reduce redundancy, create a new table with two columns for the instructor and course relationship." },
    q62: { answer: "C", explanation: "Records in a database are structured data." },
    q63: { answer: "A", explanation: "The diagram depicts a unary one-to-many relationship." },
    q64: { answer: "A", explanation: "The diagram depicts a unary one-to-many relationship." },
    q65: { answer: "A", explanation: "The modality of appointment is 'At least one'." },
    q66: { answer: "A", explanation: "The table is in unnormalized form." },
    q67: { answer: "A", explanation: "Unnormalized." },
    q68: { answer: "C", explanation: "The table is in second normal form." },
    q69: { answer: "D", explanation: "The table is in third normal form." }
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
