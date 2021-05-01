const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// クイズの内容

const quiz1 = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}
const quiz2 = {
  text: "引き分けてください",
  image: "Two.jpeg",
  choices: [
    {
      text: "チョキ",
      feedback: "簡単だね",
    },
    {
      text: "パー",
      feedback: "ばかだね",
    },
    {
      text: "グー",
      feedback: "あほだね",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz1 = function() {
  // 問題文を表示

  quizText.textContent = "Q. " + quiz1.text

  // 画像を表示
  quizImage.src = "./images/" + quiz1.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz1.choices[0].text
  choice2.textContent = quiz1.choices[1].text
  choice3.textContent = quiz1.choices[2].text
}
const reloadQuiz2 = function() {
  // 問題文を表示

  quizText.textContent = "Q. " + quiz2.text

  // 画像を表示
  quizImage.src = "./images/" + quiz2.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz2.choices[0].text
  choice2.textContent = quiz2.choices[1].text
  choice3.textContent = quiz2.choices[2].text
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示

  feedback.textContent = quiz1.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
  quiz1.kekka = true
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
if (feedback.textContent === "正解！ガニメデは、木星の第三惑星だよ！") {
  reloadQuiz2()
} else {
}
