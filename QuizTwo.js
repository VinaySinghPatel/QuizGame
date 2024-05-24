const Question = document.getElementById("ChangeQuestion");
const Options = document.getElementById("OptionsIs");
const NextQues = document.getElementById("NextQues");
const OptionOne = document.getElementById("Options1");
const OptionTwo = document.getElementById("Options2");
const OptionThree = document.getElementById("Options3");
const Optionfour = document.getElementById("Options4")
const RestartQuiz = document.getElementById("Restart");

const questions = [
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        answer: "Character"
    },
    {
        question: "What is the output of the following code?\n\nconsole.log(typeof NaN);",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number"
    },
    {
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        options: ["getElementById()", "getElementsByClassName()", "querySelector()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: [
            "'==' checks for equality in value, while '===' checks for equality in value and type.",
            "'==' checks for equality in type, while '===' checks for equality in value.",
            "'==' and '===' both check for equality in value and type.",
            "'==' and '===' are interchangeable."
        ],
        answer: "'==' checks for equality in value, while '===' checks for equality in value and type."
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        options: ["while()", "loop()", "forEach()", "None of the above"],
        answer: "forEach()"
    },
    {
        question: "How can you add a comment in JavaScript?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->",
            "Both // and /* */"
        ],
        answer: "Both // and /* */"
    },
    {
        question: "What will the following code output?\n\nconsole.log(0.1 + 0.2 === 0.3);",
        options: ["true", "false", "undefined", "TypeError"],
        answer: "false"
    },
    {
        question: "How do you create a new object in JavaScript?",
        options: [
            "var obj = {};",
            "var obj = new Object();",
            "var obj = Object.create(null);",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which of the following is not a looping structure in JavaScript?",
        options: ["for", "while", "do-while", "foreach"],
        answer: "foreach"
    },
    {
        question: "Which statement is used to handle exceptions in JavaScript?",
        options: ["try...catch", "throw", "catch", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "The Questions are now End Boizzz",
        options: ["Done", "VeryGood", "Good", "vvv Good"],
        answer: "vvv Good"
    }
];



let CurrentQuestoonIndex= 0;
DisplayQuestion();
function DisplayQuestion(){
    const CurrentQues = questions[CurrentQuestoonIndex];
    Question.innerText = CurrentQues.question;
        console.log(CurrentQues.answer);
    OptionOne.innerText = CurrentQues.options[0];
    OptionTwo.innerText = CurrentQues.options[1];
    OptionThree.innerText = CurrentQues.options[2];
    Optionfour.innerText = CurrentQues.options[3];

    OptionOne.addEventListener("click",selectAnswer);
    OptionTwo.addEventListener("click",selectAnswer);
    OptionThree.addEventListener("click",selectAnswer);
    Optionfour.addEventListener("click",selectAnswer);
}

NextQues.addEventListener("click", () => {
    if (CurrentQuestoonIndex <= questions.length) {
        CurrentQuestoonIndex++;
      resetOptionsStyle();
        DisplayQuestion();
    } else {
        console.log("Offf");
        NextQues.innerText = "Done";
    }
});

function selectAnswer(e) {
    const selectedOption = e.target;
    console.log(selectedOption);
    const selectedAnswer = selectedOption.innerText;
    console.log(selectedAnswer);
    const CurrentQues = questions[CurrentQuestoonIndex];
    Question.innerText = CurrentQues.question;
    if(selectedAnswer === CurrentQues.answer){
        selectedOption.style.color = "black";
        selectedOption.style.backgroundColor = "green";
        console.log("Its Write Answer");
    }
}


function resetOptionsStyle() {
    const options = [OptionOne, OptionTwo, OptionThree, Optionfour];
    options.forEach(option => {
        option.style.color = "";
        option.style.backgroundColor = "";
    });
}

RestartQuiz.addEventListener("click",()=>{
    CurrentQuestoonIndex = 0;
    DisplayQuestion();
})