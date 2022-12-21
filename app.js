const Questions = [
  {
    question: "What is the color of Apple?",
    a: "Red",
    b: "Orange",
    c: "Purple",
    d: "Yellow",
    answer: "Red",
  },
  {
    question: "What is the color of Banana?",
    a: "Red",
    b: "Orange",
    c: "Purple",
    d: "Yellow",
    answer: "Yellow",
  },
  {
    question: "What is the color of Orange?",
    a: "Red",
    b: "Orange",
    c: "Purple",
    d: "Yellow",
    answer: "Orange",
  },
];
let loop = 0,
  Score = 0,
  selectedValue = "";

const quizBody = document.querySelector(".quiz-app"),
  contentBox = document.querySelector(".content-box"),
  startBtn = document.querySelector(".start-btn"),
  nextBtn = document.querySelector(".next-btn"),
  popUp = document.querySelector(".popup-wrapper"),
  score = document.querySelector(".score"),
  finalScore = document.querySelector(".final-score"),
  footer = document.querySelector("footer");

// function starts on clicking of start btn
startGame = () => {
  startBtn.style.opacity = "0";
  startBtn.style.pointerEvents = "none";
  contentBox.style.padding = "10px 8px";
  footer.style.opacity = "1";
  footer.style.pointerEvents = "all";
  nextQuestion();
};

// this functions renders questions
nextQuestion = () => {
  if (loop < Questions.length) {
    quizBody.innerHTML = `<p>${Questions[loop].question}</p>
  <div class="options">
    <div class="opt">
      <input type="radio" id="${Questions[loop].a}" name="question" value="${Questions[loop].a}">
      <label for="${Questions[loop].a}">${Questions[loop].a}</label>
    <div/>

    <div class="opt">
      <input type="radio" id="${Questions[loop].b}" name="question" value="${Questions[loop].b}">
      <label for="${Questions[loop].b}">${Questions[loop].b}</label>
    <div/>

    <div class="opt">
      <input type="radio" id="${Questions[loop].c}" name="question" value="${Questions[loop].c}">
      <label for="${Questions[loop].c}">${Questions[loop].c}</label>
    <div/>

    <div class="opt">
      <input type="radio" id="${Questions[loop].d}" name="question" value="${Questions[loop].d}">
      <label for="${Questions[loop].d}">${Questions[loop].d}</label>
    <div/>
  </div>`;
  }
};

// this functions handles to check answers and maintain score
handleNextQsn = () => {
  if (loop >= Questions.length) {
    handlePopUp();
  } else {
    let checkRadio = document.querySelector('input[name="question"]:checked');
    if (checkRadio != null) {
      selectedValue = checkRadio.value;
      if (selectedValue == Questions[loop].answer) {
        Score += 10;
        score.innerHTML = `${Score}`;
      }
      loop++;
      nextQuestion();
    } else {
      alert("select an option");
    }
  }
};
handlePopUp = () => {
  nextBtn.style.opacity = "0";
  nextBtn.style.pointerEvents = "none";
  popUp.style.opacity = "1";
  popUp.style.pointerEvents = "all";
  finalScore.innerHTML = `${Score}`;
};
