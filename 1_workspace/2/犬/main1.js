const imageElement = document.getElementById("dog-image")
const Button = document.getElementById("change")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breed/Affenpinscher/images/random")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

Button.onclick = () => {
  fetch("https://dog.ceo/api/breed/Affenpinscher/images/random")
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}
