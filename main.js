const querySection = document.querySelector(".FAQ__section");
const queryQuestions = document.querySelectorAll(".FAQ__question");
let previousTarget;

querySection.onclick = function() {
    const elementQuestionTarget = event.target.closest("div");
    const textQuestionTarget = elementQuestionTarget.firstElementChild;
    const imageQuestionTarget = elementQuestionTarget.querySelector("img");
    let i = 0;    

    if(elementQuestionTarget.className === "FAQ__capsule") return;

    function selectNewQuestion () {
        for (let element of queryQuestions){
            if(element.firstElementChild.textContent === textQuestionTarget.textContent){
                const answerQuestionTarget = queryQuestions[i].nextElementSibling;
                imageQuestionTarget.classList.toggle("open");
                answerQuestionTarget.classList.toggle("open");
                previousTarget = element;
                break;
            }i++;
        }
    }

    if(previousTarget === undefined){
        selectNewQuestion();
    } else if (previousTarget.firstElementChild.textContent === textQuestionTarget.textContent) {
        const answerQuestionTarget = previousTarget.nextElementSibling;
        const imageTargetOpen = document.querySelector("img.open");
        imageTargetOpen.classList.toggle("open");
        answerQuestionTarget.classList.toggle("open");
        previousTarget = undefined;
    } else {
        const previousAnswerQuestionTarget = previousTarget.nextElementSibling;
        const imageTargetOpen = document.querySelector("img.open");
        imageTargetOpen.classList.toggle("open");
        previousAnswerQuestionTarget.classList.toggle("open");
        selectNewQuestion();
    }


}

