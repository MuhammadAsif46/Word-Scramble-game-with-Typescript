var msg = document.querySelector(".msg");
var guess = document.querySelector("input");
var btn = document.querySelector(".btn");
var play = false;
var newWords = "";
var randomWord = "";
var words = [
    "pakistan",
    "india",
    "usa",
    "australia",
    "japan",
    "china",
    "afghanistan",
    "azerbaijan",
    "bangladesh",
    "brazil",
    "colombia",
    "egypt",
    "germany",
    "iraq",
    "kuwait",
    "new Zealand",
];
var createNewWords = function () {
    var randomNum = Math.floor(Math.random() * words.length);
    var newTempWord = words[randomNum];
    return newTempWord;
    // words.forEach(word => {})
};
var scrambleWords = function (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var temp = arr[i];
        // console.log(temp);
        var j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
btn.addEventListener("click", function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        newWords = createNewWords();
        randomWord = scrambleWords(newWords.split("")).join("");
        // console.log(randomWord.join(""));
        msg.innerHTML = "Guess the word: ".concat(randomWord);
    }
    else {
        var tempWord = guess.value;
        if (tempWord === newWords) {
            // console.log("correct word");
            play = false;
            msg.innerHTML = "Awesome it's Correct. it is ".concat(newWords);
            btn.innerHTML = "Start Again";
            guess.classList.toggle("hidden");
            guess.value = "";
        }
        else {
            // console.log("wrong word");
            msg.innerHTML = "Sorry it's Incorrect. Plz try again ".concat(randomWord);
        }
    }
});
