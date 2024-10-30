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
    q1: { answer: "B", explanation: "An ERD is a visual representation outlining entities, attributes, and relationships in a database." },
    q2: { answer: "B", explanation: "ERDs help designers understand data structure and relationships, aiding efficient design and communication with stakeholders." },
    q3: { answer: "B", explanation: "An entity represents an object or concept, typically represented as a table in the database." },
    q4: { answer: "B", explanation: "A relationship in an ERD represents an association between two entities." },
    q5: { answer: "B", explanation: "The main types of relationships in ERDs are one-to-one, one-to-many, and many-to-many." },
    q6: { answer: "B", explanation: "A one-to-one relationship is when each entity in one table is associated with a single entity in another table." },
    q7: { answer: "B", explanation: "A one-to-many relationship means one entity in a table is associated with multiple entities in another table." },
    q8: { answer: "B", explanation: "A many-to-many relationship involves multiple records in one table associated with multiple records in another table." },
    q9: { answer: "A", explanation: "Cardinality is represented with numbers indicating the minimum and maximum instances in a relationship." },
    q10: { answer: "B", explanation: "Minimum cardinality constraint specifies the minimum number of times an entity can participate in a relationship." },
    q11: { answer: "A", explanation: "Maximum cardinality constraint specifies the maximum number of times an entity can participate in a relationship." },
    q12: { answer: "B", explanation: "A primary key uniquely identifies each record within a table." },
    q13: { answer: "B", explanation: "A primary key must contain unique values, cannot be NULL, and should be stable over time." },
    q14: { answer: "B", explanation: "A foreign key in one table uniquely identifies a row in another table." },
    q15: { answer: "B", explanation: "Foreign keys maintain referential integrity by ensuring every value in the foreign key column corresponds to an existing value in the referenced table’s primary key." },
    q16: { answer: "B", explanation: "A composite key is a combination of two or more columns that uniquely identifies a record." },
    q17: { answer: "A", explanation: "A composite key is used when a single column cannot uniquely identify a record." },
    q18: { answer: "B", explanation: "A strong entity can exist independently and has a unique identifier." },
    q19: { answer: "B", explanation: "A weak entity cannot exist independently and relies on a strong entity for its identification." },
    q20: { answer: "B", explanation: "In ERDs, a weak entity is represented by a double rectangle, indicating dependency on a strong entity." },
    q21: { answer: "B", explanation: "A partial key uniquely identifies weak entity records in combination with a strong entity’s primary key." },
    q22: { answer: "A", explanation: "A supertype is a general entity that has multiple specialized subtypes." },
    q23: { answer: "B", explanation: "A subtype is a specialized entity that inherits attributes from a supertype." },
    q24: { answer: "B", explanation: "A supertype-subtype relationship is typically indicated with a triangle symbol and connecting lines in an ERD." },
    q25: { answer: "B", explanation: "An identifying relationship is where the weak entity’s primary key includes the strong entity’s primary key." },
    q26: { answer: "B", explanation: "In a non-identifying relationship, the primary key of one entity does not contain the primary key of the related entity." },
    q27: { answer: "B", explanation: "An associative entity breaks down many-to-many relationships into two one-to-many relationships." },
    q28: { answer: "B", explanation: "An associative entity is represented by a rectangle with rounded corners in an ERD." },
    q29: { answer: "B", explanation: "Normalization reduces redundancy and ensures data integrity." },
    q30: { answer: "B", explanation: "Normalization in ERDs helps clarify relationships and optimize the data model." },
    q31: { answer: "B", explanation: "The first step in creating an ERD is identifying entities and relationships based on system requirements." },
    q32: { answer: "B", explanation: "Attributes in an ERD are represented as ovals connected to their respective entities." },
    q33: { answer: "B", explanation: "A derived attribute is one whose value can be calculated from other attributes." },
    q34: { answer: "A", explanation: "A single-valued attribute contains one value, while a multi-valued attribute can contain multiple values." },
    q35: { answer: "B", explanation: "A multi-valued attribute is depicted with a double oval connected to the entity in an ERD." },
    q36: { answer: "B", explanation: "An optional attribute may or may not have a value for each entity instance." },
    q37: { answer: "B", explanation: "A key attribute uniquely identifies an entity instance." },
    q38: { answer: "B", explanation: "A composite attribute is represented by an oval with connected sub-ovals for each component." },
    q39: { answer: "B", explanation: "An ERD serves as a blueprint for database structure and design." },
    q40: { answer: "B", explanation: "ERDs facilitate database normalization by visually clarifying relationships and data structures." },
    q41: { answer: "A", explanation: "An exclusive subtype relationship is where an entity can belong to only one subtype at a time." },
    q42: { answer: "B", explanation: "An inclusive subtype relationship is where an entity can belong to multiple subtypes simultaneously." },
    q43: { answer: "B", explanation: "Specialization in database design is the process of defining subtypes from a supertype." },
    q44: { answer: "A", explanation: "Generalization in database design is the process of merging subtypes into a single supertype." },
    q45: { answer: "B", explanation: "Generalization is represented by merging subtypes into a single supertype and showing shared attributes." },
    q46: { answer: "A", explanation: "A participation constraint determines whether an entity instance must participate in a relationship." },
    q47: { answer: "B", explanation: "An entity integrity constraint ensures that each entity has a unique identifier." },
    q48: { answer: "B", explanation: "Referential integrity ensures foreign keys correctly reference primary keys in other tables." },
    q49: { answer: "A", explanation: "A relationship role name clarifies the purpose of an entity in a relationship." },
    q50: { answer: "B", explanation: "A recursive relationship is where an entity is associated with itself." },
    q51: { answer: "A", explanation: "A recursive relationship is depicted with a loopback line to the entity itself in an ERD." },
    q52: { answer: "B", explanation: "A weak relationship is where a weak entity is dependent on a strong entity." },
    q53: { answer: "B", explanation: "A junction table resolves many-to-many relationships by breaking them into one-to-many relationships." },
    q54: { answer: "B", explanation: "Optional participation in an ERD is represented with a line indicating zero minimum cardinality next to the entity." },
    q55: { answer: "A", explanation: "A one-to-many relationship in crow's foot notation is represented by a single line for 'one' and a crow’s foot for 'many'." },
    q56: { answer: "A", explanation: "A composite attribute in an ERD is identified by connecting sub-attributes to the main attribute." },
    q57: { answer: "A", explanation: "A business rule dictates how data is created, stored, and maintained." },
    q58: { answer: "B", explanation: "In an ERD, a domain defines the set of allowable values for an attribute." },
    q59: { answer: "B", explanation: "A ternary relationship is depicted by connecting three entities to a single relationship diamond in an ERD." },
    q60: { answer: "A", explanation: "An attribute domain is a set of permissible values for an attribute." },
    q61: { answer: "B", explanation: "A surrogate key is a system-generated unique identifier." },
    q62: { answer: "B", explanation: "A candidate key is an attribute that can uniquely identify records and could be chosen as the primary key." },
    q63: { answer: "B", explanation: "An alternate key is a candidate key that was not chosen as the primary key." },
    q64: { answer: "B", explanation: "A lookup table is a supporting table that stores commonly referenced data." },
    q65: { answer: "B", explanation: "Inheritance in an ERD is depicted by connecting a supertype to subtypes with a triangle symbol." },
    q66: { answer: "B", explanation: "A foreign key constraint enforces referential integrity by matching foreign key values to primary keys in other tables." },
    q67: { answer: "B", explanation: "An intersection table in a many-to-many relationship stores foreign keys from two related tables." },
    q68: { answer: "B", explanation: "Entity clustering combines multiple entities into a single abstract entity." },
    q69: { answer: "B", explanation: "A dependent entity relies on another entity for identification." },
    q70: { answer: "B", explanation: "An identifying relationship includes the parent entity’s primary key as part of the child entity’s primary key." }
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
