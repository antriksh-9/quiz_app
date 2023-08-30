let questions = [{
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Python",
    correct: "a"
},
{
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
},
{
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Mototboats Lambo",
    correct: "b"
},
{
    que: "Which tag is used to link JavaScript with HTML?",
    a: "div",
    b: "link",
    c: "meta",
    d: "script",
    correct: "d"
}
];

let index=0;
let ques = document.getElementById("queBx");
let options = document.querySelectorAll(".options");
let loadQues = () => {
    ques.innerText = `${index+1}) ${questions[index].que}`;
    options[0].nextElementSibling.innerText = questions[index].a;
    options[1].nextElementSibling.innerText = questions[index].b;
    options[2].nextElementSibling.innerText = questions[index].c;
    options[3].nextElementSibling.innerText = questions[index].d;
}
loadQues();

