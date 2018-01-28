var form = document.querySelector("#form");
var firstSentence = document.querySelector("#sentence1");
var secondSentence = document.querySelector("#sentence2");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    var output = document.querySelector(".output");

    output.textContent = mix(firstSentence.value, secondSentence.value);
});