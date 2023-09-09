//your code here

let touristSpots = ["The Virupaksha Temple", "Victoria Memorial", "Tajmahal"];
let withoutArticleArray = [];

let map = {};

for (let i = 0; i < touristSpots.length; i++) {
  let wordWithoutArticle = touristSpots[i].replace(/\bthe\b/gi, "");
  wordWithoutArticle = wordWithoutArticle.trim();
  withoutArticleArray.push(wordWithoutArticle);

  map[wordWithoutArticle] = touristSpots[i];
}

withoutArticleArray.sort();
let ul = document.getElementById("bands");
for (let i of withoutArticleArray) {
  let li = document.createElement(li);
  li.innerHTML = map[i];
  ul.appendChild(li);
}
