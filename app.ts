const msg: Element = document.querySelector(".msg");
const guess: HTMLInputElement = document.querySelector("input");
const btn: Element = document.querySelector(".btn");
let play: boolean = false;
let newWords: string = "";
let randomWord: string = "";

let words: string[] = [
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

const createNewWords = (): string => {
  let randomNum: number = Math.floor(Math.random() * words.length);
  let newTempWord: string = words[randomNum];
  return newTempWord;
  // words.forEach(word => {})
};

const scrambleWords = (arr: any): any => {
  for (let i: number = arr.length - 1; i > 0; i--) {
    let temp: any = arr[i];
    // console.log(temp);
    let j: number = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", ():void => {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randomWord = scrambleWords(newWords.split("")).join("");
    // console.log(randomWord.join(""));
    msg.innerHTML = `Guess the word: ${randomWord}`;
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      // console.log("correct word");
      play = false;
      msg.innerHTML = `Awesome it's Correct. it is ${newWords}`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      // console.log("wrong word");
      msg.innerHTML = `Sorry it's Incorrect. Plz try again ${randomWord}`;
    }
  }
});
