const Question = document.getElementById("ChangeQuestion");
const Options = document.getElementById("OptionsIs");
const NextQues = document.getElementById("NextQues");
const OptionOne = document.getElementById("Options1");
const OptionTwo = document.getElementById("Options2");
const OptionThree = document.getElementById("Options3");
const Optionfour = document.getElementById("Options4")
const RestartQuiz = document.getElementById("Restart");


const questions = [
    // HTML Questions
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<style>", "<script>", "<link>"],
        answer: "<style>"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "styles"],
        answer: "style"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<footer>", "<section>", "<bottom>", "<foot>"],
        answer: "<footer>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<break>", "<br>", "<line>"],
        answer: "<br>"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "Which attribute is used to provide an alternative text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "longdesc"],
        answer: "alt"
    },
    {
        question: "Which HTML tag is used to define a table?",
        options: ["<table>", "<tab>", "<td>", "<tr>"],
        answer: "<table>"
    },
    {
        question: "What is the correct HTML tag for making a text bold?",
        options: ["<b>", "<bold>", "<strong>", "<em>"],
        answer: "<b>"
    },
    {
        question: "How can you create a hyperlink in HTML?",
        options: ["<a href='url'>link</a>", "<link url='url'>link</link>", "<a>link</a>", "<href url='url'>link</href>"],
        answer: "<a href='url'>link</a>"
    },
    {
        question: "Which of the following is a semantic HTML element?",
        options: ["<div>", "<span>", "<article>", "<section>"],
        answer: "<article>"
    },
    // CSS Questions
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["background-color", "bgcolor", "color", "background"],
        answer: "background-color"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["fgcolor", "text-color", "color", "font-color"],
        answer: "color"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        answer: "font-size"
    },
    {
        question: "Which property is used to change the left margin of an element?",
        options: ["margin-left", "padding-left", "margin", "padding"],
        answer: "margin-left"
    },
    {
        question: "How do you select an element with id 'header' in CSS?",
        options: ["#header", ".header", "header", "*header"],
        answer: "#header"
    },
    {
        question: "Which property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-weight", "font-size"],
        answer: "font-family"
    },
    {
        question: "Which CSS property is used to create space between the element's border and its content?",
        options: ["padding", "margin", "border", "spacing"],
        answer: "padding"
    },
    {
        question: "Which property is used to change the bottom border color of an element?",
        options: ["border-bottom-color", "border-color", "border-bottom", "border-style"],
        answer: "border-bottom-color"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize;", "text-transform: uppercase;", "text-transform: lowercase;", "text-transform: none;"],
        answer: "text-transform: capitalize;"
    },
    {
        question: "Which CSS property is used to specify the alignment of the text inside a block element?",
        options: ["text-align", "text-decoration", "vertical-align", "line-height"],
        answer: "text-align"
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