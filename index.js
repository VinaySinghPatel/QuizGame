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
        question: "Which of the following is a valid way to declare an array in Java?",
        options: ["int arr[] = new int[5];", "int arr[] = new int(5);", "int arr() = new int[5];", "int arr{} = new int[5];"],
        answer: "int arr[] = new int[5];"
    },
    {
        question: "Which method is used to find the length of a string in Java?",
        options: ["length()", "getSize()", "size()", "getLength()"],
        answer: "length()"
    },
    {
        question: "Which keyword is used to prevent inheritance in Java?",
        options: ["final", "static", "protected", "private"],
        answer: "final"
    },
    {
        question: "What is the output of the following code?\n\nint x = 10;\nint y = ++x;\nSystem.out.println(y);",
        options: ["10", "11", "10 11", "11 10"],
        answer: "11"
    },
    {
        question: "Which of the following is a marker interface?",
        options: ["Serializable", "Cloneable", "Remote", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of these classes are not part of Java’s collection framework?",
        options: ["HashMap", "TreeSet", "LinkedList", "Stack"],
        answer: "Stack"
    },
    {
        question: "Which package contains the Random class?",
        options: ["java.util", "java.lang", "java.io", "java.awt"],
        answer: "java.util"
    },
    {
        question: "What will be the result of the expression 13 & 6?",
        options: ["7", "2", "4", "5"],
        answer: "4"
    },
    {
        question: "In Java, which exception is thrown when dividing by zero?",
        options: ["ArithmeticException", "NullPointerException", "NumberFormatException", "IllegalArgumentException"],
        answer: "ArithmeticException"
    },
    {
        question: "Which method must be implemented by all threads?",
        options: ["run()", "start()", "stop()", "main()"],
        answer: "run()"
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