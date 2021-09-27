const pages = document.querySelectorAll(".page");

const links = document.querySelectorAll("footer a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.remove("current");
    });

    const hrefAttribute = link.getAttribute("href");
    const nextPage = document.querySelector(hrefAttribute);
    nextPage.classList.add("current");
  });
});

let question = {};

const myArray = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  question = {
    newQuestion: form.elements["new-question"].value,
    newAnswer: form.elements["new-answer"].value,
    newTags: form.elements["new-tags"].value,
  };

  myArray.push(question);
  console.log(myArray);
  console.log(question);
  event.preventDefault();
  document.querySelector("form").reset();
});

const array = [
  { question: "Are you sure?", answer: "No!", tags: "One" },
  { question: "Are you really sure?", answer: "No!", tags: "Two" }
];

const createQuestionsHtml = (questions) => {
  let html = "";

  array.forEach((question) => {
    html =
      html +
      ` 
        <div class="questcard">
        
        <h2>Question</h2>

        <p class="question">Question: ${question.question}</p>

<!------------Answer to Question-->
<div class="revealanswer">
<p >Answer: ${question.answer}</p>
</div>

<!--------Show Answer Button-->
<button class="answer">
    Show Answer
</button>

<!---------Tags-->

<div class="tags">
            <p id="tag1">Tag: ${question.tags}</p>
            <p id="tag2">Tag: ${question.tags}</p>
            <p id="tag3">Tag: ${question.tags}</p>
            <p id="tag4">Tag: ${question.tags}</p>
          </div>


<!---------bookmark bouncing-->


          <div class="bookm"></div>


    `;
  });
  //console.log(html);
  return html;
};

const renderQuestions = () => {
  const questionsHtml = createQuestionsHtml(array);
  const questionsContainer = document.querySelector("#home");
  questionsContainer.innerHTML = questionsHtml;
  const img = document.querySelector('.bookm');
  
  img.addEventListener('click', () => {
    img.classList.toggle('bookmarkchange');
  });

  const answer = document.querySelector(".revealanswer");

  const showMeAnswer = document.querySelector(".answer");

  showMeAnswer.addEventListener("click", () => {
    answer.classList.toggle("displayanswer");
  });
};

renderQuestions();
