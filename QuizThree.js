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
        question: "Which of the following is used to create an abstract class in C++?",
        options: ["Virtual functions", "Pure virtual functions", "Abstract functions", "Virtual constructors"],
        answer: "Pure virtual functions"
    },
    {
        question: "What will be the output of the following code?\n\nint a = 5;\nint b = 10;\nstd::swap(a, b);\nstd::cout << a << ' ' << b;",
        options: ["5 10", "10 5", "5 5", "10 10"],
        answer: "10 5"
    },
    {
        question: "Which of the following is a correct way to allocate memory dynamically for an array in C++?",
        options: ["int *arr = new int[10];", "int arr = new int[10];", "int *arr = new int();", "int arr = new int();"],
        answer: "int *arr = new int[10];"
    },
    {
        question: "What is the output of the following code?\n\n#include <iostream>\nint main() {\n    int x = 10;\n    std::cout << ++x << ' ' << x++;\n    return 0;\n}",
        options: ["10 10", "11 11", "11 12", "11 11"],
        answer: "11 11"
    },
    {
        question: "Which of the following correctly declares a pointer to an integer?",
        options: ["int ptr;", "int *ptr;", "int &ptr;", "int ptr[];"],
        answer: "int *ptr;"
    },
    {
        question: "Which of the following statements is true about destructors in C++?",
        options: [
            "A class can have multiple destructors.",
            "A destructor can be overloaded.",
            "A destructor has the same name as the class preceded by a tilde (~).",
            "A destructor must be defined with a return type."
        ],
        answer: "A destructor has the same name as the class preceded by a tilde (~)."
    },
    {
        question: "Which of the following operators cannot be overloaded in C++?",
        options: ["+", "=", "::", "[]"],
        answer: "::"
    },
    {
        question: "What will be the result of the expression 13 | 6 in C++?",
        options: ["7", "19", "15", "9"],
        answer: "15"
    },
    {
        question: "In C++, which of the following is not a type of inheritance?",
        options: ["Single", "Multiple", "Multilevel", "Tree"],
        answer: "Tree"
    },
    {
        question: "Which keyword is used to handle exceptions in C++?",
        options: ["try", "catch", "throw", "All of the above"],
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